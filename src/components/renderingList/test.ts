console.log('test ts');

export const test1 = () => {
  const user = {
    firstName: 'Mike',
    pointsCount: 1000,
  };
  // console.log(user);

  function doSomething(user: { firstName: string, pointsCount: number; }) {
    console.log(user);
  }

  doSomething(user);
  // doSomething({ firstName: 'uasya' })
};
// test1();


export const test2 = () => {
  // Enums

  enum OrderStatus {
    Created,
    Paid,
    Shipped,
    Delivered,
  }

  const order = {
    items: 3,
    status: OrderStatus.Paid,
  };

  console.log(order);
  console.log(OrderStatus);
};
// test2();


export const test3 = () => {
  // Type Aliases
  type User = {
    firstName: string;
    pointsCount: number;
  };

  function doSomething(user: User) {
    console.log(user);
  }
  doSomething({ firstName: 'uasya', pointsCount: 123 });
};
// test3();


export const test4 = () => {
  const sentence = 'table cat table dog dog apple table';

  const words = sentence.split(' ');
  const initial: { [key: string]: number; } = {};

  const result = words.reduce((acc, word) => {
    acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
    return acc;
  }, initial);

  console.log(result);
};
// test4();


// namespace Hello {
//   export function helloWorld() {
//     console.log('Hello World!');
//   }
// }

// console.log(Hello);
// Hello.helloWorld();

export const test5 = () => {
  type MyFunction = (n: number) => number;

  function process(cb: MyFunction) {
    const value = cb(10);
    return value;
  }
  console.log(process(Math.round));
};
// test5();


export const test6 = () => {
  function filter(coll: number[], cb: (arg: number, index: number) => boolean) {
    const result: number[] = [];
    coll.forEach((n, index) => {
      if (cb(n, index)) {
        result.push(n);
      }
    });

    return result;
  }

  console.log(filter([1, 2], (n) => n > 1));

  console.log(filter([1, 2, 1], (n, i) => i > n));
};
// test6();


export const test7 = () => {
  function sum(a: number, b: number): number {
    return a + b;
  }

  const arr = [1, 2] as const;

  console.log(sum(...arr));
};
// test7();


export const test8 = () => {
  // Function Overloads
  function concat(a: number, b: number): string;
  function concat(a: string, b: string): string;

  function concat(a: unknown, b: unknown): string {
    if (typeof a === 'number' && typeof b === 'number') {
      return `${a.toFixed()}${b.toFixed()}`;
    }

    return `${a}${b}`;
  }

  console.log(concat('one', 'two'));
  console.log(concat(1, 2));
  console.log(concat(1.23, 4.56));
};
// test8();


export const test9 = () => {
  // Function Overloads
  type Overloaded = {
    (a: number, b: number): string;
    (a: string, b: string): string;
  };

  const concat: Overloaded = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return `${a.toFixed()}${b.toFixed()}`;
    }

    return `${a}${b}`;
  };

  console.log(concat(1.234, 5.678));
  console.log(concat('asd', 'efg'));
};
// test9();


export const test10 = () => {
  function isPresence(value: unknown): boolean {
    if (value === null || value === undefined) {
      return false;
    }

    if (typeof value === 'string') {
      if (value === '') {
        return false;
      }
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return false;
      }
    }

    if (value instanceof Object) {
      if (Object.keys(value).length === 0) {
        return false;
      }
    }

    return true;
  }

  console.log(isPresence(''));
  console.log(isPresence({}));
  console.log(isPresence([]));
  console.log(isPresence([1, 3]));
  console.log(isPresence(10));
};
// test10();


export const test11 = () => {
  const items1 = [[3, 8], [10, 4, 8]];
  console.log(items1);

  const items2: number[][] = [];
  console.log(items2);

  type User = {
    name: string;
  };

  const users: User[][] = [
    [{ name: 'Eva' }, { name: 'Adam' }],
  ];

  console.log(users);
};
// test11();


// const test12 = () => {
//   function process(numbers: readonly number[]) {
//     numbers.push(1);
//   }

//   const point: [number, number] = [1, 3];

//   console.log(point);

//   // console.log(point[2]);

//   point.push(3);

//   console.log(point);
// };
// test12();


// const test13 = () => {
//   type ComparatorCallback = (item1: number, item2: number, index: number) => number;

//   function sort(arr, cb) {
//     return arr.toSorted(cb);
//   }

