const arguments = process.argv.slice(2);

const GenerateURLS = (
  url = 'www.example.com/posts/2020.html',
  pages = 5,
  extension = '.html',
  first_is_special = true,
) => {
  let result = [];
  const url2 = extension.length ? url.slice(0, -extension.length) : url;

  for (let i = 1; i <= pages; i += 1) {
    const item = url2 + '_' + i + extension;
    result.push(item);
  }

  if (first_is_special) {
    result[0] = url2 + extension;
  }

  return result;
};

const print = (arr) => {
  let str = arr.join('\r\n');
  str = '\r\n'.repeat(5) + str + '\r\n'.repeat(5);
  console.log(str);
};

const result = GenerateURLS(...arguments);
print(result);
