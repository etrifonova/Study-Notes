

/*

*/

let materialPrice = {
  'wood': 1000,
  'stone': 1500,
  'brick': 2000
};

let house = {
  rooms: 10,
  floors: 5,
  material: 'wood',
  coefficient: 10.5,

  calculateSquare: function () {
    return this.square = this.rooms * this.floors * this.coefficient;
    },

  calculatePrice: function () {
    return this.price = materialPrice[this.material] * this.square;
    }
  };

//  сработало!!!



/* ОБЪЕКТЫ

Объект — тип данных, который хранит в себе информацию в виде пар «ключ-значение».

Почему объектные типы данных также называют ссылочными?

Значения объектного типа — это не сами данные, а ссылка на область памяти в компьютере, где хранятся данные. Если мы скопируем эту ссылку и изменим данные, используя эту копию, то данные, на которые указывает исходная ссылка, также изменятся, поскольку это одни и те же данные!

И так как объектные типы данных «передаются по ссылке», они называются ссылочными.

Можно ли сказать, что массив и функция — это тоже объекты?

Да, технически все значения ссылочного типа являются разновидностями объектов. С точки зрения JavaScript, функция — это специальный вид объекта, который можно вызвать. Массив — это также особый вид объекта, оптимизированный для хранения серий значений по числовым индексам.

Запись объекта со всеми свойствами в фигурных скобках, называется литералом объекта. Если необходимо создать объект с помощью литерала, вам просто нужно использовать фигурные скобки. И если у объекта есть какие-то свойства, записать их внутри этих скобок.

let catsFavoriteFood = {
  Кекс: 'рыба',
  Рудольф: 'котлета',
  Снежок: 'сметана'
};

let printFavoriteFood = function (name) {
  return 'Моя любимая еда — ' + catsFavoriteFood[name];
};

console.log(printFavoriteFood('Снежок')); // Выведет: Моя любимая еда — сметана
Код работает, как и прежде, зато насколько сократилась наша программа!

Мы записали в объект не характеристику вида name: 'Кекс', а соотношение имени кота и лакомства, которое по вкусу именно ему. Такие объекты называют словарями, мапами или ассоциативными массивами. 

Скобочная нотация намного гибче точечной. Например, вы можете прочитать из объекта свойство, название которого записано в переменную:

let name = 'Кекс';
let catsFavoriteFood = { 'Кекс': 'рыба' };

console.log(catsFavoriteFood.name); // Выведет: undefined

console.log(catsFavoriteFood[name]); // Выведет: рыба
----------
console.log(catsFavoriteFood[name]);
// Незаметно внутри программы превращается в:
console.log(catsFavoriteFood['Кекс']);
----------

let cat = {
  name: 'Рудольф',

  introduce: function () {
    console.log('Мяу! Я кот ' + this.name + '!');
  }
};

cat.introduce(); // Выведет: Мяу! Я кот Рудольф!
Объект, на который указывает this называется контекстом вызова.

Важная деталь: пока функция не вызвана, this не содержит никакого значения, контекст появляется только в момент вызова функции.


let processorPrice = {
  'i5': 5000,
  'i7': 10000
};

let displayPrice = {
  13: 5000,
  15: 10000
};

let memoryPrice = {
  8: 3000,
  16: 4000
};

let buildComputer = function (memory, display, processor) {
  let customComputer = {
    basicPrice: 5000,
    processor: processor,
    display: display,
    memory: memory,

    getDescription: function () {
      return 'компьютер с процессором ' + this.processor + ', диагональю ' + this.display + ', оперативной памятью ' + this.memory;
    },

    getPrice: function () {
      return this.basicPrice + processorPrice[this.processor] + displayPrice[this.display] + memoryPrice[this.memory];
    }
  };

  return customComputer;
};

let myComputer = buildComputer(8, 13, 'i7');
console.log('В корзине ' + myComputer.getDescription() + ' стоимостью ' + myComputer.getPrice());


*/