//   declare function sort(arr: Array<number>, callback: ComparatorCallback): Array<number>;

//   const arr = [1, -2, 3];
//   const comparator = (item1: number, item2: number) => Math.sign(item1 - item2);

//   console.log(sort(arr, comparator));

//   let neverValue: never;
//   const two: 2 = 2;

//   neverValue = two;

//   console.log(neverValue);

//   const anything: any = 2;

//   console.log(anything.toFixed());

//   const unkV: unknown = 2;

// };
// test13();


export const test14 = () => {
  const user = {
    firstName: 'Vasya',
    lastName: 'Ivanov',
    type: 'user',
  };

  const admin = {
    firstName: 'Vanya',
    lastName: 'Vasiliev',
    type: 'admin',
  };

  type User = {
    type: string,
    firstName: string,
    lastName: string,
  };

  const formatUser = (user: User) => [user.type, ':', user.firstName, user.lastName].join(' ');

  console.log(formatUser(user));
  console.log(formatUser(admin));
};
// test14();


// import { sort } from "./sort.js";

// type ComparatorCallback = (item1: number, item2: number) => -1 | 0 | 1;

// declare function sort(arr: Array<number>, callback: ComparatorCallback): Array<number>;

// const arr = [2, 1, 3];

// const comparator = (item1: number, item2: number) => {
//   if (item1 === item2) {
//     return 0;
//   }

//   return item1 > item2 ? 1 : -1;
// };

// console.log(sort(arr, comparator));


export const test15 = () => {
  class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    get inspect(): string {
      return `(${this.x}, ${this.y})`;
    }
  }

  const p = new Point(10, 20);
  console.log(p);
  console.log(p.inspect);
};
// test15();

export const test16 = () => {
  class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }

  function isEqual(p1: Point, p2: Point): boolean {
    return p1.x === p2.x && p1.y === p2.y;
  }

  console.log(isEqual({ x: 1, y: 2 }, { x: 1, y: 2 }));
  const p1 = new Point(2, 3);
  const p2 = new Point(3, 4);

  console.log(isEqual(p1, p2));
};
// test16();


export const test17 = () => {
  class Point {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    isEqual(p2: Point) {
      return this.x === p2.x && this.y === p2.y;
    }
  }

  const point = new Point(1, 2);
  console.log(point.isEqual(new Point(10, 1)));
  // console.log(point.isEqual({ x: 1, y: 2 }));
};
// test17();


export const test18 = () => {
  class SomeClass {
    constructor(public one: number, private two: string) { }

    get three(): string {
      return `${this.one} ${this.two}`;
    }
  }

  const someClass = new SomeClass(1, 'assa');

  console.log(someClass.three);
};
// test18();


export const test19 = () => {
  class CustomFile {
    constructor(public name: string, public size: number) { }

    toString(): string {
      return `${this.name} (${this.size} bytes)`;
    }
  }

  class ImageCustomFile extends CustomFile {
    constructor(name: string, size: number, public width: number, public height: number) {
      super(name, size);
    }

    toString(): string {
      return super.toString() + ` ${this.width}x${this.height}`;
    }
  }

  class CustomFileFactory {
    createCustomFile(name: string, size: number): CustomFile {
      return new CustomFile(name, size);
    }
  }

  class ImageCustomFileFactory1 extends CustomFileFactory {
    createCustomFile(name: string, size: number): ImageCustomFile {
      return new ImageCustomFile(name, size, 100, 100);
    }
  }

  class ImageCustomFileFactory2 extends CustomFileFactory {
    createCustomFile(name: string, size: number): CustomFile {
      return new ImageCustomFile(name, size, 100, 100);
    }
  }

  class ImageCustomFileFactory3 extends CustomFileFactory {
    createCustomFile(name: string, size: number): CustomFile {
      return new ImageCustomFile(name, size, 100, 100);
    }
  }

  const customFile = new CustomFileFactory().createCustomFile('file.txt', 1256);
  console.log(String(customFile));

  console.log(String(
    new ImageCustomFileFactory1().createCustomFile('img1.jpg', 321),
  ));

  console.log(String(
    new ImageCustomFileFactory2().createCustomFile('img2.jpg', 456),
  ));

  console.log(String(
    new ImageCustomFileFactory3().createCustomFile('img3.jpg', 789),
  ));
};
// test19();


