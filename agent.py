#!/usr/bin/env python
import os
from pathlib import Path
from praisonaiagents import Agent

MODEL = "openrouter/deepseek/deepseek-chat"
ROOT = Path.cwd()

SYSTEM_INSTRUCTIONS = """
Kamu adalah AI coding assistant untuk project website lokal.
Jawab dalam bahasa Indonesia.
Jawab singkat, jelas, dan berdasarkan isi file project yang diberikan.
Kalau data project tersedia, jangan mengarang struktur umum.
Kalau user tanya struktur project, jawab berdasarkan folder dan file nyata.
""".strip()


def read_text_file(path: Path, max_chars: int = 8000):
    try:
        if not path.exists() or not path.is_file():
            return None
        return path.read_text(encoding="utf-8", errors="ignore")[:max_chars]
    except Exception:
        return None


def build_project_context():
    files = []
    for p in sorted(ROOT.rglob("*")):
        if p.is_file():
            rel = p.relative_to(ROOT)
            if ".git" in rel.parts or "__pycache__" in rel.parts:
                continue
            files.append(str(rel))

    context = []
    context.append(f"PROJECT ROOT: {ROOT}")
    context.append("DAFTAR FILE PROJECT:")
    context.extend(f"- {f}" for f in files[:300])

    important_files = [
        ROOT / "index.html",
        ROOT / "README.md",
        ROOT / "agent.py",
        ROOT / "web_agent.py",
    ]

    for f in important_files:
        content = read_text_file(f)
        if content:
            context.append(f"\nISI FILE: {f.name}\n{content}")

    return "\n".join(context)


def main():
    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        print("OPENROUTER_API_KEY belum ada.")
        return

    agent = Agent(
        instructions=SYSTEM_INSTRUCTIONS,
        llm=MODEL
    )

    project_context = build_project_context()

    print("Chat AI siap.")
    print("Mode: baca project lokal")
    print("Ketik /exit untuk keluar.\n")

    while True:
        try:
            user_input = input("Kamu: ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\nKeluar.")
            break

        if not user_input:
            continue

        if user_input.lower() in {"/exit", "exit", "quit", "/quit"}:
            print("Keluar.")
            break

        prompt = f"""
KONTEKS PROJECT:
{project_context}

PERTANYAAN USER:
{user_input}
""".strip()

        try:
            response = agent.start(prompt)
            print(f"\nAI: {response}\n")
        except Exception as e:
            print(f"\nError: {e}\n")


if __name__ == "__main__":
    main()
