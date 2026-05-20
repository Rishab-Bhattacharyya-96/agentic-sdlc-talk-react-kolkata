# Speaker Notes: Agentic Workflows for Enhanced SDLC (15 min)
## React Kolkata Presentation

### Slide 1-2: Title & Agenda (1 min)

**Slide 1: Title**
- "Hi React Kolkata! I'm here to talk about agentic workflows and how they're transforming software development."
- The core idea: instead of AI helping you write code snippets, imagine an AI agent that owns entire features from start to finish—reading code, making decisions, running tests, creating PRs—all without your intervention.
- That's the future of SDLC, and it's here now with OpenCode.

**Slide 2: Agenda**
- We'll cover 5 core concepts in the next 15 minutes, then run a live demo.
- By the end, you'll understand why agents matter and how to use them in your team.

---

### Slide 3-4: The Problem (1.5 min)

**Slide 3: Context Loss**
- Let's start with the pain point. Anyone here spend time jumping between tools?
- Typical workflow: you're in VS Code → you check Jira for context → you switch to GitHub for the PR → you switch to terminal to run tests.
- This isn't just an inconvenience—it's a *context loss problem*.
- Research shows developers spend ~40% of their day switching between tools, not actually coding.

**Slide 4: The Real Cost**
- When you switch tools, you lose critical context:
  - *Code context*: What did I change 3 files ago? Why?
  - *Business context*: What's the user impact of this change?
  - *Technical decisions*: Should this be async? Should I cache this result?
  - *Test coverage*: Did I break anything with this change?
- Each context switch costs 5-15 minutes to recover.
- Multiply that across a day, and you've lost hours of productive time.
- **The solution:** An agent that never loses context. It reads the entire codebase, understands the business requirements, and executes tasks autonomously.

---

### Slide 5-6: What Are Agents? (2 min)

**Slide 5: Definition**
- "Agents" sounds like science fiction, but it's actually pretty straightforward.
- An agent is an AI system that can plan, act, and use tools to solve problems.
- Key capabilities: They can read and write code across your entire repo, run tools like git and npm, make decisions based on outcomes, and iterate until the task is complete.

**Slide 6: The Loop**
- Agents work in a loop: Think → Act → Observe → Repeat
- Example: "Fix all TypeScript errors"
  1. Agent thinks: "I need to read the source files and identify type errors"
  2. Agent acts: reads files, finds errors
  3. Agent observes: "I found 3 errors in index.ts"
  4. Agent repeats: fixes each error, runs tests to verify
- This loop continues until the agent decides the task is complete.
- The key insight: the agent maintains full context throughout this entire loop. It never loses track of what it's doing or why.

---

### Slide 7-9: Single Agent (3 min)

**Slide 7: The Benefit**
- Let's start simple: one agent, one task.
- Imagine you say: "Fix all TypeScript type errors"
- The agent then:
  1. Reads all files in your src/ directory
  2. Identifies type issues
  3. Fixes each one
  4. Runs tests to ensure nothing broke
  5. Creates a pull request
- No manual back-and-forth. The agent just does it.

**Slide 8: The Flow**
- This diagram shows what's happening under the hood.
- The agent starts by understanding the scope (what are the lint rules?).
- Then it finds issues, applies fixes, verifies with tests.
- Done. Zero manual intervention needed.

**Slide 9: Why It Matters**
- **Speed**: The agent doesn't sleep, doesn't get distracted, doesn't need coffee breaks. It just runs.
- **Context**: Unlike you switching between tools, the agent keeps the entire codebase context in memory. It never forgets what it read 5 steps ago.
- **Iteration**: If the first fix doesn't work, the agent retries automatically. It doesn't need you to tell it something went wrong.
- **Reasoning**: The agent can explain its decisions in plain English. "I changed this because the type error here would cause a runtime issue."

---

### Slide 10-12: Multi-Agent (2.5 min)

**Slide 10: The Problem**
- But here's the catch: one agent can't be an expert in everything.
- Imagine the task: "Add user authentication to the app"
- That involves:
  - Frontend: Design and build a login form UI
  - Backend: Add JWT validation APIs
  - Database: Add user schema and migrations
  - Testing: Write integration tests
- One agent doing all of this? It would be slow and less specialized. Each domain has nuances.

**Slide 11: Multi-Agent Solution**
- The answer: an orchestrator agent that delegates to specialists.
- Orchestrator says: "Okay, frontend agent, you add the login UI. Backend agent, you add the JWT API. Database agent, you update the schema. QA agent, you write tests."
- Crucially: these run in parallel. You're not waiting for the frontend agent to finish, then the backend agent to start. They all work at the same time.
- The orchestrator coordinates and makes sure everything integrates.

**Slide 12: The Advantages**
- **Specialization**: Each agent is an expert in its domain. Frontend agent knows React patterns, backend agent knows API design.
- **Parallelization**: Tasks that used to be sequential now happen at the same time. You ship features 3-4x faster.
- **Accuracy**: Specialists make fewer mistakes. A backend agent isn't going to mess up frontend styling.
- **Scalability**: Need a new domain? Add another agent. Your system grows with your needs.

---

### Slide 13-15: Guardrails (2 min)

**Slide 13: The Risk**
- Now, this sounds amazing, but there's a risk we have to address: hallucinations.
- Agents are powerful, but they can be confidently wrong.
- What if an agent "fixes" code but introduces a subtle bug?
- What if it links a Jira ticket that doesn't actually exist?
- What if it deletes important files by mistake?
- These aren't hypothetical—they're real risks if you don't have safeguards.