export const test20 = () => {
  class CustomFile {
    private static readonly maxCustomFileSize = 1000;

    static isCustomFile(file: CustomFile): boolean {
      return file instanceof CustomFile;
    }

    protected static isCustomFileToBig(size: number): boolean {
      return size > CustomFile.maxCustomFileSize;
    }

    constructor(private name: string, private size: number) {
      if (CustomFile.isCustomFileToBig(size)) {
        throw new Error('CustomFile is too big');
      }
    }

    toString() {
      return `${this.name} (${this.size} bytes)`;
    }
  }

  const file1 = new CustomFile('open-world.jpeg', 1000);
  console.log(file1);

  try {
    new CustomFile('to-big-file.txt', 1001);
  } catch (e) {
    console.log(e);
  }

  console.log(String(file1));
};
// test20();


export const test21 = () => {
  class CustomFile {
    static maxCustomFileSize = 1000;

    static isCustomFile(file: CustomFile): boolean {
      return file instanceof CustomFile;
    }
  }

  class ImageCustomFile extends CustomFile {
    static maxCustomFileSize = 2000;

    static isCustomFile(file: CustomFile): boolean {
      return file instanceof ImageCustomFile;
    }
  }

  const imageFile = new ImageCustomFile();
  console.log(imageFile);
};
// test21();


export const test22 = () => {
  abstract class CustomFile {
    constructor(protected name: string, protected size: number) { }

    sizeInKb(): number {
      return this.size / 1024;
    }
  }

  class ImageCustomFile extends CustomFile {
    constructor(name: string, size: number) {
      super(name, size);
    }
  }

  const imgFile = new ImageCustomFile('img.img', 1025);
  console.log(imgFile);
  console.log(imgFile.sizeInKb());
};
// test22();


export const test23 = () => {
  type User = {
    firstName: string;
    pointCount: number;
  };

  const user: User = {
    firstName: 'Uasya',
    pointCount: 10,
  };
  console.log(user);

  interface IUser {
    firstName: string;
    pointCounts: number;
  }

  const iUser: IUser = {
    firstName: 'Petya',
    pointCounts: 456,
  };

  console.log(iUser);
};
// test23();


export const test24 = () => {
  interface Countable {
    count(): number;
  }

  class SchoolClass implements Countable {
    count(): number {
      return 1;
    }
  }

  const sc = new SchoolClass();
  console.log(sc.count());
};
// test24();


export const test25 = () => {
  type Countable = {
    count(): number;
  };

  class SchoolClass implements Countable {
    count(): number {
      return 2;
    }
  }

  const sc = new SchoolClass();
  console.log(sc.count());

  function doSomething(obj: Countable) {
    console.log(obj.count());
  }
  doSomething(sc);
};
// test25();


export const test26 = () => {
  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
  }

  const dog: Dog = {
    name: 'uasya',
    breed: 'any',
  };

  console.log(dog);

  interface User {
    name: string;
  }

  interface User {
    age: number;
  }

  const user: User = {
    name: 'uasya',
    age: 15,
  };

  console.log(user);
};
// test26();


export const test27 = () => {
  interface IUser {
    rating: number;
  }

  interface IUser {
    nickname: string;
    birthdate: number;
  }

  const sergey: IUser = {
    nickname: 'Sergey',
    birthdate: 1990,
    rating: 1102,
  };

  console.log(sergey);

  interface IStudent extends IUser {
    group: number;
  }

  const student: IStudent = {
    nickname: 'Petya',
    birthdate: 1991,
    rating: 1001,
    group: 2,
  };

  console.log(student);
};
// test27();


export const test28 = () => {
  interface IUser {
    nickname: string;
    rating: number;
  }

  interface IEditor {
    courses: [string];
    canEdit: boolean;
  }

  interface IAuthor extends IUser, IEditor {
    team: string;
  }

  const sergey: IAuthor = {
    nickname: 'Sergey',
    rating: 20,
    courses: ['typescript'],
    canEdit: true,
    team: 'Hexlet College'
  };

  console.log(sergey);
};
// test28();


export const test29 = () => {
  interface IPhoneBook {
    [index: string]: number;
  }

  const myNotePad: IPhoneBook = {
    ivan: 555,
    sergey: 666,
    mom: 777,
  };

  console.log(myNotePad);
};
// test29();


