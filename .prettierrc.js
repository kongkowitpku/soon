/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  trailingComma: "none",
  plugins: [
    require.resolve(
      "@trivago/prettier-plugin-sort-imports",
      "prettier-plugin-tailwindcss"
    )
  ],
  importOrder: [
    "^(react|react-.*|react/.*)$",
    "^(next|next-.*|next/.*)$",
    "<THIRD_PARTY_MODULES>",
    "^[.]",
    "^(?!.*[.]css$)[./].*$",
    ".css$"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  // !: Waiting for these to make it upstream
  // importOrderMergeDuplicateImports: true,
  // importOrderCombineTypeAndValueImports: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: {
        parser: "typescript",
        importOrderParserPlugins: ["typescript", "jsx"]
      }
    }
  ]
}
