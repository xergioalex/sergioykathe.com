import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the CSV file
const csvFilePath = path.join(__dirname, '../public/data/invites.csv');
const jsonFilePath = path.join(__dirname, '../public/data/invites.json');

try {
  // Read the content of the CSV
  const csvContent = fs.readFileSync(csvFilePath, 'utf-8');

  // Parse the CSV
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
  });

  // Convert numeric fields
  const invites = records.map(record => ({
    code: record.code.trim(),
    name: record.name.trim(),
    partyInvitations: parseInt(record.partyInvitations.trim()),
    stayInvitations: parseInt(record.stayInvitations.trim())
  }));

  // Create the final object
  const jsonContent = {
    invites
  };

  // Ensure the directory exists
  const dir = path.dirname(jsonFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write the JSON file
  fs.writeFileSync(
    jsonFilePath,
    JSON.stringify(jsonContent, null, 2)
  );

  console.log('✅ JSON file generated successfully');
} catch (error) {
  console.error('❌ Error processing the file:', error);
  process.exit(1);
}
