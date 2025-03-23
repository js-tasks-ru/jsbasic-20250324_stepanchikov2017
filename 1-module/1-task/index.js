function factorial(n) {
  let i = n - 1;
  let f = n;
  if (f == 0) return 1;
  while(i){
    f = f * (i)
    i--
  }
  return f;
}
