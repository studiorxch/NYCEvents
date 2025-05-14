#!/bin/bash
# Batch post all Side B NYC Weekend events for Tape 002

for file in event*.json
do
  echo "Posting $file..."
  curl -X POST http://localhost:3000/api/add-event \
    -H "Content-Type: application/json" \
    -d @$file
  echo -e "\n---\n"
done
