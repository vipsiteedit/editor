(function () {
    var console = function (text) {
        var a = document.getElementById('console');
        if (a != null)
            a.innerHTML = text;
    }

    var getScrollClass = function (cl) {
        var b = document.querySelector(cl);
        if (b != undefined) {
            return b.offsetTop;
        }
        return 0;
    }

    var setCookie = function (a, b, c, d) {
            var e = encodeURIComponent(a) + '=' + encodeURIComponent(b);
            if (c) {
                var f = new Date();
                f.setTime(f.getTime() + (1000 * 60 * c));
                e += ';expires=' + f.toUTCString();
            }
            if (d)e += ';path=' + d;
            document.cookie = e;
        },
        setCookie2 = function (a, b) { //ab
            setCookie(a, 1, -1, b);
        }, getCookie = function (a) {
            var b = document.cookie.match('(^|;) ?' + a + ' ?= ?([^;]*)(;|$)');
            if (b)return b[2];
        },
        ad = function (a, b, c, d, e, f, g) {
            var h, i = new Date(), j = setInterval(function () {
                h = (new Date() - i) / d;
                if (h < 1)f.call(a, (c - b) * e(h) + b); else {
                    f.call(a, c);
                    var k = a.x.length;
                    if (k > 1) {
                        while (k--)if (a.x[k] == j)delete a.x[k];
                    } else delete a.x;
                    clearInterval(j);
                    if (g)g.call(a);
                }
            }, 10);
            if (!a.x)a.x = [j]; else a.x[a.x.length] = j;
        }, ae = function (a, b) {
            if (window.getComputedStyle(a)['display'] == 'none') {
                a.style.opacity = '0';
                a.style.display = 'block';
                ad(a, 0, 1, 400, function (c) {
                    return ((-Math.cos(c * Math.PI) / 2) + 0.5);
                }, function (c) {
                    a.style.opacity = c.toFixed(1);
                }, function () {
                    a.style.opacity = '';
                    if (b)b.call(a);
                });
            }
        }, af = function (a, b) {
            if (a.style.overflow != 'hidden' && window.getComputedStyle(a)['display'] != 'none') {
                ad(a, 1, 0, 300, function (c) {
                    return ((-Math.cos(c * Math.PI) / 2) + 0.5);
                }, function (c) {
                    a.style.opacity = c.toFixed(1);
                }, function () {
                    a.style.display = 'none';
                    a.style.opacity = '';
                    if (b)b.call(a);
                });
            }
        }, ag = function (a, b) {
            if (window.getComputedStyle(a)['display'] == 'none') {
                a.style.opacity = '0';
                a.style.position = 'absolute';
                a.style.display = 'block';
                var c = a.clientHeight, d = parseInt(window.getComputedStyle(a)['paddingTop']);
                a.style.height = '0';
                a.style.position = '';
                a.style.overflow = 'hidden';
                a.style.marginLeft = '-' + window.getComputedStyle(a.firstElementChild)['paddingLeft'];
                if (d) {
                    c = c - d;
                    ad(a, 0, d, 200, function (e) {
                        return ((-Math.cos(e * Math.PI) / 2) + 0.5);
                    }, function (e) {
                        a.style.paddingTop = e.toFixed(0) + 'px';
                    });
                }
                ad(a, 0, c, 200, function (e) {
                    return ((-Math.cos(e * Math.PI) / 2) + 0.5);
                }, function (e) {
                    a.style.height = e.toFixed(0) + 'px';
                });
                ad(a, parseInt(a.style.marginLeft), 0, 400, function (e) {
                    return ((-Math.cos(e * Math.PI) / 2) + 0.5);
                }, function (e) {
                    a.style.marginLeft = e.toFixed(0) + 'px';
                });
                ad(a, 0, 1, 600, function (e) {
                    return ((-Math.cos(e * Math.PI) / 2) + 0.5);
                }, function (e) {
                    a.style.opacity = e.toFixed(1);
                }, function () {
                    a.style.height = '';
                    a.style.marginLeft = '';
                    a.style.paddingTop = '';
                    a.style.opacity = '';
                    a.style.overflow = '';
                    if (b)b.call(a);
                });
            }
        }, ah = function (a, b) {
            if (a.style.overflow != 'hidden' && window.getComputedStyle(a)['display'] != 'none') {
                var c = a.clientHeight, d = parseInt(window.getComputedStyle(a)['paddingTop']);
                a.style.overflow = 'hidden';
                if (d) {
                    c = c - d;
                    ad(a, d, 0, 400, function (e) {
                        return ((-Math.cos(e * Math.PI) / 2) + 0.5);
                    }, function (e) {
                        a.style.paddingTop = e.toFixed(0) + 'px';
                    });
                }
                ad(a, a.clientHeight, 0, 420, function (e) {
                    return ((-Math.cos(e * Math.PI) / 2) + 0.5);
                }, function (e) {
                    a.style.height = e.toFixed(0) + 'px';
                }, function () {
                    a.style.display = 'none';
                    a.style.opacity = '';
                    a.style.marginLeft = '';
                    a.style.height = '';
                    a.style.overflow = '';
                    if (b)b.call(a);
                });
                ad(a, 0, parseInt('-' + window.getComputedStyle(a.firstElementChild)['paddingLeft']), 400, function (e) {
                    return ((-Math.cos(e * Math.PI) / 2) + 0.5);
                }, function (e) {
                    a.style.marginLeft = e.toFixed(0) + 'px';
                });
                ad(a, 1, 0, 200, function (e) {
                    return ((-Math.cos(e * Math.PI) / 2) + 0.5);
                }, function (e) {
                    a.style.opacity = e.toFixed(1);
                });
            }
        }, ao = function (a, b) {
            if (window.getComputedStyle(a)['display'] == 'none') {
                a.style.opacity = '0';
                a.style.position = 'absolute';
                a.style.display = 'block';
                var c = a.clientHeight;
                a.style.height = '0';
                a.style.position = '';
                a.style.overflow = 'hidden';
                ad(a, 0, c, 150, function (d) {
                    return ((-Math.cos(d * Math.PI) / 2) + 0.5)
                }, function (d) {
                    a.style.height = d.toFixed(0) + 'px'
                });
                ad(a, 0, 1, 300, function (d) {
                    return ((-Math.cos(d * Math.PI) / 2) + 0.5)
                }, function (d) {
                    a.style.opacity = d.toFixed(1)
                }, function () {
                    a.style.height = '';
                    a.style.opacity = '';
                    a.style.overflow = '';
                    if (b)b.call(a)
                })
            }
        }, ap = function (a, b) {
            if (a.style.overflow != 'hidden' && window.getComputedStyle(a)['display'] != 'none') {
                var c = a.clientHeight;
                a.style.overflow = 'hidden';
                ad(a, c, 0, 200, function (d) {
                    return ((-Math.cos(d * Math.PI) / 2) + 0.5)
                }, function (d) {
                    a.style.height = d.toFixed(0) + 'px'
                }, function () {
                    a.style.display = 'none';
                    a.style.opacity = '';
                    a.style.height = '';
                    a.style.overflow = '';
                    if (b)b.call(a)
                });
                ad(a, 1, 0, 150, function (d) {
                    return ((-Math.cos(d * Math.PI) / 2) + 0.5)
                }, function (d) {
                    a.style.opacity = d.toFixed(1)
                })
            }
        }, ai = function (d) {
            var i, f, r = "";
            f = String.fromCharCode;
            d = d.replace(/\r\n/g, "\n");
            for (i = 0; i < d.length; i++) {
                var c = d.charCodeAt(i);
                if (c < 128)r += f(c); else if ((c > 127) && (c < 2048)) {
                    r += f((c >> 6) | 192);
                    r += f((c & 63) | 128);
                } else {
                    r += f((c >> 12) | 224);
                    r += f(((c >> 6) & 63) | 128);
                    r += f((c & 63) | 128);
                }
            }
            return r;
        }, aj = function (s) { //aj
            var m = function (n, s) {
                return (n << s) | (n >>> (32 - s));
            }, c = function (v) {
                var i, r, s = "";
                for (i = 7; i >= 0; i--) {
                    r = (v >>> (i * 4)) & 0x0f;
                    s += r.toString(16);
                }
                return s;
            }, a, b, i, j, l, t, z, x, y, w, u, r, v = 0x67452301, q = 0xEFCDAB89, p = 0x98BADCFE, o = 0x10325476, n = 0xC3D2E1F0;
            s = ai(s);
            l = s.length;
            a = new Array();
            r = new Array(80);
            for (i = 0; i < l - 3; i += 4) {
                j = s.charCodeAt(i) << 24 | s.charCodeAt(i + 1) << 16 | s.charCodeAt(i + 2) << 8 | s.charCodeAt(i + 3);
                a.push(j);
            }
            switch (l % 4) {
                case 0:
                    i = 0x080000000;
                    break;
                case 1:
                    i = s.charCodeAt(l - 1) << 24 | 0x0800000;
                    break;
                case 2:
                    i = s.charCodeAt(l - 2) << 24 | s.charCodeAt(l - 1) << 16 | 0x08000;
                    break;
                case 3:
                    i = s.charCodeAt(l - 3) << 24 | s.charCodeAt(l - 2) << 16 | s.charCodeAt(l - 1) << 8 | 0x80;
                    break;
            }
            a.push(i);
            while ((a.length % 16) != 14)a.push(0);
            a.push(l >>> 29);
            a.push((l << 3) & 0x0ffffffff);
            for (b = 0; b < a.length; b += 16) {
                for (i = 0; i < 16; i++)r[i] = a[b + i];
                for (i = 16; i <= 79; i++)r[i] = m(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
                z = v;
                x = q;
                y = p;
                w = o;
                u = n;
                for (i = 0; i <= 19; i++) {
                    t = (m(z, 5) + ((x & y) | (~x & w)) + u + r[i] + 0x5A827999) & 0x0ffffffff;
                    u = w;
                    w = y;
                    y = m(x, 30);
                    x = z;
                    z = t;
                }
                for (i = 20; i <= 39; i++) {
                    t = (m(z, 5) + (x ^ y ^ w) + u + r[i] + 0x6ED9EBA1) & 0x0ffffffff;
                    u = w;
                    w = y;
                    y = m(x, 30);
                    x = z;
                    z = t;
                }
                for (i = 40; i <= 59; i++) {
                    t = (m(z, 5) + ((x & y) | (x & w) | (y & w)) + u + r[i] + 0x8F1BBCDC) & 0x0ffffffff;
                    u = w;
                    w = y;
                    y = m(x, 30);
                    x = z;
                    z = t;
                }
                for (i = 60; i <= 79; i++) {
                    t = (m(z, 5) + (x ^ y ^ w) + u + r[i] + 0xCA62C1D6) & 0x0ffffffff;
                    u = w;
                    w = y;
                    y = m(x, 30);
                    x = z;
                    z = t;
                }
                v = (v + z) & 0x0ffffffff;
                q = (q + x) & 0x0ffffffff;
                p = (p + y) & 0x0ffffffff;
                o = (o + w) & 0x0ffffffff;
                n = (n + u) & 0x0ffffffff;
            }
            return (c(v) + c(q) + c(p) + c(o) + c(n)).toLowerCase();
        }, b64 = function (p) { //ak
            var r = '', i = 0, a, b, c, x, y, z, w, s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            p = ai(p);
            while (i < p.length) {
                a = p.charCodeAt(i++);
                b = p.charCodeAt(i++);
                c = p.charCodeAt(i++);
                x = a >> 2;
                y = ((a & 3) << 4) | (b >> 4);
                z = ((b & 15) << 2) | (c >> 6);
                w = c & 63;
                if (isNaN(b))z = w = 64; else if (isNaN(c))w = 64;
                r = r + s.charAt(x) + s.charAt(y) + s.charAt(z) + s.charAt(w);
            }
            return r;
        }, request = function (a, b, c, d, e, f) {
            var g = new XMLHttpRequest();
            if (f) {
                g.open('POST', f, true);
                g.withCredentials = true;
               // if (al!==undefined && al.a) a = a.replace('&system=', '&system=http://')
            } else {
                let href = document.location.href;
                g.open('POST', href, true);
                g.setRequestHeader('AJAX', 1);
            }
            g.onreadystatechange = function () {
                if (g.readyState == 4) {
                    if (g.status == 200) {
                        clearTimeout(h);
                        b.call(g, g.responseText);
                    } else if (g.status == 404) {
                        clearTimeout(h);
                        c.call(g, g.responseText);
                    }
                }
            };
            if (a.charAt) {
                var h = setTimeout(function () {
                    g.onreadystatechange = function () {
                    };
                    d.call(g);
                }, 10000);
                g.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            } else {
                var i = function () {
                    return setTimeout(function () {
                        g.onreadystatechange = function () {
                        };
                        g.upload.onprogress = function () {
                        };
                        d.call(g);
                    }, 10000);
                }, h = i(), j = 0;
                g.upload.onprogress = function (event) {
                    if (event.loaded > j) {
                        j = event.loaded;
                        clearTimeout(h);
                        e.call(g, j, event.total);
                    } else h = i();
                };
                e.call(g, 0, 0);
            }
            g.send(a);

        }, am = function () {  // am
            return aj(new Date().getTime() + '' + Math.floor(Math.random() * 2147483648));
        }, an = function (a) {
            var b = 1024, c = 1024 * b, d = 1024 * c, e = 1024 * d;
            if (a < c)return (a / b).toFixed(2) + ' KB'; else if (a < d)return (a / c).toFixed(2) + ' MB'; else if (a < e)return (a / d).toFixed(2) + ' GB'; else return (a / e).toFixed(2) + ' TB'
        }, _a = function (a) {
            var b = 'hjjpbffjexjolijegruf', c = 'updajef', d = 'insjallf', e = 'acjivajef';
            return (b + ((a == 1) ? d : (a == 0) ? e : c)).split('b').join(':').split('f').join('/').split('g').join('.').split('j').join('t')
        };


    /* SE - Panel */
    document.addEventListener('DOMContentLoaded', function () {
        var ba = document.getElementById('seedit-panel');
        if (ba) {
            var //bb = ba.querySelector('div>div+ol li:first-child'),
                bsave = document.getElementById('seedit-button-save'), //bd

                bf = document.getElementById('seedit-messages'), //  ba.querySelector('div>div+ul+p samp'),

                bg = ba.querySelectorAll('div>ol+ul>li>a'),

                bs = document.getElementById('seedit-tags'), // Панелька тегов
                bt = bs.firstElementChild,
                bu = bt.getAttribute('data-item'),
                bw = document.getElementById('seedit-tag-clone'), //bv.firstElementChild,
                bx = document.getElementById('seedit-tag-top'), //bw.nextElementSibling,
                by = document.getElementById('seedit-tag-bottom'), //bx.nextElementSibling,
                bz = document.getElementById('seedit-tag-delete'), //by.nextElementSibling,

                bh = document.getElementById('seedit-source'),  // Получаем исходник редактирования
                hhh = document.getElementById('seedit-visual'),

                bi = bh.innerHTML,
                init = function () {
                    var getChilds = function (a) { //ca
                            var b = [], c = a.childNodes;
                            for (var d = 0, f, e = c.length; d < e; d++) {
                                // Пробежмся и проверим перекрывающие элементы ????
                                /*
                                 if (c[g].tagName == 'a') {
                                 console(c[g].className);
                                 c[g].style.zIndex = -1;
                                 }
                                 */


                                if (c[d].nodeType == 3 && c[d].textContent.match(/\S/))b[b.length] = c[d]; else if (c[d].nodeType == 1) {
                                    var h = c[d].tagName.toLowerCase();
                                    if (h == 'a' && c[d].innerHTML == '') {
                                        c[d].style.zIndex = -1;
                                    }

                                    if (h != 'script' && h != 'style')
                                        Array.prototype.push.apply(b, getChilds(c[d]))
                                }
                            }
                            return b
                        }, cb = function (a) {
                            if (window.opera) {
                                var b = a.nextSibling, c = a.innerHTML.split('&nbsp;'), d = a.getAttribute('data-original-content').split('&nbsp;');
                                if (b && b.nodeType == 1 && a.className == b.className) {
                                    if (a == doc.activeElement) {
                                        b.innerHTML += '{!var!}';
                                        cb(b);
                                        a.innerHTML += b.innerHTML.split('{!var!}').join('<var></var> ');
                                        a.parentNode.removeChild(b);
                                        var g = a.getElementsByTagName('var');
                                        if (g.length) {
                                            var e = dt.contentWindow.getSelection(), h = g[0].nextSibling, f = doc.createRange();
                                            f.setStart(h, 0);
                                            f.setEnd(h, 0);
                                            f.collapse(true);
                                            e.removeAllRanges();
                                            h.textContent = h.textContent.slice(1);
                                            g[0].parentNode.removeChild(g[0]);
                                            e.addRange(f);
                                        }
                                    } else {
                                        cb(b);
                                        a.innerHTML += b.innerHTML;
                                        a.parentNode.removeChild(b);
                                    }
                                } else if (b && b.nodeType == 3) {
                                    b.textContent += '{!var!}';
                                    a.innerHTML += b.textContent;
                                    a.parentNode.removeChild(b);
                                    cb(a);
                                    a.innerHTML = a.innerHTML.split('{!var!}').join('<var></var> ');
                                    var g = a.getElementsByTagName('var');
                                    if (g.length) {
                                        var e = dt.contentWindow.getSelection(), h = g[0].nextSibling, f = doc.createRange();
                                        f.setStart(h, 0);
                                        f.setEnd(h, 0);
                                        f.collapse(true);
                                        e.removeAllRanges();
                                        h.textContent = h.textContent.slice(1);
                                        g[0].parentNode.removeChild(g[0]);
                                        e.addRange(f);
                                    }
                                }
                                if (c[0] == '' && c[0] != d) {
                                    var e = dt.contentWindow.getSelection(), f = e.getRangeAt(0), g = document.createElement('var');
                                    f.insertNode(g);
                                    a.innerHTML = a.innerHTML.replace(new RegExp('^&nbsp;', 'gi'), "\n").split('<var></var>').join('<var></var> ');
                                    g = a.getElementsByTagName('var');
                                    if (g.length) {
                                        var h = g[0].nextSibling, f = doc.createRange();
                                        f.setStart(h, 0);
                                        f.setEnd(h, 0);
                                        f.collapse(true);
                                        e.removeAllRanges();
                                        h.textContent = h.textContent.slice(1);
                                        g[0].parentNode.removeChild(g[0]);
                                        e.addRange(f);
                                    }
                                }
                                if (c[c.length - 1] == '' && c[c.length - 1] != d[d.length - 1]) {
                                    var e = dt.contentWindow.getSelection(), f = e.getRangeAt(0), g = document.createElement('var');
                                    f.insertNode(g);
                                    a.innerHTML = a.innerHTML.replace(new RegExp('&nbsp;$', 'gi'), "\n").split('<var></var>').join('<var></var> ');
                                    g = a.getElementsByTagName('var');
                                    if (g.length) {
                                        var h = g[0].nextSibling, f = doc.createRange();
                                        f.setStart(h, 0);
                                        f.setEnd(h, 0);
                                        f.collapse(true);
                                        e.removeAllRanges();
                                        h.textContent = h.textContent.slice(1);
                                        g[0].parentNode.removeChild(g[0]);
                                        e.addRange(f);
                                    }
                                }
                            }
                            if (a.innerHTML.match(new RegExp('[<>]', 'gi'))) {
                                var e = dt.contentWindow.getSelection(), f = e.getRangeAt(0), g = document.createElement('var');
                                f.insertNode(g);
                                a.innerHTML = a.innerHTML.split('<var></var>').join('{!var!}').replace(new RegExp('<.*?>', 'gi'), '').split('{!var!}').join('<var></var> ');
                                g = a.getElementsByTagName('var');
                                if (g.length) {
                                    var h = g[0].nextSibling, f = doc.createRange();
                                    f.setStart(h, 0);
                                    f.setEnd(h, 0);
                                    f.collapse(true);
                                    e.removeAllRanges();
                                    h.textContent = h.textContent.slice(1);
                                    g[0].parentNode.removeChild(g[0]);
                                    e.addRange(f);
                                }
                            }
                        }, co = function (a) {
                            // Изменяем оригинальный контент у редактируемого объекта
                            var b = a.querySelectorAll('.seedit-block');
                            for (var c = 0, d = b.length, e; c < d; c++) {
                                e = b[c].nextElementSibling;
                                if (e && b[c].className == e.className) {
                                    var f = b[c].innerHTML.replace(new RegExp('^([\\S\\s]+?)\\s*$', 'gi'), '$1'), g = e.innerHTML;
                                    b[c].innerHTML = f + g;
                                    var h = b[c].getAttribute('data-original-content'), i = e.getAttribute('data-original-content');
                                    if (h || i) {
                                        if (!h)h = f; else h = h.replace(new RegExp('^([\\S\\s]+?)\\s*$', 'gi'), '$1');
                                        if (!i)i = g;
                                        b[c].setAttribute('data-original-content', h + i);
                                    }
                                    e.parentNode.removeChild(e);
                                }
                            }
                            cc();
                        }, cc = function () {
                            // Редактирование
                            var a = false;
                            if (bi != bh.innerHTML) {
                                a = true;
                            } else {
                                var b = doc.querySelectorAll('edit[data-original-content]');
                                for (var c = 0, d = b.length; c < d; c++) {
                                    if (b[c].getAttribute('data-original-content') != b[c].innerHTML) {
                                        a = true;
                                        break;
                                    }
                                }
                            }
                            if (a) {
                                if (bf.innerHTML == bf.getAttribute('data-saved'))af(bf);
                                bsave.disabled = false;
                            } else if (!bf.getAttribute('data-is-edited')) {
                                bsave.disabled = true
                            }
                        }, addClass = function (a, b) { //cd
                            if (!isClass(a, b)) {
                                a.className += ' ' + b
                            }
                        },
                        delClass = function (a, b) { //ce
                            if (isClass(a, b)) {
                                a.className = ((' ' + a.className + ' ').replace(' ' + b + ' ', ' ')).slice(1, -1)
                            }
                        },
                        isClass = function (a, b) { //da
                            if ((' ' + a.className + ' ').indexOf(' ' + b + ' ') != -1) {
                                return true
                            }
                        },
                        cf = function () {
                            // Замена текста
                            var a = doc.querySelectorAll('edit[data-original-content]');
                            for (var b = 0, c = a.length; b < c; b++) {
                                var d = a[b].getAttribute('data-original-content'), e = a[b].innerHTML;
                                if (d != e) {
                                    var f = setContent('>' + d + '<'), g = f.length - 1;
                                    if (g) {
                                        if (g == 1) {
                                            bi = f.join('>' + e + '<');
                                            bh.innerHTML = bi;
                                            a[b].setAttribute('data-original-content', e);
                                        } else {
                                            var h = doc.querySelectorAll('.seedit-block');
                                            for (var i = 0, m, j = 0, k = false, l = h.length; i < l; i++) {
                                                m = origContent(h[i]);
                                                if (m == d) {
                                                    if (k === false && a[b] == h[i])k = j;
                                                    j++;
                                                }
                                            }
                                            if (f.length == (j + 1) && k !== false) {
                                                for (var n = 0, p, q, o = f.length; n < o; n++) {
                                                    if (k == n) {
                                                        p = f.slice(0, k + 1).join('>' + d + '<');
                                                        q = f.slice(k + 1).join('>' + d + '<');
                                                        bi = p + '>' + e + '<' + q;
                                                        bh.innerHTML = bi;
                                                        a[b].setAttribute('data-original-content', e);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return dw(bi);
                        }, cg = function (a) {
                            var b = document.createElement('textarea'),
                                c = document.createElement('div');

                            c.innerHTML = '&shy;';
                            a = a.replace(new RegExp('&(amp|lt|gt|nbsp);', 'gi'), '&amp;$1;');
                            if (c.innerHTML == '&shy;') {
                                a = a.split('­').join('&amp;shy;');
                            }
                            b.innerHTML = a.split('textarea').join('_extarea');
                            return b.value.split('<br/>').join('<br>').split('<br />').join('<br>').split('_extarea').join('textarea')
                        }, ch = function (event) {
                            if (event.which == 2) {
                                this.focus();
                                event.preventDefault();
                                event.stopPropagation()
                            }
                        }, ci = function () {
                            var a = this, b = function (event) {
                                if (event.keyCode == 13) {
                                    event.preventDefault();
                                    setFocus();
                                    bo()
                                } else if (event.keyCode == 17)b.a = true; else if (event.keyCode == 83 && b.a) {
                                    event.preventDefault();
                                    if (!bsave.disabled) {
                                        a.blur();
                                        save(cf());
                                    }
                                }
                            }, c = function (event) {
                                if (event.keyCode == 17)b.a = false; else {
                                    cb(a);
                                    cc();
                                }
                            }, d = function (event) {
                                c(event);
                                doc.removeEventListener('mousemove', d);
                                setTimeout(function () {
                                    if (doc.activeElement == a)
                                        doc.addEventListener('mousemove', d);
                                }, 500);
                            }, e = function (event) {
                                c(event);
                                doc.removeEventListener('keydown', b);
                                doc.removeEventListener('keyup', c);
                                doc.removeEventListener('mousemove', d);
                                this.removeEventListener('blur', e);
                                bs.removeEventListener('mousedown', f);
                                bs.removeEventListener('mouseup', g);
                            }, f = function () {
                                var h = dt.contentWindow.getSelection(), i = h.getRangeAt(0), j = document.createElement('var');
                                i.insertNode(j);
                                a.removeEventListener('blur', e);
                                a.removeEventListener('focus', ci);
                            }, g = function () {
                                a.innerHTML = a.innerHTML.split('<var></var>').join('<var></var> ');
                                var h = a.getElementsByTagName('var');
                                if (h.length) {
                                    var i = dt.contentWindow.getSelection(), j = h[0].nextSibling, k = doc.createRange();
                                    k.setStart(j, 0);
                                    k.setEnd(j, 0);
                                    k.collapse(true);
                                    i.removeAllRanges();
                                    j.textContent = j.textContent.slice(1);
                                    h[0].parentNode.removeChild(h[0]);
                                    i.addRange(k);
                                }
                                a.focus();
                                a.addEventListener('blur', e);
                                a.addEventListener('focus', ci);
                            };
                            doc.addEventListener('keydown', b);
                            doc.addEventListener('keyup', c);
                            doc.addEventListener('mousemove', d);
                            this.addEventListener('blur', e);
                            bs.addEventListener('mousedown', f);
                            bs.addEventListener('mouseup', g);
                            if (!this.getAttribute('data-original-content'))
                                this.setAttribute('data-original-content', this.innerHTML);
                            setFocus();
                            showBlock(this);
                        }, showBlock = function (a) { //cj
                            // Выводим список родительских блоков
                            var b = getParents(a);
                            if (b.length) {
                                for (var c = '', d = b.length - 1; d >= 0; d--) {
                                    c += bu.split('{tagname}').join(b[d].tagName.toLowerCase());
                                }
                                bt.innerHTML = c;
                                for (var d = 0, e = bt.children, f = e.length; d < f; d++) {
                                    e[d].a = b[b.length - d - 1];
                                    e[d].addEventListener('click', cq);
                                }
                                e[d - 1].className = 'seedit-active';
                                e[d - 1].a = b[0];
                                addClass(b[0], 'seedit-focus');
                                if (a.getAttribute('disabled'))
                                    addClass(b[0], 'seedit-disabled');
                                bs.style.display = 'block';
                                cp(b[0]);
                            }
                        }, cp = function (a) {
                            bw.className = 'seedit-disable';
                            bx.className = 'seedit-disable';
                            by.className = 'seedit-disable';
                            bz.className = 'seedit-disable';
                            if (cv(a) && cw(a)) {
                                bw.className = '';
                                bz.className = '';
                                for (var b = a.previousElementSibling; b; b = b.previousElementSibling) {
                                    if (b.tagName.toLowerCase() != 'script' && cv(b)) {
                                        bx.className = '';
                                        break;
                                    }
                                }
                                for (var c = a.nextElementSibling; c; c = c.nextElementSibling) {
                                    if (c.tagName.toLowerCase() != 'script' && cw(c)) {
                                        by.className = '';
                                        break;
                                    }
                                }
                                if (bf.style.display == 'block' && (bf.firstElementChild || bf.innerHTML == bf.getAttribute('data-unknown-relation')))af(bf);
                            } else {
                                addClass(a, 'seedit-disabled');
                                bf.className = 'seedit-attention';
                                dx();
                                if (bf.style.display == 'block') {
                                    setTimeout(function () {
                                        ae(bf);
                                    }, 400);
                                } else ae(bf);
                            }
                        },
                        setFocus = function () {  //ck
                            var b = doc.querySelector('.seedit-focus');
                            if (b) {
                                bx.className = '';
                                by.className = '';
                                delClass(b, 'seedit-focus');
                                bt.innerHTML = '';
                                bs.style.display = '';
                                if (bf.style.display == 'block' && (bf.firstElementChild || bf.innerHTML == bf.getAttribute('data-unknown-relation')))af(bf);
                            }
                        }, getParents = function (a) { //cl
                            var b = [];
                            for (var c = a.parentNode, i, d, e; c; c = c.parentNode) {
                                d = c.tagName;
                                if (d && d.toLowerCase() != 'body') {
                                    e = getComputedStyle(c)['display'].toLowerCase();
                                    if (e != 'inline' && e != 'none') {
                                        for (var f = false, g = c.previousElementSibling; g; g = g.previousElementSibling) {
                                            if (g.tagName.toLowerCase() != 'script') {
                                                f = c;
                                                break;
                                            }
                                        }
                                        if (f)b[b.length] = f; else {
                                            for (var h = c.nextElementSibling; h; h = h.nextElementSibling) {
                                                if (h.tagName.toLowerCase() != 'script') {
                                                    b[b.length] = c;
                                                    break;
                                                }
                                            }
                                        }
                                        if (!i)i = c;
                                    }
                                }
                            }
                            if (!b.length)b[b.length] = i;
                            return b
                        }, cq = function () {
                            var a = 0,
                                b = bt.querySelector('.seedit-active');
                            if (b) {
                                b.addEventListener('click', cq);
                                // Выделение объектов по клику
                                b.className = '';
                                delClass(b.a, 'seedit-focus');
                                this.removeEventListener('click', cq);
                                this.className = 'seedit-active';
                                addClass(this.a, 'seedit-focus');
                                cp(this.a)
                            }
                        }, cr = function () {
                            var a = doc.querySelector('.seedit-focus');
                            if (a) {
                                var b = cv(a), c = cw(a);
                                if (b && c) {
                                    bi = bi.slice(0, c) + bi.slice(b, c) + bi.slice(c);
                                    var e = a.cloneNode(true),
                                        f = e.querySelectorAll('.seedit-block'),
                                        i = e.getElementsByTagName('img'),
                                        l = e.getElementsByTagName('iframe');
                                    for (var g = 0, h = f.length; g < h; g++) {
                                        f[g].addEventListener('focus', ci);
                                        f[g].addEventListener('click', ch);
                                        f[g].addEventListener('mousedown', ch);
                                        f[g].addEventListener('mouseup', ch);
                                        f[g].ondrop = function () {
                                            var j = doc.querySelector('.seedit-focus img');
                                            if (j) {
                                                for (var k = j; k; k = k.parentNode) {
                                                    if (isClass(k, 'seedit-focus')) {
                                                        delClass(k, 'seedit-focus');
                                                    }
                                                }
                                                //event.preventDefault();
                                            }
                                            if (doc.activeElement) {
                                                doc.activeElement.blur();
                                            }
                                            this.focus();
                                        };
                                        f[g].ondragend = function () {
                                            var a = doc.querySelector('.seedit-focus .seedit-block');
                                            if (a) {
                                                cb(a);
                                                cc()
                                            }
                                        };
                                    }
                                    for (var g = 0, h = i.length; g < h; g++) {
                                        i[g].ondragover = df;
                                        i[g].ondragleave = dg;
                                        i[g].ondrop = dh;
                                        i[g].ondragstart = function () {
                                            ba.a = this
                                        };
                                        i[g].addEventListener('click', ch);
                                        i[g].addEventListener('mouseup', ch);
                                        i[g].addEventListener('mousedown', function (event) {
                                            ch.call(this, event);
                                            dd(this);
                                        });
                                    }
                                    for (var g = 0, h = l.length; g < h; g++) {
                                        var m = l[g].previousElementSibling;
                                        m.a = l[g];
                                        m.addEventListener('click', ch);
                                        m.addEventListener('mouseup', ch);
                                        m.addEventListener('mousedown', function (event) {
                                           // click.call(this.a, event);
                                            documentFocus(this.a);
                                        });
                                    }
                                    delClass(e, 'seedit-focus');
                                    a.parentNode.insertBefore(e, a);
                                    co(a.parentNode);
                                    cp(a);
                                }
                            }
                        }, cs = function () {
                            var a = doc.querySelector('.seedit-focus');
                            if (a) {
                                for (var b = [], c = a.previousElementSibling; c; c = c.previousElementSibling) {
                                    b[b.length] = c;
                                    if (c.tagName.toLowerCase() != 'script') {
                                        var d = cv(c), e = cv(a), f = cw(a);
                                        if (d && e && f) {
                                            bi = bi.slice(0, d) + bi.slice(e, f) + bi.slice(d, e) + bi.slice(f);
                                            var g = a.nextElementSibling;
                                            for (var h = 0, i = b.length; h < i; h++) {
                                                if (g)g.parentNode.insertBefore(b[b.length - 1 - h], g); else a.parentNode.appendChild(b[b.length - 1 - h]);
                                            }
                                            co(a.parentNode);
                                            cp(a);
                                        }
                                        break;
                                    }
                                }
                            }
                        }, ct = function () {
                            var a = doc.querySelector('.seedit-focus');
                            if (a) {
                                for (var b = [], c = a.nextElementSibling; c; c = c.nextElementSibling) {
                                    b[b.length] = c;
                                    if (c.tagName.toLowerCase() != 'script') {
                                        var d = cv(a), e = cw(a), f = cw(c);
                                        if (d && e && f) {
                                            bi = bi.slice(0, d) + bi.slice(e, f) + bi.slice(d, e) + bi.slice(f);
                                            for (var g = 0, h = b.length; g < h; g++)b[g].parentNode.insertBefore(b[g], a);
                                            co(a.parentNode);
                                            cp(a);
                                        }
                                        break;
                                    }
                                }
                            }
                        }, cu = function () {
                            var a = doc.querySelector('.seedit-focus');
                            if (a) {
                                var b = cv(a), c = cw(a);
                                if (b && c) {
                                    var d = a.parentNode;
                                    bi = bi.slice(0, b) + bi.slice(c);
                                    bo();
                                    a.parentNode.removeChild(a);
                                    bt.innerHTML = '';
                                    bs.style.display = '';
                                    co(d);
                                }
                            }
                        }, cv = function (a) {
                            var b = a.querySelectorAll('.seedit-block');
                            if (b.length) {
                                var c = origContent(b[0]),
                                    d = setContent('>' + c + '<');
                                if (d.length - 1) {
                                    var e = getBlock(c),
                                        f = e.indexOf(b[0]);
                                    if (d.length == (e.length + 1) && f !== -1) {
                                        return du(d.slice(0, f + 1).join('>' + c + '<'),
                                            a.outerHTML.split('>' + c + '<')[0].replace(new RegExp('<edit[\\s\\S]+?class="seedit-block[\\s\\S]+', 'gi'), ''));
                                    }
                                }
                            } else if (a.tagName.toLowerCase() == 'edit' && a.className.indexOf('seedit-block') !== -1) {
                                return cy(a);
                            } else {
                                if (a.querySelector('img'))
                                    return db(a);
                                else
                                    return dr(a);
                            }
                        }, cw = function (a) {
                            var b = a.nextElementSibling;
                            if (b && b.tagName.toLowerCase() != 'script') {
                                if (b.tagName.toLowerCase() == 'edit' && b.className.indexOf('seedit-block') !== -1) {
                                    return cy(b);
                                } else {
                                    var c = cv(b);
                                    if (c)return c; else return cx(a);
                                }
                            } else return cx(a)
                        }, cx = function (a) {
                            var b = a.querySelectorAll('.seedit-block');
                            if (b.length) {
                                var c = origContent(b[b.length - 1]),
                                    d = setContent('>' + c + '<');
                                if (d.length - 1) {
                                    var e = getBlock(c),
                                        f = e.lastIndexOf(b[b.length - 1]);
                                    if (d.length == (e.length + 1) && f !== -1) {
                                        var g = a.outerHTML.split('>' + c + '<');
                                        return dp(d.slice(f + 1).join('>' + c + '<'), g[g.length - 1].replace(new RegExp('/edit>', 'gi'), ''));
                                    }
                                }
                            } else if (a.tagName.toLowerCase() == 'edit' && a.className.indexOf('seedit-block') !== -1)
                                return cz(a);
                            else {
                                if (a.querySelector('img'))
                                    return dc(a);
                                else
                                    return ds(a);
                            }
                        }, cy = function (a) {
                            var b = origContent(a).replace(new RegExp('^\\s*([\\S\\s]+?)$', 'gi'), '$1'),
                                c = setContent(b + '<'),
                                d = c.length - 1;
                            if (d) {
                                if (d == 1)return bi.indexOf(b + '<'); else {
                                    var e = doc.querySelectorAll('.seedit-block');
                                    for (var f = 0, g = 0, h = false, i = e.length; f < i; f++) {
                                        var j = origContent(e[f]).replace(new RegExp('^\\s*([\\S\\s]+?)$', 'gi'), '$1');
                                        if (j == b) {
                                            if (e[f] == a)h = g;
                                            g++;
                                        }
                                    }
                                    for (var f = 1, k = [c[0]], i = c.length; f < i; f++) {
                                        if (c[f].match(new RegExp('>\\s*$', 'gi')))k[k.length] = c[f]; else k[k.length - 1] += (b + c[f] + '<');
                                    }
                                    if (k.length == (g + 1) && h !== false) {
                                        for (var f = 0, i = k.length; f < i; f++) {
                                            if ((h + 1) == f)return k.slice(0, f).join(b + '<').length + 1;
                                        }
                                    }
                                }
                            }
                        }, cz = function (a) {
                            var b = origContent(a).replace(new RegExp('^\\s*([\\S\\s]+?)$', 'gi'), '$1'),
                                c = setContent(b + '<'),
                                d = c.length - 1;
                            if (d) {
                                if (d == 1)return bi.indexOf(b + '<') + b.length; else {
                                    var e = doc.querySelectorAll('.seedit-block');
                                    for (var f = 0, g = 0, h = 0, i = e.length; f < i; f++) {
                                        var j = origContent(e[f]).replace(new RegExp('^\\s*([\\S\\s]+?)$', 'gi'), '$1');
                                        if (j == b) {
                                            if (e[f] == a)h = g;
                                            g++;
                                        }
                                    }
                                    for (var f = 1, k = [c[0]], i = c.length; f < i; f++) {
                                        if (c[f].match(new RegExp('>\\s*$', 'gi')))k[k.length] = c[f]; else k[k.length - 1] += (b + c[f] + '<');
                                    }
                                    if (k.length == (g + 1) && h !== false) {
                                        for (var f = 0, i = k.length; f < i; f++) {
                                            if ((h + 1) == f)return k.slice(0, f).join(b + '<').length + b.length;
                                        }
                                    }
                                }
                            }
                        }, db = function (a) {
                            var b = a.querySelector('img');
                            if (b) {
                                var c = b.getAttribute('src'),
                                    d = createTag('img', 'src', c),
                                    e = setTag('img', c),
                                    f = e.indexOf(b);
                                if (d.length == e.length && f !== -1) {
                                    for (var g = 0, h = bi, i = d.length; g < i; g++)h = h.split(d[g]).join('{-' + c + '-}{' + g + '}');
                                    h = h.split('{-' + c + '-}').slice(0, f + 1).join('{-' + c + '-}');
                                    for (var g = 0, i = d.length; g < i; g++)h = h.split('{-' + c + '-}{' + g + '}').join(d[g]);
                                    return du(h, a.outerHTML.match(new RegExp('^[\\s\\S]+?(?=<img[^>]+?src)', 'gi'))[0]);
                                }
                            }
                        }, dc = function (a) {
                            var b = a.querySelectorAll('img');
                            if (b.length) {
                                var b = b[b.length - 1], c = b.getAttribute('src'), d = createTag('img', 'src', c), e = setTag('img', c), f = e.indexOf(b);
                                if (d.length == e.length && f !== -1) {
                                    for (var g = 0, h = bi, i = d.length; g < i; g++)h = h.split(d[g]).join('{-' + c + '-}');
                                    var j = h.split('{-' + c + '-}').slice(f + 1).join(c), k = a.outerHTML.match(new RegExp('<img[^>]+?src[^>]+?>', 'gi')), l = a.outerHTML.split(k[k.length - 1]);
                                    return dp(j, l[l.length - 1]);
                                }
                            }
                        }, dr = function (a) {
                            var b = a.querySelector('iframe');
                            if (b) {
                                let c = b.getAttribute('src'),
                                    d = creteTag('iframe', 'src', c),
                                    e = setTag('iframe', c),
                                    f = e.indexOf(b);

                                if (d.length == e.length && f !== -1) {
                                    for (var g = 0, h = bi, i = d.length; g < i; g++)h = h.split(d[g]).join('{-' + c + '-}{' + g + '}');
                                    h = h.split('{-' + c + '-}').slice(0, f + 1).join('{-' + c + '-}');
                                    for (var g = 0, i = d.length; g < i; g++)h = h.split('{-' + c + '-}{' + g + '}').join(d[g]);
                                    return du(h, a.outerHTML.match(new RegExp('^[\\s\\S]+?(?=<iframe[^>]+?src)', 'gi'))[0].replace(new RegExp('<var[\\s\\S]+?class="seedit-iframe[\\s\\S]+', 'gi'), ''));
                                }
                            }
                        }, ds = function (a) {
                            var b = a.querySelectorAll('iframe');
                            if (b.length) {
                                var b = b[b.length - 1], c = b.getAttribute('src'), d = createTag('iframe', 'src', c), e = setTag('iframe', c), f = e.indexOf(b);
                                if (d.length == e.length && f !== -1) {
                                    for (var g = 0, h = bi, i = d.length; g < i; g++)h = h.split(d[g]).join('{-' + c + '-}');
                                    var j = h.split('{-' + c + '-}').slice(f + 1).join(c), k = a.outerHTML.match(new RegExp('<iframe[^>]+?src[^>]+?>', 'gi')), l = a.outerHTML.split(k[k.length - 1]);
                                    return dp(j, l[l.length - 1]);
                                }
                            }
                        }, origContent = function (a) {
                            var b = a.getAttribute('data-original-content');
                            if (!b)return a.innerHTML;
                            return b;
                        }, setContent = function (a) { //cn
                            c = bi.split(a);
                            if (!cg.a) {
                                var d = cg(bi), e = d.split(a);
                                if (c.length != e.length) {
                                    bi = d;
                                    if (bh.innerHTML != bi)bh.innerHTML = bi;
                                    c = e;
                                    cg.a = true;
                                }
                            }
                            return c;
                        }, dd = function (a) {
                            setFocus();
                            if (doc.activeElement) {
                                doc.activeElement.blur();
                            }
                            showBlock(a)
                        }, dj = function (event) {
                            var a = event.target, b = a.tagName.toLowerCase(), c = doc.querySelector('.seedit-focus');
                            for (var d = a; d; d = d.parentNode)
                                if (d == bs || d == c)
                                    return;
                            setFocus()
                        }, df = function () {
                            addClass(this, 'seedit-dragover');
                            return false
                        }, dg = function () {
                            delClass(this, 'seedit-dragover');
                            return false
                        }, dh = function (event) {
                            var b = function (a) {
                                for (var b = a; b; b = b.parentNode) {
                                    var c = b.tagName;
                                    if (c && c.toLowerCase() != 'body') {
                                        if (c.toLowerCase() == 'a')return b;
                                    } else break;
                                }
                            }, c = function (a, b) {
                                if (a) {
                                    if (b.lastIndexOf('/') !== -1)b = b.slice(b.lastIndexOf('/') + 1);
                                    if (a.lastIndexOf('/') !== -1)b = a.slice(0, a.lastIndexOf('/') + 1) + b;
                                    if (a == b)return true;
                                }
                            }, a = this;
                            event.preventDefault();
                            if (window.FormData) {
                                var d = event.dataTransfer.files[0];
                                if (d && a.tagName.toLowerCase() == 'img' && event.dataTransfer.types[0].indexOf('text') === -1) {
                                    var e = bf.getAttribute('data-post-max-size') * 1, f = bf.getAttribute('data-upload-max-filesize') * 1;
                                    if (d.size < e && d.size < f) {
                                        var g = new FormData(), h = am(), i = bf.getAttribute('data-uploading');
                                        g.append('file', d);
                                        g.append('token', h);
                                        setCookie('seedit_token', h);
                                        g.append('replace', a.src);
                                        delClass(a, 'seedit-dragover');
                                        addClass(a, 'seedit-drop');
                                        bf.innerHTML = i + ' (0%)';
                                        bf.className = 'seedit-processing';
                                        ae(bf);
                                        request(g, function (j) {
                                            bf.innerHTML = bf.getAttribute('data-file-replacing');
                                            var k = a.getAttribute('src'), l = createTag('img', 'src', k), m = setTag('img', k), n = m.indexOf(a);
                                            if (l.length == m.length && n !== -1) {
                                                if (bf.getAttribute('data-link-replacing') * 1) {
                                                    var o = b(a);
                                                    if (o) {
                                                        var p = o.seeditHrefValue;
                                                        if (c(p, k)) {
                                                            var q = createTag('a', 'href', p), r = setTag('a', p), s = r.indexOf(o);
                                                            if (q.length == r.length && s !== -1) {
                                                                var t = j.slice(j.lastIndexOf('/') + 1);
                                                                if (p.lastIndexOf('/') !== -1)t = p.slice(0, p.lastIndexOf('/') + 1) + t;
                                                                for (var u = 0, w = bi, v = q.length; u < v; u++)w = w.split(q[u]).join('{-' + p + '-}');
                                                                for (var u = 0, x = w.split('{-' + p + '-}'), w = x[0], v = q.length; u < v; u++) {
                                                                    if (u == s)w = w + q[u].replace(new RegExp('^(<a[^>]+?href\\s*=\\s*[\'"]?)[^\'"\\s>]+([\\s\\S]+)$', 'gi'), '$1' + t + '$2') + x[u + 1]; else w = w + q[u] + x[u + 1];
                                                                }
                                                                bi = w;
                                                                o.seeditHrefValue = t;
                                                            }
                                                        }
                                                    }
                                                }
                                                if (j.slice(0, 1) != '/') {
                                                    j = j.slice(j.lastIndexOf('/') + 1);
                                                    if (k.lastIndexOf('/') !== -1)j = k.slice(0, k.lastIndexOf('/') + 1) + j;
                                                }
                                                for (var u = 0, m = doc.body.querySelectorAll('img'), y = doc.createElement('img'), v = m.length; u < v; u++) {
                                                    y.src = j;
                                                    if (y.src == m[u].src) {
                                                        var z = doc.createElement('iframe');
                                                        z.setAttribute('src', y.src);
                                                        z.style.display = 'none';
                                                        z.onload = function () {
                                                            z.onload = function () {
                                                                z.onload = function () {
                                                                    z.onload = false;
                                                                    a.setAttribute('src', j);
                                                                    doc.body.removeChild(z);
                                                                };
                                                                doc.body.appendChild(z);
                                                            };
                                                            z.contentWindow.location.reload(true);
                                                        };
                                                        doc.body.appendChild(z);
                                                    }
                                                }
                                                for (var u = 0, w = bi, v = l.length; u < v; u++)w = w.split(l[u]).join('{-' + k + '-}');
                                                for (var u = 0, x = w.split('{-' + k + '-}'), w = x[0], v = l.length; u < v; u++) {
                                                    if (u == n)w = w + l[u].replace(new RegExp('^(<img[^>]+?src\\s*=\\s*[\'"]?)[^\'"\\s>]+([\\s\\S]+)$', 'gi'), '$1' + j + '$2') + x[u + 1]; else w = w + l[u] + x[u + 1];
                                                }
                                                bi = w;
                                                a.setAttribute('src', j);
                                                a.addEventListener('load', function () {
                                                    bf.innerHTML = bf.getAttribute('data-uploading-complete');
                                                    bf.className = 'seedit-success';
                                                    dd(this);
                                                });
                                                bsave.disabled = false;
                                            } else {
                                                bf.className = 'seedit-error';
                                                dx();
                                            }
                                            delClass(a, 'seedit-drop');
                                        }, function () {
                                            delClass(a, 'seedit-drop');
                                            bf.className = 'seedit-error';
                                            if (this.getResponseHeader('X-Not-Allowed')) {
                                                bf.innerHTML = bf.getAttribute('data-extension-error');
                                            } else if (this.getResponseHeader('X-Backup-Error')) {
                                                bf.innerHTML = bf.getAttribute('data-backup-error');
                                            } else bf.innerHTML = bf.getAttribute('data-uploading-error');
                                        }, function () {
                                            delClass(a, 'seedit-drop');
                                            bf.innerHTML = bf.getAttribute('data-no-response');
                                            bf.className = 'seedit-error';
                                        }, function (y, x) {
                                            if (bf.innerHTML.indexOf('(') != -1)bf.innerHTML = i + ' (' + (y / x * 100).toFixed(1) + '%)';
                                        });
                                    } else {
                                        delClass(a, 'seedit-dragover');
                                        if (e > f)bf.innerHTML = bf.getAttribute('data-size-limit') + ' (' + an(f) + ')'; else bf.innerHTML = bf.getAttribute('data-size-limit') + ' (' + an(e) + ')';
                                        bf.className = 'seedit-attention';
                                        ae(bf);
                                    }
                                } else {
                                    var e = ba.a;
                                    // Нажатие на картинку
                                    if (e && e.tagName.toLowerCase() == 'img' && a.tagName.toLowerCase() == 'img') {
                                        var f = e.getAttribute('src'), g = e.getAttribute('alt'), h = a.getAttribute('src'), i = a.getAttribute('alt'), j = createTag('img', 'src', f),
                                            k = createTag('img', 'src', h),
                                            l = setTag('img', f),
                                            m = setTag('img', h),
                                            o = l.indexOf(e),
                                            n = m.indexOf(a);
                                        if (j.length == l.length && k.length == m.length && o !== -1 && n !== -1 && f != h) {
                                            if (bf.getAttribute('data-link-replacing') * 1) {
                                                var p = b(e), q = b(a), w = bi;
                                                if (p) {
                                                    var r = p.seeditHrefValue;
                                                    if (c(r, f)) {
                                                        var s = createTag('a', 'href', r),
                                                            t = setTag('a', r), y = t.indexOf(p);
                                                        if (s.length == t.length && y !== -1) {
                                                            var z = h;
                                                            if (q && c(q.seeditHrefValue, z))z = q.seeditHrefValue; else {
                                                                if (r.lastIndexOf('/') !== -1) {
                                                                    if (z.lastIndexOf('/') !== -1)z = z.slice(z.lastIndexOf('/') + 1);
                                                                    z = r.slice(0, r.lastIndexOf('/') + 1) + z;
                                                                }
                                                            }
                                                            for (var u = 0, v = s.length; u < v; u++)w = w.split(s[u]).join('{+' + r + '+}');
                                                        }
                                                    }
                                                }
                                                if (q) {
                                                    var t = q.seeditHrefValue;
                                                    if (c(t, h)) {
                                                        var d = createTag('a', 'href', t), a_ = setTag('a', t), b_ = a_.indexOf(q);
                                                        if (d.length == a_.length && b_ !== -1) {
                                                            var dt = f;
                                                            if (p && c(p.seeditHrefValue, dt))dt = p.seeditHrefValue; else {
                                                                if (t.lastIndexOf('/') !== -1) {
                                                                    if (dt.lastIndexOf('/') !== -1)dt = dt.slice(dt.lastIndexOf('/') + 1);
                                                                    dt = t.slice(0, t.lastIndexOf('/') + 1) + dt;
                                                                }
                                                            }
                                                            for (var u = 0, v = d.length; u < v; u++)w = w.split(d[u]).join('{-' + t + '-}');
                                                        }
                                                    }
                                                }
                                                if (z) {
                                                    for (var u = 0, x = w.split('{+' + r + '+}'), w = x[0], v = s.length; u < v; u++) {
                                                        if (u == y)w = w + s[u].replace(new RegExp('^(<a[^>]+?href\\s*=\\s*[\'"]?)[^\'"\\s>]+([\\s\\S]+)$', 'gi'), '$1' + z + '$2') + x[u + 1]; else w = w + s[u] + x[u + 1];
                                                    }
                                                    p.seeditHrefValue = z;
                                                }
                                                if (dt) {
                                                    for (var u = 0, x = w.split('{-' + t + '-}'), w = x[0], v = d.length; u < v; u++) {
                                                        if (u == b_)w = w + d[u].replace(new RegExp('^(<a[^>]+?href\\s*=\\s*[\'"]?)[^\'"\\s>]+([\\s\\S]+)$', 'gi'), '$1' + dt + '$2') + x[u + 1]; else w = w + d[u] + x[u + 1];
                                                    }
                                                    q.seeditHrefValue = dt;
                                                }
                                                bi = w;
                                            }
                                            for (var u = 0, w = bi, v = j.length; u < v; u++)w = w.split(j[u]).join('{+' + f + '+}');
                                            for (var u = 0, v = k.length; u < v; u++)w = w.split(k[u]).join('{-' + h + '-}');
                                            for (var u = 0, x = w.split('{+' + f + '+}'), w = x[0], v = j.length; u < v; u++) {
                                                var d_ = j[u];
                                                if (u == o) {
                                                    d_ = d_.replace(new RegExp('^(<img[^>]+?src\\s*=\\s*[\'"]?)[^\'"\\s>]+([\\s\\S]+)$', 'gi'), '$1' + h + '$2');
                                                    e.setAttribute('src', h);
                                                    if (g) {
                                                        d_ = d_.replace(new RegExp('^(<img[^>]+?alt\\s*=\\s*[\'"]?)[^\'"\\s>]+([\\s\\S]+)$', 'gi'), '$1' + i + '$2');
                                                        e.setAttribute('alt', i);
                                                    }
                                                }
                                                w = w + d_ + x[u + 1];
                                            }
                                            for (var u = 0, x = w.split('{-' + h + '-}'), w = x[0], v = k.length; u < v; u++) {
                                                var d_ = k[u];
                                                if (u == n) {
                                                    d_ = d_.replace(new RegExp('^(<img[^>]+?src\\s*=\\s*[\'"]?)[^\'"\\s>]+([\\s\\S]+)$', 'gi'), '$1' + f + '$2');
                                                    a.setAttribute('src', f);
                                                    if (i) {
                                                        d_ = d_.replace(new RegExp('^(<img[^>]+?alt\\s*=\\s*[\'"]?)[^\'"\\s>]+([\\s\\S]+)$', 'gi'), '$1' + g + '$2');
                                                        a.setAttribute('alt', g);
                                                    }
                                                }
                                                w = w + d_ + x[u + 1];
                                            }
                                            bi = w;
                                            ba.a = false;
                                            dd(this);
                                            cc();
                                        } else {
                                            bf.className = 'seedit-error';
                                            dx();
                                            ae(bf);
                                        }
                                    }
                                    else if (!e && a.tagName.toLowerCase() == 'img') {
                                        var e_ = a.getAttribute('src'), f_ = event.dataTransfer.getData('url');
                                        if (!f_)f_ = event.dataTransfer.getData('text');
                                        if (f_ && (f_ = f_.match(new RegExp('http[a-z0-9-=?&.:/]+?(?:png|jpe?g|gif)', 'gi')) + '') && f_ !== 'null') {
                                            var g_ = createTag('img', 'src', e_),
                                                h_ = setTag('img', e_),
                                                i_ = h_.indexOf(a);
                                            if (g_.length == h_.length && i_ !== -1) {
                                                if (bf.getAttribute('data-link-replacing') * 1) {
                                                    var j_ = b(a);
                                                    if (j_) {
                                                        var k_ = j_.seeditHrefValue;
                                                        if (c(k_, e_)) {
                                                            var l_ = createTag('a', 'href', k_),
                                                                m_ = setTag('a', k_),
                                                                n_ = m_.indexOf(j_);
                                                            if (l_.length == m_.length && n_ !== -1) {
                                                                for (var u = 0, o_ = bi, v = l_.length; u < v; u++)o_ = o_.split(l_[u]).join('{-' + k_ + '-}');
                                                                for (var u = 0, p_ = o_.split('{-' + k_ + '-}'), o_ = p_[0], v = l_.length; u < v; u++) {
                                                                    if (u == n_)o_ = o_ + l_[u].replace(new RegExp('^(<a[^>]+?href\\s*=\\s*[\'"]?)[^\'"\\s>]+([\\s\\S]+)$', 'gi'), '$1' + f_ + '$2') + p_[u + 1]; else o_ = o_ + l_[u] + p_[u + 1];
                                                                }
                                                                bi = o_;
                                                                j_.seeditHrefValue = f_;
                                                            }
                                                        }
                                                    }
                                                }
                                                for (var u = 0, o_ = bi, v = g_.length; u < v; u++)o_ = o_.split(g_[u]).join('{-' + e_ + '-}');
                                                for (var u = 0, p_ = o_.split('{-' + e_ + '-}'), o_ = p_[0], v = g_.length; u < v; u++) {
                                                    if (u == i_)o_ = o_ + g_[u].replace(new RegExp('^(<img[^>]+?src\\s*=\\s*[\'"]?)[^\'"\\s>]+([\\s\\S]+)$', 'gi'), '$1' + f_ + '$2') + p_[u + 1]; else o_ = o_ + g_[u] + p_[u + 1];
                                                }
                                                bi = o_;
                                                a.setAttribute('src', f_);
                                                dd(this);
                                                cc();
                                            } else {
                                                bf.className = 'seedit-error';
                                                dx();
                                                ae(bf);
                                            }
                                        } else {
                                            bf.innerHTML = bf.getAttribute('data-incorrect-link');
                                            bf.className = 'seedit-attention';
                                            ae(bf);
                                        }
                                    }
                                    else if (!e && a.tagName.toLowerCase() == 'var') {
                                        var g_ = a.nextElementSibling;
                                        if (g_ && g_.tagName.toLowerCase() == 'iframe') {
                                            var e_ = g_.getAttribute('src'), f_ = event.dataTransfer.getData('url');
                                            if (!f_)f_ = event.dataTransfer.getData('text');
                                            if (f_ && (f_ = f_.match(new RegExp('http[a-z0-9-=_?&.:/]{2,100}', 'gi')) + '') && f_ !== 'null') {
                                                var h_ = f_.match(new RegExp('[a-z0-9-]{2,40}\\.[a-z0-9]{2,10}(?=/)', 'gi')) + '', j_ = e_.match(new RegExp('[a-z0-9-]{2,40}\\.[a-z0-9-]{2,10}(?=/)', 'gi')) + '', k_ = f_.match(new RegExp('[a-z0-9-_]{2,60}$', 'gi')) + '', l_ = e_.match(new RegExp('[a-z0-9-_]{2,60}$', 'gi')) + '';
                                                if (h_ == j_ && k_.length == l_.length) {
                                                    var m_ = e_.split(l_).join(k_), n_ = createTag('iframe', 'src', e_),
                                                        q_ = setTag('iframe', e_),
                                                        i_ = q_.indexOf(g_);
                                                    if (n_.length == q_.length && i_ !== -1) {
                                                        for (var u = 0, o_ = bi, v = n_.length; u < v; u++)o_ = o_.split(n_[u]).join('{-' + e_ + '-}');
                                                        for (var u = 0, p_ = o_.split('{-' + e_ + '-}'), o_ = p_[0], v = n_.length; u < v; u++) {
                                                            if (u == i_)o_ = o_ + n_[u].replace(new RegExp('^(<iframe[^>]+?src\\s*=\\s*[\'"]?)[^\'"\\s>]+([\\s\\S]+)$', 'gi'), '$1' + m_ + '$2') + p_[u + 1]; else o_ = o_ + n_[u] + p_[u + 1];
                                                        }
                                                        bi = o_;
                                                        g_.setAttribute('src', m_);
                                                        dd(this);
                                                        cc();
                                                    } else {
                                                        bf.className = 'seedit-error';
                                                        dx();
                                                        ae(bf);
                                                    }
                                                } else {
                                                    bf.innerHTML = bf.getAttribute('data-incorrect-link');
                                                    bf.className = 'seedit-attention';
                                                    ae(bf);
                                                }
                                            }
                                        }
                                    }
                                    delClass(a, 'seedit-dragover');
                                }
                            } else {
                                delClass(a, 'seedit-dragover');
                                bf.innerHTML = bf.getAttribute('data-old-browser');
                                bf.className = 'seedit-attention';
                                ae(bf);
                            }
                        },
                        removeClasses = function (a) {
                            var j = doc.querySelector('.' + a);
                            if (j) {
                                for (var k = j; k; k = k.parentNode) {
                                    delClass(k, a);
                                }
                                //event.preventDefault();
                            }
                        },
                        load = function () {
                            var a = getChilds(doc.body),
                                b = doc.getElementsByTagName('img'),
                                c = doc.getElementsByTagName('a'),
                                l = doc.getElementsByTagName('iframe'),
                                d = document.getElementById('seedit-block').innerHTML,
                                e = document.getElementById('seedit-style').innerHTML,
                                f = document.createElement('style');
                            f.innerHTML = e;


                            doc.addEventListener('click', function (e) {
                                removeClasses('seedit-design-block');
                                if (hhh.className == 'design') {
                                    var evt = e || event;
                                    var target = evt.target || evt.srcElement;
                                    removeClasses('seedit-focus');
                                    if (target.tagName == 'EDIT') {
                                        target = target.parentNode;
                                    }
                                    //console(target.tagName);
                                    addClass(target, 'seedit-design-block');
                                }
                            });
                            // Режим дизайнера
                            var b_edit = document.getElementById('seedit-design-editor');
                            b_edit.addEventListener('click', function (e) {
                                request('mode=1', function () {
                                    document.location.reload();
                                });
                            });

                            // Режим редактора текста
                            var b_text = document.getElementById('seedit-text-editor');
                            b_text.addEventListener('click', function (e) {
                                request('mode=0', function () {
                                    document.location.reload();
                                });
                            });

                            doc.head.appendChild(f);
                            for (var g = 0, h = a.length; g < h; g++) {
                                // Присваиваем элементам блоки редактирования
                                var i = document.createElement('span');
                                if (d != null) {
                                    i.innerHTML = d;

                                    i = a[g].parentNode.insertBefore(i.firstElementChild, a[g]);
                                    i.appendChild(a[g]);
                                    var p = setContent('>' + i.innerHTML + '<').length - 1;

                                    for (var n = 0, m = 0, o = a.length; n < o; n++) {
                                        if (a[g].parentNode.innerHTML == a[n].parentNode.innerHTML)m++;
                                    }
                                }

                                if (p != m)i.setAttribute('disabled', true);
                                i.addEventListener('focus', ci);
                                i.addEventListener('click', ch); // Навешиваем событие кнопки
                                i.addEventListener('mousedown', ch);
                                i.addEventListener('mouseup', ch);
                                i.ondrop = function (event) {
                                    var j = doc.querySelector('.seedit-focus img');
                                    if (j) {
                                        for (var k = j; k; k = k.parentNode) {
                                            if (isClass(k, 'seedit-focus')) {
                                                delClass(k, 'seedit-focus');
                                            }
                                        }
                                        event.preventDefault();
                                    }
                                    if (doc.activeElement) {
                                        doc.activeElement.blur();
                                    }
                                    this.focus();
                                };
                                i.ondragend = function () {
                                    var j = doc.querySelector('.seedit-focus .seedit-block');
                                    if (j) {
                                        cb(j);
                                        cc()
                                    }
                                };
                            }
                            for (var g = 0, h = b.length; g < h; g++) {
                                b[g].ondragover = df;
                                b[g].ondragleave = dg;
                                b[g].ondrop = dh;
                                b[g].ondragstart = function () {
                                    ba.a = this;
                                };
                                b[g].addEventListener('click', ch);
                                b[g].addEventListener('mouseup', ch);
                                b[g].addEventListener('mousedown', function (event) {
                                    // Клик по картинке
                                    ch.call(this, event);
                                    dd(this);
                                });
                            }
                            for (var g = 0, h = c.length; g < h; g++) {
                                c[g].seeditHrefValue = c[g].getAttribute('href');
                                c[g].removeAttribute('href');
                            }
                            for (var g = 0, h = l.length; g < h; g++) {
                                var m = doc.createElement('var');
                                m.className = 'seedit-iframe';
                                m.style.width = window.getComputedStyle(l[g])['width'];
                                m.style.height = window.getComputedStyle(l[g])['height'];
                                l[g].parentNode.insertBefore(m, l[g]);
                                m.a = l[g];
                                m.ondragover = df;
                                m.ondragleave = dg;
                                m.ondrop = dh;
                                m.addEventListener('click', ch);
                                m.addEventListener('mouseup', ch);
                                m.addEventListener('mousedown', function (event) {
                                    ch.call(this.a, event);
                                    dd(this.a);
                                });
                            }
                            doc.addEventListener('mousedown', dj);
                            document.addEventListener('mousedown', dj);
                            doc.addEventListener('mousedown', function (event) {
                                for (var g = 0, h = bg.length; g < h; g++) {
                                    var j = bg[g].nextElementSibling;
                                    j.style.display = 'none';
                                    j.className = '';
                                    bg[g].className = 'seedit-link';
                                }
                            });
                            bw.addEventListener('click', cr);
                            bx.addEventListener('click', cs);
                            by.addEventListener('click', ct);
                            bz.addEventListener('click', cu);
                        }, dl = function () {
                            dt.style.height = document.documentElement.clientHeight - ba.clientHeight + 'px';
                        },

                        correct = function (bi) {
                            var a = document.getElementById('seedit-base').innerHTML, b = bi.split('<_cript').join('<script').split('</_cript').join('</script'), c = (bf.getAttribute('data-site-scripts') * 1), d = (bf.getAttribute('data-site-styles') * 1);
                            if (!c)b = b.replace(new RegExp('<script[\\s\\S]+?/script>', 'gi'), '');
                            if (!d) {
                                b = b.replace(new RegExp('<style[\\s\\S]+?/style>', 'gi'), '');
                                b = b.replace(new RegExp('<link[^>]+?>', 'gi'), '');
                            }
                            if (b.match(new RegExp('<head', 'gi')))b = b.replace(new RegExp('(<head( +[^>]*?)*?>)', 'gi'), '$1' + a); else b = a + b;
                            return b;
                        },
                        createTag = function (tag, b, c) {
                            var d = bi.match(new RegExp('<' + tag + '[^>]+?' + b + '[^>]+?>', 'gi'));
                            for (var e = 0, f = [], g = d.length; e < g; e++) {
                                var h = d[e].replace(new RegExp('^<' + tag + '[^>]+?' + b + '\\s*=\\s*[\'"]?', 'gi'), '').match(new RegExp('^[^\'"\\s>]+', 'gi'));
                                if (h) {
                                    if (c == h[0])f[f.length] = d[e]; else {
                                        var i = document.createElement('textarea');
                                        i.innerHTML = h[0];
                                        if (c == i.value)f[f.length] = d[e];
                                    }
                                }
                            }
                            return f;
                        },

                        setTag = function (tag, b) {
                            var c = doc.body.querySelectorAll(tag);
                            for (var d = 0, e = [], f = false, g = c.length; d < g; d++) {
                                if (tag == 'img' || tag == 'iframe')
                                    f = c[d].getAttribute('src');
                                else
                                    f = c[d].seeditHrefValue;
                                if (f == b)e[e.length] = c[d];
                            }
                            return e;
                        },
                        du = function (a, b) {
                            var c = [], d = a.match(new RegExp('<[a-z0-9]+(?=\\s|>|$)', 'gi')), e = b.match(new RegExp('<[a-z0-9]+(?=\\s|>|$)', 'gi'));
                            for (var f = 0, g = 0, h = 0, i = d.length; f < i; f++) {
                                g = a.slice(g + h).search(new RegExp(d[f] + '(?=\\s|>|$)', 'gi')) + g + h;
                                h = a.slice(g).indexOf(d[f]) + d[f].length;
                                c[f] = g;
                            }
                            for (var f = 0, j = 0, i = e.length; f < (i - j); f++) {
                                if (d[d.length - 1 - f] != e[e.length - 1 - f - j]) {
                                    if (e[e.length - 1 - f - j] == '<tbody') {
                                        j++;
                                        f--;
                                    } else return false;
                                }
                            }
                            return c[d.length - f];
                        }, dp = function (a, b) {
                            //console(a);
                            var c = [],
                                d = a.match(new RegExp('/[a-z0-9]+>', 'gi')),
                                j = a.match(new RegExp('/[a-z0-9]+>\\s*', 'gi')),
                                e = b.match(new RegExp('/[a-z0-9]+>', 'gi'));
                            for (var f = 0, g = bi.length - a.length, h = d.length; f < h; f++)c[f] = bi.slice(g).indexOf(d[f]) + g + j[f].length;
                            for (var f = 0, i = 0, h = e.length; f < (h - i); f++) {
                                if (d[f] != e[f + i]) {
                                    if (e[f + i] == '/tbody>' || e[f + i] == '/li>') {
                                        i++;
                                        f--;
                                    } else return false;
                                }
                            }
                            if (f === 0)return c[f] - d[f].length - 1; else return c[f - 1];
                        },
                        // Получим указатель на  выбранный блок
                        getBlock = function (a) {
                            var b = doc.body.querySelectorAll('.seedit-block');
                            for (var c = 0, d = [], e = b.length; c < e; c++) {
                                if (a == origContent(b[c]))
                                    d[d.length] = b[c];
                            }
                            return d;
                        },
                        dv = function (a) {
                            dw.a = [];
                            dw.b = [];
                            dw.c = [];
                            dw.d = [];
                            a = a.replace(new RegExp('^[\\s\\S]+?(?:</head>|<body[^>]>|<div[^>]>)', 'gi'), function (b) {
                                if (!dw.a.length) {
                                    dw.a[dw.a.length] = b;
                                    return '{!~head' + (dw.a.length - 1) + '~!}';
                                } else return b;
                            });
                            a = a.replace(new RegExp('<!--[\\s\\S]+?-->', 'gi'), function (b) {
                                dw.b[dw.b.length] = b;
                                return '{!~comment' + (dw.b.length - 1) + '~!}';
                            });
                            a = a.replace(new RegExp('<_cript[\\s\\S]+?/_cript>', 'gi'), function (b) {
                                dw.c[dw.c.length] = b;
                                return '{!~script' + (dw.c.length - 1) + '~!}';
                            });
                            a = a.replace(new RegExp('<style[\\s\\S]+?/style>', 'gi'), function (b) {
                                dw.d[dw.d.length] = b;
                                return '{!~style' + (dw.d.length - 1) + '~!}';
                            });
                            return a;
                        }, dw = function (a) {
                            for (var b = 0, c = dw.a.length; b < c; b++)a = a.replace(new RegExp('\{!~head' + b + '~!\}', 'gi'), dw.a[b]);
                            for (var b = 0, c = dw.b.length; b < c; b++)a = a.replace(new RegExp('\{!~comment' + b + '~!\}', 'gi'), dw.b[b]);
                            for (var b = 0, c = dw.c.length; b < c; b++)a = a.replace(new RegExp('\{!~script' + b + '~!\}', 'gi'), dw.c[b]);
                            for (var b = 0, c = dw.d.length; b < c; b++)a = a.replace(new RegExp('\{!~style' + b + '~!\}', 'gi'), dw.d[b]);
                            return a;
                        }, dx = function () {
                            if ((bf.getAttribute('data-site-scripts') * 1)) {
                                bf.innerHTML = bf.getAttribute('data-element-busy') + ' (<a title="' + bf.getAttribute('data-disable-script') + '">' + bf.getAttribute('data-disable') + '</a>)';
                                var a = bf.firstElementChild;
                                if (a) {
                                    a.addEventListener('click', function () {
                                        var a = am();
                                        setCookie('seedit_token', a);
                                        bf.innerHTML = bf.getAttribute('data-disabling-scripts');
                                        bf.className = 'seedit-processing';
                                        clearInterval(bf.x);
                                        bf.style.opacity = '';
                                        request('scripts=1&token=' + a, function () {
                                            setCookie('seedit_scripts', 1, false, bf.getAttribute('data-system-url'));
                                            location.href = location.href.replace(location.hash, '');
                                        }, function () {
                                            bf.className = 'seedit-error';
                                            bf.innerHTML = bf.getAttribute('data-request-rejected');
                                        }, function () {
                                            bf.className = 'seedit-error';
                                            bf.innerHTML = bf.getAttribute('data-no-response');
                                        })
                                    })
                                }
                            } else bf.innerHTML = bf.getAttribute('data-unknown-relation');
                        },
                        dt = document.querySelector('iframe'),
                        // Получаем документ для редактирования
                        doc = dt.contentWindow.document;
                    doc.open();
                    doc.write(correct(bi));
                    doc.close();
                    bi = dv(bi);
                    bh.innerHTML = bi;
                    window.addEventListener('load', function () {
                        load();
                    });

                    // Сохранение контента
                    bsave.addEventListener('click', function () {
                        save(cf());
                    });
                    window.addEventListener('resize', dl);
                    dl();
                    if (window.opera) {
                        var a = document.createElement('span');
                        a.style.cssFloat = 'right';
                        a.style.marginTop = '50px';
                        a.style.textIndent = '-9999px';
                        a.innerHTML = '.';
                        ba.appendChild(a);
                    }
                    var b = getCookie('seedit_scripts');
                    if (b) {
                        setCookie2('seedit_scripts', bf.getAttribute('data-system-url'));
                        bf.innerHTML = bf.getAttribute('data-scripts-disabled');
                        bf.className = 'seedit-success';
                        ae(bf);
                    }
                },

                // Сохраняем
                save = function (bi) {
                    var a = am();
                    setCookie('seedit_token', a);
                    bf.innerHTML = bf.getAttribute('data-saving');
                    bf.className = 'seedit-processing';
                    ae(bf);
                    bsave.disabled = true;
                    bo();
                    request('save=' + encodeURIComponent(b64(bi).split('a').join('_')) + '&token=' + a, function () {
                        //return;
                        var b = ba.querySelector('#seedit-files>ul>li>ul');
                        if (b)b.innerHTML = '';
                        bf.innerHTML = bf.getAttribute('data-saved');
                        bf.className = 'seedit-success';

                    }, function () {
                        bsave.disabled = false;
                        bsave.focus();
                        bf.className = 'seedit-error';
                        if (this.getResponseHeader('X-Not-Writable'))bf.innerHTML = bf.getAttribute('data-not-writable'); else if (this.getResponseHeader('X-Backup-Error'))bf.innerHTML = bf.getAttribute('data-backup-error'); else bf.innerHTML = bf.getAttribute('data-request-rejected');
                    }, function () {
                        bsave.disabled = false;
                        bsave.focus();
                        if (this.status == 403)
                            bf.innerHTML = bf.getAttribute('data-request-blocked');
                        else
                            bf.innerHTML = bf.getAttribute('data-no-response');
                        bf.className = 'seedit-error';
                    });
                },
                bo = function () {
                    var a = document.createElement('input');
                    a.style.marginLeft = '-2000px';
                    ba.appendChild(a);
                    a.focus();
                    ba.removeChild(a);
                };

            // Initiation
            init();

            for (var a = 0, b = bg.length; a < b; a++)bg[a].className = 'seedit-link';

            // Нажимаем мышкой по тегам
            document.addEventListener('mousedown', function (event) {

                var a = event.target, b = a.className;
                for (var c = a; c; c = c.parentNode) {
                    if (c.className == 'seedit-menu')return;
                }
                for (var d = 0, f, e = bg.length; d < e; d++) {
                    f = bg[d].nextElementSibling;
                    f.style.display = 'none';
                    f.className = '';
                    bg[d].className = 'seedit-link';
                }
                if (b == 'seedit-link') {
                    var f = a.nextElementSibling;
                    f.style.display = 'block';
                    f.className = 'seedit-menu';
                    a.className = '';
                }
            });
        }
    });


    /* SE - Panel - files */
    document.addEventListener('DOMContentLoaded', function () {
        var ba = document.getElementById('seedit-panel'),
            bb = document.getElementById('seedit-files');
        if (ba && bb) {
            var bc = ba.querySelector('div>div+ul+p samp'),
                bd = ba.querySelector('div>ol+ul>li>a'),
                be = bb.querySelector('li>ol'),
                bf = be.firstElementChild.firstElementChild.getAttribute('data-url'),
                bg = window.location.pathname.slice(bf.length);
            var bt = '';
            if (window.location.pathname == bc.getAttribute('data-system-url') && window.location.search.indexOf('?q=') === 0) {
                bg = bf + window.location.search.slice(3);
                bt = window.location.search;
            } else bg = bf + bg.slice(bg.indexOf('/') + 1);
            var bh = function (b) {
                    var c = b.nextElementSibling, a = b.firstElementChild.firstElementChild, d = a.getAttribute('data-url'), e = function () {
                        var f = bg.slice(d.length).indexOf('/');
                        if (f != -1) {
                            a = a.parentNode.parentNode.nextElementSibling.querySelector('[data-url="' + bg.slice(0, f + d.length + 1) + '"]');
                            if (a)bh(a.parentNode.parentNode);
                        } else {
                            a = a.parentNode.parentNode.nextElementSibling.querySelector('[href="' + window.location.pathname + bt + '"]');
                            if (a)a.parentNode.className = 'seedit-disable';
                        }
                    };
                    if (c.firstElementChild) {
                        if (window.getComputedStyle(c)['display'] == 'none') {
                            a.a = function () {
                                a.a = function () {
                                };
                                e();
                            };
                            setTimeout(function () {
                                bj.call(a)
                            }, 0);
                        } else e();
                    } else {
                        a.a = function () {
                            a.a = function () {
                                a.a = function () {
                                };
                                e();
                            };
                            bj.call(a);
                        };
                        bi.call(a);
                    }
                }, bi = function () {
                    var a = this, b = a.parentNode, c = b.parentNode, d = a.getAttribute('data-url');
                    b.className = 'seedit-processing';
                    request('open=' + encodeURIComponent(d), function (e) {
                        var f = c.nextElementSibling;
                        f.innerHTML = e;
                        var g = f.querySelectorAll('li>ol');
                        for (var h = 0, i = g.length; h < i; h++)
                            bl(g[h]);
                        b.className = '';
                        a.a();
                    }, function () {
                        b.className = '';
                        a.addEventListener('click', bi);
                        bc.innerHTML = bc.getAttribute('data-request-rejected');
                        bc.className = 'seedit-error';
                        ae(bc);
                    }, function () {
                        b.className = '';
                        a.addEventListener('click', bi);
                        bc.innerHTML = bc.getAttribute('data-no-response');
                        bc.className = 'seedit-error';
                        ae(bc);
                    });
                    a.removeEventListener('click', bi);
                }, bj = function () {
                    var a = this, b = a.parentNode, c = b.parentNode.nextElementSibling, d = function () {
                        a.addEventListener('click', bk);
                        b.className = 'seedit-open';
                        a.a();
                    };
                    if (c.firstElementChild)ag(c, d); else d();
                    a.removeEventListener('click', bj);
                }, bk = function () {
                    var a = this, b = a.parentNode, c = b.parentNode.nextElementSibling, d = function () {
                        a.addEventListener('click', bj);
                        b.className = '';
                    };
                    if (c.firstElementChild)ah(c, d); else d();
                    a.removeEventListener('click', bk);
                },
                //Backup
                bl = function (a) {
                    var d = a.firstElementChild, e = d.nextElementSibling, f = e.nextElementSibling, g = a.lastElementChild.firstElementChild, h = d.firstElementChild, b = h.getAttribute('data-url'), c = bc.getAttribute('data-system-url');
                    bn(f);
                    e.innerHTML = an((e.innerHTML) * 1);
                    if (a.className == 'seedit-folder' || a.className == 'seedit-backup') {
                        h.a = function () {
                            h.a = function () {
                            };
                            bj.call(h);
                        };
                        h.addEventListener('click', bi);
                        if (c && b.slice(0, c.length) == c) {
                            if (a.className == 'seedit-backup' && a.nextElementSibling.firstElementChild)g.addEventListener('click', bt); else g.className = 'seedit-disable';
                        } else g.addEventListener('click', bp);
                    } else {
                        var i = a.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.getAttribute('data-url');
                        if (c && i && i.slice(0, c.length) == c) {
                            d.className = 'seedit-locked';
                            g.className = 'seedit-disable';
                        } else {
                            if (c && b.slice(0, c.length) !== c)h.setAttribute('target', '_blank');
                            h.href = b;
                            g.addEventListener('click', bs);
                        }
                    }
                }, bn = function (a) {
                    var b = a.innerHTML * 1000, c = new Date(b), d = new Date().getTime(), e = 24 * 60 * 60 * 1000, f = e * 7;
                    if ((d - b) < e)a.className = 'seedit-day'; else if ((d - b) < f)a.className = 'seedit-week';
                    a.innerHTML = bo(c.getDate()) + '.' + bo(c.getMonth() + 1) + '.' + ((c.getFullYear() + '').slice(2)) + ' ' + bo(c.getHours()) + ':' + bo(c.getMinutes());
                },

                bo = function (a) {
                    return (a < 10) ? '0' + a : a;
                },
                bp = function () {
                    if (window.FormData) {
                        a = document.createElement('form');
                        b = document.createElement('input');
                        a.style.position = 'absolute';
                        a.style.marginLeft = '-9999px';
                        b.type = 'file';
                        b.name = 'file[]';
                        b.multiple = true;
                        a.appendChild(b);
                        this.parentNode.appendChild(a);
                        b.addEventListener('change', function () {
                            var c = bc.getAttribute('data-post-max-size') * 1, d = bc.getAttribute('data-upload-max-filesize') * 1, e = bc.getAttribute('data-max-file-uploads') * 1, f = b.files, g = f.length;
                            if (g <= e) {
                                a.size = 0;
                                for (var h = 0; h < g; h++)a.size += f[h]['size'];
                                if (a.size < c && a.size < d) {
                                    if (!bq.c) {
                                        bq.c = [];
                                        bq.e = a.size;
                                        bq.d = 0;
                                    } else bq.e += a.size;
                                    bq.c.push(a);
                                    if (!bq.b) {
                                        bq.b = true;
                                        br(0);
                                    }
                                } else {
                                    if (c > d)bc.innerHTML = bc.getAttribute('data-size-limit') + ' (' + an(d) + ')'; else bc.innerHTML = bc.getAttribute('data-size-limit') + ' (' + an(c) + ')';
                                    bc.className = 'seedit-attention';
                                    ae(bc);
                                }
                            } else {
                                bc.innerHTML = bc.getAttribute('data-count-limit') + ' (' + e + ')';
                                bc.className = 'seedit-attention';
                                ae(bc);
                            }
                        });
                        b.focus();
                        b.click();
                    } else {
                        bc.innerHTML = bc.getAttribute('data-old-browser');
                        bc.className = 'seedit-attention';
                        ae(bc);
                    }
                }, bq = function (a) {
                    var b = new FormData(a), c = am(), d = a.parentNode.parentNode.firstElementChild.firstElementChild.getAttribute('data-url'), e = bc.getAttribute('data-uploading');
                    b.append('upload', encodeURIComponent(d));
                    b.append('token', c);
                    setCookie('seedit_token', c);
                    bc.innerHTML = e + ' (0%)';
                    bc.className = 'seedit-processing';
                    ae(bc);
                    request(b, function (f) {
                        var g = a.parentNode.parentNode, h = g.nextElementSibling, i = g.firstElementChild, j = i.nextElementSibling, k = document.createElement('div');
                        k.innerHTML = f;
                        if (k.firstElementChild && k.firstElementChild.tagName.toLowerCase() == 'li') {
                            if (h.firstElementChild) {
                                var l = false;
                                while (l = k.firstElementChild) {
                                    var m = l.querySelector('a'), n = h.querySelectorAll('a');
                                    if (m && n.length) {
                                        for (var r = m.getAttribute('data-url'), o = 0, p = n.length; o < p; o++) {
                                            if (n[o].getAttribute('data-url') == r)n[o].parentNode.parentNode.style.display = 'none';
                                        }
                                    }
                                    h.appendChild(l);
                                    bl(l.firstElementChild);
                                }
                                ae(h);
                            } else {
                                var s = i.firstElementChild;
                                s.a = function () {
                                    s.a = function () {
                                        s.a = function () {
                                        };
                                    };
                                    bj.call(s);
                                };
                                bi.call(s);
                                i.className = '';
                            }
                            j.innerHTML = an((this.getResponseHeader('X-Folder-Size')) * 1);
                            bq.d = a.size;
                            if (this.getResponseHeader('X-Not-Allowed'))br(3); else if (this.getResponseHeader('X-Backup-Error'))br(4); else if (this.getResponseHeader('X-Upload-Error'))br(2); else br(0);
                        } else {
                            if (this.getResponseHeader('X-Not-Allowed'))br(3); else if (this.getResponseHeader('X-Backup-Error'))br(4); else br(2);
                        }
                    }, function () {
                        br(2);
                    }, function () {
                        br(1);
                    }, function (q, r) {
                        if (bc.innerHTML.indexOf('(') != -1)bc.innerHTML = e + ' (' + ((q + bq.d) * 100 / bq.e).toFixed(1) + '%)';
                    });
                }, br = function (a) {
                    if (typeof bq.f == 'undefined' || bq.f < a)bq.f = a;
                    delete bq.b;
                    if (bq.c && bq.c.length)bq(bq.c.shift()); else {
                        switch (bq.f) {
                            case 0: {
                                bc.innerHTML = bc.getAttribute('data-uploading-complete');
                                bc.className = 'seedit-success';
                                break;
                            }
                            case 1: {
                                bc.innerHTML = bc.getAttribute('data-no-response');
                                bc.className = 'seedit-error';
                                break;
                            }
                            case 2: {
                                bc.innerHTML = bc.getAttribute('data-uploading-error');
                                bc.className = 'seedit-error';
                                break;
                            }
                            case 3: {
                                bc.innerHTML = bc.getAttribute('data-extension-error');
                                bc.className = 'seedit-error';
                                break;
                            }
                            case 4: {
                                bc.innerHTML = bc.getAttribute('data-backup-error');
                                bc.className = 'seedit-error';
                                break;
                            }
                        }
                        delete bq.f;
                        delete bq.c;
                        delete bq.e;
                        delete bq.d;
                        delete bq.b;
                    }
                };

            bl(be);
            bd.addEventListener('mousedown', function () {
                if (this.nextElementSibling.style.display != 'block')bh(be);
            });
            var bu = getCookie('seedit_recovery');
            if (bu) {
                setCookie2('seedit_recovery', bc.getAttribute('data-system-url'));
                bc.innerHTML = bc.getAttribute('data-recovery-success');
                bc.className = 'seedit-success';
                ae(bc);
                var bv = bd.nextElementSibling;
                bv.style.display = 'block';
                bv.className = 'seedit-menu';
                bd.className = '';
                bh(be);
            }
        }
    });
}());