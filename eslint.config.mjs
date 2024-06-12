import next from "eslint-config-next"
import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import jmReact from "@josephmark/eslint-config-react"

export default [
  ...next,
  ...nextCoreWebVitals,
  ...jmReact,
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
