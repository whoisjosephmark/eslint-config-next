import nextPlugin from "@next/eslint-plugin-next"
import { fixupPluginRules } from "@eslint/compat"
import jmReact from "@josephmark/eslint-config-react"

export default [
  ...jmReact,
  {
    name: "@josephmark/eslint-config-next:next",
    plugins: {
      "@next/next": fixupPluginRules(nextPlugin),
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    rules: {
      // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],
      "react/display-name": ["off"],
    },
  },
]
