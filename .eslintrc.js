module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb/whitespace',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    // сделаем в некст итерации по линтингу
    'no-underscore-dangle': 'warn',
    'multiline-ternary': ['warn', 'always'],
    'react/no-array-index-key': 'warn',
    'react/function-component-definition': ['error', {
      // function-declaration could be useful for generics
      namedComponents: ['arrow-function', 'function-declaration'],
      unnamedComponents: 'arrow-function',
    }],

    'import/order': 'off',

    'no-duplicate-imports': 'off',
    'import/no-duplicates': ['error'],

    // в перспективе нужно включить. На данный момент не можем быстро все переделать
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-autofocus': 'off',

    // airbnb конфиг хочет чтобы мы и вкладывали инпуты и указывали id.
    // нам достаточно чего-то одного
    'jsx-a11y/label-has-associated-control': 'off',

    // мы не меняем стандартные прототипы объектов
    'no-prototype-builtins': 'off',

    // запрещаем инкремент везде, кроме циклов
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],

    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
      {
        // ban "import type { Foo } from 'bar';" syntax
        selector: "ImportDeclaration[importKind='type']",
        message: "You can import types only using inline type import, for ex: import { type Foo } from 'bar'",
      },
    ],

    // condition
    //   ? expression1
    //   : expression2
    // 'multiline-ternary': ['error', 'always'],
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],

    // в моделях mobx мы используем 'self' в качестве 'this'
    // логика строится вокруг мутаций, поэтому мы разрешаем
    // модифицировать self
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        // for writing models its ok
        'self',

        // for reduce sometimes its ok
        'acc',

        // for webgl/canvas context its ok
        'context',

        // for events its ok
        'event',
      ],
    }],

    // defaultProps за нас чекает TypeScript. Где нужно default значение, мы используем
    // фичу деструктуризации, где можно выставить дефолтное значение.
    'react/require-default-props': 'off',

    // не всегда удобно, изучить поподробнее настройки
    'react/jsx-one-expression-per-line': 'off',

    // не будем настаивать на том, как использовать arrow functions
    'arrow-body-style': 'off',

    // разрешаем spreading props
    'react/jsx-props-no-spreading': 'off',

    // иногда удобно отделить handler'ы от пропсов данных
    'react/jsx-props-no-multi-spaces': 'off',

    // мы не используем prop-types
    'react/prop-types': 'off',

    // since react 17 no need to import React into scope
    'react/react-in-jsx-scope': 'off',

    // https://eslint.org/docs/rules/function-paren-newline
    // https://eslint.org/docs/rules/object-curly-newline

    // 'function-paren-newline': 'off',
    // 'react/jsx-wrap-multilines': 'off',

    'import/no-cycle': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': ['warn', 'always', {
      js: 'never',
      jsx: 'never',
    }],
    'max-len': 0,
    // 'import/exports-last': ['warn'],
  },
};