/* МАССИВЫ 

Рефакторинг — это переписывание программы, после которого она должна работать так же, но быть более гибкой. Цель нашего рефакторинга — снизить трудоёмкость добавления и изменения массивного количества данных.

Массивы создаются с помощью так называемого литерала массива — квадратных скобок. Внутри скобок через запятую перечисляются все значения, которые должен содержать массив. При создании массив, как любое значение, можно записать в переменную:

let numbers = [1, 2, 3, 4, 5];

Традиционное название переменной цикла i — это сокращение от index, то есть индекса или порядкового номера. Это тоже одно из соглашений среди программистов, которое позволяет сократить код.

Колбэки
Что такое колбэк или колбэк-функция?

Колбэк-функция или функция обратного вызова — функция, предназначенная для отложенного выполнения. Это обычная функция, которая будет выполнена не сейчас, а когда-нибудь потом.

Найдите колбэк в этом коде:

const sum = [1, 12, 33, 46].reduce((accumulator, number) => accumulator + number, 0);

Метод reduce() принимает два аргумента — колбэк и начальное значение аккумулятора, а значит колбэком будет стрелочная функция (accumulator, number) => accumulator + number.

Что будет, если ничего не передать в скобках для метода склейки?

Если при вызове метода join() не передать аргумент, тогда в результирующей строке элементы массива будут разделены запятой без пробела.

console.log(['Die hard', 'Terminator'].join()); - запятая
console.log(['Die hard', 'Terminator'].join('')); - слитно
console.log(['Die hard', 'Terminator'].join('.')); - точка

Как объединить несколько массивов в один?

С помощью метода массивов concat(), например [1, 2].concat([3, 4], [5, 6]); // > [1, 2, 3, 4, 5, 6].

Как скопировать весь массив или определённую часть массива?

Скопировать массив или его часть можно с помощью метода slice().

Какие способы перебора значений в массиве вы знаете?

Для перебора значений в массиве можно воспользоваться операторами циклов for или while, а также воспользоваться методом массива forEach.

В каких случаях нужно отдать предпочтение перебору циклом for или while?

Если требуется перебрать только часть массива, потому что работу метода forEach остановить нельзя, а цикла — можно.

С помощью какого метода можно не просто перебрать массив, а преобразовать его элементы и получить на их основе новый массив? Какие параметры у колбэка этого метода?

Преобразовать массив можно с помощью метода map. У колбэка метода map такие же параметры, как у колбэка forEach:

value — текущий элемент массива;
index — порядковый номер текущего элемента массива;
array — ссылка на сам массив.

В чём отличие методов forEach и map?

Метод map похож на forEach. Только он позволяет не просто перебрать все значения массива, а получить новый массив значений. Метод map удобно использовать, когда требуется трансформировать массив, то есть создать новый массив на основе существующего.

С помощью какого метода можно массив значений свернуть до одного? Какие параметры у колбэка этого метода?

Свернуть массив значений до одного можно с помощью метода .reduce(). Параметры колбэк-функции метода .reduce():

результирующее_значение — параметр, через который передаётся предыдущий результат выполнения функции, таким образом этот параметр «кочует» от перебора одного элемента к перебору другого. Та отличительная особенность .reduce() от других методов;
текущий_элемент_массива — элемент массива, для которого вызывается колбэк-функция;
индекс_текущего_элемента и ссылка_на_сам_массив — тут без лишних слов.

*/


/* for loop / цикл for

1) Первая часть — подготовительная. Команды отсюда запускаются один раз перед началом работы цикла. Обычно здесь задаётся исходное значение для переменной-счётчика. Можно сказать, что первая часть — стартовая настройка для цикла.

В примере ниже мы создали переменную-счётчик i и задали ей начальное значение 0. Именно этому значению будет равна переменная, когда цикл начнёт свою работу.

Обратите внимание, что в цикле мы создаём переменную-счётчик с помощью let, как в случае с любой другой переменной. Традиционно такая переменная называется i (от слова index), но у неё может быть любое другое название. Например, если цикл считает дни, переменная-счётчик может называться day, а если страницы документа, то page.

for (let i = 0; i < 5; i = i + 1) { }

2) Вторая часть — проверочная. Она содержит условие и запускается перед каждым новым витком цикла. Условие здесь работает по знакомому вам алгоритму. Если условие возвращает true, цикл делает ещё один виток, иначе цикл завершает свою работу.

В примере мы указали, что цикл должен работать пока переменная i будет меньше 5.

for (let i = 0; i < 5; i = i + 1) { }

3) Третья часть — дополняющая, хотя по-научному она называется «законом изменения». Код третьей части запускается после каждого витка цикла. То есть после того, как выполнится код из тела цикла. Обычно там изменяется переменная-счётчик.

В нашем случае мы указали, что после каждого витка цикла, переменная i должна увеличиваться на единицу.

for (let i = 0; i < 5; i = i + 1) { }

Комбинировать можно не только сложение, но и остальные математические операции: вычитание -=, умножение *=, деление /= и нахождение остатка %=. Например, i *= 10 будет аналогично i = i * 10.
*/