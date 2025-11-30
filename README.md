# Building Your Application

Getting Started > [**Updating Data (using Server Functions)**](https://nextjs.org/docs/app/getting-started/updating-data)

React API > [**Server Functions**](https://react.dev/reference/rsc/server-functions)

# Security Notice

This project is for educational purposes only. Always follow best security practices when handling user data.

## Key Security Practices

### Authentication & Authorization

- Require authentication for sensitive actions; derive user ID from session.
- Enforce authorization checks (ownership, roles).

### Validation (Zod or Similar)

- Validate types, formats, lengths, and allowed values.
- Reject unexpected fields; normalize and trim data.

### Rate Limiting

- Apply IP/user-based limits for public or sensitive endpoints.
- Use CAPTCHAs or cooldowns to prevent abuse.

### Limit Input Size

- Enforce maximum string lengths and payload sizes.
- Reject large or deeply nested objects.

### Prevent Injection

- Use parameterized queries (e.g., Supabase).
- Sanitize output to avoid XSS; never trust HTML from clients.

### CSRF Protection

- Required for cookie-based authentication; use SameSite cookies and CSRF tokens.

### File Upload Safety

- Restrict MIME types and validate file signatures.
- Enforce strict file size limits.

### Error Handling

- Return generic error messages; log sensitive details server-side only.

### Secrets Safety

- Store service role keys and database credentials on the server only.
