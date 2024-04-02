if (process.env.NODE_ENV !== "production") {
  const execSync = require("child_process").execSync
  execSync("lefthook install", { stdio: "inherit" })
}
