#!/bin/bash
# Batch post all Side B NYC Weekend events for Week 20

FILES=("event4.json" "event5.json" "event6.json")

for file in "${FILES[@]}"
do
  echo "Posting $file..."
  curl -X POST http://localhost:3000/api/add-event \
    -H "Content-Type: application/json" \
    -d @$file
  echo -e "\n---\n"
done