**Slide 14-15: Guardrails & Example**
- The solution is multi-layered:
  1. **Custom Plugins**: Before the agent does something risky (like create a PR), it validates. "Does this Jira ticket exist? Is it in the right status?"
  2. **Permission Allowlists**: You explicitly say which files the agent can touch, which APIs it can call. It can't access anything outside that list.
  3. **Audit Logs**: Every decision the agent makes is logged. If something goes wrong, you can trace exactly what happened and why.
  4. **Human-in-Loop**: For critical decisions (like deploying to production), require human approval.
- The example on slide 15 shows how this works: before creating a PR, the agent checks that the Jira ticket exists and is in the right status. If not, it halts.
- This is *not* paranoia—it's engineering discipline. It's how you deploy automated systems safely.

---

### Slide 16-17: Plugins & The Big Picture (1 min)

**Slide 16: Custom Tools**
- OpenCode lets you extend agents with custom tools.
- Built-in: file read/write, git, npm, bash.
- Custom: Jira API calls, Slack notifications, database queries, anything you need.
- You write a simple plugin, register it, and your agents immediately have access to new superpowers.

**Slide 17: Full Picture**
- Here's how it all comes together:
- Your development task comes in.
- An orchestrator agent receives it and decomposes it into subtasks.
- Specialized agents execute each subtask in parallel.
- All actions go through plugins and guardrails to ensure safety.
- Result: coordinated, safe, autonomous delivery.

---

### Slide 18-19: Recap & CTA (1.5 min)

**Slide 18: Key Takeaways**
- Four things to remember:
  1. **Agents ≠ Code Snippets**: This isn't just autocomplete on steroids. Agents orchestrate entire workflows.
  2. **Multi-agent systems scale**: Specialization + parallelization = exponential productivity gains.
  3. **Safety first**: Plugins, guardrails, and audit logs make automation trustworthy.
  4. **SDLC is entering the agentic era**: Teams that adopt agents early will ship faster and with fewer bugs.

**Slide 19: Call to Action**
- If you want to try this:
- Install OpenCode (it takes 30 seconds)
- Launch it in your project
- Type: `@orchestrator "Fix all linting errors in src/"`
- Watch it work.
- Start small with a single agent doing one task. Once you see it work, you'll want to build more.

---

### Slide 20: Live Demo (5 min)

**What the demo shows:**
- A real codebase with linting issues
- An agent that reads the code, understands the issues, and fixes them
- Tests running to verify the fix doesn't break anything
- A PR ready to be merged

---

## Demo Script: Single Agent Fixing Linting Issues

### Setup
- Have a terminal open in the demo project directory
- Make sure OpenCode is installed (`brew install anomalyco/tap/opencode`)
- Have a simple TypeScript project with intentional linting issues

### Demo Flow (5 minutes)

#### Step 1: Show the Problem (1 min)
```bash
$ cat src/buggy-code.ts
# Show code with obvious linting issues:
# - unused variables
# - inconsistent spacing
# - missing semicolons (if using ESLint)
```

**Talk through:**
- "Here's a file with linting issues. Three things wrong here."
- "Normally, you'd open the linter, run it, read the output, fix each issue manually. Takes 5-10 minutes."
- "Let's see how an agent handles it."

#### Step 2: Run the Agent (2 min)
```bash
$ opencode
# (TUI loads)
# Type: @linter "Fix all ESLint errors in src/buggy-code.ts and show me the result"
```

**Talk through:**
- "I'm asking the agent to fix all linting issues in the src/ directory."
- "Watch what happens..."
- (Agent reads files, identifies issues, applies fixes)

#### Step 3: Show the Result (1 min)
```bash
$ cat src/buggy-code.ts
# Show the fixed file (all issues resolved)

$ npm run lint
# Show that there are no more lint errors
```

**Talk through:**
- "In about 30 seconds, the agent read the code, understood the lint rules, fixed all issues, and verified with the linter."
- "No manual back-and-forth. No asking 'did this break anything?'. The agent verified it."

#### Step 4: Show the PR (1 min)
```bash
# Show the generated PR in the terminal or browser
$ git log --oneline
# Show the commit the agent created
```

**Talk through:**
- "The agent even created a commit with a meaningful message and is ready to create a PR."
- "This is what autonomous SDLC looks like."

---

## Timing Breakdown
- Intro + Problem: 2.5 min
- What are agents?: 2 min
- Single agent: 3 min
- Multi-agent: 2.5 min
- Guardrails: 2 min
- Recap + CTA: 1.5 min
- **Live Demo: 5 min**
- **Q&A: 1-2 min**

**Total: ~15 min**

---

## Q&A Talking Points

**Q: Won't agents just break my code?**
A: Not if you set up guardrails. Plugins, permission allowlists, and audit logs ensure agents can't do anything unsafe. Start with read-only agents, then add permissions gradually.

**Q: What about hallucinations? Can't agents make up facts?**
A: Yes, they can. That's why we validate. The agent must prove facts with code evidence, not just assume. Our example on slide 15 shows this: the agent checks that the Jira ticket exists before proceeding.

**Q: How do I train an agent to understand my codebase?**
A: You don't need to train it. You point it at your codebase, set up access permissions, and let it read. The agent can understand TypeScript, Go, Python, etc. with zero training.

**Q: What if the agent gets stuck in a loop?**
A: You set a max iteration limit. If the agent doesn't solve it in N tries, it halts and reports what went wrong.

**Q: Is this replacing developers?**
A: No. Agents are tools that free developers from repetitive tasks. You spend less time fixing linting errors and more time solving novel problems that require human creativity and judgment.

---

## Slide Navigation Tips
- Press `→` to go to the next slide
- Press `←` to go to the previous slide
- Press `S` to open speaker notes in a new window (you can read these notes while presenting)
- Press `O` for overview mode (see all slides at once)
- Press `F` for fullscreen