export const test30 = () => {
  interface IBeep {
    sayBeep: () => string;
  }

  interface IBoop {
    sayBoop: () => string;
  }

  class Robo implements IBeep, IBoop {
    sayBeep = () => 'beep';
    sayBoop = () => 'boop';
  }

  const R2D2 = new Robo();
  console.log(R2D2.sayBeep());
  console.log(R2D2.sayBoop());
};
// test30();


export const test31 = () => {
  interface ICalculate {
    sum: (num1: number, num2: number) => number;
  }

  class Summator implements ICalculate {
    sum(num1: number, num2: number) {
      return num1 + num2;
    }

    multiply(num1: number, num2: number) {
      return num1 * num2;
    }
  }

  const calculator = new Summator();
  console.log(calculator.sum(1, 2));
  console.log(calculator.multiply(3, 4));
};
// test31();


export const test32 = () => {
  interface ICalculate {
    sum: (num1: number, num2: number) => number;
    multiply?: (x: number, y: number) => number;
  }

  class Summator implements ICalculate {
    sum(x: number, y: number) {
      return x + y;
    }
  }

  const summator = new Summator();
  console.log(summator.sum(7, 9));
};
// test32();


export const test33 = () => {
  const merge = (coll1: number[], coll2: number[]) => {
    const result = [];
    result.push(...coll1);
    result.push(...coll2);

    return result;
  };

  console.log(merge([1, 2], [3, 4]));
  // console.log(merge(['one', 'two'], ['three']));
};
// test33();


export const test34 = () => {
  function merge<T>(coll1: T[], coll2: T[]): T[] {
    const result = [];
    result.push(...coll1);
    result.push(...coll2);

    return result;
  }

  console.log(merge([1, 2], [3, 4]));
  console.log(merge(['one', 'two'], ['three']));
  console.log(merge([1, '2'], [1, 4]));
};
// test34();


export const task35 = () => {
  function first<T>(coll: Array<T>): T | null {
    return coll.length > 0 ? coll[0] : null;
  }

  console.log(first([]));
  console.log(first([2, 3]));
  console.log(first(['two', 'three']));
};
// task35();


export const task36 = () => {
  type MyColl<T> = {
    data: Array<T>;
    forEach(callback: (v: T, i: number, arr: Array<T>) => void): void;
    at(i: number): T | undefined;
  };

  const coll: MyColl<number> = {
    data: [1, 3, 8],
    forEach(callback) {
      this.data.forEach(callback);
    },
    at(i) {
      return this.data.at(i);
    }
  };

  console.log(coll.at(-1));
};
// task36();


export const task37 = () => {
  interface HasId {
    id: number;
  }

  type MyCol<T extends HasId> = {
    data: Array<T>;
    forEach(cb: (v: T, i: number, arr: T[]) => void): void;
    at(i: number): T | undefined;
  };

  interface User {
    id: number;
    name: string;
  }

  const coll: MyCol<User> = {
    data: [
      { id: 1, name: 'Uasya' },
      { id: 2, name: 'Petya' },
      { id: 3, name: 'Kolya' },
    ],
    forEach(cb) {
      this.data.forEach(cb);
    },
    at(i) {
      return this.data.at(i);
    }
  };
  console.log(coll);
};
// task37();


export const test38 = () => {
  function last<T>(coll: T[]): T {
    return coll[coll.length - 1];
  }

  console.log(last([1, '2', true]));
};
// test38();


export const test39 = () => {
  const last = <T>(coll: T[]): T => {
    return coll[coll.length - 1];
  };

  console.log(last([1, 2, 3]));
};
// test39();


export const test40 = () => {
  type Double<T, U> = {
    first: T;
    second: U;
  };

  const value: Double<string, number> = {
    first: 'code-basics',
    second: 1,
  };

  console.log(value);
};
// test40();

export const test41 = () => {
  function join<T, U>(coll1: (T | U)[], coll2: (T | U)[]): Array<T | U> {
    return coll1.concat(coll2);
  }

  console.log(join<number, string>([1, 2], ['one', 'two']));
};
// test41();


export const test42 = () => {
  const promise = new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(42);
    });
  });

  promise.then(console.log);
};
// test42();


export const test43 = () => {
  const wait = (ms: number): Promise<number> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  };

  wait(5_000).then(console.log);
};
// test43();


export const test44 = () => {
  const getHours = async () => {
    return new Date().getHours();
  };

  const hoursPromise: Promise<number> = getHours();

  console.log(hoursPromise);

  hoursPromise.then(console.log);
};
// test44();


