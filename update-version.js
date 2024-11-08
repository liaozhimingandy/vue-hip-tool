// update-version.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取 package.json 的路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgPath = path.resolve(__dirname, 'package.json');

// 读取并解析 package.json 文件
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

// 版本递增函数
function incrementVersion(version, type) {
  const versionParts = version.split('.').map(Number);

  if (type === 'major') {
    versionParts[0] += 1;
    versionParts[1] = 0;
    versionParts[2] = 0;
  } else if (type === 'minor') {
    versionParts[1] += 1;
    versionParts[2] = 0;
  } else if (type === 'patch') {
    versionParts[2] += 1;
  } else {
    throw new Error("无效的版本更新类型，请使用 'major'、'minor' 或 'patch'");
  }

  return versionParts.join('.');
}

// 从命令行参数获取更新类型（major、minor、patch），默认 patch
const updateType = process.argv[2] || 'patch';

// 更新版本号
pkg.version = incrementVersion(pkg.version, updateType);

// 写回 package.json 文件
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf-8');
console.log(`版本号已更新为: ${pkg.version}`);
