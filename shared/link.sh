#!/bin/bash

packages="$(pwd)/packages/*/"
files=("tsconfig.json" "vitest.config.ts" "build.config.ts")

# vitest.config.ts
for file in "${files[@]}"; do
  for package in $packages; do
    if [ "$package" ]; then
      if [ ! -e "${package}${file}" ]; then
        ln -s "$(pwd)/shared/${file}" "$package"
      fi
    fi
  done
done