export const test45 = () => {
  class Triple<T, U, V> {
    constructor(
      protected first: T,
      protected second: U,
      protected third: V,
    ) { }

    getFirst(): T {
      return this.first;
    }

    getSecond(): U {
      return this.second;
    }

    getThird(): V {
      return this.third;
    }
  }

  const triple = new Triple('a', 1, true);

  console.log(triple.getFirst());
  console.log(triple.getSecond());
  console.log(triple.getThird());

  class Pair<T, U> extends Triple<T, U, never> {
    constructor(first: T, second: U) {
      super(first, second, undefined as never);
    }

    getFirst(): T {
      return this.first;
    }

    getSecond(): U {
      return this.second;
    }
  }

  const pair = new Pair('a', 123);
  console.log(pair.getFirst());
  console.log(pair.getSecond());
  console.log(pair.getThird());


  function swap<T, U>(pair: Pair<T, U>): Pair<U, T> {
    return new Pair(pair.getSecond(), pair.getFirst());
  }

  console.log(pair);
  console.log(swap(pair));
};
// test45();


export const test46 = () => {
  function toString(obj: object | string | number) {
    return obj.toString();
  }

  console.log(toString('WoW'));
  console.log(toString(123));
  console.log(toString({}));


  const foo: object = {
    toString() {
      return 1;
    }
  };

  console.log(String(foo));

  const bar: object = {
    toString() {
      return '1';
    }
  };

  console.log(String(bar));
};
// test46();


export const test48 = () => {
  type DinamicKeysObject = {
    [key: string | number | symbol]: unknown;
  };

  const obj: DinamicKeysObject = {
    name: 'John',
    age: 30,
    0: 'zero',
    [Symbol('secret')]: 'symbol',
    true: 'dds'
  };

  console.log(obj);
};
// test48();


export const test49 = () => {
  type MyTheme = {
    palete: {
      primary: 'red' | 'green' | 'blue';
      [key: string]: string;
    },
    [key: string]: unknown;
  };

  const theme = {
    palete: {
      primary: 'green'
    },
    1: 1
  } satisfies MyTheme;

  console.log(theme);
};
// test49();


export const test50 = () => {
  class Template {
    static [propName: string]: string | number;

    [key: string]: string;
  }

  Template.test = 'test';
  console.log(Template);

  const template = new Template();
  template.test = 'test';
  console.log(template);
};
// test50();


export const test51 = () => {
  type Listeners = {
    [key: `on${string}`]: (value: unknown) => void;
  };

  const streamListeners: Listeners = {
    onStart() { },
    onFinish() { },
  };

  console.log(streamListeners);
};
// test51();


export const test52 = () => {
  interface Person {
    name: string;
    age: number;
    location?: {
      country: string;
      city: string;
    };
  }

  interface PersonDetails {
    location: Person['location'];
  }

  const personDetails: PersonDetails = {
    location: {
      city: 'asdf',
      country: 'qwerty',
    }
  };
  console.log(personDetails);


  type User = {
    id: number;
    name: string;
    email: string;
  };

  type UserFilelds = User['id' | 'email' | 'name'];

  const userFields: UserFilelds = 'asdf';
  console.log(userFields);

  type UserFields2 = User[keyof User];

  const fields2: UserFields2 = [].length;
  console.log(fields2);
};
// test52();


export const test53 = () => {
  interface Person {
    name: string;
    age: number;
    isAdmin: boolean;
  }

  const details: Pick<Person, 'name' | 'age'> = {
    name: 'John',
    age: 42,
  };

  console.log(details);

  const details2: Omit<Person, 'age'> = {
    name: 'Uasya',
    isAdmin: true,
  };

  console.log(details2);
};
// test53();

export const test54 = () => {
  type Context<K extends string, V> = {
    [Key in K]: V;
  };

  const runApp = <C extends Context<string, unknown>>(ctx: C) => {
    console.log(ctx);
  };

  const context: Context<string, number> = {
    'asd': 1,
    'swg': 2,
  };

  runApp(context);
};
// test54();


export const test55 = () => {
  type Rating = 0 | 1 | 2 | 3 | 4 | 5;
  type SongRating = Record<string, Rating>;

  const songRating: SongRating = {
    ratata: 4,
  };

  console.log(songRating);
};
// test55();
