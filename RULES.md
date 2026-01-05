# What is Rules and how to create?

**Goal:** Learn what rules exist in TypeScript projects and what they check.

## Instructions

1. Open your browser and go to your local SonarQube:
```http://localhost:9000/```
2. Login with your credentials  
*(default: `admin/admin` if not changed)*
3. Click on your project.
4. Navigate to **Top menu → Rules**.
5. Filter rules:

- **Language:** TypeScript  
- **Type:** Bug / Code Smell / Security

6. Browse **5–10 rules**.  

Example rules you may see:

- Avoid using `any`  
- Remove unused variables  
- Handle promises properly  

> ⚠️ Do NOT edit them yet — just read and understand them.

---

### Mental Note

- Each rule represents one professional coding standard.  
- Senior developers don’t memorize rules; they understand patterns like:  
- Type safety  
- Error handling  
- Security boundaries  

---

### ✅ Task

Write down **5 rules you find interesting** and explain **why they exist**.

**Example Table:**

| Rule Name | Why it exists |
|-----------|---------------|
| Avoid using `any` | Ensures type safety and prevents unexpected runtime errors. |
| Remove unused variables | Keeps the code clean and avoids memory waste. |
| Handle promises properly | Prevents unhandled errors and improves reliability. |
| No console.log in production | Avoids leaking sensitive information in logs. |
| Strict null checks | Helps catch null/undefined errors at compile time. |
