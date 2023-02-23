<script>
  let testStr = false,
    testMessage1,
    testMessage2;

  //null, undefined
  const nullishTest = (str) => str ?? 'this is empty..';
  //false
  const logicalTest = (str) => str || 'this is empty..';

  testMessage1 = nullishTest(testStr);
  testMessage2 = logicalTest(testStr);
</script>

<div>
  <h1>input value = {testStr}</h1>
  <h1>nullish coalescing: {testMessage1}</h1>
  <h1>logical operator: {testMessage2}</h1>
</div>
