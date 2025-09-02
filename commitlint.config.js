export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',    
        'fix',      
        'docs',    
        'style',  
        'refactor', 
        'test',     
        'chore',  
        'perf',    
        'build',    
        'ci',      
        'revert'   
      ]
    ],
    'subject-case': [2, 'always', 'sentence-case'],
    'header-max-length': [2, 'always', 100]
  }
}