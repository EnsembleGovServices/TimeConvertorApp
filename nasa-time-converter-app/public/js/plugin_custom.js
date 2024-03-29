var luxon = function (e) { "use strict"; function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } function o(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e } function s() { return (s = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }).apply(this, arguments) } function i(e, t) { e.prototype = Object.create(t.prototype), u(e.prototype.constructor = e, t) } function a(e) { return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) } function u(e, t) { return (u = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e })(e, t) } function c(e, t, n) { return (c = function () { if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) { if ("function" == typeof Proxy) return 1; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })), 1 } catch (e) { return } } }() ? Reflect.construct : function (e, t, n) { var r = [null]; r.push.apply(r, t); r = new (Function.bind.apply(e, r)); return n && u(r, n.prototype), r }).apply(null, arguments) } function t(e) { var n = "function" == typeof Map ? new Map : void 0; return function (e) { if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e; if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== n) { if (n.has(e)) return n.get(e); n.set(e, t) } function t() { return c(e, arguments, a(this).constructor) } return t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), u(t, e) }(e) } function l(e, t) { if (null == e) return {}; for (var n, r = {}, i = Object.keys(e), o = 0; o < i.length; o++)n = i[o], 0 <= t.indexOf(n) || (r[n] = e[n]); return r } function f(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n]; return r } function k(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (n) return (n = n.call(e)).next.bind(n); if (Array.isArray(e) || (n = function (e, t) { if (e) { if ("string" == typeof e) return f(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0 } }(e)) || t && e && "number" == typeof e.length) { n && (e = n); var r = 0; return function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] } } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var n = function (e) { function t() { return e.apply(this, arguments) || this } return i(t, e), t }(t(Error)), d = function (t) { function e(e) { return t.call(this, "Invalid DateTime: " + e.toMessage()) || this } return i(e, t), e }(n), h = function (t) { function e(e) { return t.call(this, "Invalid Interval: " + e.toMessage()) || this } return i(e, t), e }(n), y = function (t) { function e(e) { return t.call(this, "Invalid Duration: " + e.toMessage()) || this } return i(e, t), e }(n), T = function (e) { function t() { return e.apply(this, arguments) || this } return i(t, e), t }(n), v = function (t) { function e(e) { return t.call(this, "Invalid unit " + e) || this } return i(e, t), e }(n), p = function (e) { function t() { return e.apply(this, arguments) || this } return i(t, e), t }(n), m = function (e) { function t() { return e.call(this, "Zone is an abstract class") || this } return i(t, e), t }(n), g = "numeric", w = "short", S = "long", b = { year: g, month: g, day: g }, O = { year: g, month: w, day: g }, M = { year: g, month: w, day: g, weekday: w }, N = { year: g, month: S, day: g }, D = { year: g, month: S, day: g, weekday: S }, E = { hour: g, minute: g }, V = { hour: g, minute: g, second: g }, I = { hour: g, minute: g, second: g, timeZoneName: w }, x = { hour: g, minute: g, second: g, timeZoneName: S }, C = { hour: g, minute: g, hourCycle: "h23" }, F = { hour: g, minute: g, second: g, hourCycle: "h23" }, Z = { hour: g, minute: g, second: g, hourCycle: "h23", timeZoneName: w }, L = { hour: g, minute: g, second: g, hourCycle: "h23", timeZoneName: S }, A = { year: g, month: g, day: g, hour: g, minute: g }, z = { year: g, month: g, day: g, hour: g, minute: g, second: g }, j = { year: g, month: w, day: g, hour: g, minute: g }, q = { year: g, month: w, day: g, hour: g, minute: g, second: g }, _ = { year: g, month: w, day: g, weekday: w, hour: g, minute: g }, U = { year: g, month: S, day: g, hour: g, minute: g, timeZoneName: w }, R = { year: g, month: S, day: g, hour: g, minute: g, second: g, timeZoneName: w }, H = { year: g, month: S, day: g, weekday: S, hour: g, minute: g, timeZoneName: S }, P = { year: g, month: S, day: g, weekday: S, hour: g, minute: g, second: g, timeZoneName: S }; function W(e) { return void 0 === e } function J(e) { return "number" == typeof e } function Y(e) { return "number" == typeof e && e % 1 == 0 } function G() { try { return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat } catch (e) { return !1 } } function $(e, n, r) { if (0 !== e.length) return e.reduce(function (e, t) { t = [n(t), t]; return e && r(e[0], t[0]) === e[0] ? e : t }, null)[1] } function B(e, t) { return Object.prototype.hasOwnProperty.call(e, t) } function Q(e, t, n) { return Y(e) && t <= e && e <= n } function K(e, t) { void 0 === t && (t = 2); t = e < 0 ? "-" + ("" + -e).padStart(t, "0") : ("" + e).padStart(t, "0"); return t } function X(e) { if (!W(e) && null !== e && "" !== e) return parseInt(e, 10) } function ee(e) { if (!W(e) && null !== e && "" !== e) return parseFloat(e) } function te(e) { if (!W(e) && null !== e && "" !== e) { e = 1e3 * parseFloat("0." + e); return Math.floor(e) } } function ne(e, t, n) { void 0 === n && (n = !1); t = Math.pow(10, t); return (n ? Math.trunc : Math.round)(e * t) / t } function re(e) { return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0) } function ie(e) { return re(e) ? 366 : 365 } function oe(e, t) { var n, r = (n = t - 1) - (r = 12) * Math.floor(n / r) + 1; return 2 == r ? re(e + (t - r) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1] } function ae(e) { var t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond); return e.year < 100 && 0 <= e.year && (t = new Date(t)).setUTCFullYear(t.getUTCFullYear() - 1900), +t } function ue(e) { var t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7, e = e - 1, e = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7; return 4 == t || 3 == e ? 53 : 52 } function se(e) { return 99 < e ? e : 60 < e ? 1900 + e : 2e3 + e } function ce(e, t, n, r) { void 0 === r && (r = null); var i = new Date(e), e = { hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }; r && (e.timeZone = r); e = s({ timeZoneName: t }, e), i = new Intl.DateTimeFormat(n, e).formatToParts(i).find(function (e) { return "timezonename" === e.type.toLowerCase() }); return i ? i.value : null } function le(e, t) { e = parseInt(e, 10); Number.isNaN(e) && (e = 0); t = parseInt(t, 10) || 0; return 60 * e + (e < 0 || Object.is(e, -0) ? -t : t) } function fe(e) { var t = Number(e); if ("boolean" == typeof e || "" === e || Number.isNaN(t)) throw new p("Invalid unit value " + e); return t } function de(e, t) { var n, r, i = {}; for (n in e) !B(e, n) || null != (r = e[n]) && (i[t(n)] = fe(r)); return i } function he(e, t) { var n = Math.trunc(Math.abs(e / 60)), r = Math.trunc(Math.abs(e % 60)), i = 0 <= e ? "+" : "-"; switch (t) { case "short": return i + K(n, 2) + ":" + K(r, 2); case "narrow": return i + n + (0 < r ? ":" + r : ""); case "techie": return i + K(n, 2) + K(r, 2); default: throw new RangeError("Value format " + t + " is out of range for property format") } } function me(e) { return n = e, ["hour", "minute", "second", "millisecond"].reduce(function (e, t) { return e[t] = n[t], e }, {}); var n } var ye = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/, ve = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], pe = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ge = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]; function we(e) { switch (e) { case "narrow": return [].concat(ge); case "short": return [].concat(pe); case "long": return [].concat(ve); case "numeric": return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]; case "2-digit": return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]; default: return null } } var ke = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], Te = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Se = ["M", "T", "W", "T", "F", "S", "S"]; function be(e) { switch (e) { case "narrow": return [].concat(Se); case "short": return [].concat(Te); case "long": return [].concat(ke); case "numeric": return ["1", "2", "3", "4", "5", "6", "7"]; default: return null } } var Oe = ["AM", "PM"], Me = ["Before Christ", "Anno Domini"], Ne = ["BC", "AD"], De = ["B", "A"]; function Ee(e) { switch (e) { case "narrow": return [].concat(De); case "short": return [].concat(Ne); case "long": return [].concat(Me); default: return null } } function Ve(e, t) { for (var n = "", r = k(e); !(i = r()).done;) { var i = i.value; i.literal ? n += i.val : n += t(i.val) } return n } var Ie = { D: b, DD: O, DDD: N, DDDD: D, t: E, tt: V, ttt: I, tttt: x, T: C, TT: F, TTT: Z, TTTT: L, f: A, ff: j, fff: U, ffff: H, F: z, FF: q, FFF: R, FFFF: P }, xe = function () { function d(e, t) { this.opts = t, this.loc = e, this.systemLoc = null } d.create = function (e, t) { return new d(e, t = void 0 === t ? {} : t) }, d.parseFormat = function (e) { for (var t = null, n = "", r = !1, i = [], o = 0; o < e.length; o++) { var a = e.charAt(o); "'" === a ? (0 < n.length && i.push({ literal: r, val: n }), t = null, n = "", r = !r) : r || a === t ? n += a : (0 < n.length && i.push({ literal: !1, val: n }), t = n = a) } return 0 < n.length && i.push({ literal: r, val: n }), i }, d.macroTokenToFormatOpts = function (e) { return Ie[e] }; var e = d.prototype; return e.formatWithSystemDefault = function (e, t) { return null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, s({}, this.opts, t)).format() }, e.formatDateTime = function (e, t) { return this.loc.dtFormatter(e, s({}, this.opts, t = void 0 === t ? {} : t)).format() }, e.formatDateTimeParts = function (e, t) { return this.loc.dtFormatter(e, s({}, this.opts, t = void 0 === t ? {} : t)).formatToParts() }, e.resolvedOptions = function (e, t) { return this.loc.dtFormatter(e, s({}, this.opts, t = void 0 === t ? {} : t)).resolvedOptions() }, e.num = function (e, t) { if (void 0 === t && (t = 0), this.opts.forceSimple) return K(e, t); var n = s({}, this.opts); return 0 < t && (n.padTo = t), this.loc.numberFormatter(n).format(e) }, e.formatDateTimeFromString = function (r, e) { var n = this, i = "en" === this.loc.listingMode(), t = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar, o = function (e, t) { return n.loc.extract(r, e, t) }, a = function (e) { return r.isOffsetFixed && 0 === r.offset && e.allowZ ? "Z" : r.isValid ? r.zone.formatOffset(r.ts, e.format) : "" }, u = function () { return i ? Oe[r.hour < 12 ? 0 : 1] : o({ hour: "numeric", hourCycle: "h12" }, "dayperiod") }, s = function (e, t) { return i ? (n = r, we(e)[n.month - 1]) : o(t ? { month: e } : { month: e, day: "numeric" }, "month"); var n }, c = function (e, t) { return i ? (n = r, be(e)[n.weekday - 1]) : o(t ? { weekday: e } : { weekday: e, month: "long", day: "numeric" }, "weekday"); var n }, l = function (e) { var t = d.macroTokenToFormatOpts(e); return t ? n.formatWithSystemDefault(r, t) : e }, f = function (e) { return i ? (t = r, Ee(e)[t.year < 0 ? 0 : 1]) : o({ era: e }, "era"); var t }; return Ve(d.parseFormat(e), function (e) { switch (e) { case "S": return n.num(r.millisecond); case "u": case "SSS": return n.num(r.millisecond, 3); case "s": return n.num(r.second); case "ss": return n.num(r.second, 2); case "uu": return n.num(Math.floor(r.millisecond / 10), 2); case "uuu": return n.num(Math.floor(r.millisecond / 100)); case "m": return n.num(r.minute); case "mm": return n.num(r.minute, 2); case "h": return n.num(r.hour % 12 == 0 ? 12 : r.hour % 12); case "hh": return n.num(r.hour % 12 == 0 ? 12 : r.hour % 12, 2); case "H": return n.num(r.hour); case "HH": return n.num(r.hour, 2); case "Z": return a({ format: "narrow", allowZ: n.opts.allowZ }); case "ZZ": return a({ format: "short", allowZ: n.opts.allowZ }); case "ZZZ": return a({ format: "techie", allowZ: n.opts.allowZ }); case "ZZZZ": return r.zone.offsetName(r.ts, { format: "short", locale: n.loc.locale }); case "ZZZZZ": return r.zone.offsetName(r.ts, { format: "long", locale: n.loc.locale }); case "z": return r.zoneName; case "a": return u(); case "d": return t ? o({ day: "numeric" }, "day") : n.num(r.day); case "dd": return t ? o({ day: "2-digit" }, "day") : n.num(r.day, 2); case "c": return n.num(r.weekday); case "ccc": return c("short", !0); case "cccc": return c("long", !0); case "ccccc": return c("narrow", !0); case "E": return n.num(r.weekday); case "EEE": return c("short", !1); case "EEEE": return c("long", !1); case "EEEEE": return c("narrow", !1); case "L": return t ? o({ month: "numeric", day: "numeric" }, "month") : n.num(r.month); case "LL": return t ? o({ month: "2-digit", day: "numeric" }, "month") : n.num(r.month, 2); case "LLL": return s("short", !0); case "LLLL": return s("long", !0); case "LLLLL": return s("narrow", !0); case "M": return t ? o({ month: "numeric" }, "month") : n.num(r.month); case "MM": return t ? o({ month: "2-digit" }, "month") : n.num(r.month, 2); case "MMM": return s("short", !1); case "MMMM": return s("long", !1); case "MMMMM": return s("narrow", !1); case "y": return t ? o({ year: "numeric" }, "year") : n.num(r.year); case "yy": return t ? o({ year: "2-digit" }, "year") : n.num(r.year.toString().slice(-2), 2); case "yyyy": return t ? o({ year: "numeric" }, "year") : n.num(r.year, 4); case "yyyyyy": return t ? o({ year: "numeric" }, "year") : n.num(r.year, 6); case "G": return f("short"); case "GG": return f("long"); case "GGGGG": return f("narrow"); case "kk": return n.num(r.weekYear.toString().slice(-2), 2); case "kkkk": return n.num(r.weekYear, 4); case "W": return n.num(r.weekNumber); case "WW": return n.num(r.weekNumber, 2); case "o": return n.num(r.ordinal); case "ooo": return n.num(r.ordinal, 3); case "q": return n.num(r.quarter); case "qq": return n.num(r.quarter, 2); case "X": return n.num(Math.floor(r.ts / 1e3)); case "x": return n.num(r.ts); default: return l(e) } }) }, e.formatDurationFromString = function (e, t) { var n, r = this, i = function (e) { switch (e[0]) { case "S": return "millisecond"; case "s": return "second"; case "m": return "minute"; case "h": return "hour"; case "d": return "day"; case "w": return "week"; case "M": return "month"; case "y": return "year"; default: return null } }, o = d.parseFormat(t), t = o.reduce(function (e, t) { var n = t.literal, t = t.val; return n ? e : e.concat(t) }, []), t = e.shiftTo.apply(e, t.map(i).filter(function (e) { return e })); return Ve(o, (n = t, function (e) { var t = i(e); return t ? r.num(n.get(t), e.length) : e })) }, d }(), Ce = function () { function e(e, t) { this.reason = e, this.explanation = t } return e.prototype.toMessage = function () { return this.explanation ? this.reason + ": " + this.explanation : this.reason }, e }(), Fe = function () { function e() { } var t = e.prototype; return t.offsetName = function (e, t) { throw new m }, t.formatOffset = function (e, t) { throw new m }, t.offset = function (e) { throw new m }, t.equals = function (e) { throw new m }, o(e, [{ key: "type", get: function () { throw new m } }, { key: "name", get: function () { throw new m } }, { key: "ianaName", get: function () { return this.name } }, { key: "isUniversal", get: function () { throw new m } }, { key: "isValid", get: function () { throw new m } }]), e }(), Ze = null, Le = function (e) { function t() { return e.apply(this, arguments) || this } i(t, e); var n = t.prototype; return n.offsetName = function (e, t) { return ce(e, t.format, t.locale) }, n.formatOffset = function (e, t) { return he(this.offset(e), t) }, n.offset = function (e) { return -new Date(e).getTimezoneOffset() }, n.equals = function (e) { return "system" === e.type }, o(t, [{ key: "type", get: function () { return "system" } }, { key: "name", get: function () { return (new Intl.DateTimeFormat).resolvedOptions().timeZone } }, { key: "isUniversal", get: function () { return !1 } }, { key: "isValid", get: function () { return !0 } }], [{ key: "instance", get: function () { return Ze = null === Ze ? new t : Ze } }]), t }(Fe), Ae = {}; var ze = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 }; var je = {}, qe = function (n) { function r(e) { var t = n.call(this) || this; return t.zoneName = e, t.valid = r.isValidZone(e), t } i(r, n), r.create = function (e) { return je[e] || (je[e] = new r(e)), je[e] }, r.resetCache = function () { je = {}, Ae = {} }, r.isValidSpecifier = function (e) { return this.isValidZone(e) }, r.isValidZone = function (e) { if (!e) return !1; try { return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0 } catch (e) { return !1 } }; var e = r.prototype; return e.offsetName = function (e, t) { return ce(e, t.format, t.locale, this.name) }, e.formatOffset = function (e, t) { return he(this.offset(e), t) }, e.offset = function (e) { var t = new Date(e); if (isNaN(t)) return NaN; var n = (o = this.name, Ae[o] || (Ae[o] = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: o, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", era: "short" })), Ae[o]), r = n.formatToParts ? function (e, t) { for (var n = e.formatToParts(t), r = [], i = 0; i < n.length; i++) { var o = n[i], a = o.type, u = o.value, o = ze[a]; "era" === a ? r[o] = u : W(o) || (r[o] = parseInt(u, 10)) } return r }(n, t) : (a = t, u = (s = n).format(a).replace(/\u200E/g, ""), a = (s = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(u))[1], u = s[2], [s[3], a, u, s[4], s[5], s[6], s[7]]), i = r[0], e = r[1], o = r[2], n = r[3], a = r[4], u = r[5], s = r[6], r = +t, t = r % 1e3; return (ae({ year: i = "BC" === n ? 1 - Math.abs(i) : i, month: e, day: o, hour: 24 === a ? 0 : a, minute: u, second: s, millisecond: 0 }) - (r -= 0 <= t ? t : 1e3 + t)) / 6e4 }, e.equals = function (e) { return "iana" === e.type && e.name === this.name }, o(r, [{ key: "type", get: function () { return "iana" } }, { key: "name", get: function () { return this.zoneName } }, { key: "isUniversal", get: function () { return !1 } }, { key: "isValid", get: function () { return this.valid } }]), r }(Fe), _e = null, Ue = function (n) { function t(e) { var t = n.call(this) || this; return t.fixed = e, t } i(t, n), t.instance = function (e) { return 0 === e ? t.utcInstance : new t(e) }, t.parseSpecifier = function (e) { if (e) { e = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i); if (e) return new t(le(e[1], e[2])) } return null }; var e = t.prototype; return e.offsetName = function () { return this.name }, e.formatOffset = function (e, t) { return he(this.fixed, t) }, e.offset = function () { return this.fixed }, e.equals = function (e) { return "fixed" === e.type && e.fixed === this.fixed }, o(t, [{ key: "type", get: function () { return "fixed" } }, { key: "name", get: function () { return 0 === this.fixed ? "UTC" : "UTC" + he(this.fixed, "narrow") } }, { key: "ianaName", get: function () { return 0 === this.fixed ? "Etc/UTC" : "Etc/GMT" + he(-this.fixed, "narrow") } }, { key: "isUniversal", get: function () { return !0 } }, { key: "isValid", get: function () { return !0 } }], [{ key: "utcInstance", get: function () { return _e = null === _e ? new t(0) : _e } }]), t }(Fe), Re = function (n) { function e(e) { var t = n.call(this) || this; return t.zoneName = e, t } i(e, n); var t = e.prototype; return t.offsetName = function () { return null }, t.formatOffset = function () { return "" }, t.offset = function () { return NaN }, t.equals = function () { return !1 }, o(e, [{ key: "type", get: function () { return "invalid" } }, { key: "name", get: function () { return this.zoneName } }, { key: "isUniversal", get: function () { return !1 } }, { key: "isValid", get: function () { return !1 } }]), e }(Fe); function He(e, t) { if (W(e) || null === e) return t; if (e instanceof Fe) return e; if ("string" != typeof e) return J(e) ? Ue.instance(e) : "object" == typeof e && e.offset && "number" == typeof e.offset ? e : new Re(e); var n = e.toLowerCase(); return "local" === n || "system" === n ? t : "utc" === n || "gmt" === n ? Ue.utcInstance : Ue.parseSpecifier(n) || qe.create(e) } var Pe, We = function () { return Date.now() }, Je = "system", Ye = null, Ge = null, $e = null, Be = function () { function e() { } return e.resetCaches = function () { ct.resetCache(), qe.resetCache() }, o(e, null, [{ key: "now", get: function () { return We }, set: function (e) { We = e } }, { key: "defaultZone", get: function () { return He(Je, Le.instance) }, set: function (e) { Je = e } }, { key: "defaultLocale", get: function () { return Ye }, set: function (e) { Ye = e } }, { key: "defaultNumberingSystem", get: function () { return Ge }, set: function (e) { Ge = e } }, { key: "defaultOutputCalendar", get: function () { return $e }, set: function (e) { $e = e } }, { key: "throwOnInvalid", get: function () { return Pe }, set: function (e) { Pe = e } }]), e }(), Qe = ["base"], Ke = ["padTo", "floor"], Xe = {}; var et = {}; function tt(e, t) { void 0 === t && (t = {}); var n = JSON.stringify([e, t]), r = et[n]; return r || (r = new Intl.DateTimeFormat(e, t), et[n] = r), r } var nt = {}; var rt = {}; var it = null; function ot(e, t, n, r, i) { n = e.listingMode(n); return "error" === n ? null : ("en" === n ? r : i)(t) } var at = function () { function e(e, t, n) { this.padTo = n.padTo || 0, this.floor = n.floor || !1, n.padTo, n.floor; var r = l(n, Ke); (!t || 0 < Object.keys(r).length) && (r = s({ useGrouping: !1 }, n), 0 < n.padTo && (r.minimumIntegerDigits = n.padTo), this.inf = function (e, t) { void 0 === t && (t = {}); var n = JSON.stringify([e, t]), r = nt[n]; return r || (r = new Intl.NumberFormat(e, t), nt[n] = r), r }(e, r)) } return e.prototype.format = function (e) { if (this.inf) { var t = this.floor ? Math.floor(e) : e; return this.inf.format(t) } return K(this.floor ? Math.floor(e) : ne(e, 3), this.padTo) }, e }(), ut = function () { function e(e, t, n) { var r, i; this.opts = n, e.zone.isUniversal ? (i = 0 <= (i = e.offset / 60 * -1) ? "Etc/GMT+" + i : "Etc/GMT" + i, 0 !== e.offset && qe.create(i).valid ? (r = i, this.dt = e) : (r = "UTC", n.timeZoneName ? this.dt = e : this.dt = 0 === e.offset ? e : tr.fromMillis(e.ts + 60 * e.offset * 1e3))) : "system" === e.zone.type ? this.dt = e : r = (this.dt = e).zone.name; e = s({}, this.opts); r && (e.timeZone = r), this.dtf = tt(t, e) } var t = e.prototype; return t.format = function () { return this.dtf.format(this.dt.toJSDate()) }, t.formatToParts = function () { return this.dtf.formatToParts(this.dt.toJSDate()) }, t.resolvedOptions = function () { return this.dtf.resolvedOptions() }, e }(), st = function () { function e(e, t, n) { this.opts = s({ style: "long" }, n), !t && G() && (this.rtf = function (e, t) { (r = t = void 0 === t ? {} : t).base; var n = l(r, Qe), r = JSON.stringify([e, n]); return (n = rt[r]) || (n = new Intl.RelativeTimeFormat(e, t), rt[r] = n), n }(e, n)) } var t = e.prototype; return t.format = function (e, t) { return this.rtf ? this.rtf.format(e, t) : function (e, t, n, r) { void 0 === n && (n = "always"), void 0 === r && (r = !1); var i = { years: ["year", "yr."], quarters: ["quarter", "qtr."], months: ["month", "mo."], weeks: ["week", "wk."], days: ["day", "day", "days"], hours: ["hour", "hr."], minutes: ["minute", "min."], seconds: ["second", "sec."] }, o = -1 === ["hours", "minutes", "seconds"].indexOf(e); if ("auto" === n && o) { var a = "days" === e; switch (t) { case 1: return a ? "tomorrow" : "next " + i[e][0]; case -1: return a ? "yesterday" : "last " + i[e][0]; case 0: return a ? "today" : "this " + i[e][0] } } var u = Object.is(t, -0) || t < 0, o = 1 === (n = Math.abs(t)), t = i[e], o = r ? !o && t[2] || t[1] : o ? i[e][0] : e; return u ? n + " " + o + " ago" : "in " + n + " " + o }(t, e, this.opts.numeric, "long" !== this.opts.style) }, t.formatToParts = function (e, t) { return this.rtf ? this.rtf.formatToParts(e, t) : [] }, e }(), ct = function () { function i(e, t, n, r) { var i = function (e) { var t = e.indexOf("-u-"); if (-1 === t) return [e]; t = e.substring(0, t); try { n = tt(e).resolvedOptions() } catch (e) { n = tt(t).resolvedOptions() } var n = n; return [t, n.numberingSystem, n.calendar] }(e), o = i[0], e = i[1], i = i[2]; this.locale = o, this.numberingSystem = t || e || null, this.outputCalendar = n || i || null, this.intl = (e = this.locale, n = this.numberingSystem, ((i = this.outputCalendar) || n) && (e += "-u", i && (e += "-ca-" + i), n && (e += "-nu-" + n)), e), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = r, this.fastNumbersCached = null } i.fromOpts = function (e) { return i.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN) }, i.create = function (e, t, n, r) { void 0 === r && (r = !1); e = e || Be.defaultLocale; return new i(e || (r ? "en-US" : it = it || (new Intl.DateTimeFormat).resolvedOptions().locale), t || Be.defaultNumberingSystem, n || Be.defaultOutputCalendar, e) }, i.resetCache = function () { it = null, et = {}, nt = {}, rt = {} }, i.fromObject = function (e) { var t = void 0 === e ? {} : e, n = t.locale, e = t.numberingSystem, t = t.outputCalendar; return i.create(n, e, t) }; var e = i.prototype; return e.listingMode = function () { var e = this.isEnglish(), t = !(null !== this.numberingSystem && "latn" !== this.numberingSystem || null !== this.outputCalendar && "gregory" !== this.outputCalendar); return e && t ? "en" : "intl" }, e.clone = function (e) { return e && 0 !== Object.getOwnPropertyNames(e).length ? i.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, e.defaultToEN || !1) : this }, e.redefaultToEN = function (e) { return this.clone(s({}, e = void 0 === e ? {} : e, { defaultToEN: !0 })) }, e.redefaultToSystem = function (e) { return this.clone(s({}, e = void 0 === e ? {} : e, { defaultToEN: !1 })) }, e.months = function (n, r, e) { var i = this; return void 0 === r && (r = !1), ot(this, n, e = void 0 === e ? !0 : e, we, function () { var t = r ? { month: n, day: "numeric" } : { month: n }, e = r ? "format" : "standalone"; return i.monthsCache[e][n] || (i.monthsCache[e][n] = function (e) { for (var t = [], n = 1; n <= 12; n++) { var r = tr.utc(2016, n, 1); t.push(e(r)) } return t }(function (e) { return i.extract(e, t, "month") })), i.monthsCache[e][n] }) }, e.weekdays = function (n, r, e) { var i = this; return void 0 === r && (r = !1), ot(this, n, e = void 0 === e ? !0 : e, be, function () { var t = r ? { weekday: n, year: "numeric", month: "long", day: "numeric" } : { weekday: n }, e = r ? "format" : "standalone"; return i.weekdaysCache[e][n] || (i.weekdaysCache[e][n] = function (e) { for (var t = [], n = 1; n <= 7; n++) { var r = tr.utc(2016, 11, 13 + n); t.push(e(r)) } return t }(function (e) { return i.extract(e, t, "weekday") })), i.weekdaysCache[e][n] }) }, e.meridiems = function (e) { var n = this; return ot(this, void 0, e = void 0 === e ? !0 : e, function () { return Oe }, function () { var t; return n.meridiemCache || (t = { hour: "numeric", hourCycle: "h12" }, n.meridiemCache = [tr.utc(2016, 11, 13, 9), tr.utc(2016, 11, 13, 19)].map(function (e) { return n.extract(e, t, "dayperiod") })), n.meridiemCache }) }, e.eras = function (e, t) { var n = this; return ot(this, e, t = void 0 === t ? !0 : t, Ee, function () { var t = { era: e }; return n.eraCache[e] || (n.eraCache[e] = [tr.utc(-40, 1, 1), tr.utc(2017, 1, 1)].map(function (e) { return n.extract(e, t, "era") })), n.eraCache[e] }) }, e.extract = function (e, t, n) { t = this.dtFormatter(e, t).formatToParts().find(function (e) { return e.type.toLowerCase() === n }); return t ? t.value : null }, e.numberFormatter = function (e) { return new at(this.intl, (e = void 0 === e ? {} : e).forceSimple || this.fastNumbers, e) }, e.dtFormatter = function (e, t) { return new ut(e, this.intl, t = void 0 === t ? {} : t) }, e.relFormatter = function (e) { return void 0 === e && (e = {}), new st(this.intl, this.isEnglish(), e) }, e.listFormatter = function (e) { return function (e, t) { void 0 === t && (t = {}); var n = JSON.stringify([e, t]), r = Xe[n]; return r || (r = new Intl.ListFormat(e, t), Xe[n] = r), r }(this.intl, e = void 0 === e ? {} : e) }, e.isEnglish = function () { return "en" === this.locale || "en-us" === this.locale.toLowerCase() || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us") }, e.equals = function (e) { return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar }, o(i, [{ key: "fastNumbers", get: function () { var e; return null == this.fastNumbersCached && (this.fastNumbersCached = (!(e = this).numberingSystem || "latn" === e.numberingSystem) && ("latn" === e.numberingSystem || !e.locale || e.locale.startsWith("en") || "latn" === new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)), this.fastNumbersCached } }]), i }(); function lt() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; var r = t.reduce(function (e, t) { return e + t.source }, ""); return RegExp("^" + r + "$") } function ft() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return function (o) { return t.reduce(function (e, t) { var n = e[0], r = e[1], i = e[2], e = t(o, i), t = e[0], i = e[1], e = e[2]; return [s({}, n, t), i || r, e] }, [{}, null, 1]).slice(0, 2) } } function dt(e) { if (null == e) return [null, null]; for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r]; for (var i = 0, o = n; i < o.length; i++) { var a = o[i], u = a[0], a = a[1], u = u.exec(e); if (u) return a(u) } return [null, null] } function ht() { for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++)i[t] = arguments[t]; return function (e, t) { for (var n = {}, r = 0; r < i.length; r++)n[i[r]] = X(e[t + r]); return [n, null, t + r] } } var mt = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, yt = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, n = RegExp(yt.source + ("(?:" + mt.source + "?(?:\\[(" + ye.source + ")\\])?)?")), w = RegExp("(?:T" + n.source + ")?"), g = ht("weekYear", "weekNumber", "weekDay"), S = ht("year", "ordinal"), mt = RegExp(yt.source + " ?(?:" + mt.source + "|(" + ye.source + "))?"), ye = RegExp("(?: " + mt.source + ")?"); function vt(e, t, n) { t = e[t]; return W(t) ? n : X(t) } function pt(e, t) { return [{ hours: vt(e, t, 0), minutes: vt(e, t + 1, 0), seconds: vt(e, t + 2, 0), milliseconds: te(e[t + 3]) }, null, t + 4] } function gt(e, t) { var n = !e[t] && !e[t + 1], e = le(e[t + 1], e[t + 2]); return [{}, n ? null : Ue.instance(e), t + 3] } function wt(e, t) { return [{}, e[t] ? qe.create(e[t]) : null, t + 1] } var kt = RegExp("^T?" + yt.source + "$"), Tt = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/; function St(e) { function t(e, t) { return void 0 === t && (t = !1), void 0 !== e && (t || e && l) ? -e : e } var n = e[0], r = e[1], i = e[2], o = e[3], a = e[4], u = e[5], s = e[6], c = e[7], e = e[8], l = "-" === n[0], n = c && "-" === c[0]; return [{ years: t(ee(r)), months: t(ee(i)), weeks: t(ee(o)), days: t(ee(a)), hours: t(ee(u)), minutes: t(ee(s)), seconds: t(ee(c), "-0" === c), milliseconds: t(te(e), n) }] } var bt = { GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 }; function Ot(e, t, n, r, i, o, a) { o = { year: 2 === t.length ? se(X(t)) : X(t), month: pe.indexOf(n) + 1, day: X(r), hour: X(i), minute: X(o) }; return a && (o.second = X(a)), e && (o.weekday = 3 < e.length ? ke.indexOf(e) + 1 : Te.indexOf(e) + 1), o } var Mt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/; function Nt(e) { var t = e[1], n = e[2], r = e[3], i = e[4], o = e[5], a = e[6], u = e[7], s = e[8], c = e[9], l = e[10], e = e[11], u = Ot(t, i, r, n, o, a, u), e = s ? bt[s] : c ? 0 : le(l, e); return [u, new Ue(e)] } var Dt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Et = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Vt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/; function It(e) { var t = e[1], n = e[2], r = e[3]; return [Ot(t, e[4], r, n, e[5], e[6], e[7]), Ue.utcInstance] } function xt(e) { var t = e[1], n = e[2], r = e[3], i = e[4], o = e[5], a = e[6]; return [Ot(t, e[7], n, r, i, o, a), Ue.utcInstance] } var Ct = lt(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, w), Ft = lt(/(\d{4})-?W(\d\d)(?:-?(\d))?/, w), Zt = lt(/(\d{4})-?(\d{3})/, w), Lt = lt(n), At = ft(function (e, t) { return [{ year: vt(e, t), month: vt(e, t + 1, 1), day: vt(e, t + 2, 1) }, null, t + 3] }, pt, gt, wt), zt = ft(g, pt, gt, wt), jt = ft(S, pt, gt, wt), qt = ft(pt, gt, wt); var _t = ft(pt); var Ut = lt(/(\d{4})-(\d\d)-(\d\d)/, ye), Rt = lt(mt), Ht = ft(pt, gt, wt); var S = { weeks: { days: 7, hours: 168, minutes: 10080, seconds: 604800, milliseconds: 6048e5 }, days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 }, hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 }, minutes: { seconds: 60, milliseconds: 6e4 }, seconds: { milliseconds: 1e3 } }, Pt = s({ years: { quarters: 4, months: 12, weeks: 52, days: 365, hours: 8760, minutes: 525600, seconds: 31536e3, milliseconds: 31536e6 }, quarters: { months: 3, weeks: 13, days: 91, hours: 2184, minutes: 131040, seconds: 7862400, milliseconds: 78624e5 }, months: { weeks: 4, days: 30, hours: 720, minutes: 43200, seconds: 2592e3, milliseconds: 2592e6 } }, S), ye = 365.2425, mt = 30.436875, Wt = s({ years: { quarters: 4, months: 12, weeks: ye / 7, days: ye, hours: 24 * ye, minutes: 525949.2, seconds: 525949.2 * 60, milliseconds: 525949.2 * 60 * 1e3 }, quarters: { months: 3, weeks: ye / 28, days: ye / 4, hours: 24 * ye / 4, minutes: 131487.3, seconds: 525949.2 * 60 / 4, milliseconds: 7889237999.999999 }, months: { weeks: mt / 7, days: mt, hours: 24 * mt, minutes: 43829.1, seconds: 2629746, milliseconds: 2629746e3 } }, S), Jt = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"], Yt = Jt.slice(0).reverse(); function Gt(e, t, n) { e = { values: (n = void 0 === n ? !1 : n) ? t.values : s({}, e.values, t.values || {}), loc: e.loc.clone(t.loc), conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy }; return new Bt(e) } function $t(e, t, n, r, i) { var o = e[i][n], a = t[n] / o, a = !(Math.sign(a) === Math.sign(r[i])) && 0 !== r[i] && Math.abs(a) <= 1 ? (e = a) < 0 ? Math.floor(e) : Math.ceil(e) : Math.trunc(a); r[i] += a, t[n] -= a * o } var Bt = function () { function m(e) { var t = "longterm" === e.conversionAccuracy || !1; this.values = e.values, this.loc = e.loc || ct.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = t ? Wt : Pt, this.isLuxonDuration = !0 } m.fromMillis = function (e, t) { return m.fromObject({ milliseconds: e }, t) }, m.fromObject = function (e, t) { if (void 0 === t && (t = {}), null == e || "object" != typeof e) throw new p("Duration.fromObject: argument expected to be an object, got " + (null === e ? "null" : typeof e)); return new m({ values: de(e, m.normalizeUnit), loc: ct.fromObject(t), conversionAccuracy: t.conversionAccuracy }) }, m.fromDurationLike = function (e) { if (J(e)) return m.fromMillis(e); if (m.isDuration(e)) return e; if ("object" == typeof e) return m.fromObject(e); throw new p("Unknown duration argument " + e + " of type " + typeof e) }, m.fromISO = function (e, t) { var n = dt(e, [Tt, St])[0]; return n ? m.fromObject(n, t) : m.invalid("unparsable", 'the input "' + e + "\" can't be parsed as ISO 8601") }, m.fromISOTime = function (e, t) { var n = dt(e, [kt, _t])[0]; return n ? m.fromObject(n, t) : m.invalid("unparsable", 'the input "' + e + "\" can't be parsed as ISO 8601") }, m.invalid = function (e, t) { if (void 0 === t && (t = null), !e) throw new p("need to specify a reason the Duration is invalid"); t = e instanceof Ce ? e : new Ce(e, t); if (Be.throwOnInvalid) throw new y(t); return new m({ invalid: t }) }, m.normalizeUnit = function (e) { var t = { year: "years", years: "years", quarter: "quarters", quarters: "quarters", month: "months", months: "months", week: "weeks", weeks: "weeks", day: "days", days: "days", hour: "hours", hours: "hours", minute: "minutes", minutes: "minutes", second: "seconds", seconds: "seconds", millisecond: "milliseconds", milliseconds: "milliseconds" }[e && e.toLowerCase()]; if (!t) throw new v(e); return t }, m.isDuration = function (e) { return e && e.isLuxonDuration || !1 }; var e = m.prototype; return e.toFormat = function (e, t) { t = s({}, t = void 0 === t ? {} : t, { floor: !1 !== t.round && !1 !== t.floor }); return this.isValid ? xe.create(this.loc, t).formatDurationFromString(this, e) : "Invalid Duration" }, e.toHuman = function (n) { var r = this; void 0 === n && (n = {}); var e = Jt.map(function (e) { var t = r.values[e]; return W(t) ? null : r.loc.numberFormatter(s({ style: "unit", unitDisplay: "long" }, n, { unit: e.slice(0, -1) })).format(t) }).filter(function (e) { return e }); return this.loc.listFormatter(s({ type: "conjunction", style: n.listStyle || "narrow" }, n)).format(e) }, e.toObject = function () { return this.isValid ? s({}, this.values) : {} }, e.toISO = function () { if (!this.isValid) return null; var e = "P"; return 0 !== this.years && (e += this.years + "Y"), 0 === this.months && 0 === this.quarters || (e += this.months + 3 * this.quarters + "M"), 0 !== this.weeks && (e += this.weeks + "W"), 0 !== this.days && (e += this.days + "D"), 0 === this.hours && 0 === this.minutes && 0 === this.seconds && 0 === this.milliseconds || (e += "T"), 0 !== this.hours && (e += this.hours + "H"), 0 !== this.minutes && (e += this.minutes + "M"), 0 === this.seconds && 0 === this.milliseconds || (e += ne(this.seconds + this.milliseconds / 1e3, 3) + "S"), "P" === e && (e += "T0S"), e }, e.toISOTime = function (e) { if (void 0 === e && (e = {}), !this.isValid) return null; var t = this.toMillis(); if (t < 0 || 864e5 <= t) return null; e = s({ suppressMilliseconds: !1, suppressSeconds: !1, includePrefix: !1, format: "extended" }, e); var n = this.shiftTo("hours", "minutes", "seconds", "milliseconds"), t = "basic" === e.format ? "hhmm" : "hh:mm"; e.suppressSeconds && 0 === n.seconds && 0 === n.milliseconds || (t += "basic" === e.format ? "ss" : ":ss", e.suppressMilliseconds && 0 === n.milliseconds || (t += ".SSS")); t = n.toFormat(t); return t = e.includePrefix ? "T" + t : t }, e.toJSON = function () { return this.toISO() }, e.toString = function () { return this.toISO() }, e.toMillis = function () { return this.as("milliseconds") }, e.valueOf = function () { return this.toMillis() }, e.plus = function (e) { if (!this.isValid) return this; for (var t = m.fromDurationLike(e), n = {}, r = k(Jt); !(i = r()).done;) { var i = i.value; (B(t.values, i) || B(this.values, i)) && (n[i] = t.get(i) + this.get(i)) } return Gt(this, { values: n }, !0) }, e.minus = function (e) { if (!this.isValid) return this; e = m.fromDurationLike(e); return this.plus(e.negate()) }, e.mapUnits = function (e) { if (!this.isValid) return this; for (var t = {}, n = 0, r = Object.keys(this.values); n < r.length; n++) { var i = r[n]; t[i] = fe(e(this.values[i], i)) } return Gt(this, { values: t }, !0) }, e.get = function (e) { return this[m.normalizeUnit(e)] }, e.set = function (e) { return this.isValid ? Gt(this, { values: s({}, this.values, de(e, m.normalizeUnit)) }) : this }, e.reconfigure = function (e) { var t = void 0 === e ? {} : e, n = t.locale, e = t.numberingSystem, t = t.conversionAccuracy, e = { loc: this.loc.clone({ locale: n, numberingSystem: e }) }; return t && (e.conversionAccuracy = t), Gt(this, e) }, e.as = function (e) { return this.isValid ? this.shiftTo(e).get(e) : NaN }, e.normalize = function () { if (!this.isValid) return this; var n, r, e = this.toObject(); return n = this.matrix, r = e, Yt.reduce(function (e, t) { return W(r[t]) ? e : (e && $t(n, r, e, r, t), t) }, null), Gt(this, { values: e }, !0) }, e.shiftTo = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; if (!this.isValid) return this; if (0 === t.length) return this; for (var r, t = t.map(function (e) { return m.normalizeUnit(e) }), i = {}, o = {}, a = this.toObject(), u = k(Jt); !(h = u()).done;) { var s = h.value; if (0 <= t.indexOf(s)) { var c, l = s, f = 0; for (c in o) f += this.matrix[c][s] * o[c], o[c] = 0; J(a[s]) && (f += a[s]); var d, h = Math.trunc(f); for (d in i[s] = h, o[s] = (1e3 * f - 1e3 * h) / 1e3, a) Jt.indexOf(d) > Jt.indexOf(s) && $t(this.matrix, a, d, i, s) } else J(a[s]) && (o[s] = a[s]) } for (r in o) 0 !== o[r] && (i[l] += r === l ? o[r] : o[r] / this.matrix[l][r]); return Gt(this, { values: i }, !0).normalize() }, e.negate = function () { if (!this.isValid) return this; for (var e = {}, t = 0, n = Object.keys(this.values); t < n.length; t++) { var r = n[t]; e[r] = 0 === this.values[r] ? 0 : -this.values[r] } return Gt(this, { values: e }, !0) }, e.equals = function (e) { if (!this.isValid || !e.isValid) return !1; if (!this.loc.equals(e.loc)) return !1; for (var t, n = k(Jt); !(t = n()).done;) { var r = t.value; if (t = this.values[r], r = e.values[r], !(void 0 === t || 0 === t ? void 0 === r || 0 === r : t === r)) return !1 } return !0 }, o(m, [{ key: "locale", get: function () { return this.isValid ? this.loc.locale : null } }, { key: "numberingSystem", get: function () { return this.isValid ? this.loc.numberingSystem : null } }, { key: "years", get: function () { return this.isValid ? this.values.years || 0 : NaN } }, { key: "quarters", get: function () { return this.isValid ? this.values.quarters || 0 : NaN } }, { key: "months", get: function () { return this.isValid ? this.values.months || 0 : NaN } }, { key: "weeks", get: function () { return this.isValid ? this.values.weeks || 0 : NaN } }, { key: "days", get: function () { return this.isValid ? this.values.days || 0 : NaN } }, { key: "hours", get: function () { return this.isValid ? this.values.hours || 0 : NaN } }, { key: "minutes", get: function () { return this.isValid ? this.values.minutes || 0 : NaN } }, { key: "seconds", get: function () { return this.isValid ? this.values.seconds || 0 : NaN } }, { key: "milliseconds", get: function () { return this.isValid ? this.values.milliseconds || 0 : NaN } }, { key: "isValid", get: function () { return null === this.invalid } }, { key: "invalidReason", get: function () { return this.invalid ? this.invalid.reason : null } }, { key: "invalidExplanation", get: function () { return this.invalid ? this.invalid.explanation : null } }]), m }(), Qt = "Invalid Interval"; var Kt = function () { function c(e) { this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0 } c.invalid = function (e, t) { if (void 0 === t && (t = null), !e) throw new p("need to specify a reason the Interval is invalid"); t = e instanceof Ce ? e : new Ce(e, t); if (Be.throwOnInvalid) throw new h(t); return new c({ invalid: t }) }, c.fromDateTimes = function (e, t) { var n = nr(e), r = nr(t), e = (e = r, (t = n) && t.isValid ? e && e.isValid ? e < t ? Kt.invalid("end before start", "The end of an interval must be after its start, but you had start=" + t.toISO() + " and end=" + e.toISO()) : null : Kt.invalid("missing or invalid end") : Kt.invalid("missing or invalid start")); return null == e ? new c({ start: n, end: r }) : e }, c.after = function (e, t) { t = Bt.fromDurationLike(t), e = nr(e); return c.fromDateTimes(e, e.plus(t)) }, c.before = function (e, t) { t = Bt.fromDurationLike(t), e = nr(e); return c.fromDateTimes(e.minus(t), e) }, c.fromISO = function (e, t) { var n, r, i, o = (e || "").split("/", 2), a = o[0], u = o[1]; if (a && u) { try { s = (n = tr.fromISO(a, t)).isValid } catch (u) { s = !1 } try { i = (r = tr.fromISO(u, t)).isValid } catch (u) { i = !1 } if (s && i) return c.fromDateTimes(n, r); if (s) { var s = Bt.fromISO(u, t); if (s.isValid) return c.after(n, s) } else if (i) { t = Bt.fromISO(a, t); if (t.isValid) return c.before(r, t) } } return c.invalid("unparsable", 'the input "' + e + "\" can't be parsed as ISO 8601") }, c.isInterval = function (e) { return e && e.isLuxonInterval || !1 }; var e = c.prototype; return e.length = function (e) { return void 0 === e && (e = "milliseconds"), this.isValid ? this.toDuration.apply(this, [e]).get(e) : NaN }, e.count = function (e) { if (!this.isValid) return NaN; var t = this.start.startOf(e = void 0 === e ? "milliseconds" : e), n = this.end.startOf(e); return Math.floor(n.diff(t, e).get(e)) + 1 }, e.hasSame = function (e) { return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e)) }, e.isEmpty = function () { return this.s.valueOf() === this.e.valueOf() }, e.isAfter = function (e) { return !!this.isValid && this.s > e }, e.isBefore = function (e) { return !!this.isValid && this.e <= e }, e.contains = function (e) { return !!this.isValid && (this.s <= e && this.e > e) }, e.set = function (e) { var t = void 0 === e ? {} : e, e = t.start, t = t.end; return this.isValid ? c.fromDateTimes(e || this.s, t || this.e) : this }, e.splitAt = function () { var t = this; if (!this.isValid) return []; for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)n[r] = arguments[r]; for (var i = n.map(nr).filter(function (e) { return t.contains(e) }).sort(), o = [], a = this.s, u = 0; a < this.e;) { var s = i[u] || this.e, s = +s > +this.e ? this.e : s; o.push(c.fromDateTimes(a, s)), a = s, u += 1 } return o }, e.splitBy = function (e) { var t = Bt.fromDurationLike(e); if (!this.isValid || !t.isValid || 0 === t.as("milliseconds")) return []; for (var n = this.s, r = 1, i = []; n < this.e;) { var o = this.start.plus(t.mapUnits(function (e) { return e * r })), o = +o > +this.e ? this.e : o; i.push(c.fromDateTimes(n, o)), n = o, r += 1 } return i }, e.divideEqually = function (e) { return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [] }, e.overlaps = function (e) { return this.e > e.s && this.s < e.e }, e.abutsStart = function (e) { return !!this.isValid && +this.e == +e.s }, e.abutsEnd = function (e) { return !!this.isValid && +e.e == +this.s }, e.engulfs = function (e) { return !!this.isValid && (this.s <= e.s && this.e >= e.e) }, e.equals = function (e) { return !(!this.isValid || !e.isValid) && (this.s.equals(e.s) && this.e.equals(e.e)) }, e.intersection = function (e) { if (!this.isValid) return this; var t = (this.s > e.s ? this : e).s, e = (this.e < e.e ? this : e).e; return e <= t ? null : c.fromDateTimes(t, e) }, e.union = function (e) { if (!this.isValid) return this; var t = (this.s < e.s ? this : e).s, e = (this.e > e.e ? this : e).e; return c.fromDateTimes(t, e) }, c.merge = function (e) { var t = e.sort(function (e, t) { return e.s - t.s }).reduce(function (e, t) { var n = e[0], e = e[1]; return e ? e.overlaps(t) || e.abutsStart(t) ? [n, e.union(t)] : [n.concat([e]), t] : [n, t] }, [[], null]), e = t[0], t = t[1]; return t && e.push(t), e }, c.xor = function (e) { for (var t = null, n = 0, r = [], i = e.map(function (e) { return [{ time: e.s, type: "s" }, { time: e.e, type: "e" }] }), o = k((e = Array.prototype).concat.apply(e, i).sort(function (e, t) { return e.time - t.time })); !(a = o()).done;)var a = a.value, t = 1 === (n += "s" === a.type ? 1 : -1) ? a.time : (t && +t != +a.time && r.push(c.fromDateTimes(t, a.time)), null); return c.merge(r) }, e.difference = function () { for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++)n[r] = arguments[r]; return c.xor([this].concat(n)).map(function (e) { return t.intersection(e) }).filter(function (e) { return e && !e.isEmpty() }) }, e.toString = function () { return this.isValid ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")" : Qt }, e.toISO = function (e) { return this.isValid ? this.s.toISO(e) + "/" + this.e.toISO(e) : Qt }, e.toISODate = function () { return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : Qt }, e.toISOTime = function (e) { return this.isValid ? this.s.toISOTime(e) + "/" + this.e.toISOTime(e) : Qt }, e.toFormat = function (e, t) { t = (void 0 === t ? {} : t).separator, t = void 0 === t ? " – " : t; return this.isValid ? "" + this.s.toFormat(e) + t + this.e.toFormat(e) : Qt }, e.toDuration = function (e, t) { return this.isValid ? this.e.diff(this.s, e, t) : Bt.invalid(this.invalidReason) }, e.mapEndpoints = function (e) { return c.fromDateTimes(e(this.s), e(this.e)) }, o(c, [{ key: "start", get: function () { return this.isValid ? this.s : null } }, { key: "end", get: function () { return this.isValid ? this.e : null } }, { key: "isValid", get: function () { return null === this.invalidReason } }, { key: "invalidReason", get: function () { return this.invalid ? this.invalid.reason : null } }, { key: "invalidExplanation", get: function () { return this.invalid ? this.invalid.explanation : null } }]), c }(), Xt = function () { function e() { } return e.hasDST = function (e) { void 0 === e && (e = Be.defaultZone); var t = tr.now().setZone(e).set({ month: 12 }); return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset }, e.isValidIANAZone = function (e) { return qe.isValidZone(e) }, e.normalizeZone = function (e) { return He(e, Be.defaultZone) }, e.months = function (e, t) { void 0 === e && (e = "long"); var n = void 0 === t ? {} : t, r = n.locale, i = n.numberingSystem, t = n.locObj, t = void 0 === t ? null : t, n = n.outputCalendar; return (t || ct.create(void 0 === r ? null : r, void 0 === i ? null : i, void 0 === n ? "gregory" : n)).months(e) }, e.monthsFormat = function (e, t) { void 0 === e && (e = "long"); var n = void 0 === t ? {} : t, r = n.locale, i = n.numberingSystem, t = n.locObj, t = void 0 === t ? null : t, n = n.outputCalendar; return (t || ct.create(void 0 === r ? null : r, void 0 === i ? null : i, void 0 === n ? "gregory" : n)).months(e, !0) }, e.weekdays = function (e, t) { void 0 === e && (e = "long"); var n = void 0 === t ? {} : t, r = n.locale, t = n.numberingSystem, n = n.locObj; return ((void 0 === n ? null : n) || ct.create(void 0 === r ? null : r, void 0 === t ? null : t, null)).weekdays(e) }, e.weekdaysFormat = function (e, t) { void 0 === e && (e = "long"); var n = void 0 === t ? {} : t, r = n.locale, t = n.numberingSystem, n = n.locObj; return ((void 0 === n ? null : n) || ct.create(void 0 === r ? null : r, void 0 === t ? null : t, null)).weekdays(e, !0) }, e.meridiems = function (e) { e = (void 0 === e ? {} : e).locale; return ct.create(void 0 === e ? null : e).meridiems() }, e.eras = function (e, t) { void 0 === e && (e = "short"); t = (void 0 === t ? {} : t).locale; return ct.create(void 0 === t ? null : t, null, "gregory").eras(e) }, e.features = function () { return { relative: G() } }, e }(); function en(e, t) { function n(e) { return e.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf() } e = n(t) - n(e); return Math.floor(Bt.fromMillis(e).as("days")) } function tn(e, t, n, r) { var i = function (e, t, n) { for (var r = {}, i = 0, o = [["years", function (e, t) { return t.year - e.year }], ["quarters", function (e, t) { return t.quarter - e.quarter }], ["months", function (e, t) { return t.month - e.month + 12 * (t.year - e.year) }], ["weeks", function (e, t) { t = en(e, t); return (t - t % 7) / 7 }], ["days", en]]; i < o.length; i++) { var a, u, s = o[i], c = s[0], l = s[1]; 0 <= n.indexOf(c) && (a = c, s = l(e, t), t < (u = e.plus(((l = {})[c] = s, l))) ? (e = e.plus(((l = {})[c] = s - 1, l)), --s) : e = u, r[c] = s) } return [e, r, u, a] }(e, t, n), o = i[0], a = i[1], u = i[2], e = i[3], i = t - o, n = n.filter(function (e) { return 0 <= ["hours", "minutes", "seconds", "milliseconds"].indexOf(e) }); 0 === n.length && (u = u < t ? o.plus(((t = {})[e] = 1, t)) : u) !== o && (a[e] = (a[e] || 0) + i / (u - o)); a = Bt.fromObject(a, r); return 0 < n.length ? (r = Bt.fromMillis(i, r)).shiftTo.apply(r, n).plus(a) : a } var nn = { arab: "[٠-٩]", arabext: "[۰-۹]", bali: "[᭐-᭙]", beng: "[০-৯]", deva: "[०-९]", fullwide: "[０-９]", gujr: "[૦-૯]", hanidec: "[〇|一|二|三|四|五|六|七|八|九]", khmr: "[០-៩]", knda: "[೦-೯]", laoo: "[໐-໙]", limb: "[᥆-᥏]", mlym: "[൦-൯]", mong: "[᠐-᠙]", mymr: "[၀-၉]", orya: "[୦-୯]", tamldec: "[௦-௯]", telu: "[౦-౯]", thai: "[๐-๙]", tibt: "[༠-༩]", latn: "\\d" }, rn = { arab: [1632, 1641], arabext: [1776, 1785], bali: [6992, 7001], beng: [2534, 2543], deva: [2406, 2415], fullwide: [65296, 65303], gujr: [2790, 2799], khmr: [6112, 6121], knda: [3302, 3311], laoo: [3792, 3801], limb: [6470, 6479], mlym: [3430, 3439], mong: [6160, 6169], mymr: [4160, 4169], orya: [2918, 2927], tamldec: [3046, 3055], telu: [3174, 3183], thai: [3664, 3673], tibt: [3872, 3881] }, on = nn.hanidec.replace(/[\[|\]]/g, "").split(""); function an(e, t) { e = e.numberingSystem; return void 0 === t && (t = ""), new RegExp("" + nn[e || "latn"] + t) } var un = "missing Intl.DateTimeFormat.formatToParts support"; function sn(e, t) { return void 0 === t && (t = function (e) { return e }), { regex: e, deser: function (e) { e = e[0]; return t(function (e) { var t = parseInt(e, 10); if (isNaN(t)) { for (var t = "", n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (-1 !== e[n].search(nn.hanidec)) t += on.indexOf(e[n]); else for (var i in rn) { var o = rn[i], i = o[0], o = o[1]; i <= r && r <= o && (t += r - i) } } return parseInt(t, 10) } return t }(e)) } } } var cn = "[ " + String.fromCharCode(160) + "]", ln = new RegExp(cn, "g"); function fn(e) { return e.replace(/\./g, "\\.?").replace(ln, cn) } function dn(e) { return e.replace(/\./g, "").replace(ln, " ").toLowerCase() } function hn(n, r) { return null === n ? null : { regex: RegExp(n.map(fn).join("|")), deser: function (e) { var t = e[0]; return n.findIndex(function (e) { return dn(t) === dn(e) }) + r } } } function mn(e, t) { return { regex: e, deser: function (e) { return le(e[1], e[2]) }, groups: t } } function yn(e) { return { regex: e, deser: function (e) { return e[0] } } } function vn(t, n) { function r(e) { return { regex: RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")), deser: function (e) { return e[0] }, literal: !0 } } var i = an(n), o = an(n, "{2}"), a = an(n, "{3}"), u = an(n, "{4}"), s = an(n, "{6}"), c = an(n, "{1,2}"), l = an(n, "{1,3}"), f = an(n, "{1,6}"), d = an(n, "{1,9}"), h = an(n, "{2,4}"), m = an(n, "{4,6}"), e = function (e) { if (t.literal) return r(e); switch (e.val) { case "G": return hn(n.eras("short", !1), 0); case "GG": return hn(n.eras("long", !1), 0); case "y": return sn(f); case "yy": return sn(h, se); case "yyyy": return sn(u); case "yyyyy": return sn(m); case "yyyyyy": return sn(s); case "M": return sn(c); case "MM": return sn(o); case "MMM": return hn(n.months("short", !0, !1), 1); case "MMMM": return hn(n.months("long", !0, !1), 1); case "L": return sn(c); case "LL": return sn(o); case "LLL": return hn(n.months("short", !1, !1), 1); case "LLLL": return hn(n.months("long", !1, !1), 1); case "d": return sn(c); case "dd": return sn(o); case "o": return sn(l); case "ooo": return sn(a); case "HH": return sn(o); case "H": return sn(c); case "hh": return sn(o); case "h": return sn(c); case "mm": return sn(o); case "m": case "q": return sn(c); case "qq": return sn(o); case "s": return sn(c); case "ss": return sn(o); case "S": return sn(l); case "SSS": return sn(a); case "u": return yn(d); case "uu": return yn(c); case "uuu": return sn(i); case "a": return hn(n.meridiems(), 0); case "kkkk": return sn(u); case "kk": return sn(h, se); case "W": return sn(c); case "WW": return sn(o); case "E": case "c": return sn(i); case "EEE": return hn(n.weekdays("short", !1, !1), 1); case "EEEE": return hn(n.weekdays("long", !1, !1), 1); case "ccc": return hn(n.weekdays("short", !0, !1), 1); case "cccc": return hn(n.weekdays("long", !0, !1), 1); case "Z": case "ZZ": return mn(new RegExp("([+-]" + c.source + ")(?::(" + o.source + "))?"), 2); case "ZZZ": return mn(new RegExp("([+-]" + c.source + ")(" + o.source + ")?"), 2); case "z": return yn(/[a-z_+-/]{1,256}?/i); default: return r(e) } }(t) || { invalidReason: un }; return e.token = t, e } var pn = { year: { "2-digit": "yy", numeric: "yyyyy" }, month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" }, day: { numeric: "d", "2-digit": "dd" }, weekday: { short: "EEE", long: "EEEE" }, dayperiod: "a", dayPeriod: "a", hour: { numeric: "h", "2-digit": "hh" }, minute: { numeric: "m", "2-digit": "mm" }, second: { numeric: "s", "2-digit": "ss" } }; var gn = null; function wn(e, t) { if (e.literal) return e; var i = xe.macroTokenToFormatOpts(e.val); if (!i) return e; t = xe.create(t, i).formatDateTimeParts(gn = gn || tr.fromMillis(1555555555555)).map(function (e) { return n = i, r = (t = e).type, t = e.value, "literal" === r ? { literal: !0, val: t } : (n = n[r], (r = "object" == typeof (r = pn[r]) ? r[n] : r) ? { literal: !1, val: r } : void 0); var t, n, r }); return t.includes(void 0) ? e : t } function kn(t, e, n) { var r, i = (u = xe.parseFormat(n), r = t, (s = Array.prototype).concat.apply(s, u.map(function (e) { return wn(e, r) }))), o = i.map(function (e) { return vn(e, t) }), n = o.find(function (e) { return e.invalidReason }); if (n) return { input: e, tokens: i, invalidReason: n.invalidReason }; var a, u = ["^" + (s = o).map(function (e) { return e.regex }).reduce(function (e, t) { return e + "(" + t.source + ")" }, "") + "$", s], n = u[1], o = RegExp(u[0], "i"), s = function (e, t, n) { var r = e.match(t); if (r) { var i, o, a, u = {}, s = 1; for (i in n) B(n, i) && (a = (o = n[i]).groups ? o.groups + 1 : 1, !o.literal && o.token && (u[o.token.val[0]] = o.deser(r.slice(s, s + a))), s += a); return [r, u] } return [r, {}] }(e, o, n), u = s[0], n = s[1], s = n ? (c = null, W((a = n).z) || (c = qe.create(a.z)), W(a.Z) || (c = c || new Ue(a.Z), l = a.Z), W(a.q) || (a.M = 3 * (a.q - 1) + 1), W(a.h) || (a.h < 12 && 1 === a.a ? a.h += 12 : 12 === a.h && 0 === a.a && (a.h = 0)), 0 === a.G && a.y && (a.y = -a.y), W(a.u) || (a.S = te(a.u)), [Object.keys(a).reduce(function (e, t) { var n = function (e) { switch (e) { case "S": return "millisecond"; case "s": return "second"; case "m": return "minute"; case "h": case "H": return "hour"; case "d": return "day"; case "o": return "ordinal"; case "L": case "M": return "month"; case "y": return "year"; case "E": case "c": return "weekday"; case "W": return "weekNumber"; case "k": return "weekYear"; case "q": return "quarter"; default: return null } }(t); return n && (e[n] = a[t]), e }, {}), c, l]) : [null, null, void 0], c = s[0], l = s[1], s = s[2]; if (B(n, "a") && B(n, "H")) throw new T("Can't include meridiem when specifying 24-hour format"); return { input: e, tokens: i, regex: o, rawMatches: u, matches: n, result: c, zone: l, specificOffset: s } } var Tn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Sn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]; function bn(e, t) { return new Ce("unit out of range", "you specified " + t + " (of type " + typeof t + ") as a " + e + ", which is invalid") } function On(e, t, n) { n = new Date(Date.UTC(e, t - 1, n)); e < 100 && 0 <= e && n.setUTCFullYear(n.getUTCFullYear() - 1900); n = n.getUTCDay(); return 0 === n ? 7 : n } function Mn(e, t, n) { return n + (re(e) ? Sn : Tn)[t - 1] } function Nn(e, t) { var n = re(e) ? Sn : Tn, e = n.findIndex(function (e) { return e < t }); return { month: e + 1, day: t - n[e] } } function Dn(e) { var t, n = e.year, r = e.month, i = e.day, o = Mn(n, r, i), i = On(n, r, i), o = Math.floor((o - i + 10) / 7); return o < 1 ? o = ue(t = n - 1) : o > ue(n) ? (t = n + 1, o = 1) : t = n, s({ weekYear: t, weekNumber: o, weekday: i }, me(e)) } function En(e) { var t, n = e.weekYear, r = e.weekNumber, i = e.weekday, o = On(n, 1, 4), a = ie(n), o = 7 * r + i - o - 3; o < 1 ? o += ie(t = n - 1) : a < o ? (t = n + 1, o -= ie(n)) : t = n; o = Nn(t, o); return s({ year: t, month: o.month, day: o.day }, me(e)) } function Vn(e) { var t = e.year; return s({ year: t, ordinal: Mn(t, e.month, e.day) }, me(e)) } function In(e) { var t = e.year, n = Nn(t, e.ordinal); return s({ year: t, month: n.month, day: n.day }, me(e)) } function xn(e) { var t = Y(e.year), n = Q(e.month, 1, 12), r = Q(e.day, 1, oe(e.year, e.month)); return t ? n ? !r && bn("day", e.day) : bn("month", e.month) : bn("year", e.year) } function Cn(e) { var t = e.hour, n = e.minute, r = e.second, i = e.millisecond, o = Q(t, 0, 23) || 24 === t && 0 === n && 0 === r && 0 === i, a = Q(n, 0, 59), u = Q(r, 0, 59), e = Q(i, 0, 999); return o ? a ? u ? !e && bn("millisecond", i) : bn("second", r) : bn("minute", n) : bn("hour", t) } var Fn = "Invalid DateTime"; function Zn(e) { return new Ce("unsupported zone", 'the zone "' + e.name + '" is not supported') } function Ln(e) { return null === e.weekData && (e.weekData = Dn(e.c)), e.weekData } function An(e, t) { e = { ts: e.ts, zone: e.zone, c: e.c, o: e.o, loc: e.loc, invalid: e.invalid }; return new tr(s({}, e, t, { old: e })) } function zn(e, t, n) { var r = e - 60 * t * 1e3, i = n.offset(r); if (t === i) return [r, t]; t = n.offset(r -= 60 * (i - t) * 1e3); return i === t ? [r, i] : [e - 60 * Math.min(i, t) * 1e3, Math.max(i, t)] } function jn(e, t) { e += 60 * t * 1e3; e = new Date(e); return { year: e.getUTCFullYear(), month: e.getUTCMonth() + 1, day: e.getUTCDate(), hour: e.getUTCHours(), minute: e.getUTCMinutes(), second: e.getUTCSeconds(), millisecond: e.getUTCMilliseconds() } } function qn(e, t, n) { return zn(ae(e), t, n) } function _n(e, t) { var n = e.o, r = e.c.year + Math.trunc(t.years), i = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters), i = s({}, e.c, { year: r, month: i, day: Math.min(e.c.day, oe(r, i)) + Math.trunc(t.days) + 7 * Math.trunc(t.weeks) }), t = Bt.fromObject({ years: t.years - Math.trunc(t.years), quarters: t.quarters - Math.trunc(t.quarters), months: t.months - Math.trunc(t.months), weeks: t.weeks - Math.trunc(t.weeks), days: t.days - Math.trunc(t.days), hours: t.hours, minutes: t.minutes, seconds: t.seconds, milliseconds: t.milliseconds }).as("milliseconds"), i = zn(ae(i), n, e.zone), n = i[0], i = i[1]; return 0 !== t && (i = e.zone.offset(n += t)), { ts: n, o: i } } function Un(e, t, n, r, i, o) { var a = n.setZone, u = n.zone; if (e && 0 !== Object.keys(e).length) { o = tr.fromObject(e, s({}, n, { zone: t || u, specificOffset: o })); return a ? o : o.setZone(u) } return tr.invalid(new Ce("unparsable", 'the input "' + i + "\" can't be parsed as " + r)) } function Rn(e, t, n) { return void 0 === n && (n = !0), e.isValid ? xe.create(ct.create("en-US"), { allowZ: n, forceSimple: !0 }).formatDateTimeFromString(e, t) : null } function Hn(e, t) { var n = 9999 < e.c.year || e.c.year < 0, r = ""; return n && 0 <= e.c.year && (r += "+"), r += K(e.c.year, n ? 6 : 4), t ? (r += "-", r += K(e.c.month), r += "-") : r += K(e.c.month), r += K(e.c.day) } function Pn(e, t, n, r, i, o) { var a = K(e.c.hour); return t ? (a += ":", a += K(e.c.minute), 0 === e.c.second && n || (a += ":")) : a += K(e.c.minute), 0 === e.c.second && n || (a += K(e.c.second), 0 === e.c.millisecond && r || (a += ".", a += K(e.c.millisecond, 3))), i && (e.isOffsetFixed && 0 === e.offset && !o ? a += "Z" : e.o < 0 ? (a += "-", a += K(Math.trunc(-e.o / 60)), a += ":", a += K(Math.trunc(-e.o % 60))) : (a += "+", a += K(Math.trunc(e.o / 60)), a += ":", a += K(Math.trunc(e.o % 60)))), o && (a += "[" + e.zone.ianaName + "]"), a } var Wn = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, Jn = { weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, Yn = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, Gn = ["year", "month", "day", "hour", "minute", "second", "millisecond"], $n = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"], Bn = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; function Qn(e) { var t = { year: "year", years: "year", month: "month", months: "month", day: "day", days: "day", hour: "hour", hours: "hour", minute: "minute", minutes: "minute", quarter: "quarter", quarters: "quarter", second: "second", seconds: "second", millisecond: "millisecond", milliseconds: "millisecond", weekday: "weekday", weekdays: "weekday", weeknumber: "weekNumber", weeksnumber: "weekNumber", weeknumbers: "weekNumber", weekyear: "weekYear", weekyears: "weekYear", ordinal: "ordinal" }[e.toLowerCase()]; if (!t) throw new v(e); return t } function Kn(e, t) { var n = He(t.zone, Be.defaultZone), r = ct.fromObject(t), t = Be.now(); if (W(e.year)) u = t; else { for (var i = k(Gn); !(o = i()).done;) { var o = o.value; W(e[o]) && (e[o] = Wn[o]) } var a = xn(e) || Cn(e); if (a) return tr.invalid(a); var a = qn(e, n.offset(t), n), u = a[0], a = a[1] } return new tr({ ts: u, zone: n, loc: r, o: a }) } function Xn(t, n, r) { function e(e, t) { return e = ne(e, o || r.calendary ? 0 : 2, !0), n.loc.clone(r).relFormatter(r).format(e, t) } function i(e) { return r.calendary ? n.hasSame(t, e) ? 0 : n.startOf(e).diff(t.startOf(e), e).get(e) : n.diff(t, e).get(e) } var o = !!W(r.round) || r.round; if (r.unit) return e(i(r.unit), r.unit); for (var a = k(r.units); !(s = a()).done;) { var u = s.value, s = i(u); if (1 <= Math.abs(s)) return e(s, u) } return e(n < t ? -0 : 0, r.units[r.units.length - 1]) } function er(e) { var t = {}, e = 0 < e.length && "object" == typeof e[e.length - 1] ? (t = e[e.length - 1], Array.from(e).slice(0, e.length - 1)) : Array.from(e); return [t, e] } var tr = function () { function w(e) { var t = e.zone || Be.defaultZone, n = e.invalid || (Number.isNaN(e.ts) ? new Ce("invalid input") : null) || (t.isValid ? null : Zn(t)); this.ts = W(e.ts) ? Be.now() : e.ts; var r, i = null, o = null; n || (o = e.old && e.old.ts === this.ts && e.old.zone.equals(t) ? (i = (r = [e.old.c, e.old.o])[0], r[1]) : (r = t.offset(this.ts), i = jn(this.ts, r), i = (n = Number.isNaN(i.year) ? new Ce("invalid input") : null) ? null : i, n ? null : r)), this._zone = t, this.loc = e.loc || ct.create(), this.invalid = n, this.weekData = null, this.c = i, this.o = o, this.isLuxonDateTime = !0 } w.now = function () { return new w({}) }, w.local = function () { var e = er(arguments), t = e[0], e = e[1]; return Kn({ year: e[0], month: e[1], day: e[2], hour: e[3], minute: e[4], second: e[5], millisecond: e[6] }, t) }, w.utc = function () { var e = er(arguments), t = e[0], n = e[1], r = n[0], i = n[1], o = n[2], a = n[3], u = n[4], e = n[5], n = n[6]; return t.zone = Ue.utcInstance, Kn({ year: r, month: i, day: o, hour: a, minute: u, second: e, millisecond: n }, t) }, w.fromJSDate = function (e, t) { void 0 === t && (t = {}); var n = "[object Date]" === Object.prototype.toString.call(e) ? e.valueOf() : NaN; if (Number.isNaN(n)) return w.invalid("invalid input"); e = He(t.zone, Be.defaultZone); return e.isValid ? new w({ ts: n, zone: e, loc: ct.fromObject(t) }) : w.invalid(Zn(e)) }, w.fromMillis = function (e, t) { if (void 0 === t && (t = {}), J(e)) return e < -864e13 || 864e13 < e ? w.invalid("Timestamp out of range") : new w({ ts: e, zone: He(t.zone, Be.defaultZone), loc: ct.fromObject(t) }); throw new p("fromMillis requires a numerical input, but received a " + typeof e + " with value " + e) }, w.fromSeconds = function (e, t) { if (void 0 === t && (t = {}), J(e)) return new w({ ts: 1e3 * e, zone: He(t.zone, Be.defaultZone), loc: ct.fromObject(t) }); throw new p("fromSeconds requires a numerical input") }, w.fromObject = function (e, t) { e = e || {}; var n = He((t = void 0 === t ? {} : t).zone, Be.defaultZone); if (!n.isValid) return w.invalid(Zn(n)); var r = Be.now(), i = W(t.specificOffset) ? n.offset(r) : t.specificOffset, o = de(e, Qn), a = !W(o.ordinal), u = !W(o.year), s = !W(o.month) || !W(o.day), c = u || s, u = o.weekYear || o.weekNumber, t = ct.fromObject(t); if ((c || a) && u) throw new T("Can't mix weekYear/weekNumber units with year/month/day or ordinals"); if (s && a) throw new T("Can't mix ordinal dates with month/day"); var l, u = u || o.weekday && !c, f = jn(r, i); u ? (v = $n, l = Jn, f = Dn(f)) : a ? (v = Bn, l = Yn, f = Vn(f)) : (v = Gn, l = Wn); for (var d = !1, h = k(v); !(m = h()).done;) { var m = m.value; W(o[m]) ? o[m] = (d ? l : f)[m] : d = !0 } var y, v, p, g = (u ? (r = Y((y = o).weekYear), v = Q(y.weekNumber, 1, ue(y.weekYear)), p = Q(y.weekday, 1, 7), r ? v ? !p && bn("weekday", y.weekday) : bn("week", y.week) : bn("weekYear", y.weekYear)) : a ? (p = Y((g = o).year), y = Q(g.ordinal, 1, ie(g.year)), p ? !y && bn("ordinal", g.ordinal) : bn("year", g.year)) : xn(o)) || Cn(o); if (g) return w.invalid(g); i = qn(u ? En(o) : a ? In(o) : o, i, n), t = new w({ ts: i[0], zone: n, o: i[1], loc: t }); return o.weekday && c && e.weekday !== t.weekday ? w.invalid("mismatched weekday", "you can't specify both a weekday of " + o.weekday + " and a date of " + t.toISO()) : t }, w.fromISO = function (e, t) { void 0 === t && (t = {}); var n = dt(e, [Ct, At], [Ft, zt], [Zt, jt], [Lt, qt]); return Un(n[0], n[1], t, "ISO 8601", e) }, w.fromRFC2822 = function (e, t) { void 0 === t && (t = {}); var n = dt(e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim(), [Mt, Nt]); return Un(n[0], n[1], t, "RFC 2822", e) }, w.fromHTTP = function (e, t) { void 0 === t && (t = {}); e = dt(e, [Dt, It], [Et, It], [Vt, xt]); return Un(e[0], e[1], t, "HTTP", t) }, w.fromFormat = function (e, t, n) { if (void 0 === n && (n = {}), W(e) || W(t)) throw new p("fromFormat requires an input string and a format"); var r = n, i = r.locale, o = r.numberingSystem, a = ct.fromOpts({ locale: void 0 === i ? null : i, numberingSystem: void 0 === o ? null : o, defaultToEN: !0 }), i = [(r = kn(a, e, r = t)).result, r.zone, r.specificOffset, r.invalidReason], o = i[0], a = i[1], r = i[2], i = i[3]; return i ? w.invalid(i) : Un(o, a, n, "format " + t, e, r) }, w.fromString = function (e, t, n) { return w.fromFormat(e, t, n = void 0 === n ? {} : n) }, w.fromSQL = function (e, t) { void 0 === t && (t = {}); var n = dt(e, [Ut, At], [Rt, Ht]); return Un(n[0], n[1], t, "SQL", e) }, w.invalid = function (e, t) { if (void 0 === t && (t = null), !e) throw new p("need to specify a reason the DateTime is invalid"); t = e instanceof Ce ? e : new Ce(e, t); if (Be.throwOnInvalid) throw new d(t); return new w({ invalid: t }) }, w.isDateTime = function (e) { return e && e.isLuxonDateTime || !1 }; var e = w.prototype; return e.get = function (e) { return this[e] }, e.resolvedLocaleOptions = function (e) { e = xe.create(this.loc.clone(e = void 0 === e ? {} : e), e).resolvedOptions(this); return { locale: e.locale, numberingSystem: e.numberingSystem, outputCalendar: e.calendar } }, e.toUTC = function (e, t) { return void 0 === t && (t = {}), this.setZone(Ue.instance(e = void 0 === e ? 0 : e), t) }, e.toLocal = function () { return this.setZone(Be.defaultZone) }, e.setZone = function (e, t) { var n = void 0 === t ? {} : t, r = n.keepLocalTime, t = void 0 !== r && r, r = n.keepCalendarTime, n = void 0 !== r && r; if ((e = He(e, Be.defaultZone)).equals(this.zone)) return this; if (e.isValid) { r = this.ts; return (t || n) && (n = e.offset(this.ts), r = qn(this.toObject(), n, e)[0]), An(this, { ts: r, zone: e }) } return w.invalid(Zn(e)) }, e.reconfigure = function (e) { var t = void 0 === e ? {} : e, n = t.locale, e = t.numberingSystem, t = t.outputCalendar, t = this.loc.clone({ locale: n, numberingSystem: e, outputCalendar: t }); return An(this, { loc: t }) }, e.setLocale = function (e) { return this.reconfigure({ locale: e }) }, e.set = function (e) { if (!this.isValid) return this; var t = de(e, Qn), n = !W(t.weekYear) || !W(t.weekNumber) || !W(t.weekday), r = !W(t.ordinal), i = !W(t.year), o = !W(t.month) || !W(t.day), e = t.weekYear || t.weekNumber; if ((i || o || r) && e) throw new T("Can't mix weekYear/weekNumber units with year/month/day or ordinals"); if (o && r) throw new T("Can't mix ordinal dates with month/day"); n ? a = En(s({}, Dn(this.c), t)) : W(t.ordinal) ? (a = s({}, this.toObject(), t), W(t.day) && (a.day = Math.min(oe(a.year, a.month), a.day))) : a = In(s({}, Vn(this.c), t)); var a = qn(a, this.o, this.zone); return An(this, { ts: a[0], o: a[1] }) }, e.plus = function (e) { return this.isValid ? An(this, _n(this, Bt.fromDurationLike(e))) : this }, e.minus = function (e) { return this.isValid ? An(this, _n(this, Bt.fromDurationLike(e).negate())) : this }, e.startOf = function (e) { if (!this.isValid) return this; var t = {}, e = Bt.normalizeUnit(e); switch (e) { case "years": t.month = 1; case "quarters": case "months": t.day = 1; case "weeks": case "days": t.hour = 0; case "hours": t.minute = 0; case "minutes": t.second = 0; case "seconds": t.millisecond = 0 }return "weeks" === e && (t.weekday = 1), "quarters" === e && (e = Math.ceil(this.month / 3), t.month = 3 * (e - 1) + 1), this.set(t) }, e.endOf = function (e) { var t; return this.isValid ? this.plus(((t = {})[e] = 1, t)).startOf(e).minus(1) : this }, e.toFormat = function (e, t) { return void 0 === t && (t = {}), this.isValid ? xe.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : Fn }, e.toLocaleString = function (e, t) { return void 0 === e && (e = b), void 0 === t && (t = {}), this.isValid ? xe.create(this.loc.clone(t), e).formatDateTime(this) : Fn }, e.toLocaleParts = function (e) { return void 0 === e && (e = {}), this.isValid ? xe.create(this.loc.clone(e), e).formatDateTimeParts(this) : [] }, e.toISO = function (e) { var t = void 0 === e ? {} : e, n = t.format, r = t.suppressSeconds, i = void 0 !== r && r, o = t.suppressMilliseconds, e = void 0 !== o && o, r = t.includeOffset, o = void 0 === r || r, r = t.extendedZone, t = void 0 !== r && r; if (!this.isValid) return null; r = "extended" === (void 0 === n ? "extended" : n), n = Hn(this, r); return n += "T", n += Pn(this, r, i, e, o, t) }, e.toISODate = function (e) { e = (void 0 === e ? {} : e).format; return this.isValid ? Hn(this, "extended" === (void 0 === e ? "extended" : e)) : null }, e.toISOWeekDate = function () { return Rn(this, "kkkk-'W'WW-c") }, e.toISOTime = function (e) { var t = void 0 === e ? {} : e, n = t.suppressMilliseconds, r = t.suppressSeconds, i = t.includeOffset, o = t.includePrefix, e = t.extendedZone, t = t.format; return this.isValid ? (void 0 !== o && o ? "T" : "") + Pn(this, "extended" === (void 0 === t ? "extended" : t), void 0 !== r && r, void 0 !== n && n, void 0 === i || i, void 0 !== e && e) : null }, e.toRFC2822 = function () { return Rn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1) }, e.toHTTP = function () { return Rn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'") }, e.toSQLDate = function () { return this.isValid ? Hn(this, !0) : null }, e.toSQLTime = function (e) { var t = void 0 === e ? {} : e, n = t.includeOffset, r = void 0 === n || n, e = t.includeZone, n = void 0 !== e && e, e = t.includeOffsetSpace, t = "HH:mm:ss.SSS"; return (n || r) && ((void 0 === e || e) && (t += " "), n ? t += "z" : r && (t += "ZZ")), Rn(this, t, !0) }, e.toSQL = function (e) { return void 0 === e && (e = {}), this.isValid ? this.toSQLDate() + " " + this.toSQLTime(e) : null }, e.toString = function () { return this.isValid ? this.toISO() : Fn }, e.valueOf = function () { return this.toMillis() }, e.toMillis = function () { return this.isValid ? this.ts : NaN }, e.toSeconds = function () { return this.isValid ? this.ts / 1e3 : NaN }, e.toUnixInteger = function () { return this.isValid ? Math.floor(this.ts / 1e3) : NaN }, e.toJSON = function () { return this.toISO() }, e.toBSON = function () { return this.toJSDate() }, e.toObject = function (e) { if (void 0 === e && (e = {}), !this.isValid) return {}; var t = s({}, this.c); return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t }, e.toJSDate = function () { return new Date(this.isValid ? this.ts : NaN) }, e.diff = function (e, t, n) { if (void 0 === t && (t = "milliseconds"), void 0 === n && (n = {}), !this.isValid || !e.isValid) return Bt.invalid("created by diffing an invalid DateTime"); var r = s({ locale: this.locale, numberingSystem: this.numberingSystem }, n), t = (n = t, (Array.isArray(n) ? n : [n]).map(Bt.normalizeUnit)), n = e.valueOf() > this.valueOf(), r = tn(n ? this : e, n ? e : this, t, r); return n ? r.negate() : r }, e.diffNow = function (e, t) { return void 0 === e && (e = "milliseconds"), void 0 === t && (t = {}), this.diff(w.now(), e, t) }, e.until = function (e) { return this.isValid ? Kt.fromDateTimes(this, e) : this }, e.hasSame = function (e, t) { if (!this.isValid) return !1; var n = e.valueOf(), e = this.setZone(e.zone, { keepLocalTime: !0 }); return e.startOf(t) <= n && n <= e.endOf(t) }, e.equals = function (e) { return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc) }, e.toRelative = function (e) { if (!this.isValid) return null; var t = (e = void 0 === e ? {} : e).base || w.fromObject({}, { zone: this.zone }), n = e.padding ? this < t ? -e.padding : e.padding : 0, r = ["years", "months", "days", "hours", "minutes", "seconds"], i = e.unit; return Array.isArray(e.unit) && (r = e.unit, i = void 0), Xn(t, this.plus(n), s({}, e, { numeric: "always", units: r, unit: i })) }, e.toRelativeCalendar = function (e) { return void 0 === e && (e = {}), this.isValid ? Xn(e.base || w.fromObject({}, { zone: this.zone }), this, s({}, e, { numeric: "auto", units: ["years", "months", "days"], calendary: !0 })) : null }, w.min = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; if (!t.every(w.isDateTime)) throw new p("min requires all arguments be DateTimes"); return $(t, function (e) { return e.valueOf() }, Math.min) }, w.max = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; if (!t.every(w.isDateTime)) throw new p("max requires all arguments be DateTimes"); return $(t, function (e) { return e.valueOf() }, Math.max) }, w.fromFormatExplain = function (e, t, n) { var r = n = void 0 === n ? {} : n, n = r.locale, r = r.numberingSystem; return kn(ct.fromOpts({ locale: void 0 === n ? null : n, numberingSystem: void 0 === r ? null : r, defaultToEN: !0 }), e, t) }, w.fromStringExplain = function (e, t, n) { return w.fromFormatExplain(e, t, n = void 0 === n ? {} : n) }, o(w, [{ key: "isValid", get: function () { return null === this.invalid } }, { key: "invalidReason", get: function () { return this.invalid ? this.invalid.reason : null } }, { key: "invalidExplanation", get: function () { return this.invalid ? this.invalid.explanation : null } }, { key: "locale", get: function () { return this.isValid ? this.loc.locale : null } }, { key: "numberingSystem", get: function () { return this.isValid ? this.loc.numberingSystem : null } }, { key: "outputCalendar", get: function () { return this.isValid ? this.loc.outputCalendar : null } }, { key: "zone", get: function () { return this._zone } }, { key: "zoneName", get: function () { return this.isValid ? this.zone.name : null } }, { key: "year", get: function () { return this.isValid ? this.c.year : NaN } }, { key: "quarter", get: function () { return this.isValid ? Math.ceil(this.c.month / 3) : NaN } }, { key: "month", get: function () { return this.isValid ? this.c.month : NaN } }, { key: "day", get: function () { return this.isValid ? this.c.day : NaN } }, { key: "hour", get: function () { return this.isValid ? this.c.hour : NaN } }, { key: "minute", get: function () { return this.isValid ? this.c.minute : NaN } }, { key: "second", get: function () { return this.isValid ? this.c.second : NaN } }, { key: "millisecond", get: function () { return this.isValid ? this.c.millisecond : NaN } }, { key: "weekYear", get: function () { return this.isValid ? Ln(this).weekYear : NaN } }, { key: "weekNumber", get: function () { return this.isValid ? Ln(this).weekNumber : NaN } }, { key: "weekday", get: function () { return this.isValid ? Ln(this).weekday : NaN } }, { key: "ordinal", get: function () { return this.isValid ? Vn(this.c).ordinal : NaN } }, { key: "monthShort", get: function () { return this.isValid ? Xt.months("short", { locObj: this.loc })[this.month - 1] : null } }, { key: "monthLong", get: function () { return this.isValid ? Xt.months("long", { locObj: this.loc })[this.month - 1] : null } }, { key: "weekdayShort", get: function () { return this.isValid ? Xt.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null } }, { key: "weekdayLong", get: function () { return this.isValid ? Xt.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null } }, { key: "offset", get: function () { return this.isValid ? +this.o : NaN } }, { key: "offsetNameShort", get: function () { return this.isValid ? this.zone.offsetName(this.ts, { format: "short", locale: this.locale }) : null } }, { key: "offsetNameLong", get: function () { return this.isValid ? this.zone.offsetName(this.ts, { format: "long", locale: this.locale }) : null } }, { key: "isOffsetFixed", get: function () { return this.isValid ? this.zone.isUniversal : null } }, { key: "isInDST", get: function () { return !this.isOffsetFixed && (this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset) } }, { key: "isInLeapYear", get: function () { return re(this.year) } }, { key: "daysInMonth", get: function () { return oe(this.year, this.month) } }, { key: "daysInYear", get: function () { return this.isValid ? ie(this.year) : NaN } }, { key: "weeksInWeekYear", get: function () { return this.isValid ? ue(this.weekYear) : NaN } }], [{ key: "DATE_SHORT", get: function () { return b } }, { key: "DATE_MED", get: function () { return O } }, { key: "DATE_MED_WITH_WEEKDAY", get: function () { return M } }, { key: "DATE_FULL", get: function () { return N } }, { key: "DATE_HUGE", get: function () { return D } }, { key: "TIME_SIMPLE", get: function () { return E } }, { key: "TIME_WITH_SECONDS", get: function () { return V } }, { key: "TIME_WITH_SHORT_OFFSET", get: function () { return I } }, { key: "TIME_WITH_LONG_OFFSET", get: function () { return x } }, { key: "TIME_24_SIMPLE", get: function () { return C } }, { key: "TIME_24_WITH_SECONDS", get: function () { return F } }, { key: "TIME_24_WITH_SHORT_OFFSET", get: function () { return Z } }, { key: "TIME_24_WITH_LONG_OFFSET", get: function () { return L } }, { key: "DATETIME_SHORT", get: function () { return A } }, { key: "DATETIME_SHORT_WITH_SECONDS", get: function () { return z } }, { key: "DATETIME_MED", get: function () { return j } }, { key: "DATETIME_MED_WITH_SECONDS", get: function () { return q } }, { key: "DATETIME_MED_WITH_WEEKDAY", get: function () { return _ } }, { key: "DATETIME_FULL", get: function () { return U } }, { key: "DATETIME_FULL_WITH_SECONDS", get: function () { return R } }, { key: "DATETIME_HUGE", get: function () { return H } }, { key: "DATETIME_HUGE_WITH_SECONDS", get: function () { return P } }]), w }(); function nr(e) { if (tr.isDateTime(e)) return e; if (e && e.valueOf && J(e.valueOf())) return tr.fromJSDate(e); if (e && "object" == typeof e) return tr.fromObject(e); throw new p("Unknown datetime argument: " + e + ", of type " + typeof e) } return e.DateTime = tr, e.Duration = Bt, e.FixedOffsetZone = Ue, e.IANAZone = qe, e.Info = Xt, e.Interval = Kt, e.InvalidZone = Re, e.Settings = Be, e.SystemZone = Le, e.VERSION = "2.4.0", e.Zone = Fe, Object.defineProperty(e, "__esModule", { value: !0 }), e }({});

// Plugin custom js

var DateTime = luxon.DateTime;
var zoneseriesss = '';
// Create cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() - 3600);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

function DateTimeTzConvert(any_date_fromiso, tz_convertor, tz_set_f) {
    var local = DateTime.fromISO(any_date_fromiso);
    var overrideZone = local.setZone(tz_convertor);
    let date_time_via_f = overrideZone.toFormat(tz_set_f);
    // let date_via_f = overrideZone.toLocaleString(DateTime.DATE_FULL);
    // let time_via_f = overrideZone.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET);
    // date_time_via_f = date_via_f + ' ' + time_via_f;
    return date_time_via_f;
}

// Read cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

jQuery(document).ready(function ($) {
    
    $('.sel_timezone_id').select2({
        dropdownParent: $('.popup.popup-eve')
    });
    $('.sel_alltimezone_id').select2();
    $(document).on('select2:open', () => {
        document.querySelector('.select2-search__field').focus();
    });
    // Cookie timezone via date display
    let AllCookie = document.cookie.split(";").reduce((ac, cv, i) => Object.assign(ac, { [cv.split('=')[0]]: cv.split('=')[1] }), {});
    $.each(AllCookie, function (key, value) {
        cookie_name_key = key.replace(/\s/g, "");
        if(cookie_name_key.match(/nevent-[0-9]*\D/g)){
            return;
        }
        if (cookie_name_key == 'timezoneset_cookie') {
            $(".covert_timezone_btn").addClass('disable_btn_confirm');
            // timezoneset_cookie
            $("article.event_article").each(function (index) {
                let c_all_single_event_date = $(this).find(" .listing-blog-wrapper .wrap_details_event .covert_timezone .covert_timezone_btn").attr('eve-date');
                // $(this).find(" .listing-blog-wrapper .wrap_details_event .covert_timezone .covert_timezone_btn").addClass('disable_btn_confirm');
                if (c_all_single_event_date != '') {
                    let c_all_single_eve_dt_tz_con = DateTimeTzConvert(c_all_single_event_date, value, 'dd LLLL y h:mm a');
                    c_all_single_eve_dt_tz_con = c_all_single_eve_dt_tz_con +" "+AllCookie[' timezoneset_abb'];
                    $(this).find(" .listing-blog-wrapper .wrap_details_event .wrap_time_loc .wrap_time_loc__inner.wrap_dt p").empty();
                    $(this).find(" .listing-blog-wrapper .wrap_details_event .wrap_time_loc .wrap_time_loc__inner.wrap_dt p").text(c_all_single_eve_dt_tz_con);
                } else {
                    let c_all_eve_bc_date = $(this).find(" .listing-blog-wrapper .wrap_details_event .covert_timezone .covert_timezone_btn").attr('eve-broad-date');
                    if (c_all_eve_bc_date != '') {
                        let c_all_eve_dt_tz_bc = DateTimeTzConvert(c_all_eve_bc_date, value, 'dd LLLL y h:mm a');
                        c_all_eve_dt_tz_bc = c_all_eve_dt_tz_bc +" "+AllCookie[' timezoneset_abb'];
                        $(this).find(" .listing-blog-wrapper .wrap_details_event .wrap_time_loc .wrap_time_loc__inner.wrap_dt p").empty();
                        $(this).find(" .listing-blog-wrapper .wrap_details_event .wrap_time_loc .wrap_time_loc__inner.wrap_dt p").text(c_all_eve_dt_tz_bc);
                    }
                }

            });

            if ($("body").hasClass("single-event")) {
                let c_p_single_event_date = $('.single_event_wrap .wrap_eve_details .btns-eve-wrap .covert_timezone_btn').attr('eve-date');
                let c_pb_single_event_date = $('.single_event_wrap .wrap_eve_details .btns-eve-wrap .covert_timezone_btn').attr('eve-broad-date');

                // $('.single_event_wrap .wrap_eve_details .btns-eve-wrap .covert_timezone_btn').addClass('disable_btn_confirm');
                if (c_p_single_event_date != '') {
                    var c_p_single_eve_dt_tz_con = DateTimeTzConvert(c_p_single_event_date, value, 'dd LLLL y h:mm a');
                    c_p_single_eve_dt_tz_con = c_p_single_eve_dt_tz_con +" "+AllCookie[' timezoneset_abb'];
                    $(".single_event_wrap .box_eve_detail .eve_tz_sing .launch_D").empty();
                    $(".single_event_wrap .box_eve_detail .eve_tz_sing .launch_D").text(c_p_single_eve_dt_tz_con);
                }

                if (c_pb_single_event_date != '') {
                    var c_pb_single_eve_dt_tz_con = DateTimeTzConvert(c_pb_single_event_date, value, 'dd LLLL y h:mm a');
                    c_pb_single_eve_dt_tz_con = c_pb_single_eve_dt_tz_con +" "+AllCookie[' timezoneset_abb'];
                    $(".single_event_wrap .box_eve_detail .eve_tz_sing .broadcast_D").empty();
                    $(".single_event_wrap .box_eve_detail .eve_tz_sing .broadcast_D").text(c_pb_single_eve_dt_tz_con);
                }
                $(".single_event_wrap .box_eve_detail .eve_tz_title").empty();
                $(".single_event_wrap .box_eve_detail .eve_tz_title").text(AllCookie[' timezoneset_timezone'])

            }
            let todate_full_timezone = AllCookie[' timezoneset_abb'];

            $('[popup-open="popup-h-all_tz"]').empty();
            $('[popup-open="popup-h-all_tz"]').text("Change timezone");
            $('.all_event_convert_wrap__inner span').empty();
            $('.all_event_convert_wrap__inner span').text('All event times converted to ' + todate_full_timezone);
            $('.reset_eve_btn').removeClass('reset_btn_hide');
        } else {

            if (key.match(/nevent-\d*$/g) != null) {

                var eve_split_c_id = key.split('-');
                if ($("body").hasClass("single-event")) {

                    let p_eve_id_check = $('article').attr('id');
                    var p_eve_split_id_check = p_eve_id_check.split('-');
                    if (p_eve_split_id_check[1] == eve_split_c_id[1]) {
                        const abbcookie = ' n'+p_eve_id_check+'abb';
                        const timezonecookie = ' n'+p_eve_id_check+'timezone';
                        $(".reset_eve_btn").removeClass('reset_btn_hide');
                        let c_p_single_event_date = $('.single_event_wrap .wrap_eve_details .btns-eve-wrap .covert_timezone_btn').attr('eve-date');
                        let c_pb_single_event_date = $('.single_event_wrap .wrap_eve_details .btns-eve-wrap .covert_timezone_btn').attr('eve-broad-date');

                        $('.single_event_wrap .wrap_eve_details .btns-eve-wrap .covert_timezone_btn').addClass('disable_btn_confirm');
                        if (c_p_single_event_date != '') {
                            var c_p_single_eve_dt_tz_con = DateTimeTzConvert(c_p_single_event_date, value, 'dd LLLL y h:mm a');
                            c_p_single_eve_dt_tz_con = c_p_single_eve_dt_tz_con +" "+AllCookie[abbcookie]
                            $(".single_event_wrap .box_eve_detail .eve_tz_sing .launch_D").empty();
                            $(".single_event_wrap .box_eve_detail .eve_tz_sing .launch_D").text(c_p_single_eve_dt_tz_con);
                            var c_p_single_eve__tz_con = AllCookie[timezonecookie]
                            $(".single_event_wrap .box_eve_detail .eve_tz_title").empty();
                            $(".single_event_wrap .box_eve_detail .eve_tz_title").text(c_p_single_eve__tz_con);
                        }

                        if (c_pb_single_event_date != '') {
                            var c_pb_single_eve_dt_tz_con = DateTimeTzConvert(c_pb_single_event_date, value, 'dd LLLL y h:mm a');
                            c_pb_single_eve_dt_tz_con = c_pb_single_eve_dt_tz_con + " "+AllCookie[abbcookie]
                            $(".single_event_wrap .box_eve_detail .eve_tz_sing .broadcast_D").empty();
                            $(".single_event_wrap .box_eve_detail .eve_tz_sing .broadcast_D").text(c_pb_single_eve_dt_tz_con);
                        }

                    }

                } else {
                    $(".reset_eve_btn").removeClass('reset_btn_hide');
                    var co_ev_get_date = $(".eve_single_popup_btn_" + eve_split_c_id[1]).attr('eve-date');
                    let abbcookies = ' nevent-'+ eve_split_c_id[1]+'abb';
                    $(".eve_single_popup_btn_" + eve_split_c_id[1]).addClass('disable_btn_confirm');
                    if (co_ev_get_date != '') {
                        let single_eve_dt_tz_con = DateTimeTzConvert(co_ev_get_date, value, 'dd LLLL y h:mm a');
                        single_eve_dt_tz_con = single_eve_dt_tz_con +" "+ AllCookie[abbcookies];
                        $(".eve_d_" + eve_split_c_id[1]).text(single_eve_dt_tz_con);
                    } else {
                        var co_ev_get_date_bc = $(".eve_single_popup_btn_" + eve_split_c_id[1]).attr('eve-broad-date');
                        if (co_ev_get_date_bc != '') {
                            let single_eve_dt_tz_con_bc = DateTimeTzConvert(co_ev_get_date_bc, value, 'dd LLLL y h:mm a');
                            single_eve_dt_tz_con_bc = single_eve_dt_tz_con_bc +" "+AllCookie[abbcookies];
                            $(".eve_d_" + eve_split_c_id[1]).text(single_eve_dt_tz_con_bc);
                        }
                    }
                }



            } else if (key.match(/nevent-\d/g) == null) {
                if ($("body").hasClass("single-event")) {
                    //     let p_eve_id_check = $('article').attr('id');
                    //     var p_eve_split_id_check = p_eve_id_check.split('-');
                    //     if (p_eve_split_id_check[1] == eve_split_c_id[1]) {

                    //         $(".reset_eve_btn").removeClass('reset_btn_hide');
                    //         let c_p_single_event_date = $('.single_event_wrap .wrap_eve_details .btns-eve-wrap .covert_timezone_btn').attr('eve-date');
                    //         let c_pb_single_event_date = $('.single_event_wrap .wrap_eve_details .btns-eve-wrap .covert_timezone_btn').attr('eve-broad-date');

                    //         $('.single_event_wrap .wrap_eve_details .btns-eve-wrap .covert_timezone_btn').addClass('disable_btn_confirm');
                    //         if (c_p_single_event_date != '') {
                    //             var c_p_single_eve_dt_tz_con = DateTimeTzConvert(c_p_single_event_date, value, 'dd LLLL y h:mm a ZZZZ');
                    //             $(".single_event_wrap .box_eve_detail .eve_tz_sing .launch_D").empty();
                    //             $(".single_event_wrap .box_eve_detail .eve_tz_sing .launch_D").text(c_p_single_eve_dt_tz_con);
                    //             var c_p_single_eve__tz_con = DateTimeTzConvert(c_p_single_event_date, value, 'ZZZZZ');
                    //             $(".single_event_wrap .box_eve_detail .eve_tz_title").empty();
                    //             $(".single_event_wrap .box_eve_detail .eve_tz_title").text(c_p_single_eve__tz_con);
                    //         }

                    //         if (c_pb_single_event_date != '') {
                    //             var c_pb_single_eve_dt_tz_con = DateTimeTzConvert(c_pb_single_event_date, value, 'dd LLLL y h:mm a ZZZZ');
                    //             $(".single_event_wrap .box_eve_detail .eve_tz_sing .broadcast_D").empty();
                    //             $(".single_event_wrap .box_eve_detail .eve_tz_sing .broadcast_D").text(c_pb_single_eve_dt_tz_con);
                    //         }

                    //     }

                }

                $("article.event_article").each(function (index) {
                    let p_eve_id_check = $(this).attr('id');
                    var p_eve_split_id_check = p_eve_id_check.split('-');

                    let df_all_single_event_date = $(this).find(" .listing-blog-wrapper .wrap_details_event .covert_timezone .covert_timezone_btn").attr('eve-date');
                    let df_all_single_event_Tz = $(this).find(" .listing-blog-wrapper .wrap_details_event .covert_timezone .covert_timezone_btn").attr('eve-timezone');
                    if (df_all_single_event_date != '') {
                        let df_all_single_eve_dt_tz_con = DateTimeTzConvert(df_all_single_event_date, df_all_single_event_Tz, 'dd LLLL y h:mm a ZZZZ');
                        $(this).find(" .listing-blog-wrapper .wrap_details_event .wrap_time_loc .wrap_time_loc__inner.wrap_dt p.eve_d_" + p_eve_split_id_check[1]).empty();
                        $(this).find(" .listing-blog-wrapper .wrap_details_event .wrap_time_loc .wrap_time_loc__inner.wrap_dt p.eve_d_" + p_eve_split_id_check[1]).text(df_all_single_eve_dt_tz_con);

                    } else {
                        let df_all_single_eve_broad_date = $(this).find(" .listing-blog-wrapper .wrap_details_event .covert_timezone .covert_timezone_btn").attr('eve-broad-date');

                        if (df_all_single_eve_broad_date != '') {

                            let df_all_single_eve_dt_tz_con_b = DateTimeTzConvert(df_all_single_eve_broad_date, df_all_single_event_Tz, 'dd LLLL y h:mm a ZZZZ');
                            $(this).find(" .listing-blog-wrapper .wrap_details_event .wrap_time_loc .wrap_time_loc__inner.wrap_dt .eve_d_" + p_eve_split_id_check[1]).empty();
                            $(this).find(" .listing-blog-wrapper .wrap_details_event .wrap_time_loc .wrap_time_loc__inner.wrap_dt .eve_d_" + p_eve_split_id_check[1]).text(df_all_single_eve_dt_tz_con_b);
                        }
                    }

                });
            }
        }

    });




    jQuery('.reset_eve_btn').click(function () {
        reset_eve_id = $(this).attr('data_reset_id');

        if (reset_eve_id != '' && reset_eve_id != 0 && reset_eve_id != undefined) {
            var cookie_name_reset = 'nevent-' + reset_eve_id;
            deleteCookie(cookie_name_reset);
            deleteCookie(cookie_name_reset+'ab');
            deleteCookie(cookie_name_reset+'timezone');
        } else {
            deleteCookie("timezoneset_cookie");
            deleteCookie("timezoneset_abb");
            deleteCookie("timezoneset_timezone");
            let obj = document.cookie.split(";").reduce((ac, cv, i) => Object.assign(ac, { [cv.split('=')[0]]: cv.split('=')[1] }), {});

            $.each(obj, function (key, value) {
                if (key.match(/nevent-/g) != null) {
                    deleteCookie(key);
                }
            });
        }
        location.reload();
    });

    // Set cookie consent
    function acceptCookieTimezoneEvent(selector_parent, aberration, timezonName, event_id = 0) {
        if (event_id != '' || event_id != 0) {
            var cookie_name = 'nevent-' + event_id;
            deleteCookie(cookie_name);
            deleteCookie(cookie_name+'abb');
            deleteCookie(cookie_name+'timezone');
            setCookie(cookie_name, selector_parent, 30);
            setCookie(cookie_name+'abb', aberration, 30);
            setCookie(cookie_name+'timezone', timezonName, 30);
        } else {
            deleteCookie('timezoneset_cookie');
            deleteCookie('timezoneset_abb');
            deleteCookie('timezoneset_timezone');
            setCookie('timezoneset_cookie', selector_parent, 30);
            setCookie('timezoneset_abb', aberration, 30);
            setCookie('timezoneset_timezone', timezonName, 30);
        }
    }

    // Share on social js
    jQuery('.wrap_social__inner .social_icon').click(function () {
        var share_href = $(this).attr('data-src-s');
        if ($(this).find('.social_text').text() == 'Linkedin') {
            var share_link = share_href;
        } else {
            var message_share = $('.message_share').val();
            if (message_share == '') {
                $('.wrap_message .wrap_share_title span').remove();
                $('.wrap_message .wrap_share_title').append('<span>  Message is require</span>');
                return;
            }
            var share_link = share_href + message_share;
        }
        window.open(share_link, '_blank');
    });


    jQuery('.wrap_email__inner .email_box').click(function (e) {
        e.preventDefault();
        var message_share = $('.message_share').val();
        var shareviaemail = $('.shareviaemail').val();
        var event_title_hidden = $('.event_title_hidden').val();

        if (shareviaemail == '') {
            $('.wrap_email .wrap_share_title span').remove();
            $('.wrap_email .wrap_share_title').append('<span>  Email is require</span>');
            return;
        } else if (IsEmail(shareviaemail) == false) {
            $('.wrap_email .wrap_share_title span').remove();
            $('.wrap_email .wrap_share_title').append('<span> Email-id is invalid </span>');
            return;
        } else {
            if (message_share == '') {
                $('.wrap_message .wrap_share_title span').remove();
                $('.wrap_message .wrap_share_title').append('<span>  Message is require</span>');
                return;
            }

            var mailurl = "mailto:"+shareviaemail+"?body="+message_share+"&subject=Register for "+event_title_hidden;
            window.location = mailurl;
        }

    });


    // Set cookie single event
    $(".confirm_btn").click(function () {
        var selector_parent = $(this).parent().find('.sel_timezone_id').val();
        var selectedOption = $(this).parent().find('.sel_timezone_id');
        var aberration = selectedOption.select2().find(":selected").data("abbri");
        var selected_timezone = selectedOption.select2().find(":selected").data("timezone");
        // var selector_parent = $(this).parent().find('.sel_timezone_id option:selected').val();
        var event_id = $(this).attr('event_id_c');
        var single_event_date = $(this).attr('single_event_date');
        var single_eve_broad_date = $(this).attr('single_eve_broad_date');
        // var countryCode = $(this).parent().find('.sel_timezone_id option:selected').attr('data-countryCode');


        acceptCookieTimezoneEvent(selector_parent, aberration, selected_timezone, event_id);

        if ($(this).hasClass("single_page_eve_tz")) {
            $(".reset_eve_btn").removeClass('reset_btn_hide');
            $(".covert_timezone_btn").addClass("disable_btn_confirm");
            $(".single_event_wrap .box_eve_detail .eve_tz_title").empty();
            $(".single_event_wrap .box_eve_detail .eve_tz_title").text(selected_timezone)
            $(".nasa_timezon-wrapper--column.user-time-column .timezon-header-title p").text(selected_timezone);
            if (single_event_date != '') {
                let single_eve_dt_tz_con = DateTimeTzConvert(single_event_date, selector_parent, 'dd LLLL y h:mm a');
                single_eve_dt_tz_con = single_eve_dt_tz_con+" "+aberration;
                let single_eve_time = DateTimeTzConvert(single_event_date, selector_parent, 'h:mm a');
                single_eve_time = single_eve_time +" "+aberration;
                $(".eve_tz_sing .launch_D, .eve_heading.heading_launch span").empty();
                $(".eve_tz_sing .launch_D").text(single_eve_dt_tz_con);
                $(".eve_heading.heading_launch span").text(single_eve_time);
                $(".nasa_timezon-wrapper--column.user-time-column").removeClass('hide-block');
                $(".nasa_timezon-wrapper--column.user-time-column .user-lunch-time-bottom").removeClass('hide-block');
                $(".nasa_timezon-wrapper--column.user-time-column .user-lunch-time-bottom p").text(single_eve_dt_tz_con);
            }
            if (single_eve_broad_date != '') {
                let single_eve_broad_tz_con = DateTimeTzConvert(single_eve_broad_date, selector_parent, 'dd LLLL y h:mm a');
                single_eve_broad_tz_con = single_eve_broad_tz_con+" "+aberration;
                let single_eve_broad_time= DateTimeTzConvert(single_eve_broad_date, selector_parent, 'h:mm a');
                single_eve_broad_time = single_eve_broad_time +" "+aberration;
                $(".eve_tz_sing .broadcast_D, .eve_heading.heading_broadcast span").empty();
                $(".eve_tz_sing .broadcast_D").text(single_eve_broad_tz_con);
                $(".eve_heading.heading_broadcast span").text(single_eve_broad_time);
                $(".nasa_timezon-wrapper--column.user-time-column").removeClass('hide-block');
                $(".nasa_timezon-wrapper--column.user-time-column .user-broad-time-bottom").removeClass('hide-block');
                $(".nasa_timezon-wrapper--column.user-time-column .user-broad-time-bottom p").text(single_eve_broad_tz_con);
            }
            //location.reload();
            $('[popup-close-eve]').click();
            setTimeout(function () {
                var getselectedcookies = getCookie('timezoneset_cookie');
                if(!getselectedcookies){
                    let p_eve_id_check = $('article').attr('id');
                    getselectedcookies = getCookie("n"+p_eve_id_check);
                }
                var idoffset = '';
                if( getselectedcookies ){
                    var ftimeofferset = getselectedcookies.slice(0,4);
                    var timeofferset = getselectedcookies.slice(4);
                    if(timeofferset){
                        var timezonoff = timeofferset.split(":");
                        if(timezonoff){
                            var firstpart = ('0' + timezonoff[0]).slice(-2);
                            if(timezonoff[1]){
                                var lastpart = ('0' + timezonoff[1]).slice(-2);
                            } else {
                                var lastpart = "00";
                            }
                            idoffset = ftimeofferset+firstpart+":"+lastpart;
                        } else {
                            idoffset = "UTC+00:00";
                        }
                    }else{
                        idoffset = "UTC+00:00";
                    }
                }
                var example = zoneseriesss.getDataItemById(idoffset);
                var utcpoly = example.get("mapPolygon");
                utcpoly.hover(true);
            }, 500);
        } else {
            if (single_event_date != '') {
                let single_eve_dt_tz_con = DateTimeTzConvert(single_event_date, selector_parent, 'dd LLLL y h:mm a');
                let only_day_d = DateTimeTzConvert(single_event_date, selector_parent, 'dd');
                $(".short_d_eve_" + event_id).empty();
                $(".short_d_eve_" + event_id).text(only_day_d);
                single_eve_dt_tz_con = single_eve_dt_tz_con+" "+aberration;
                $(".wrap_time_loc__inner.wrap_dt .eve_d_" + event_id).empty();
                $(".wrap_time_loc__inner.wrap_dt .eve_d_" + event_id).text(single_eve_dt_tz_con);
            } else {
                if (single_eve_broad_date != '') {
                    let single_eve_dt_tz_con = DateTimeTzConvert(single_eve_broad_date, selector_parent, 'dd LLLL y h:mm a');
                    let only_day_d = DateTimeTzConvert(single_eve_broad_date, selector_parent, 'dd');
                    $(".short_d_eve_" + event_id).empty();
                    $(".short_d_eve_" + event_id).text(only_day_d);
                    single_eve_dt_tz_con = single_eve_dt_tz_con+" "+aberration;
                    $(".wrap_time_loc__inner.wrap_dt .eve_d_" + event_id).empty();
                    $(".wrap_time_loc__inner.wrap_dt .eve_d_" + event_id).text(single_eve_dt_tz_con);
                }
            }

            $(".eve_single_popup_btn_" + event_id).addClass("disable_btn_confirm");
            setTimeout(function () {
                var getselectedcookies = getCookie('timezoneset_cookie');
                if(!getselectedcookies){
                    let p_eve_id_check = $('article').attr('id');
                    getselectedcookies = getCookie("n"+p_eve_id_check);
                }
                var idoffset = '';
                if( getselectedcookies ){
                    var ftimeofferset = getselectedcookies.slice(0,4);
                    var timeofferset = getselectedcookies.slice(4);
                    if(timeofferset){
                        var timezonoff = timeofferset.split(":");
                        if(timezonoff){
                            var firstpart = ('0' + timezonoff[0]).slice(-2);
                            if(timezonoff[1]){
                                var lastpart = ('0' + timezonoff[1]).slice(-2);
                            } else {
                                var lastpart = "00";
                            }
                            idoffset = ftimeofferset+firstpart+":"+lastpart;
                        } else {
                            idoffset = "UTC+00:00";
                        }
                    }else{
                        idoffset = "UTC+00:00";
                    }
                }
                var example = zoneseriesss.getDataItemById(idoffset);
                var utcpoly = example.get("mapPolygon");
                utcpoly.hover(true);
            }, 500);
            $('[popup-close-eve]').click();
        }

    });

    // Set cookie all event
    $(".all_confirm_btn").click(function () {
        // var selector_parent = $(this).parent().find('.sel_timezone_id option:selected').val();
        var selector_parent = $(this).parent().find('.sel_alltimezone_id').val();
        var selectedOption = $(this).parent().find('.sel_alltimezone_id');
        var aberration = selectedOption.select2().find(":selected").data("abbri");
        var selected_timezone = selectedOption.select2().find(":selected").data("timezone");

        let alt_Tz;
        acceptCookieTimezoneEvent(selector_parent, aberration, selected_timezone);
        $("article.event_article").each(function (index) {
            let all_single_event_date = $(this).find(" .listing-blog-wrapper .wrap_details_event .covert_timezone .covert_timezone_btn").attr('eve-date');
            $(this).find(" .listing-blog-wrapper .wrap_details_event .covert_timezone .covert_timezone_btn").addClass('disable_btn_confirm');

            if (all_single_event_date != '') {
                let all_single_eve_dt_tz_con = DateTimeTzConvert(all_single_event_date, selector_parent, 'dd LLLL y h:mm a ZZZZ');
                $(this).find(" .listing-blog-wrapper .wrap_details_event .wrap_time_loc .wrap_time_loc__inner.wrap_dt p , .short_date_eve").empty();
                $(this).find(" .listing-blog-wrapper .wrap_details_event .wrap_time_loc .wrap_time_loc__inner.wrap_dt p").text(all_single_eve_dt_tz_con);
                alt_Tz = DateTimeTzConvert(all_single_event_date, selector_parent, 'ZZZZZ');
                only_day_d = DateTimeTzConvert(all_single_event_date, selector_parent, 'dd');
                $(this).find(".short_date_eve").text(only_day_d);
            } else {
                let all_single_ev_d_bc = $(this).find(" .listing-blog-wrapper .wrap_details_event .covert_timezone .covert_timezone_btn").attr('eve-broad-date');
                if (all_single_ev_d_bc != '') {
                    let all_single_eve_dt_tz_bc = DateTimeTzConvert(all_single_ev_d_bc, selector_parent, 'dd LLLL y h:mm a ZZZZ');
                    $(this).find(" .listing-blog-wrapper .wrap_details_event .wrap_time_loc .wrap_time_loc__inner.wrap_dt p , .short_date_eve").empty();
                    $(this).find(" .listing-blog-wrapper .wrap_details_event .wrap_time_loc .wrap_time_loc__inner.wrap_dt p").text(all_single_eve_dt_tz_bc);
                    alt_Tz = DateTimeTzConvert(all_single_ev_d_bc, selector_parent, 'ZZZZZ');
                    only_day_d = DateTimeTzConvert(all_single_ev_d_bc, selector_parent, 'dd');
                    $(this).find(".short_date_eve").text(only_day_d);
                }
            }


        });

        $('.all_event_convert_btn , .all_event_convert_wrap__inner span').empty();
        $('.all_event_convert_wrap__inner span').text('All event times converted to ' + alt_Tz);
        $('.all_event_convert_btn').text('Change timezone');
        $('.reset_eve_btn').removeClass('reset_btn_hide');
        $('[popup-close]').click();

    });

    // Open Popup
    $('[popup-open]').on('click', function () {
        var popup_name = $(this).attr('popup-open');
        $('[popup-name="' + popup_name + '"]').fadeIn(300);
        $("body").addClass("scroll_off_popup_open");
    });

    // Close Popup
    $('[popup-close]').on('click', function () {
        var popup_name = $(this).attr('popup-close');
        $(".timezone_via_key").empty();
        $('[popup-name="' + popup_name + '"]').fadeOut(300);
        $("body").removeClass("scroll_off_popup_open");
    });

    // Close Popup When Click Outside
    $('.popup').on('click', function () {
        var popup_name = $(this).find('[popup-close]').attr('popup-close');
        $(".timezone_via_key").empty();
        $('[popup-name="' + popup_name + '"]').fadeOut(300);
        $("body").removeClass("scroll_off_popup_open");
    }).children().click(function () {
        return false;
    });

    // Single eve Open Popup
    $('[popup-open-eve]').on('click', function (e) {
        e.preventDefault();
        $("body").addClass("scroll_off_popup_open");
        var eve_title = $(this).attr('eve-title');
        var eve_date = $(this).attr('eve-date');
        var eve_broad_date = $(this).attr('eve-broad-date');
        var eve_timezone = $(this).attr('eve-timezone');
        if (eve_date != '') {
            let single_eve_dt_tz_con = DateTimeTzConvert(eve_date, eve_timezone, 'dd LLLL y h:mm a ZZZZ');
            $('.single_content_wrap').prepend('  <div class="single-event-title"> ' + eve_title + ' </div><div class="pop-eve-date">' + single_eve_dt_tz_con + ' </div>');
        } else {
            if (eve_broad_date != '') {
                let single_eve_dt_tz_con = DateTimeTzConvert(eve_broad_date, eve_timezone, 'dd LLLL y h:mm a ZZZZ');
                $('.single_content_wrap').prepend('  <div class="single-event-title"> ' + eve_title + ' </div><div class="pop-eve-date">' + single_eve_dt_tz_con + ' </div>');
            }
        }
        var eve_id = $(this).attr('eve-id');
        var single_eve_src = $(this).attr('href');

        $(".single_eve_tz_p").attr({
            'event_id_c': eve_id,
            'single_event_src': single_eve_src,
            'single_event_date': eve_date,
            'single_eve_broad_date': eve_broad_date
        });

        var popup_name = $(this).attr('popup-open-eve');

        $('[popup-name-eve="' + popup_name + '"]').fadeIn(300);
    });

    // Single eve Close Popup
    $('[popup-close-eve]').on('click', function () {
        var popup_name = $(this).attr('popup-close-eve');

        $(this).parent().find('.single-event-title').fadeOut(300, function () { $(this).remove(); });
        $(this).parent().find('.pop-eve-date').fadeOut(300, function () { $(this).remove(); });
        $(this).parent().find(".single_eve_tz_p").removeAttr('event_id_c single_event_src single_event_date single_eve_broad_date');
        $(".timezone_via_key").empty();
        $('[popup-name-eve="' + popup_name + '"]').fadeOut(300);
        $("body").removeClass("scroll_off_popup_open");
    });

    //  Single eve Close Popup When Click Outside
    $('.popup-eve').on('click', function () {

        var popup_name = $(this).find('[popup-close-eve]').attr('popup-close-eve');
        $(this).find('.single-event-title').fadeOut(300, function () { $(this).remove(); });
        $(this).find('.pop-eve-date').fadeOut(300, function () { $(this).remove(); });
        $(this).parent().find(".single_eve_tz_p").removeAttr('event_id_c single_event_src single_event_date single_eve_broad_date');
        $(".timezone_via_key").empty();
        $('[popup-name-eve="' + popup_name + '"]').fadeOut(300);
        $("body").removeClass("scroll_off_popup_open");
    }).children().click(function () {
        return false;
    });

    if ($("#svgMap").hasClass('svgMap-wrapper') == false) {
        $(".single_on_map_wrap").css("bottom", "unset");
        $(".single_on_map_wrap .eve_title_on_map").css("color", "#000000");
    }

    function renderInteractiveMap() {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv");
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        
        // Create the map chart
        // https://www.amcharts.com/docs/v5/charts/map-chart/
        var chart = root.container.children.push(
          am5map.MapChart.new(root, {
            panX: "translateX",
            panY: "translateY",
            projection: am5map.geoMercator()
          })
        );
        
        var colorSet = am5.ColorSet.new(root, {});
        
        // Create main polygon series for time zone areas
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
        var areaSeries = chart.series.push(
          am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldTimeZoneAreasLow
          })
        );
        
        var areaPolygonTemplate = areaSeries.mapPolygons.template;
        areaPolygonTemplate.setAll({ fillOpacity: 0.6 });
        areaPolygonTemplate.adapters.add("fill", function (fill, target) {
          return am5.Color.saturate(
            colorSet.getIndex(areaSeries.mapPolygons.indexOf(target)),
            0.5
          );
        });
        
        areaPolygonTemplate.states.create("hover", { fillOpacity: 0.8 });
        
        // Create main polygon series for time zones
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
        var zoneSeries = chart.series.push(
          am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldTimeZonesLow
          })
        );
        
        zoneSeries.mapPolygons.template.setAll({
          fill: am5.color(0x000000),
          fillOpacity: 0.08
        });
        
        var zonePolygonTemplate = zoneSeries.mapPolygons.template;
        let c_p_single_event_date = $('.single_event_wrap .wrap_eve_details .btns-eve-wrap .covert_timezone_btn').attr('eve-date');
        let c_pb_single_event_date = $('.single_event_wrap .wrap_eve_details .btns-eve-wrap .covert_timezone_btn').attr('eve-broad-date');
        let timezonename = $('.single_event_wrap .wrap_eve_details .btns-eve-wrap .covert_timezone_btn').attr('eve-timezone');
        if( c_p_single_event_date && c_pb_single_event_date){
            zonePolygonTemplate.setAll({ interactive: true, tooltipText: "{eventTitle}\n\nLaunch Date and Time: {customData} \nBroadcast Date and Time: {customBroadData}"});
        } else if (c_p_single_event_date){
            zonePolygonTemplate.setAll({ interactive: true, tooltipText: "{eventTitle}\n\nLaunch Date and Time: {customData}"});
        } else if (c_pb_single_event_date){
            zonePolygonTemplate.setAll({ interactive: true, tooltipText: "{eventTitle}\n\nBroadcast Date and Time: {customBroadData} "});
        }
        zonePolygonTemplate.states.create("hover", { fillOpacity: 0.3 });
        // labels
        var labelSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
        labelSeries.bullets.push(() => {
          return am5.Bullet.new(root, {
            sprite: am5.Label.new(root, {
              text: "{id}",
              populateText: true,
              centerX: am5.p50,
              centerY: am5.p50,
              fontSize: "0.7em"
            })
          });
        });
        
        // create labels for each zone  
        zoneSeries.events.on("datavalidated", () => {
            var eve_title = $('.covert_timezone_btn').attr('eve-title');
          am5.array.each(zoneSeries.dataItems, (dataItem) => {
            var centroid = dataItem.get("mapPolygon").visualCentroid();
            var UTCT = dataItem.get("id");
            if(UTCT == 'AQ'){
                UTCT = 'UTC+12:00';
            }
            dataItem.set("eventTitle",eve_title);
            if( c_p_single_event_date && c_pb_single_event_date){
                var datetimeofeven = DateTime.fromISO(c_p_single_event_date, { zone: timezonename });
                var launchDate = datetimeofeven.setZone(UTCT).toFormat('dd LLLL y h:mm a');
                var datetimebroad = DateTime.fromISO(c_pb_single_event_date, { zone: timezonename });
                var broadDate = datetimebroad.setZone(UTCT).toFormat('dd LLLL y h:mm a');
                dataItem.set("customBroadData",broadDate)
                dataItem.set("customData",launchDate)
            } else if (c_p_single_event_date){
                var datetimeofeven = DateTime.fromISO(c_p_single_event_date, { zone: timezonename });
                var bogus = datetimeofeven.setZone(UTCT).toFormat('dd LLLL y h:mm a');
                dataItem.set("customData",bogus)
            } else if (c_pb_single_event_date){
                var datetimeofeven = DateTime.fromISO(c_pb_single_event_date, { zone: timezonename });
                var bogus = datetimeofeven.setZone(UTCT).toFormat('dd LLLL y h:mm a');
                dataItem.set("customBroadData",bogus)
            }
            labelSeries.pushDataItem({
              id: dataItem.get("id"),
              geometry: {
                type: "Point",
                coordinates: [centroid.longitude, centroid.latitude]
              }
            });
          });
        });
        // Add zoom control
        // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
        chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
        
        // Add labels and controls
        var cont = chart.children.push(
          am5.Container.new(root, {
            layout: root.horizontalLayout,
            x: 20,
            y: 40
          })
        );
        
      
        // Make stuff animate on load
        chart.appear(1000, 100);
        setTimeout(function () {
            var getselectedcookies = getCookie('timezoneset_cookie');
            if(!getselectedcookies){
                let p_eve_id_check = $('article').attr('id');
                getselectedcookies = getCookie("n"+p_eve_id_check);
            }
            var idoffset = '';
            if( getselectedcookies ){
                var ftimeofferset = getselectedcookies.slice(0,4);
                var timeofferset = getselectedcookies.slice(4);
                if(timeofferset){
                    var timezonoff = timeofferset.split(":");
                    if(timezonoff){
                        var firstpart = ('0' + timezonoff[0]).slice(-2);
                        if(timezonoff[1]){
                            var lastpart = ('0' + timezonoff[1]).slice(-2);
                        } else {
                            var lastpart = "00";
                        }
                        idoffset = ftimeofferset+firstpart+":"+lastpart;
                    } else {
                        idoffset = "UTC+00:00";
                    }
                }else{
                    idoffset = "UTC+00:00";
                }
            }
            var example = zoneSeries.getDataItemById(idoffset);
            // if(example){
            //     var allElement = zoneSeries.allChildren();
            //     allElement.forEach(element => {
            //         if(element.uid !== example.uid){
            //             element.hideTooltip();
            //         }
            //     });
            // }
            var utcpoly = example.get("mapPolygon");
            utcpoly.hover(true);
        }, 500);
        zoneseriesss = zoneSeries;
        };
    renderInteractiveMap();
});

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}
