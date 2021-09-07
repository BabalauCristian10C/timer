/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_ourteam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ourteam */ \"./src/modules/ourteam.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n\n\n\n\n\n\n\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"21 september 2021\");\n  (0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  (0,_modules_ourteam__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n  (0,_modules_contact__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"form1\");\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"form2\");\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"form3\");\n});\n\n//# sourceURL=webpack://timermain/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calculator = function calculator() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var inputs = document.querySelectorAll(\".calc-item\"),\n      calcBlock = document.querySelector(\".calc-block\"),\n      calcType = document.querySelector(\".calc-type\"),\n      calcSquare = document.querySelector(\".calc-square\"),\n      calcDay = document.querySelector(\".calc-day\"),\n      calcCount = document.querySelector(\".calc-count\"),\n      totalValue = document.getElementById(\"total\");\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1,\n        typeValue = +calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n    totalValue.textContent = 0;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcCount.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcCount.value && calcDay < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = Math.ceil(total);\n  };\n\n  inputs.forEach(function (item) {\n    item.addEventListener(\"input\", function (e) {\n      var target = e.target;\n      target.value = target.value.replace(/[^0-9]/, \"\");\n    });\n  });\n\n  var clearForm = function clearForm() {\n    inputs.forEach(function (item) {\n      item.value = \"\";\n    });\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')) {\n      if (!calcType.value) {\n        clearForm();\n      }\n\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://timermain/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar contact = function contact() {\n  var name = document.querySelector(\"#form2-name\"),\n      message = document.querySelector(\"#form2-message\"),\n      email = document.querySelector(\"#form2-email\"),\n      number = document.querySelector(\"#form2-phone\");\n\n  var checkCyr = function checkCyr(event) {\n    var target = event.target;\n    target.value = target.value.replace(/[^А-Яа-яЁё\\s]/gi, \"\");\n    target.value = target.value.replace(/\\s{2,10000}/g, \" \");\n    target.value = target.value.trim();\n  };\n\n  var checkCyrName = function checkCyrName(event) {\n    var target = event.target;\n    target.value = target.value.replace(/[^А-Яа-яЁё\\s]/gi, \"\");\n    target.value = target.value.replace(/\\s{2,10000}/g, \" \");\n    target.value = target.value.trim();\n    target.value = target.value.replace(/([а-я])?[А-Яа-яЁё]*/g, function (match, v) {\n      if (v) {\n        return v.toUpperCase() + match.substr(1);\n      } else {\n        return match;\n      }\n    });\n  };\n\n  var checkEmail = function checkEmail(event) {\n    var target = event.target;\n    target.value = target.value.replace(/[^A-z!@._-~*'0-9]/gi, \"\");\n    target.value = target.value.replace(/\\s/g, \"\");\n    target.value = target.value.trim();\n    target.value = target.value.replace(/-{2,10000}/g, \"-\");\n  };\n\n  var checkNumber = function checkNumber(event) {\n    var target = event.target;\n    target.value = target.value.replace(/[^0-9()-+]/gi, \"\");\n    target.value = target.value.replace(/(\\-){2,10000}/g, \"-\");\n    target.value = target.value.trim();\n  };\n\n  name.addEventListener('blur', checkCyrName);\n  document.querySelector(\".form-name\").addEventListener('blur', checkCyrName);\n  message.addEventListener('blur', checkCyr);\n  email.addEventListener(\"blur\", checkEmail);\n  document.querySelector(\".form-email\").addEventListener('blur', checkEmail);\n  number.addEventListener(\"blur\", checkNumber);\n  document.querySelector(\".form-phone\").addEventListener('blur', checkNumber);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://timermain/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector(\"#timer-minutes\"),\n      timerSeconds = document.querySelector(\"#timer-seconds\");\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60),\n        tempArr = [seconds, minutes, hours];\n    tempArr.forEach(function (item, index) {\n      if (item < 10) {\n        tempArr[index] = \"0\" + item;\n      }\n    });\n    return {\n      \"seconds\": tempArr[0],\n      \"minutes\": tempArr[1],\n      \"hours\": tempArr[2],\n      timeRemaining: timeRemaining\n    };\n  }\n\n  (function updateClock() {\n    var timer = getTimeRemaining();\n    timerHours.textContent = timer.hours;\n    timerSeconds.textContent = timer.seconds;\n    timerMinutes.textContent = timer.minutes;\n\n    if (timer.timeRemaining > 0) {\n      var repeating = setTimeout(updateClock, 1000);\n    } else if (timer.timeRemaining <= 0) {\n      timerHours.textContent = \"00\";\n      timerSeconds.textContent = \"00\";\n      timerMinutes.textContent = \"00\";\n    }\n  })();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://timermain/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/ourteam.js":
/*!********************************!*\
  !*** ./src/modules/ourteam.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ourteam = function ourteam() {\n  var container = document.querySelector(\".command\"),\n      teamMember = container.querySelectorAll('.command__photo');\n  var arr = new Array();\n  teamMember.forEach(function (member) {\n    member.addEventListener('mouseenter', function (e) {\n      var target = e.target,\n          img = target.src,\n          dimg = target.dataset.img;\n      arr = [img, dimg];\n      target.src = arr[1];\n      target.dataset.img = arr[0];\n    });\n    member.addEventListener('mouseleave', function (e) {\n      var target = e.target,\n          img = target.src,\n          dimg = target.dataset.img;\n      arr = [img, dimg];\n      target.src = arr[1];\n      target.dataset.img = arr[0];\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ourteam);\n\n//# sourceURL=webpack://timermain/./src/modules/ourteam.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm(elem) {\n  var clearInput = function clearInput(item) {\n    var inputs = item.querySelectorAll('input');\n    inputs.forEach(function (item) {\n      item.value = \"\";\n    });\n  };\n\n  var sendServer = function sendServer(data) {\n    return fetch('./server.php', {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(data)\n    });\n  };\n\n  var form = document.getElementById(elem);\n  var statusMessage = document.createElement(\"div\");\n  statusMessage.style.cssText = \"font-size:2em;\";\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    form.appendChild(statusMessage);\n    statusMessage.textContent = 'Loading...';\n    var formData = new FormData(form);\n    var body = {};\n\n    var _iterator = _createForOfIteratorHelper(formData.entries()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var v = _step.value;\n        body[v[0]] = v[1];\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    sendServer(body).then(function (response) {\n      if (response.status !== 200 || form.querySelector(\"[name=\\\"user_name\\\"]\").value.length < 2) {\n        throw new Error(\"Couldn't send any data\");\n      }\n\n      clearInput(form);\n      statusMessage.textContent = \"Completed\";\n      setTimeout(function () {\n        statusMessage.remove();\n      }, 1000);\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = \"Name is too short\";\n      clearInput(form);\n      setTimeout(function () {\n        statusMessage.remove();\n      }, 1000);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://timermain/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll(\".portfolio-item\"),\n      btn = document.querySelectorAll('.portfolio-btn'),\n      slider = document.querySelector('.portfolio-content'),\n      dotBox = document.querySelector('.portfolio-dots'),\n      dotText = document.createElement('li');\n  dotText.classList.add(\"dot\");\n\n  for (var i = 0; i < slide.length; i++) {\n    var dotCopy = dotText.cloneNode();\n\n    if (i === 0) {\n      dotCopy.classList.add(\"dot-active\");\n      dotBox.append(dotCopy);\n    } else {\n      dotBox.append(dotCopy);\n    }\n  }\n\n  var dot = document.querySelectorAll('.dot');\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, str) {\n    elem[index].classList.remove(str);\n  };\n\n  var nextSlide = function nextSlide(elem, index, str) {\n    elem[index].classList.add(str);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.matches('.next, .prev, .dot')) {\n      prevSlide(slide, currentSlide, 'portfolio-item-active');\n      prevSlide(dot, currentSlide, 'dot-active');\n\n      if (target.matches(\".next\")) {\n        currentSlide++;\n      } else if (target.matches(\".prev\")) {\n        currentSlide--;\n      } else if (target.matches('.dot')) {\n        dot.forEach(function (elem, index) {\n          if (elem === target) {\n            currentSlide = index;\n          }\n        });\n      }\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      } else if (currentSlide < 0) {\n        currentSlide = slide.length - 1;\n      }\n\n      nextSlide(slide, currentSlide, 'portfolio-item-active');\n      nextSlide(dot, currentSlide, 'dot-active');\n    } else {\n      return;\n    }\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(2000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://timermain/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar smoothScroll = function smoothScroll() {\n  var a = document.querySelectorAll('a');\n  a.forEach(function (item) {\n    if (item.href === \"http://localhost:8888/timer/#service-block\") {\n      item.addEventListener(\"click\", function (e) {\n        e.preventDefault();\n        window.screenTop = 100;\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://timermain/./src/modules/smoothScroll.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector(\".service-header\"),\n      tab = tabHeader.querySelectorAll(\".service-header-tab\"),\n      tabContent = document.querySelectorAll(\".service-tab\");\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest(\".service-header-tab\");\n\n    if (target.classList.contains(\"service-header-tab\")) {\n      tab.forEach(function (item, index) {\n        if (item === target) {\n          toggleTabContent(index);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://timermain/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector(\".menu\"),\n      menu = document.querySelector('menu'),\n      closeBtn = document.querySelector(\".close-btn\"),\n      menuItems = menu.querySelectorAll(\"ul>li\");\n\n  var actionMenu = function actionMenu() {\n    menu.classList.toggle('active-menu');\n  },\n      test = function test() {\n    if (menu.classList.contains('active-menu')) {\n      return true;\n    } else {\n      return false;\n    }\n  };\n\n  closeBtn.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    actionMenu();\n  });\n  document.addEventListener(\"click\", function (e) {\n    var target = e.target;\n\n    if ((target.closest(\".menu\") || target.matches(\".close-btn\") || target.closest(\"ul>li>a\")) && target !== closeBtn) {\n      actionMenu();\n    } else if (test() && !(target.closest(\"menu\") && target !== closeBtn)) {\n      actionMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://timermain/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var testDeviceWidth = function testDeviceWidth() {\n    if (document.defaultView.innerWidth > 768) {\n      return true;\n    } else {\n      return false;\n    }\n  };\n\n  var popup = document.querySelector(\".popup\"),\n      popupClose = document.querySelector(\".popup-close\"),\n      popupBtn = document.querySelectorAll('.popup-btn');\n  popupClose.addEventListener(\"click\", function () {\n    if (testDeviceWidth()) {\n      var counter = 1;\n      var anim = setInterval(function () {\n        if (counter < 0) {\n          clearInterval(anim);\n          popup.style.display = \"none\";\n        } else if (counter <= 1) {\n          requestAnimationFrame(function () {\n            popup.style.opacity = counter;\n          });\n          counter -= 0.1;\n        }\n      }, 1);\n    } else {\n      popup.style.display = \"none\";\n    }\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (!target.closest('.popup-content')) {\n      if (testDeviceWidth()) {\n        var counter = 1;\n        var anim = setInterval(function () {\n          if (counter < 0) {\n            clearInterval(anim);\n            popup.style.display = \"none\";\n          } else if (counter <= 1) {\n            requestAnimationFrame(function () {\n              popup.style.opacity = counter;\n            });\n            counter -= 0.1;\n          }\n        }, 1);\n      } else {\n        popup.style.display = \"none\";\n      }\n    }\n  });\n  popupBtn.forEach(function (item) {\n    item.addEventListener(\"click\", function () {\n      if (testDeviceWidth()) {\n        var counter = 0;\n        popup.style.display = \"block\";\n        popup.style.opacity = \"0\";\n        var anim = setInterval(function () {\n          if (counter > 1) {\n            clearInterval(anim);\n          } else if (counter <= 1) {\n            requestAnimationFrame(function () {\n              popup.style.opacity = counter;\n            });\n            counter += 0.1;\n          }\n        }, 1);\n      } else {\n        popup.style.display = \"block\";\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://timermain/./src/modules/togglePopUp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;