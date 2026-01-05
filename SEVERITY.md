# Severity Levels (Why some issues hurt more)

**Goal:** Understand how SonarQube prioritizes issues.

## Default Severity Levels

```Blocker → Critical → Major → Minor → Info```

- **Severity = risk to production**, not opinion.  
- Examples:  
  - `any` → Major (maintainability risk)  
  - SQL injection → Critical (security risk)

### How to see severity

1. Go to **Rules → TypeScript**.  
2. Click on a rule → see **Severity** at the top.

### ✅ Task

Pick **2 rules**, note their **severity**, and think why that severity was chosen.

| Rule Name | Severity | Reason for Severity |
|-----------|---------|-------------------|
| ExampleRule1 | Major | Could break code maintainability if ignored |
| ExampleRule2 | Critical | Security risk that could compromise production |

---

## Notes

- Each rule and severity combination helps maintain **code quality** and **application security**.  
- Always read and understand the reasoning behind rules instead of blindly following them.  
- You can refer to the full rules documentation in [RULES.md](./RULES.md).
