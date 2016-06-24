﻿var array = [
    { type: "item", title: "Главная страница", picture: "app/screenshots/1.png" },
    { type: "item", title: "Персонализация", picture: "app/screenshots/2.jpg" },
    { type: "item", title: "Заполнение", picture: "app/screenshots/3.jpg" },
    { type: "item", title: "Редактор списков", picture: "app/screenshots/4.jpg" },
    { type: "item", title: "Справочная система", picture: "app/screenshots/5.jpg" }
];

WinJS.Namespace.define("DefaultData", {
    bindingList: new WinJS.Binding.List(array),
    array: array
});
WinJS.UI.processAll();