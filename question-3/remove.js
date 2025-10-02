const fs = require("fs").promises;
const path = require("path");

(async () => {
  const logsDir = path.join(process.cwd(), "Logs");

  try {
    await fs.access(logsDir);
  } catch {
    console.log("Logs directory does not exist. Nothing to remove.");
    return;
  }

  const entries = await fs.readdir(logsDir, { withFileTypes: true });
  if (entries.length === 0) {
    console.log("Logs directory is empty.");
  } else {
    for (const entry of entries) {
      const full = path.join(logsDir, entry.name);
      if (entry.isFile()) {
        console.log(`Deleting file: ${entry.name}`);
        await fs.unlink(full);
      } else {
        console.log(`Skipping non-file entry: ${entry.name}`);
      }
    }
  }

  await fs.rmdir(logsDir);
  console.log("Removed Logs directory.");
})().catch((err) => {
  console.error("Error removing logs:", err.message);
  process.exit(1);
});