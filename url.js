import { urlToHttpOptions } from "node:url";

// console.log(URL === globalThis.URL);

// const myURL = new URL('foo:Example.com/', 'https://example.org/');
// console.log(myURL);

// const newURL = new URL("https://example.org/foo#bar");
// console.log(newURL.hash);

// newURL.hash = "baz";
// console.log(newURL.href);

// const myURL = new URL("https://example.org:81/foo");
// console.log(myURL.host);

// myURL.host = "example.com:82";
// console.log(myURL.href);

// const myURL = new URL("https://example.org:81/foo");
// console.log(myURL.hostname);

// myURL.hostname = "example.com";
// console.log(myURL.href);

// myURL.host = "example.org:82";
// console.log(myURL.href);

// const myURL = new URL("https://example.org/foo/bar?baz");
// console.log(myURL.origin);

// const idnURL = new URL("https://測試");
// console.log(idnURL.origin);

// console.log(idnURL.hostname);

// const myURL = new URL("https://abc:xyz@example.com");
// console.log(myURL.password);

// myURL.password = "123";
// console.log(myURL.href);

// const myURL = new URL("https://example.org:8888");
// console.log(myURL.port);

// myURL.port = "443";
// console.log(myURL.port);
// console.log(myURL.href);

// myURL.port = 1234;
// console.log(myURL.port);
// console.log(myURL.href);

// myURL.port = "abcd";
// console.log(myURL.port);

// myURL.port = "5678abcd";
// console.log(myURL.port);

// myURL.port = 1234.5678;
// console.log(myURL.port);

// myURL.port = 1e10;
// console.log(myURL.port);

// myURL.port = 4.567e21;
// console.log(myURL.port);

// const myURL = new URL("https://example.org");
// console.log(myURL.protocol);

// myURL.protocol = "ftp";
// console.log(myURL.href);

// const u = new URL("http://example.org");
// u.protocol = "https";
// console.log(u.href);
// u.protocol = "fish";
// console.log(u.href);

// const u = new URL("fish://example.org");
// u.protocol = "http";
// console.log(u.href);

// const myURL = new URL("https://example.org/abc?123");
// console.log(myURL.search);
// myURL.search = "abc=xyz";
// console.log(myURL.href);

// const myURL = new URL("https://example.org/abc?foo=~bar");
// console.log(myURL.search);
// myURL.searchParams.sort();
// console.log(myURL.search);

// const myURL = new URL("https://abc:xyz@example.com");
// console.log(myURL.username);
// myURL.username = "123";
// console.log(myURL.href);

// const myURLs = [
//   new URL("https://www.example.com"),
//   new URL("https://test.example.org"),
// ];
// console.log(JSON.stringify(myURLs));

// import { Blob, resolveObjectURL } from "node:buffer";

// const blob = new Blob(["hello"]);
// console.log(blob);
// const id = URL.createObjectURL(blob);
// console.log(id);
// const otherBlob = resolveObjectURL(id);
// console.log(otherBlob);

// const isValid = URL.canParse("/foo", "https://example.org/");
// const isNotValid = URL.canParse("/foo");
// console.log(isValid)
// console.log(isNotValid)

// const myURL = new URL("https://example.org/?abc=123");
// console.log(myURL.searchParams.get("abc"));

// myURL.searchParams.append("abc", "xyz");
// console.log(myURL.href);

// myURL.searchParams.delete("abc");
// myURL.searchParams.set("a", "b");
// console.log(myURL.href);

// const newSearchParams = new URLSearchParams(myURL.searchParams);

// newSearchParams.append("a", "c");
// console.log(myURL.href);
// console.log(newSearchParams.toString());

// myURL.search = newSearchParams;
// console.log(myURL.href);
// newSearchParams.delete("a");
// myURL.search = newSearchParams;
// console.log(myURL.href);

// const params = new URLSearchParams({
//   user: "abc",
//   query: ["first", "second"],
// });
// console.log(params.getAll("query"));
// console.log(params.toString());

// let params;

// params = new URLSearchParams([
//   ["user", "abc"],
//   ["query", "first"],
//   ["query", "second"],
// ]);
// console.log(params.toString());

// const map = new Map();
// map.set("user", "abc");
// map.set("query", "xyz");
// params = new URLSearchParams(map);
// console.log(params.toString());

// function* getQueryPairs() {
//   yield ["user", "abc"];
//   yield ["query", "first"];
//   yield ["query", "second"];
// }
// params = new URLSearchParams(getQueryPairs());
// console.log(params.toString());

// new URLSearchParams([["user", "abc", "error"]]);

// const myURL = new URL("https://example.org/?a=b&c=d");
// myURL.searchParams.forEach((value, name, searchParams) => {
//   console.log(name, value, myURL.searchParams === searchParams);
// });

// const params = new URLSearchParams("foo=bar&foo=baz");
// console.log(params);
// for (const name of params.keys()) {
//     console.log(name);
// }

// const params = new URLSearchParams();
// params.append("foo", "bar");
// params.append("foo", "baz");
// params.append("abc", "def");
// console.log(params.toString());

// params.set("foo", "def");
// params.set("xyz", "opq");
// console.log(params.toString());

// console.log(params.size);

// const params = new URLSearchParams("foo=bar&xyz=baz");
// for (const [name, value] of params) {
//     console.log(name, value);
// }

// console.log(url.domainToUnicode("xn--espaol-zwa.com"));
// console.log(url.domainToUnicode("xn--fiq228c.com"));
// console.log(url.domainToUnicode("xn--iñvalid.com"));

// const __filename = fileURLToPath(import.meta.url);

// console.log(new URL("file:///C:/path/").pathname);
// console.log(fileURLToPath("file:///C:/path/"));

// console.log(new URL("file:///foo.txt").pathname);
// console.log(fileURLToPath("file:///foo.txt"));

// console.log(new URL("file:///你好.txt").pathname);
// console.log(fileURLToPath("file:///你好.txt"));

// console.log(new URL("file:///hello world").pathname);
// console.log(fileURLToPath("file:///hello world"));

// const myURL = new URL("https://a:b@測試?abc#foo");
// console.log(myURL.href);
// console.log(myURL.toString());
// console.log(url.format(myURL, { fragment: false, unicode: true, auth: false }));

// console.log(new URL("/foo#1", "file:"));
// console.log(pathToFileURL("/foo#1"));

// console.log(new URL("/some/path%.c", "file:"));
// console.log(pathToFileURL("/some/path%.c"));

// const myURL = new URL("https://a:b@測試?abc#foo");
// console.log(urlToHttpOptions(myURL));
