const fs = require("fs").promises;
const path = require("path");

(async () => {
  const logsDir = path.join(process.cwd(), "Logs");

  await fs.mkdir(logsDir, { recursive: true });

  process.chdir(logsDir);

  for (let i = 1; i <= 10; i++) {
    const filename = `log${i}.txt`;
    const content = `Log file ${i} — created at ${new Date().toISOString()}\n`;
    await fs.writeFile(path.join(process.cwd(), filename), content);
    console.log(`Created: ${filename}`);
  }

  console.log("All logs created");
})().catch((err) => {
  console.error("Error creating logs:", err.message);
  process.exit(1);
});