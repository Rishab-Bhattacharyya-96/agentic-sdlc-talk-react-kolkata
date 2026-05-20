# Demo: Single Agent Fixing Linting Issues

This demo shows a single agent autonomously fixing ESLint errors in TypeScript code.

## What Happens

1. You'll see a TypeScript file with deliberate linting issues
2. Run an OpenCode agent to fix them
3. The agent will:
   - Read the file
   - Identify ESLint violations
   - Apply fixes
   - Verify no errors remain
   - Show the result

## Setup (2 minutes)

### 1. Install OpenCode
```bash
brew install anomalyco/tap/opencode
```

### 2. Verify ESLint is available
```bash
npm install  # installs eslint locally
npx eslint --version
```

## Running the Demo (5 minutes)

### Step 1: See the Problem
```bash
# Show the problematic file
cat src/buggy-code.ts

# Try to lint it (shows errors)
npx eslint src/buggy-code.ts
```

You'll see output like:
```
  1:1  error  'sum' is defined but never used  no-unused-vars
  2:3  error  Unexpected var, use let or const instead  no-var
  5:15  error  Missing semicolon  semi
```

### Step 2: Run the Agent
```bash
# Launch OpenCode in this directory
opencode

# In the OpenCode TUI, type:
/demo

# Follow the on-screen prompt to activate the "linter" agent with:
@linter "Fix all ESLint errors in src/buggy-code.ts and show me the result"
```

Or run it non-interactively:
```bash
opencode run @linter "Fix all ESLint errors in src/buggy-code.ts"
```

### Step 3: Watch the Agent Work

The agent will:
1. Read `src/buggy-code.ts`
2. Run `npx eslint src/buggy-code.ts` to identify issues
3. Fix each issue:
   - Remove unused variables
   - Replace `var` with `const`
   - Add missing semicolons
4. Run ESLint again to verify no errors
5. Show you the corrected code

### Step 4: Verify the Result
```bash
# Check the fixed file
cat src/buggy-code.ts

# Run the linter (should pass)
npx eslint src/buggy-code.ts
```

Should output: `✅ 0 errors`

## Files in This Demo

```
demo/
├── README.md              # This file
├── src/
│   └── buggy-code.ts      # TypeScript file with intentional linting issues
├── .eslintrc.json         # ESLint configuration
├── .opencode/
│   ├── opencode.json      # Agent configuration
│   └── agent/
│       └── linter.md      # The "linter" agent definition
└── package.json           # Dependencies
```

## Talk Track (to use while running the demo)

### Intro (30 seconds)
"Here's a real TypeScript file with linting issues. Normally, you'd:
1. Run ESLint
2. Read the errors
3. Fix each one manually
4. Run ESLint again to verify

Let's see how an agent handles this autonomously."

### During Execution (2-3 minutes)
Watch silently as the agent:
- "The agent is reading the file and understanding the lint rules..."
- "Now it's identifying the violations..."
- "Applying fixes one by one..."
- "Verifying with ESLint..."

### Conclusion (30 seconds)
"In about 30 seconds, with zero manual intervention, the agent fixed all issues. It didn't just apply fixes blindly—it verified each change with ESLint. This is what autonomous SDLC looks like: agents handling routine tasks while you focus on high-level design decisions."

## Expected Output

**Before (buggy-code.ts):**
```typescript
var sum = 10;
let   name   =   "John"
function greet() { console.log(name) }
export { greet }
```

**After (fixed):**
```typescript
let name = "John";
function greet() { console.log(name); }
export { greet };
```

**ESLint result:**
```
✅ 0 errors, 0 warnings
```

## Troubleshooting

### "Command not found: opencode"
- Ensure OpenCode is installed: `brew install anomalyco/tap/opencode`
- Restart your terminal

### "ESLint not found"
- Run `npm install` in this demo directory to install local dependencies

### Agent doesn't seem to be working
- Check that `.opencode/agent/linter.md` exists
- Verify OpenCode is picking up the config: `opencode config show`

## Next Steps

After the demo:
1. **Try it on real code**: Copy this agent to your project and run it on your actual codebase
2. **Build on it**: Modify the agent to fix other issues (type errors, unused imports, etc.)
3. **Multi-agent**: Create a second agent for different tasks and have them work in parallel

## Learn More

- OpenCode docs: https://opencode.ai/docs/agents
- ESLint docs: https://eslint.org/docs
- Agents guide: https://opencode.ai/docs/agents#multi-agent-orchestration
