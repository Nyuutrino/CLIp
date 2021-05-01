# Updates since version 1.1.0

### Version 1.1.0:

#### Major update to CLIp internals and major bug squashes. 
- Error message typos fixed and improved.
- Fixed listeners not firing when bound to a commandlet not configured to do so in non-strict mode.
- Internal changes, such as less redundancy with type checking (`"undefined" === typeof my_var` instead of `typeof void 0 === typeof my_var`).
- Many more changes that do not affect the overall use of CLIp.

Next patch: fix the recursive limit for `CLIp.GetRelevantCommands`
