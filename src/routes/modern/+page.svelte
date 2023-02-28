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

<div class="mx-auto flex h-2/3 w-1/3 flex-col items-center justify-around  border-2">
  <div class="m-1 w-2/3 border-2 border-cyan-600">input value = {testStr}</div>
  <div class="m-1 w-2/3 border-2 border-cyan-600">nullish coalescing: {testMessage1}</div>
  <div class="m-1 w-2/3 border-2 border-cyan-600">logical operator: {testMessage2}</div>
</div>
