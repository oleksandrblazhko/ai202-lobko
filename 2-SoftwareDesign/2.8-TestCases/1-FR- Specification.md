### Функція SendGuardsList()

1) вхідні параметри:
   1.1) date - ім'я користувача (рядок символів):
- умова 1) – date не може бути менше за `Date.now()`;
- умова 2) – формат date - `ISO` (`YYYY-MM-DDThh:mm:ss[.SSS]`);

2) - значення, що повертає функція:
- значення = 1 – список охоронців успішно відправлений;
- значення = -1 – пустий перелік охоронців, т.я. немає жодного вільного;