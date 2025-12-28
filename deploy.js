import FtpDeploy from "ftp-deploy";

const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASS,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: "dist",
  remoteRoot: process.env.FTP_REMOTE_PATH || "/",
  include: ["*", "**/*"],
  deleteRemote: false,
  forcePasv: true,
};

ftpDeploy
  .deploy(config)
  .then(() => console.log("✅ FTP deploy complete"))
  .catch((err) => {
    console.error("❌ FTP deploy failed", err);
    process.exit(1);
  });
