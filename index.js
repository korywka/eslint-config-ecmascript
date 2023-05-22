module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		// Enforce getter and setter pairs in objects and classes
		'accessor-pairs': 'error',
		// Enforce consistent spacing inside array brackets
		'array-bracket-spacing': 'error',
		// Enforce return statements in callbacks of array methods
		'array-callback-return': 'error',
		// Require parentheses around arrow function arguments
		'arrow-parens': ['error', 'always'],
		// Enforce consistent spacing before and after the arrow in arrow functions
		'arrow-spacing': 'error',
		// Disallow or enforce spaces inside of blocks after opening block and before closing block
		'block-spacing': 'error',
		// Enforce consistent brace style for blocks
		'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
		// Enforce camelcase naming convention
		'camelcase': ['error', {
			ignoreDestructuring: true,
			ignoreImports: true,
			ignoreGlobals: true,
		}],
		// Require or disallow trailing commas
		'comma-dangle': ['error', {
			'arrays': 'always-multiline',
			'exports': 'always-multiline',
			'functions': 'only-multiline',
			'imports': 'always-multiline',
			'objects': 'always-multiline',
		}],
		// Enforce consistent spacing before and after commas
		'comma-spacing': 'error',
		// Enforce consistent comma style
		'comma-style': 'error',
		// Require return statements to either always or never specify values
		'consistent-return': 'error',
		// Enforce consistent brace style for all control statements
		'curly': ['error', 'multi-line', 'consistent'],
		// Enforce consistent newlines before and after dots
		'dot-location': ['error', 'property'],
		// Require or disallow newline at the end of files
		'eol-last': 'error',
		// Require the use of === and !==
		'eqeqeq': ['error', 'smart'],
		// Require or disallow spacing between function identifiers and their invocations
		'func-call-spacing': 'error',
		// Require function names to match the name of the variable or property to which they are assigned
		'func-name-matching': 'error',
		// Enforce consistent spacing around * operators in generator functions
		'generator-star-spacing': ['error', {
			'before': false,
			'after': true,
		}],
		// Enforce the location of arrow function bodies
		'implicit-arrow-linebreak': 'error',
		// Enforce consistent indentation
		'indent': ['error', 'tab', {
			'flatTernaryExpressions': true,
			'SwitchCase': 1,
		}],
		// Enforce consistent spacing between keys and values in object literal properties
		'key-spacing': 'error',
		// Enforce consistent spacing before and after keywords
		'keyword-spacing': 'error',
		// Enforce consistent linebreak style
		'linebreak-style': ['error', 'unix'],
		// Enforce a maximum line length
		'max-len': ['warn', {
			'code': 120,
			'ignoreComments': true,
			'ignoreRegExpLiterals': true,
			'ignoreStrings': true,
			'ignoreTemplateLiterals': true,
			'ignoreUrls': true,
		}],
		// Enforce or disallow parentheses when invoking a constructor with no arguments
		'new-parens': 'error',
		// Disallow Array constructors
		'no-array-constructor': 'error',
		// Disallow the use of arguments.caller or arguments.callee
		'no-caller': 'error',
		// Disallow arrow functions where they could be confused with comparisons
		'no-confusing-arrow': 'error',
		// Disallow duplicate module imports
		'no-duplicate-imports': 'error',
		// Disallow extending native types
		'no-extend-native': 'error',
		// Disallow unnecessary calls to .bind()
		'no-extra-bind': 'error',
		// Disallow unnecessary labels
		'no-extra-label': 'error',
		// Disallow use of this in contexts where the value of this is undefined
		'no-invalid-this': 'error',
		// Disallow the use of the __iterator__ property
		'no-iterator': 'error',
		// Disallow labeled statements
		'no-labels': 'error',
		// Disallow unnecessary nested blocks
		'no-lone-blocks': 'error',
		// Disallow if statements as the only statement in else blocks
		'no-lonely-if': 'error',
		// Disallow function declarations that contain unsafe references inside loop statements
		'no-loop-func': 'error',
		// Disallow multiple empty lines
		'no-multiple-empty-lines': ['error', {
			'max': 2,
		}],
		// Disallow new operators outside of assignments or comparisons
		'no-new': 'error',
		// Disallow Object constructors
		'no-new-object': 'error',
		// Disallow new operators with the String, Number, and Boolean objects
		'no-new-wrappers': 'error',
		// Disallow the use of the __proto__ property
		'no-proto': 'error',
		// Disallow assignment operators in return statements
		'no-return-assign': 'error',
		// Disallow comparisons where both sides are exactly the same
		'no-self-compare': 'error',
		// Disallow comma operators
		'no-sequences': 'error',
		// Disallow throwing literals as exceptions
		'no-throw-literal': 'error',
		// Disallow trailing whitespace at the end of lines
		'no-trailing-spaces': 'error',
		// Disallow initializing variables to undefined
		'no-undef-init': 'error',
		// Disallow ternary operators when simpler alternatives exist
		'no-unneeded-ternary': 'error',
		// Disallow unused expressions
		'no-unused-expressions': 'error',
		// Disallow the use of variables before they are defined
		'no-use-before-define': ['error', 'nofunc'],
		// Disallow unnecessary calls to .call() and .apply()
		'no-useless-call': 'error',
		// Disallow unnecessary computed property keys in objects and classes
		'no-useless-computed-key': 'error',
		// Disallow unnecessary concatenation of literals or template literals
		'no-useless-concat': 'error',
		// Disallow unnecessary constructors
		'no-useless-constructor': 'error',
		// Disallow renaming import, export, and destructured assignments to the same name
		'no-useless-rename': 'error',
		// Disallow redundant return statements
		'no-useless-return': 'error',
		// Require let or const instead of var
		'no-var': 'error',
		// Disallow void operators
		'no-void': 'error',
		// Enforce consistent spacing inside braces
		'object-curly-spacing': ['error', 'always'],
		// Require or disallow method and property shorthand syntax for object literals
		'object-shorthand': 'error',
		// Enforce consistent linebreak style for operators
		'operator-linebreak': ['error', 'before'],
		// Require or disallow padding lines between statements
		'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
		// Require const declarations for variables that are never reassigned after declared
		'prefer-const': 'error',
		// Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
		'prefer-numeric-literals': 'error',
		// Require using Error objects as Promise rejection reasons
		'prefer-promise-reject-errors': ['error', {
			'allowEmptyReject': true,
		}],
		// Require rest parameters instead of arguments
		'prefer-rest-params': 'error',
		// Require spread operators instead of .apply()
		'prefer-spread': 'error',
		// Require template literals instead of string concatenation
		'prefer-template': 'error',
		// Enforce the consistent use of either backticks, double, or single quotes
		'quotes': ['error', 'single', {
			'avoidEscape': true,
		}],
		// Disallow assignments that can lead to race conditions due to usage of await or yield
		'require-atomic-updates': 'error',
		// Enforce spacing between rest and spread operators and their expressions
		'rest-spread-spacing': 'error',
		// Require or disallow semicolons instead of ASI
		'semi': ['error', 'always'],
		// Enforce consistent spacing before and after semicolons
		'semi-spacing': 'error',
		// Enforce consistent spacing before blocks
		'space-before-blocks': 'error',
		// Enforce consistent spacing before function definition opening parenthesis
		'space-before-function-paren': ['error', {
			'anonymous': 'always',
			'named': 'never',
		}],
		// Enforce consistent spacing inside parentheses
		'space-in-parens': 'error',
		// Require spacing around infix operators
		'space-infix-ops': 'error',
		// Enforce consistent spacing before or after unary operators
		'space-unary-ops': 'error',
		// Enforce spacing around colons of switch statements
		'switch-colon-spacing': 'error',
		// Require or disallow spacing between template tags and their literals
		'template-tag-spacing': 'error',
		// Require or disallow spacing around the * in yield* expressions
		'yield-star-spacing': ['error', 'after'],
		// Require or disallow "Yoda" conditions
		'yoda': 'error',
	},
};
