/*! api-component - 1.0.100 */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports["api-component"] = e())
    : (t["api-component"] = e());
})(
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : this,
  () =>
    (() => {
      "use strict";
      var t = {
          879: (t, e, n) => {
            n.r(e),
              n.d(e, {
                basicFormScript: () => d,
                generateRandomString: () => r,
                getData: () => s,
                getSvgHtml: () => i,
                multipleItemFormScript: () => l,
                shoppingFormScript: () => o,
                standardFormScript: () => a,
              });
            const a = function () {
                function t(t) {
                  const e = document.getElementById("standardFormquantity");
                  if (e) {
                    let n = parseInt(e.value);
                    (n += t),
                      n < 1 && (n = 1),
                      (e.value = n),
                      (function (t) {
                        const e = document.getElementById("productPrice"),
                          n = document.getElementById("showProduct");
                        if (e && n) {
                          const a = parseFloat(e.value) * t;
                          n.textContent = a.toFixed(2);
                        }
                      })(n);
                  }
                }
                const e = document.getElementById("decrease");
                null !== e && e.addEventListener("click", () => t(-1));
                const n = document.getElementById("increase");
                null !== n && n.addEventListener("click", () => t(1)),
                  document
                    .querySelectorAll(".contact-form .input-text")
                    .forEach((t) => {
                      t.addEventListener("input", () => {
                        "" !== t.value.trim()
                          ? t.classList.add("not-empty")
                          : t.classList.remove("not-empty");
                      });
                    }),
                  document.addEventListener("DOMContentLoaded", function () {
                    document
                      .querySelector(".standardForm")
                      .addEventListener("submit", function (t) {
                        t.preventDefault();
                        const e = new FormData(t.target);
                        let n = [];
                        for (var a of e.entries())
                          console.log(a[0] + ": " + a[1]);
                        const o = e.get("productPrice");
                        let i = e.get("size");
                        null === i && (i = "");
                        const r = e.get("color"),
                          s = e.get("quantity");
                        console.log(s),
                          n.push({
                            size: i,
                            color: r,
                            quantity: s,
                            productPrice: o,
                          }),
                          e.delete("size"),
                          e.delete("color"),
                          e.delete("quantity"),
                          0 === n.length && (n = []),
                          console.log(n),
                          e.append("cart", JSON.stringify(n)),
                          console.log(Object.fromEntries(e)),
                          fetch(
                            `${
                              document.location.protocol +
                              "//" +
                              document.location.host
                            }/checkout`,
                            { method: "POST", body: e }
                          )
                            .then((t) => t.text())
                            .then((t) => {
                              t
                                ? (window.location.href = t)
                                : console.error(
                                    "URL not found in the response"
                                  );
                            })
                            .catch((t) => {
                              console.error("Error:", t);
                            }),
                          t.target.reset();
                      });
                  });
              },
              o = function () {
                document.addEventListener("DOMContentLoaded", function () {
                  const t = document.getElementById("shoppingFormquantity"),
                    e = document.querySelector(".colorItem"),
                    n = document.querySelector(".sizeItem"),
                    a = document.getElementById("colorErr"),
                    o = document.getElementById("sizeErr"),
                    i = document.querySelector(".addToCart"),
                    r = document.getElementById("productPrice"),
                    s = document.getElementById("subTotalPrice");
                  function l(i) {
                    if (!e.value || "Choose a Color" === e.value)
                      return (
                        (a.style.display = "block"),
                        void setTimeout(() => {
                          a.style.display = "none";
                        }, 2e3)
                      );
                    if (!n.value || "Choose a Size" === n.value)
                      return (
                        (o.style.display = "block"),
                        void setTimeout(() => {
                          o.style.display = "none";
                        }, 2e3)
                      );
                    if (t) {
                      let e = parseInt(t.value);
                      (e += i),
                        e <= 1 && (e = 1),
                        (t.value = e),
                        (function (t) {
                          if (r && s) {
                            const e = p * t;
                            s.textContent = "৳ " + e.toFixed(2);
                          }
                        })(e);
                    }
                  }
                  const d = document.getElementById("decrement-btn");
                  null !== d && d.addEventListener("click", () => l(-1));
                  const c = document.getElementById("increment-btn");
                  null !== c && c.addEventListener("click", () => l(1));
                  const p = parseFloat(r.value);
                  function u() {
                    const t = document.querySelectorAll(
                      ".shoppingOrderSummary .flex.items-center.justify-between.gap-4"
                    );
                    let e = 0;
                    t.forEach((t) => {
                      const n = parseFloat(
                        t.querySelector("dd").innerText.replace("৳", "")
                      );
                      e += n;
                    }),
                      (document.querySelector(
                        ".totalPrice"
                      ).innerText = `৳${e.toFixed(2)}`);
                  }
                  s && (s.textContent = "৳ " + p.toFixed(2)),
                    i.addEventListener("click", function () {
                      if (!e.value || "Choose a Color" === e.value)
                        return (
                          (a.style.display = "block"),
                          void setTimeout(() => {
                            a.style.display = "none";
                          }, 2e3)
                        );
                      if (!n.value || "Choose a Size" === n.value)
                        return (
                          (o.style.display = "block"),
                          void setTimeout(() => {
                            o.style.display = "none";
                          }, 2e3)
                        );
                      const i = e.value,
                        l = n.value,
                        d = parseInt(t.value),
                        c = parseFloat(r.value),
                        p = c * d,
                        m = document.createElement("div");
                      (m.className =
                        "flex items-center justify-between gap-4 cartItems"),
                        (m.innerHTML = `<dl class="flex items-center justify-between gap-3 w-full"><dt class="text-base font-normal text-gray-500">${l} - ${i} x ${d}</dt><dd class="text-base font-medium text-gray-900">৳${p.toFixed(
                          2
                        )}</dd></dl><button type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500 remove-item"><svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" /></svg>Remove</button>`);
                      document
                        .querySelector(".shoppingOrderSummary")
                        .appendChild(m),
                        m
                          .querySelector(".remove-item")
                          .addEventListener("click", () => {
                            m.remove(), u();
                          }),
                        u(),
                        (e.value = "Choose a Color"),
                        (n.value = "Choose a Size"),
                        (t.value = 1),
                        (s.textContent = "৳ " + c.toFixed(2));
                    });
                  document
                    .querySelector(".shoppingForm")
                    .addEventListener("submit", function (t) {
                      t.preventDefault();
                      const e = new FormData(t.target),
                        n = e.get("productPrice");
                      let a = [];
                      document
                        .querySelectorAll(
                          ".shoppingOrderSummary .flex.items-center.justify-between.gap-4"
                        )
                        .forEach((t) => {
                          const e = t.querySelector("dt").innerText,
                            [o, i] = e.split(" x "),
                            [r, s] = o.split(" - "),
                            l = parseInt(i),
                            d = parseFloat(n);
                          a.push({
                            size: r.trim(),
                            color: s.trim(),
                            quantity: l,
                            productPrice: d,
                          });
                        }),
                        0 === a.length && (a = []),
                        e.append("cart", JSON.stringify(a)),
                        fetch(
                          `${
                            document.location.protocol +
                            "//" +
                            document.location.host
                          }/checkout`,
                          { method: "POST", body: e }
                        )
                          .then((t) => t.text())
                          .then((t) => {
                            t
                              ? (window.location.href = t)
                              : console.error("URL not found in the response");
                          })
                          .catch((t) => {
                            console.error("Error:", t);
                          }),
                        t.target.reset();
                    });
                });
              },
              i = (t) =>
                "undefined" == typeof window
                  ? ""
                  : (t.setAttribute("width", "100%"),
                    t.setAttribute("height", "100%"),
                    t.outerHTML),
              r = () => {
                const t = "abcdefghijklmnopqrstuvwxyz0123456789",
                  e = [7];
                let n = "";
                for (let a = 0; a < e.length; a++)
                  for (let o = 0; o < e[a]; o++)
                    n += t.charAt(Math.floor(Math.random() * t.length));
                return n;
              };
            async function s() {
              const t = document.location.href,
                e = new URL(t),
                n = new URLSearchParams(e.search).get("id");
              try {
                const t = await fetch(
                    `${
                      document.location.protocol + "//" + document.location.host
                    }/api/dev/user/landing-page/${n}`,
                    {
                      method: "GET",
                      headers: { "Content-Type": "application/json" },
                    }
                  ),
                  e = await t.json();
                if (e.data)
                  editor.setComponents(e.data.content),
                    editor.setStyle(e.data.css),
                    localStorage.setItem("gjsProject", e.data.project_data);
                else {
                  editor.setComponents('<div class="cls">Start editing</div>');
                  const t = localStorage.getItem("gjsProject");
                  editor.loadProjectData(JSON.parse(t));
                }
              } catch (t) {
                editor.Modal.open({
                  title: "There was some server side error",
                  content: "Sorry for inconvenience",
                });
              }
            }
            const l = function () {
                let t = document.getElementById("orderSumList");
                const e = (e, a, o, i) => {
                    let r = document.getElementById("optionGroup" + e + "Sum");
                    r ||
                      ((r = document.createElement("li")),
                      (r.id = "optionGroup" + e + "Sum"),
                      (r.className = "order-summary"),
                      (r.innerHTML =
                        '<a href="javascript:;" class="btn btn-outline-danger" style="border-radius: 50%"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg></a><span class="summary-text"></span><span class="price"></span>'),
                      t.appendChild(r),
                      r
                        .querySelector("a")
                        .addEventListener("click", function () {
                          r.remove(), n();
                        }));
                    const s = r.querySelector(".summary-text"),
                      l = r.querySelector(".price");
                    o > 0
                      ? ((s.textContent = a + " x " + o),
                        (l.textContent = "৳ " + (o * i).toFixed(2)))
                      : r.remove(),
                      n();
                  },
                  n = () => {
                    const e = document.querySelector("#totalPrice"),
                      n = t.querySelectorAll(".price");
                    let a = 0;
                    n.forEach((t) => {
                      const e = t.textContent.replace("৳ ", "");
                      a += parseFloat(e);
                    }),
                      (e.value = "৳ " + a.toFixed(2));
                  };
                document
                  .querySelectorAll(".colorAndQuantity")
                  .forEach(function (t, n) {
                    const a = t.querySelector(".colorList"),
                      o = t.querySelector(".quantity");
                    a.addEventListener("change", function () {
                      const t = a.value,
                        i = parseInt(o.value, 10),
                        r = parseFloat(
                          document.querySelector("#productPrice").value
                        );
                      e(n, t, i, r);
                    }),
                      o.addEventListener("input", function () {
                        const t = a.value,
                          i = parseInt(o.value, 10),
                          r = parseFloat(
                            document.querySelector("#productPrice").value
                          );
                        e(n, t, i, r);
                      });
                  }),
                  document.addEventListener("DOMContentLoaded", function () {
                    document
                      .querySelector(".multipleItemForm")
                      .addEventListener("submit", function (t) {
                        t.preventDefault();
                        const e = new FormData(t.target);
                        let n = [];
                        const a = e.get("productPrice");
                        document
                          .querySelectorAll(".colorAndQuantity")
                          .forEach(function (t) {
                            const e = t.id,
                              o = document.querySelector(
                                "#colorList-" + e
                              ).value,
                              i = document.querySelector(
                                "#quantity-" + e
                              ).value;
                            "Select a Color" === o
                              ? n.push({
                                  size: e,
                                  color: "",
                                  quantity: i,
                                  productPrice: a,
                                })
                              : n.push({
                                  size: e,
                                  color: o,
                                  quantity: i,
                                  productPrice: a,
                                });
                          }),
                          0 === n.length && (n = []),
                          e.append("cart", JSON.stringify(n)),
                          e.delete("size"),
                          e.delete("color"),
                          e.delete("quantity"),
                          fetch(
                            `${
                              document.location.protocol +
                              "//" +
                              document.location.host
                            }/checkout`,
                            { method: "POST", body: e }
                          )
                            .then((t) => t.text())
                            .then((t) => {
                              t
                                ? (window.location.href = t)
                                : console.error(
                                    "URL not found in the response"
                                  );
                            })
                            .catch((t) => {
                              console.error("Error:", t);
                            }),
                          t.target.reset();
                      });
                  });
              },
              d = function () {
                document.addEventListener("DOMContentLoaded", function () {
                  document
                    .querySelector(".basicForm")
                    .addEventListener("submit", function (t) {
                      t.preventDefault();
                      var e = new FormData(t.target);
                      let n = [];
                      const a = e.get("size"),
                        o = e.get("color"),
                        i = e.get("quantity"),
                        r = e.get("productPrice");
                      a &&
                        o &&
                        i &&
                        r &&
                        n.push({
                          size: a,
                          color: o,
                          quantity: i,
                          productPrice: r,
                        }),
                        0 === n.length && (n = []),
                        e.append("cart", JSON.stringify(n)),
                        fetch(
                          `${
                            document.location.protocol +
                            "//" +
                            document.location.host
                          }/checkout`,
                          { method: "POST", body: e }
                        )
                          .then((t) => t.text())
                          .then((t) => {
                            t
                              ? (window.location.href = t)
                              : console.error("URL not found in the response");
                          })
                          .catch((t) => {
                            console.error("Error:", t);
                          }),
                        t.target.reset();
                    });
                });
              };
          },
          476: function (t, e, n) {
            var a =
              (this && this.__awaiter) ||
              function (t, e, n, a) {
                return new (n || (n = Promise))(function (o, i) {
                  function r(t) {
                    try {
                      l(a.next(t));
                    } catch (t) {
                      i(t);
                    }
                  }
                  function s(t) {
                    try {
                      l(a["throw"](t));
                    } catch (t) {
                      i(t);
                    }
                  }
                  function l(t) {
                    var e;
                    t.done
                      ? o(t.value)
                      : ((e = t.value),
                        e instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })).then(r, s);
                  }
                  l((a = a.apply(t, e || [])).next());
                });
              };
            Object.defineProperty(e, "__esModule", { value: !0 });
            const o = n(126),
              i = n(535),
              r = n(879);
            let s;
            e["default"] = (t, e) =>
              a(void 0, void 0, void 0, function* () {
                const { block: n, id: a, category: l } = e;
                if (n) {
                  s =
                    "localhost:8080" === document.location.host
                      ? "https://dev.chepapest.com/api/dev/products"
                      : document.location.protocol +
                        "//" +
                        document.location.host +
                        "/api/dev/products";
                  let e = null;
                  try {
                    const d = yield fetch(s);
                    if (!d.ok) throw new Error("Failed to fetch data");
                    (e = (yield d.json()).data),
                      t.BlockManager.add(a[0], {
                        label: (0, r.getSvgHtml)(
                          t
                            .$(
                              `<svg viewBox="0 0 266 150" fill="none" width="266"  height="150" ><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="20" y="43" width="68" height="63" rx="2" fill="#E2E8F0"></rect><path d="M29 73a1 1 0 011-1h48a1 1 0 110 2H30a1 1 0 01-1-1zM33 78a1 1 0 011-1h40a1 1 0 110 2H34a1 1 0 01-1-1z" fill="#A0AEC0"></path><path d="M48 83a1 1 0 011-1h11a1 1 0 110 2H49a1 1 0 01-1-1z" fill="#6366F1"></path><path d="M37 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4A5568"></path><rect x="99" y="43" width="68" height="63" rx="2" fill="#E2E8F0"></rect><path d="M108 73a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM112 78a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#A0AEC0"></path><path d="M127 83a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366F1"></path><path d="M116 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4A5568"></path><rect x="178" y="43" width="68" height="63" rx="2" fill="#E2E8F0"></rect><path d="M187 73a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM191 78a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#A0AEC0"></path><path d="M206 83a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366F1"></path><path d="M195 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4A5568"></path></svg>`
                            )
                            .get(0)
                        ),
                        category: { id: l[1], label: l[1], open: !1 },
                        attributes: { class: "block-full-width" },
                        content: {
                          type: o.typeBasicForm,
                          data: e,
                          components: i.basicForm,
                        },
                      }),
                      t.BlockManager.add(
                        a[1],
                        Object.assign(
                          {
                            label: (0, r.getSvgHtml)(
                              t
                                .$(
                                  `<svg viewBox="0 0 266 150" fill="none" width="266"  height="150" ><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="20" y="43" width="68" height="63" rx="2" fill="#E2E8F0"></rect><path d="M29 73a1 1 0 011-1h48a1 1 0 110 2H30a1 1 0 01-1-1zM33 78a1 1 0 011-1h40a1 1 0 110 2H34a1 1 0 01-1-1z" fill="#A0AEC0"></path><path d="M48 83a1 1 0 011-1h11a1 1 0 110 2H49a1 1 0 01-1-1z" fill="#6366F1"></path><path d="M37 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4A5568"></path><rect x="99" y="43" width="68" height="63" rx="2" fill="#E2E8F0"></rect><path d="M108 73a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM112 78a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#A0AEC0"></path><path d="M127 83a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366F1"></path><path d="M116 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4A5568"></path><rect x="178" y="43" width="68" height="63" rx="2" fill="#E2E8F0"></rect><path d="M187 73a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM191 78a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#A0AEC0"></path><path d="M206 83a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366F1"></path><path d="M195 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4A5568"></path></svg>`
                                )
                                .get(0)
                            ),
                            category: { id: l[0], label: l[0], open: !1 },
                            attributes: { class: "block-full-width" },
                            content: {
                              type: o.typeStandardForm,
                              data: e,
                              components: i.standardForm,
                            },
                          },
                          n
                        )
                      ),
                      t.BlockManager.add(
                        a[2],
                        Object.assign(
                          {
                            label: (0, r.getSvgHtml)(
                              t
                                .$(
                                  `<svg viewBox="0 0 266 150" fill="none" width="266"  height="150" ><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="20" y="43" width="68" height="63" rx="2" fill="#E2E8F0"></rect><path d="M29 73a1 1 0 011-1h48a1 1 0 110 2H30a1 1 0 01-1-1zM33 78a1 1 0 011-1h40a1 1 0 110 2H34a1 1 0 01-1-1z" fill="#A0AEC0"></path><path d="M48 83a1 1 0 011-1h11a1 1 0 110 2H49a1 1 0 01-1-1z" fill="#6366F1"></path><path d="M37 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4A5568"></path><rect x="99" y="43" width="68" height="63" rx="2" fill="#E2E8F0"></rect><path d="M108 73a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM112 78a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#A0AEC0"></path><path d="M127 83a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366F1"></path><path d="M116 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4A5568"></path><rect x="178" y="43" width="68" height="63" rx="2" fill="#E2E8F0"></rect><path d="M187 73a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM191 78a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#A0AEC0"></path><path d="M206 83a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366F1"></path><path d="M195 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4A5568"></path></svg>`
                                )
                                .get(0)
                            ),
                            category: { id: l[1], label: l[1], open: !1 },
                            attributes: { class: "block-full-width" },
                            content: {
                              type: o.typemultipleItemForm,
                              data: e,
                              components: i.multipleItemForm,
                            },
                          },
                          n
                        )
                      ),
                      t.BlockManager.add(a[3], {
                        label: (0, r.getSvgHtml)(
                          t
                            .$(
                              `<svg viewBox="0 0 266 150" fill="none" width="266"  height="150" ><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="20" y="43" width="68" height="63" rx="2" fill="#E2E8F0"></rect><path d="M29 73a1 1 0 011-1h48a1 1 0 110 2H30a1 1 0 01-1-1zM33 78a1 1 0 011-1h40a1 1 0 110 2H34a1 1 0 01-1-1z" fill="#A0AEC0"></path><path d="M48 83a1 1 0 011-1h11a1 1 0 110 2H49a1 1 0 01-1-1z" fill="#6366F1"></path><path d="M37 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4A5568"></path><rect x="99" y="43" width="68" height="63" rx="2" fill="#E2E8F0"></rect><path d="M108 73a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM112 78a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#A0AEC0"></path><path d="M127 83a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366F1"></path><path d="M116 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4A5568"></path><rect x="178" y="43" width="68" height="63" rx="2" fill="#E2E8F0"></rect><path d="M187 73a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM191 78a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#A0AEC0"></path><path d="M206 83a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366F1"></path><path d="M195 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4A5568"></path></svg>`
                            )
                            .get(0)
                        ),
                        category: { id: l[1], label: l[1], open: !1 },
                        attributes: { class: "block-full-width" },
                        content: {
                          type: o.typeShoppingForm,
                          data: e,
                          components: i.shoppingForm,
                        },
                      });
                  } catch (t) {
                    console.error("Error in Fetching Data", t);
                  }
                }
                t.BlockManager.add("link-block", {
                  label: "Link Block",
                  category: { id: l[0], label: l[0], open: !0 },
                  attributes: { class: "block-full-width" },
                  media: `<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>\n    </svg>`,
                  content: `<a href="#" class="btn btn-outline-secondary p-2"><span>Link</span></a>`,
                }),
                  t.BlockManager.add("quote", {
                    label: "Quote",
                    category: "Basic",
                    media: `<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />\n    </svg>`,
                    content: i.blockquote,
                  }),
                  t.BlockManager.add("h1-block", {
                    label: "Heading",
                    media: `<svg  class="bi bi-type-h1" viewBox="0 0 16 16"><path d="M7.648 13V3H6.3v4.234H1.348V3H0v10h1.348V8.421H6.3V13zM14 13V3h-1.333l-2.381 1.766V6.12L12.6 4.443h.066V13z"/></svg>`,
                    content: i.h1Block,
                    category: "Basic",
                    attributes: {
                      dataImage:
                        "https://cdn.jsdelivr.net/gh/Afrin127329/api-component-assets@master/h1Block.png",
                    },
                  }),
                  t.BlockManager.add("text-sect", {
                    label: "Text Section",
                    category: "Basic",
                    media: `<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />\n    </svg>`,
                    content: i.textSection,
                  }),
                  t.BlockManager.add("image", {
                    label: "Image",
                    category: { id: l[2], label: l[2], open: !1 },
                    media: `<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />\n    </svg>`,
                    activate: !0,
                    content: {
                      type: "image",
                      style: { color: "black" },
                      attributes: { class: "img-fluid img-block" },
                    },
                  }),
                  t.BlockManager.add("sect100", {
                    label: "1 Section",
                    category: "Basic",
                    media: `<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>\n    </svg>`,
                    attributes: { class: "gjs-droppable" },
                    content: `\n    <div class="gjs-droppable container sect100Class"></div>\n\n      <style>\n      .sect100Class{\n        height: 10rem;\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n      }\n      </style>\n    `,
                  }),
                  t.BlockManager.add("text", {
                    label: "Text",
                    category: "Basic",
                    media: `<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />\n    </svg>`,
                    attributes: { class: "gjs-droppable" },
                    content: `\n    <p class= "gjs-droppable alert alert-success text-block-p">Insert your text here</p>\n    `,
                  }),
                  t.BlockManager.add("sect50", {
                    label: "1/2 Section",
                    category: "Basic",
                    media: `<svg viewBox="0 0 23 24">\n      <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>\n    </svg>`,
                    content: i.sect50,
                  }),
                  t.BlockManager.add("sect30", {
                    label: "1/3 Section",
                    category: "Basic",
                    media: `<svg viewBox="0 0 23 24">\n      <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>\n    </svg>`,
                    content: i.sect30,
                  }),
                  t.BlockManager.add("sect37", {
                    label: "3/7 Section",
                    category: "Basic",
                    media: `<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>\n    </svg>`,
                    content: i.sect37,
                  }),
                  t.BlockManager.add("customer-review", {
                    label: "Reviews",
                    category: { id: l[2], label: l[2], open: !1 },
                    media: `<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>\n    </svg>`,
                    attributes: {
                      class: "leftBlock",
                      title: "",
                      dataImage:
                        "https://cdn.jsdelivr.net/gh/Afrin127329/api-component-assets@master/reviews.png",
                    },
                    content: i.customerReview,
                  }),
                  t.BlockManager.add("button", {
                    label: "Button",
                    category: "Basic",
                    media: `<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" />\n    </svg>`,
                    content:
                      '<a class="btn btn-primary btn-block"><span>Button</span></a>',
                  }),
                  t.BlockManager.add("divider", {
                    label: "Divider",
                    category: { id: l[2], label: l[2], open: !1 },
                    media: `<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />\n    </svg>`,
                    content: i.divider,
                  }),
                  t.BlockManager.add("grid-items", {
                    label: "Grid Items",
                    category: { id: l[2], label: l[2], open: !1 },
                    media: `<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"/>\n  </svg>`,
                    content: `\n    <div class="all-grid-items">\n    <div >${i.gridItem3}</div>\n    <div>${i.gridItem3}</div>\n    <div >${i.gridItem3}</div>\n    </div>\n\n    <style>\n      .all-grid-items{\n        display: flex;\n        gap: 1rem;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n    </style>\n  `,
                  }),
                  t.BlockManager.add("list-items", {
                    label: "List Items",
                    category: { id: l[2], label: l[2], open: !1 },
                    media: `<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10"/>\n  </svg>`,
                    content: i.listItem + i.listItem,
                  }),
                  t.BlockManager.add(o.typeSocial, {
                    label: "socialGroup",
                    category: { id: l[2], label: l[2], open: !1 },
                    media: `<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />\n  </svg>`,
                    content: i.socialGroup,
                  }),
                  t.BlockManager.add(o.typeNavbar, {
                    label: "Navbar",
                    category: { id: l[2], label: l[2], open: !1 },
                    media: `<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />\n    </svg>`,
                    content: i.nav,
                  }),
                  t.BlockManager.add(o.typeHero, {
                    label: "Hero Section",
                    category: { id: l[2], label: l[2], open: !1 },
                    media: `<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />\n</svg>`,
                    content: i.heroSect,
                  }),
                  t.BlockManager.add(o.typeWrapper, {
                    label: "Wrapper",
                    category: { id: l[2], label: l[2], open: !1 },
                    media: `<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M18 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V4C20 2.9 19.11 2 18 2M18 20H6V16H18V20M18 8H6V4H18V8Z" />\n</svg>`,
                    content: i.wrapper,
                  }),
                  t.BlockManager.add("video", {
                    label: "Video",
                    category: { id: l[2], label: l[2], open: !1 },
                    media: `<svg class="bi bi-play-circle-fill" viewBox="0 0 16 16">\n    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>\n  </svg>`,
                    content: { type: "video", src: "" },
                  }),
                  t.BlockManager.add("carousel", {
                    label: "Slider",
                    category: { id: l[2], label: l[2], open: !1 },
                    media: `<svg class="bi bi-sliders" viewBox="0 0 16 16">\n    <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>\n  </svg>`,
                    content: i.carousel,
                  }),
                  t.BlockManager.add("collapse", {
                    label: "Collapse",
                    category: "Extra",
                    media: `<svg class="bi bi-arrows-collapse" viewBox="0 0 16 16">\n    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8m7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0m-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0z"/>\n  </svg>`,
                    content: i.collapse,
                  }),
                  t.BlockManager.add("tabs", {
                    label: "Tabs",
                    category: "Extra",
                    media: `<svg class="bi bi-segmented-nav" viewBox="0 0 16 16">\n    <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6 3h4V5H6zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1"/>\n  </svg>`,
                    content: i.tabs,
                  }),
                  t.BlockManager.add("footer", {
                    label: (0, r.getSvgHtml)(
                      t
                        .$(
                          `<svg fill="none" viewBox="0 0 266 150" width="266"  height="150" ><path fill="#FFFFFF" d="M0 0h266v150H0z"></path><rect x="63.385" y="76" width="32.308" height="3" rx="1.5" fill="#4A5568"></rect><rect x="63.385" y="84" width="21.231" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="63.385" y="91" width="14.769" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="63.385" y="98" width="25.846" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="63.385" y="105" width="21.231" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="20" y="76" width="32.308" height="3" rx="1.5" fill="#4A5568"></rect><rect x="20" y="84" width="21.231" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="20" y="91" width="14.769" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="20" y="98" width="25.846" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="20" y="105" width="21.231" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="107.692" y="76" width="32.308" height="3" rx="1.5" fill="#4A5568"></rect><rect x="163" y="76" width="32.308" height="3" rx="1.5" fill="#4A5568"></rect><rect x="107.692" y="84" width="21.231" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="107.692" y="91" width="14.769" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="107.692" y="98" width="25.846" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="107.692" y="105" width="21.231" height="3" rx="1.5" fill="#A0AEC0"></rect><path d="M217 86a2 2 0 012-2h25a2 2 0 012 2v6a2 2 0 01-2 2h-25a2 2 0 01-2-2v-6z" fill="#6366F1"></path><rect x="163" y="84" width="50" height="10" rx="2" fill="#CBD5E0"></rect><path fill="#E2E8F0" d="M0 119h266v31H0z"></path><circle cx="28.5" cy="134.5" r="8.5" fill="#6366F1"></circle><rect x="45" y="133" width="30" height="3" rx="1.5" fill="#A0AEC0"></rect><rect x="198" y="133" width="48" height="3" rx="1.5" fill="#A0AEC0"></rect></svg>`
                        )
                        .get(0)
                    ),
                    category: "Footer",
                    content: i.footer,
                  });
              });
          },
          40: function (t, e) {
            var n =
              (this && this.__awaiter) ||
              function (t, e, n, a) {
                return new (n || (n = Promise))(function (o, i) {
                  function r(t) {
                    try {
                      l(a.next(t));
                    } catch (t) {
                      i(t);
                    }
                  }
                  function s(t) {
                    try {
                      l(a["throw"](t));
                    } catch (t) {
                      i(t);
                    }
                  }
                  function l(t) {
                    var e;
                    t.done
                      ? o(t.value)
                      : ((e = t.value),
                        e instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })).then(r, s);
                  }
                  l((a = a.apply(t, e || [])).next());
                });
              };
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e["default"] = (t) => {
                t.Commands.add("save-template", {
                  run: () =>
                    n(void 0, void 0, void 0, function* () {
                      const e = t.getHtml(),
                        n = t.getCss(),
                        a = t.getProjectData(),
                        o = e
                          .replace(/<body[^>]*>/, "")
                          .replace(/<\/body\s*>/, ""),
                        i = document.location.href,
                        r = new URL(i),
                        s = new URLSearchParams(r.search).get("id"),
                        l = { id: s, html: o, css: n, projectData: a },
                        d = `${document.location.protocol}//${document.location.host}/api/dev/user/landing-page/${s}/save`,
                        c = yield fetch(d, {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(l),
                        }),
                        p = yield c.json();
                      p.project_data
                        ? (t.Modal.open({
                            title: "Your Page has been Published",
                            content: "Thank you",
                          }),
                          t.loadProjectData(p.project_data),
                          localStorage.clear())
                        : t.Modal.open({
                            title: "There was a server-side error!",
                          });
                    }),
                }),
                  t.Commands.add("back-to-landing-page-list", {
                    run: () => {
                      const t = `${
                        document.location.protocol +
                        "//" +
                        document.location.host
                      }/admin/landing_page/list`;
                      window.location.href = t;
                    },
                  }),
                  t.Commands.add("theme-change", {
                    run: () => {
                      t.runCommand("open-update-theme");
                    },
                  }),
                  t.Commands.add("sortBlocks", {
                    run: (t) => {
                      const e = t.BlockManager.getAll();
                      if (e) {
                        e.comparator = function (t) {
                          const e = t.get("category");
                          return (
                            e &&
                              (null == e ? void 0 : e.attributes) &&
                              ("Blog" === e.attributes.label &&
                                e.set("open", !1),
                              "Extra" === e.attributes.label &&
                                e.set("open", !1)),
                            t.getCategoryLabel().toLowerCase()
                          );
                        };
                        const n = e.sort();
                        t.BlockManager.render(n);
                      }
                    },
                  });
              });
          },
          126: (t, e, n) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.typeShoppingForm =
                e.typemultipleItemForm =
                e.typeStandardForm =
                e.typeSocial =
                e.typeWrapper =
                e.typeHero =
                e.typeNavbar =
                e.typeHiddenDiv =
                e.typeDiv =
                e.typeDesc =
                e.typeText =
                e.typeLabel =
                e.typeButton =
                e.typeInput =
                e.typeBasicForm =
                  void 0);
            const a = n(879),
              o = n(707);
            (e.typeBasicForm = "basicForm"),
              (e.typeInput = "input"),
              (e.typeButton = "button"),
              (e.typeLabel = "label"),
              (e.typeText = "text"),
              (e.typeDesc = "desc"),
              (e.typeDiv = "div"),
              (e.typeHiddenDiv = "hiddenDiv"),
              (e.typeNavbar = "navbar"),
              (e.typeHero = "hero"),
              (e.typeWrapper = "wrapper"),
              (e.typeSocial = "social"),
              (e.typeStandardForm = "standardForm"),
              (e.typemultipleItemForm = "multipleItemForm"),
              (e.typeShoppingForm = "shoppingForm"),
              (e["default"] = (t, n) => {
                const { Components: i } = t,
                  { label: r } = n;
                let s;
                const l = n.classPrefix,
                  d = `${e.typeBasicForm}-container`;
                i.addType(e.typeBasicForm, {
                  view: {
                    onRender() {
                      s = this.model.attributes.selectedData;
                    },
                    events: {
                      submit: (t) => {
                        t.preventDefault();
                      },
                    },
                  },
                  model: {
                    defaults: {
                      tagName: "form",
                      droppable: ":not(form)",
                      draggable: ":not(form)",
                      name: r[0],
                      script: a.basicFormScript,
                      attributes: {
                        class: `container px-5 py-24 mx-auto rounded-lg shadow-md m-4 outline-none border-1 border-gray-300 basicForm`,
                        method: "post",
                        action: `${
                          document.location.protocol +
                          "//" +
                          document.location.host
                        }/checkout`,
                      },
                      traits: [{ type: e.typeBasicForm, name: "product" }],
                      components: { type: d, data: s },
                    },
                    init() {
                      this.on("change:attributes:selectedData", () => {
                        var e;
                        const n = JSON.parse(this.getAttributes().selectedData);
                        console.log(n);
                        const a = t.getWrapper(),
                          o = a.find(".productId")[0],
                          r = a.find(".productPrice")[0],
                          s = a.find(".quantity")[0];
                        o.set("attributes", {
                          value: n.id,
                          name: "productId",
                          type: "hidden",
                        }),
                          r.set("attributes", {
                            value: n.price,
                            name: "productPrice",
                            type: "hidden",
                          }),
                          s.set("attributes", {
                            value: 1,
                            name: "quantity",
                            type: "hidden",
                          });
                        let l =
                            document.head.querySelector(
                              'meta[name="csrf-token"]'
                            ) || "{{ csrf_token() }}",
                          d =
                            null === (e = i.getById("token").view) ||
                            void 0 === e
                              ? void 0
                              : e.attr;
                        d
                          ? (d.value = l)
                          : console.error("Token input element not found");
                      });
                    },
                  },
                }),
                  i.addType(e.typeStandardForm, {
                    view: {
                      onRender() {
                        s = this.model.attributes.selectedData;
                      },
                      events: {
                        submit: (t) => {
                          t.preventDefault();
                        },
                      },
                    },
                    model: {
                      defaults: {
                        tagName: "form",
                        droppable: ":not(form)",
                        draggable: ":not(form)",
                        name: r[1],
                        script: a.standardFormScript,
                        attributes: {
                          class: `${l} ${l}-container standardForm`,
                          method: "post",
                          action: `${
                            document.location.protocol +
                            "//" +
                            document.location.host
                          }/checkout`,
                        },
                        traits: [{ type: e.typeBasicForm, name: "product" }],
                        components: { type: d, data: s },
                      },
                      init() {
                        this.on("change:attributes:selectedData", () => {
                          var e;
                          const n = JSON.parse(
                              this.getAttributes().selectedData
                            ),
                            a = t.getWrapper(),
                            o = a.find(".productId")[0],
                            r = a.find(".productPrice")[0],
                            s = a.find(".showProduct")[0];
                          s.get("components").reset(),
                            s.set("style", { display: "block" });
                          const l = s.get("components");
                          if (
                            (o && r && s
                              ? (o.set("attributes", {
                                  value: n.id,
                                  name: "productId",
                                }),
                                r.set("attributes", {
                                  value: n.price,
                                  name: "productPrice",
                                }),
                                r.set("style", { display: "none" }),
                                l.add(
                                  `<span class="showProduct text-gray-900 text-xl font-bold" id="showProduct">${n.price} BDT</span>`
                                ))
                              : console.error(
                                  "One or more elements are missing."
                                ),
                            n.color)
                          ) {
                            const t = n.color.split(","),
                              e = a.find("#colorDiv")[0];
                            e.set("style", { display: "block" }),
                              e.get("components").reset();
                            e.get("components").add(
                              `<select class="bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2" id="colorSelect" name="color" required>`
                            );
                            const o = a
                              .find("#colorSelect")[0]
                              .get("components");
                            o.reset(),
                              o.add(
                                `<option selected="true" disabled="disabled" class="text-gray-900">Select Color</option>`
                              ),
                              t.forEach((t, e) => {
                                o.add(
                                  `<option id="${e}" value="${t}" class="text-gray-900" required>${t}</option>`
                                );
                              });
                          }
                          if (n.size) {
                            const t = n.size.split(","),
                              e = a.find("#size")[0],
                              o = e.get("components");
                            o.reset(),
                              e.set("style", { display: "block" }),
                              o.add(
                                `<select class="bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2 sizeSelect" id="sizeSelect" name="size" required>`
                              );
                            const i = a
                              .find("#sizeSelect")[0]
                              .get("components");
                            i.reset(),
                              i.add(
                                `<option selected="true" disabled="disabled" class="text-gray-900">Select Size</option>`
                              ),
                              t.forEach((t) => {
                                i.add(
                                  `<option value="${t}" class="text-gray-900">${t}</option>`
                                );
                              });
                          }
                          let d =
                              document.head.querySelector(
                                'meta[name="csrf-token"]'
                              ) || "{{ csrf_token() }}",
                            c =
                              null === (e = i.getById("token").view) ||
                              void 0 === e
                                ? void 0
                                : e.attr;
                          c
                            ? (c.value = d)
                            : console.error("Token input element not found");
                        });
                      },
                    },
                  }),
                  i.addType(e.typemultipleItemForm, {
                    view: {
                      onRender() {
                        s = this.model.attributes.selectedData;
                      },
                      events: {
                        submit: (t) => {
                          t.preventDefault();
                        },
                      },
                    },
                    model: {
                      defaults: {
                        tagName: "form",
                        droppable: ":not(form)",
                        draggable: ":not(form)",
                        name: r[2],
                        script: a.multipleItemFormScript,
                        attributes: {
                          class: `container mt-4 multipleItemForm`,
                          method: "post",
                          action: `${
                            document.location.protocol +
                            "//" +
                            document.location.host
                          }/checkout`,
                        },
                        traits: [{ type: e.typeBasicForm, name: "product" }],
                        components: { type: d, data: s },
                        styles: o.multipleItemFormCss,
                      },
                      init() {
                        this.on("change:attributes:selectedData", () => {
                          var e;
                          const n = JSON.parse(
                              this.getAttributes().selectedData
                            ),
                            o = t.getWrapper();
                          o.find("#orderSumList")[0].get("components").reset();
                          const r = o.find(".productId")[0],
                            s = o.find(".productPrice")[0];
                          if (
                            (s.set("attributes", {
                              value: n.price,
                              name: "productPrice",
                            }),
                            s.set("style", { display: "none" }),
                            r.set("attributes", {
                              value: n.id,
                              name: "productId",
                            }),
                            n.size)
                          ) {
                            const t = n.size.split(","),
                              e = n.color.split(","),
                              i = o.find(".sizeColorAndQuantity")[0];
                            i.addAttributes({
                              style: "display: flex; justify-content: center;",
                            }),
                              i.get("components").reset();
                            const r = i.get("components");
                            r.reset(),
                              t.forEach((t, e) => {
                                const n = (0, a.generateRandomString)();
                                r.add(
                                  `<div class="option-box-header colorAndQuantity" key="${e}" id="${n}">\n                <input type="hidden" id="size" name="size" value="${t}" />\n                      <h3>Size ${t}</h3>\n                      <p>আপনার পছন্দের রঙ এবং পরিমাণ নির্বাচন করুন</p>\n                    <div class="col-md-12 col-sm-6">\n                      <select id="colorList-${n}" class="form-control colorList" name="color" required>\n                        <option selected="true" disabled="disabled">Select a Color</option>\n                      </select>\n                    </div>\n                    <div class="col-md-12 col-sm-6" style="margin-top: 1rem;">\n                      <div class="row">\n                        <div class="col" style="align-items: center; justify-content: start; display: flex;">\n                        <label class="radio-label" for="quantity">পরিমাণ নির্বাচন করুন</label>\n                        </div>\n                        <div class="col" style="align-items: center; justify-content: start; display: flex;">\n                          <input id="quantity-${n}" class="quantity form-control" name="quantity" type="number" value="0" required min="0"/>\n                        </div>\n                      </div>\n                    </div>\n                    </div>\n                    `
                                );
                              });
                            o.find(".colorList").forEach((t) => {
                              const n = t.get("components");
                              e.forEach((t) => {
                                const [e, a] = t.split("-");
                                t.includes("#")
                                  ? n.add(
                                      `<option value="${t}" style="background-color: ${a};">${e}</option>`
                                    )
                                  : n.add(`<option value="${t}">${t}</option>`);
                              });
                            });
                          }
                          let l =
                              document.head.querySelector(
                                'meta[name="csrf-token"]'
                              ) || "{{ csrf_token() }}",
                            d =
                              null === (e = i.getById("token").view) ||
                              void 0 === e
                                ? void 0
                                : e.attr;
                          d
                            ? (d.value = l)
                            : console.error("Token input element not found");
                        });
                      },
                    },
                  }),
                  i.addType(e.typeShoppingForm, {
                    view: {
                      onRender() {
                        s = this.model.attributes.selectedData;
                      },
                      events: {
                        submit: (t) => {
                          t.preventDefault();
                        },
                      },
                    },
                    model: {
                      defaults: {
                        tagName: "form",
                        droppable: ":not(form)",
                        draggable: ":not(form)",
                        name: r[3],
                        attributes: {
                          class: `my-4 shoppingForm`,
                          method: "post",
                          action: `${
                            document.location.protocol +
                            "//" +
                            document.location.host
                          }/checkout`,
                        },
                        script: a.shoppingFormScript,
                        traits: [{ type: e.typeBasicForm, name: "product" }],
                        components: { type: d, data: s },
                      },
                      init() {
                        this.on("change:attributes:selectedData", () => {
                          var e;
                          const n = JSON.parse(
                              this.getAttributes().selectedData
                            ),
                            a = t.getWrapper();
                          a.find(".shoppingOrderSummary")[0]
                            .get("components")
                            .reset();
                          const o = a.find(".productId")[0],
                            r = a.find(".productPrice")[0];
                          if (
                            (r.set("attributes", {
                              value: n.price,
                              name: "productPrice",
                            }),
                            r.set("style", { display: "none" }),
                            o.set("attributes", {
                              value: n.id,
                              name: "productId",
                            }),
                            n.size && n.color)
                          ) {
                            const t = n.size.split(","),
                              e = n.color.split(","),
                              o = a.find(".itemInfo")[0];
                            o.addAttributes({
                              class: "lg:py-6 mt-6 lg:mt-0 shadow-xl itemInfo",
                            }),
                              o.get("components").reset();
                            const i = o.get("components");
                            i.reset(),
                              i.add(
                                `<h2 class="text-center text-xl md:text-3xl leading-10 mb-4">\n                Select Your Desired Item\n                </h2>\n            <div\n              class="flex items-center gap-4 justify-evenly py-4 border-b-2 border-gray-100 flex-wrap px-2"\n            >\n              <div class="grid place-items-center lg:place-items-start grid-cols-1 lg:grid-cols-2">\n                <span class="mr-3 leading-relaxed">Color:</span>\n                <div class="relative">\n                  <select\n                    class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 colorItem"\n                    required\n                  >\n                  <option selected disabled>Choose a Color</option>\n                  </select>\n                  <span\n                    class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"\n                  >\n                    <svg\n                      fill="none"\n                      stroke="currentColor"\n                      stroke-linecap="round"\n                      stroke-linejoin="round"\n                      stroke-width="2"\n                      class="w-4 h-4"\n                      viewBox="0 0 24 24"\n                    >\n                      <path d="M6 9l6 6 6-6"></path>\n                    </svg>\n                  </span>\n                </div>\n                  <span class="text-red-600 text-sm hidden" id="colorErr">Please Select a Color</span>\n              </div>\n\n              <div class="grid place-items-center lg:place-items-start grid-cols-1 lg:grid-cols-2">\n                <span class="mr-3">Size:</span>\n                <div class="relative">\n                  <select\n                    class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 sizeItem"\n                    required\n                  >\n                    <option selected disabled>Choose a Size</option>\n                  </select>\n                  <span\n                    class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"\n                  >\n                    <svg\n                      fill="none"\n                      stroke="currentColor"\n                      stroke-linecap="round"\n                      stroke-linejoin="round"\n                      stroke-width="2"\n                      class="w-4 h-4"\n                      viewBox="0 0 24 24"\n                    >\n                      <path d="M6 9l6 6 6-6"></path>\n                    </svg>\n                  </span>\n                </div>\n\n                <span class="text-red-600 text-sm hidden" id="sizeErr">Please Select a Size</span>\n              </div>\n\n              <div\n                class="flex items-center justify-evenly w-full flex-wrap gap-3"\n              >\n                <label for="quantity" class="mr-3 leading-relaxed"\n                  >Choose quantity:</label\n                >\n                <div class="relative flex items-center max-w-[8rem]">\n                  <button\n                    type="button"\n                    id="decrement-btn"\n                    data-input-counter-decrement="quantity-input"\n                    class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"\n                  >\n                    <svg\n                      class="w-3 h-3 text-gray-900"\n                      aria-hidden="true"\n                      xmlns="http://www.w3.org/2000/svg"\n                      fill="none"\n                      viewBox="0 0 18 2"\n                    >\n                      <path\n                        stroke="currentColor"\n                        stroke-linecap="round"\n                        stroke-linejoin="round"\n                        stroke-width="2"\n                        d="M1 1h16"\n                      />\n                    </svg>\n                  </button>\n                  <input\n                    type="text"\n                    id="quantity"\n                    name="quantity"\n                    disabled\n                    data-input-counter\n                    aria-describedby="helper-text-explanation"\n                    class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"\n                    required\n                    value="1"\n                  />\n                  <button\n                    type="button"\n                    id="increment-btn"\n                    data-input-counter-increment="quantity-input"\n                    class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"\n                  >\n                    <svg\n                      class="w-3 h-3 text-gray-900"\n                      aria-hidden="true"\n                      xmlns="http://www.w3.org/2000/svg"\n                      fill="none"\n                      viewBox="0 0 18 18"\n                    >\n                      <path\n                        stroke="currentColor"\n                        stroke-linecap="round"\n                        stroke-linejoin="round"\n                        stroke-width="2"\n                        d="M9 1v16M1 9h16"\n                      />\n                    </svg>\n                  </button>\n                </div>\n              </div>\n            </div>\n\n            <div class="flex p-4">\n              <div>\n                <span class="mr-3 leading-relaxed">Sub Total:</span>\n                <span class="title-font font-medium text-2xl text-gray-900" id="subTotalPrice">\n                  ৳00.00</span\n                >\n              </div>\n\n              <button\n                type="button"\n                class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded addToCart"\n              >\n                Add to Cart\n              </button>\n\n            </div>\n                  `
                              );
                            const r = a.find(".sizeItem")[0].get("components");
                            t.forEach((t) => {
                              r.add(`<option value="${t}">${t}</option>`);
                            });
                            const s = a.find(".colorItem")[0].get("components");
                            e.forEach((t) => {
                              const [e, n] = t.split("-");
                              n && n.startsWith("#")
                                ? s.add(
                                    `<option value="${t}" style="background-color: ${n};">${e}</option>`
                                  )
                                : t.startsWith("#")
                                ? s.add(
                                    `<option value="${t}" style="background-color: ${t};">${t}</option>`
                                  )
                                : s.add(`<option value="${t}">${t}</option>`);
                            });
                          }
                          let s =
                              document.head.querySelector(
                                'meta[name="csrf-token"]'
                              ) || "{{ csrf_token() }}",
                            l =
                              null === (e = i.getById("token").view) ||
                              void 0 === e
                                ? void 0
                                : e.attr;
                          l
                            ? (l.value = s)
                            : console.error("Token input element not found");
                        });
                      },
                    },
                  }),
                  i.addType("text", {
                    isComponent: (t) => "P" == t.tagName,
                    model: {
                      defaults: {
                        name: "Text Sect",
                        tagName: "p",
                        draggable: !0,
                        droppable: !0,
                        class: "gjs-droppable",
                      },
                    },
                  }),
                  i.addType("video", {
                    model: {
                      defaults: {
                        attributes: { class: `${l}-video` },
                        styles:
                          n.style ||
                          `\n            .${l}-video {\n              height: 350px;\n               width: 615px;\n               padding: 0.5rem;\n            }\n\n            @media only screen and (max-width: 600px) {\n              .${l}-video{\n                width: 100%;\n                height: 100%;\n              }\n            }\n            `,
                      },
                    },
                  });
              });
          },
          535: (t, e) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.shoppingForm =
                e.basicForm =
                e.multipleItemForm =
                e.standardForm =
                e.footer =
                e.tabs =
                e.collapse =
                e.wrapper =
                e.heroSect =
                e.nav =
                e.socialGroup =
                e.listItem =
                e.gridItem3 =
                e.divider =
                e.customerReview =
                e.sect37 =
                e.sect30 =
                e.sect50 =
                e.textSection =
                e.h1Block =
                e.blockquote =
                e.carousel =
                e.carouselSlider =
                  void 0),
              (e.carouselSlider = `\n<section class="pt-5 pb-5">\n<div class="container">\n    <div class="row">\n        <div class="col-6">\n            <h3 class="mb-3">Carousel cards title </h3>\n        </div>\n        <div class="col-6 text-right">\n            <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">\n            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>\n          </svg>\n            </a>\n            <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">\n            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>\n          </svg>\n            </a>\n        </div>\n        <div class="col-12">\n            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">\n\n                <div class="carousel-inner">\n                    <div class="carousel-item active">\n                        <div class="row">\n                            <div class="col-md-4 mb-3">\n                                <div class="card">\n                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d">\n                                    <div class="card-body">\n                                        <h4 class="card-title">Special title treatment</h4>\n                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-4 mb-3">\n                                <div class="card">\n                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698">\n                                    <div class="card-body">\n                                        <h4 class="card-title">Special title treatment</h4>\n                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-4 mb-3">\n                                <div class="card">\n                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a">\n                                    <div class="card-body">\n                                        <h4 class="card-title">Special title treatment</h4>\n                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="carousel-item">\n                        <div class="row">\n                            <div class="col-md-4 mb-3">\n                                <div class="card">\n                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4">\n                                    <div class="card-body">\n                                        <h4 class="card-title">Special title treatment</h4>\n                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-4 mb-3">\n                                <div class="card">\n                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840">\n                                    <div class="card-body">\n                                        <h4 class="card-title">Special title treatment</h4>\n                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-4 mb-3">\n                                <div class="card">\n                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e">\n                                    <div class="card-body">\n                                        <h4 class="card-title">Special title treatment</h4>\n                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="carousel-item">\n                        <div class="row">\n                            <div class="col-md-4 mb-3">\n                                <div class="card">\n                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23">\n                                    <div class="card-body">\n                                        <h4 class="card-title">Special title treatment</h4>\n                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-4 mb-3">\n                                <div class="card">\n                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129">\n                                    <div class="card-body">\n                                        <h4 class="card-title">Special title treatment</h4>\n                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-4 mb-3">\n                                <div class="card">\n                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6">\n                                    <div class="card-body">\n                                        <h4 class="card-title">Special title treatment</h4>\n                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</section>\n`),
              (e.carousel = `\n<div id="carouselExample" class="carousel slide slideDivClass">\n  <div class="carousel-inner" style="">\n    <div class="carousel-item active">\n      <img src="https://via.placeholder.com/250x150/78c5d6/fff/" class="d-block w-100 imgClass" alt="...">\n    </div>\n    <div class="carousel-item">\n      <img src="https://via.placeholder.com/250x150/78c5d6/fff/" class="d-block w-100 imgClass" alt="...">\n    </div>\n    <div class="carousel-item">\n      <img src="https://via.placeholder.com/250x150/78c5d6/fff/" class="d-block w-100 imgClass" alt="...">\n    </div>\n  </div>\n  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">\n    <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n    <span class="visually-hidden">Previous</span>\n  </button>\n  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">\n    <span class="carousel-control-next-icon" aria-hidden="true"></span>\n    <span class="visually-hidden">Next</span>\n  </button>\n</div>\n\n<style>\n.slideDivClass{\nwidth: 600px;\n}\n.imgClass{\nheight: 366px;\n}\n@media only screen and (max-width: 600px) {\n.slideDivClass{\n  width: 100% !important;\n}\n.imgClass{\n  height: 15rem;\n}\n</style>\n`),
              (e.blockquote = `<blockquote class="alert alert-primary py-3 m-2 quote-block d-flex">\n<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10m11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10"/></svg>\n\n  <span class="lead mx-2 quote-block-span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</span>\n\n<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m21.95 8.721l-.025-.168l-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222l-.474.197l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539m-11 0l-.025-.168l-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537"/></svg>\n  </blockquote>`),
              (e.h1Block = `<h1 class="gjs-droppable h1 text-center font-weight-bold h1-block">Put your title here</h1>\n      \n  <style>\n      .h1{\n        font-weight: 800;\n        font-size: 3rem;\n      }\n  </style>\n  \n  `),
              (e.textSection = `\n<div class="shadow-lg p-3 mb-5 bg-body rounded text-sect-head">\n <h1 class="heading text-sect-h1">Insert title here</h1>\n<p class="paragraph text-sect-p">\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\n</p></div>\n`),
              (e.sect50 = `\n<div class="d-flex container text-center sect50Class gjs-droppable">\n<div class=" gjs-droppable sect50Div1"></div>\n<div class=" gjs-droppable sect50Div1"></div>\n</div>\n\n\n<style>\n.sect50Class{\nheight: 10rem;\nmargin-top: 1rem;\nmargin-bottom: 1rem;\n}\n.sect50Div1{\nwidth: 50%;\nheight: 100%;\n}\n</style>\n`),
              (e.sect30 = `\n\n<div class="d-flex container text-center sect30Class gjs-droppable">\n<div class=" gjs-droppable sect30Div1"></div>\n<div class=" gjs-droppable sect30Div1"></div>\n<div class=" gjs-droppable sect30Div1"></div>\n</div>\n\n  <style>\n  .sect30Class{\n    height: 10rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n  .sect30Div1{\n    width: 50%;\n    height: 100%;\n  }\n  </style>\n`),
              (e.sect37 = `\n<div class="d-flex container text-center sect37Class gjs-droppable">\n<div class=" gjs-droppable sect37Div1"></div>\n<div class=" gjs-droppable sect37Div2"></div>\n</div>\n\n<style>\n  .sect37Class{\n    height: 10rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n  .sect37Div1{\n    width: 30%;\n    height: 100%;\n  }\n  .sect37Div2{\n    width: 70%;\n    height: 100%;\n  }\n  </style>\n`),
              (e.customerReview = `\n<section class="customer-review">\n<div class="container py-5 customer-review-container-div">\n  \x3c!-- head  --\x3e\n  <div class="row d-flex justify-content-center customer-review-flex-div">\n    <div class="col-md-10 col-xl-8 text-center customer-review-head-div">\n      <h3 class="fw-bold mb-4 customer-review-head-title">\n        Testimonials\n      </h3>\n      <p class="mb-4 pb-2 mb-md-5 pb-md-0 customer-review-head-desc">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,\n        error amet numquam iure provident voluptate esse quasi, veritatis\n        totam voluptas nostrum quisquam eum porro a pariatur veniam.\n      </p>\n    </div>\n  </div>\n\n  \x3c!-- body  --\x3e\n  <div class="row text-center customer-review-card-body">\n    <div class="col-md-4 mb-4 mb-md-0 customer-review-card-container">\n      <div class="card customer-review-card">\n        <div class="card-body py-4 mt-2 customer-review-inner-card">\n          <div\n            class="d-flex justify-content-center mb-4 customer-review-body-head"\n          >\n            <img\n              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"\n              class="rounded-circle shadow-1-strong customer-review-head-img"\n              width="100"\n              height="100"\n            />\n          </div>\n          <h5 class="font-weight-bold customer-review-card-title">\n            Teresa May\n          </h5>\n          <h6\n            class="font-weight-bold my-3 customer-review-card-second-title"\n          >\n            Founder at ET Company\n          </h6>\n          <ul\n            class="list-unstyled d-flex justify-content-center customer-review-card-star-ul"\n          >\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-half text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"\n                />\n              </svg>\n            </li>\n          </ul>\n          <p class="mb-2 customer-review-card-p">\n            <svg\n              width="16"\n              height="16"\n              fill="currentColor"\n              class="bi bi-quote text-white"\n              viewBox="0 0 16 16"\n            >\n              <path\n                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"\n              /></svg\n            >Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            Quod eos id officiis hic tenetur quae quaerat ad velit ab hic\n            tenetur.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class="col-md-4 mb-4 mb-md-0 customer-review-card-container">\n      <div class="card customer-review-card">\n        <div\n          class="card-body py-4 mt-2 card-body py-4 mt-2 customer-review-inner-card"\n        >\n          <div\n            class="d-flex justify-content-center mb-4 customer-review-body-head"\n          >\n            <img\n              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"\n              class="rounded-circle shadow-1-strong customer-review-head-img"\n              width="100"\n              height="100"\n            />\n          </div>\n          <h5 class="font-weight-bold customer-review-card-title">\n            Maggie McLoan\n          </h5>\n          <h6\n            class="font-weight-bold my-3 customer-review-card-second-title"\n          >\n            Photographer at Studio LA\n          </h6>\n          <ul\n            class="list-unstyled d-flex justify-content-center customer-review-card-star-ul"\n          >\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n          </ul>\n          <p class="mb-2 customer-review-card-p">\n            <svg\n              width="16"\n              height="16"\n              fill="currentColor"\n              class="bi bi-quote text-white"\n              viewBox="0 0 16 16"\n            >\n              <path\n                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"\n              /></svg\n            >Autem, totam debitis suscipit saepe sapiente magnam officiis\n            quaerat necessitatibus odio assumenda perferendis labore\n            laboriosam.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class="col-md-4 mb-0 customer-review-card-container">\n      <div class="card customer-review-card">\n        <div\n          class="card-body py-4 mt-2 card-body py-4 mt-2 customer-review-inner-card"\n        >\n          <div\n            class="d-flex justify-content-center mb-4 customer-review-body-head"\n          >\n            <img\n              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"\n              class="rounded-circle shadow-1-strong customer-review-head-img"\n              width="100"\n              height="100"\n            />\n          </div>\n          <h5 class="font-weight-bold customer-review-card-title">\n            Alexa Horwitz\n          </h5>\n          <h6\n            class="font-weight-bold my-3 customer-review-card-second-title"\n          >\n            Front-end Developer in NY\n          </h6>\n          <ul\n            class="list-unstyled d-flex justify-content-center customer-review-card-star-ul"\n          >\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-half text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"\n                />\n              </svg>\n            </li>\n          </ul>\n          <p class="mb-2 customer-review-card-p">\n            <svg\n              width="16"\n              height="16"\n              fill="currentColor"\n              class="bi bi-quote text-white"\n              viewBox="0 0 16 16"\n            >\n              <path\n                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"\n              /></svg\n            >Cras sit amet nibh libero, in gravida nulla metus scelerisque\n            ante sollicitudin commodo cras purus odio, vestibulum in\n            tempus viverra turpis.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</section>\n\n<style>\n.customer-review {\ncolor: #000;\nbackground-color: #f3f2f2;\n}\n.card {\nbackground-color: #303030;\ncolor: #fff;\n}\n</style>\n\n`),
              (e.divider = `\n<div class="divider-table container">\n</div>\n\n\n<style>\n  .divider-table {\n    width: 100%;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    height: 0px;\n    border: 1px solid gray;\n  }\n</style>\n`),
              (e.gridItem3 = `\n  <div class="card grid-item-card">\n          <img class="card-img-top grid-item-img" src="https://via.placeholder.com/250x150/78c5d6/fff/" alt="Image"/>\n            <div class="card-body  d-flex flex-column grid-item-card-body-col mt-4">\n                <h1 class="card-titl p-2 text-center grid-item-card-body-col-head">Title here</h1>\n                <p class="card-text p-2 text-center grid-item-card-body-col-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>\n                <a href="#" class="btn btn-success p-2 grid-item-card-body-btn"><span>Go somewhere</span></a>\n            </div>\n   </div>\n  \n  <style>\n    .grid-item-card{\n      width: 18rem;\n    }\n  </style>\n  `),
              (e.listItem = `<div class="card list-container d-inline-flex">\n    <div class="list-item-cell list-inner-container">\n      <div class="list-item-content list-content">\n        <div class="list-item-row list-content-row">\n          <div class="list-cell-left list-content-cell-left">\n            <img class="card rounded list-content-cell-left-img" src="https://via.placeholder.com/150/78c5d6/fff" alt="Image"/>\n          </div>\n          <div class="list-cell-right list-content-cell-right">\n            <h1 class="card-title list-content-cell-title">Title here</h1>\n            <p class="card-text list-content-cell-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n<style>\n  .list-inner-container{\n    margin: 13px;\n  }\n  .list-content{\n    margin: 13px;\n  }\n  .list-content-row{\n    display: flex;\n    gap: 1rem;\n  }\n  .3-list-content-cell-right{\n    margin-left: 10px;\n  }\n</style>\n\n`),
              (e.socialGroup = `\n<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups social-container">\n  <div class="btn-group" role="group" aria-label="First group social-inner-div">\n        <a href="#" class="btn btn-primary social-icon-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">\n        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>\n      </svg><br> <span>Facebook</span></a>\n        <a href="#" class="btn btn-primary social-icon-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">\n        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>\n      </svg><br> <span>Facebook</span></a>\n        <a href="#" class="btn btn-primary social-icon-link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">\n        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>\n  </svg><br> <span>Facebook</span></a>\n  </div>\n</div>\n\n<style>\n.btn-toolbar {\ndisplay: inline-block;\n}\n.social-icon-link{\nmargin: 12px;\n}\n.social-inner-div{\nmargin: 0.5rem;\n}\n</style>\n`),
              (e.nav = `<nav class="navbar navbar-expand-lg bg-light">\n<div class="container-fluid">\n  <a class="navbar-brand" href="#"><span>Navbar</span></a>\n  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n  <div class="collapse navbar-collapse" id="navbarSupportedContent">\n    <ul class="navbar-nav justify-conter-center me-auto mb-2 mb-lg-0">\n      <li class="nav-item">\n        <a class="nav-link active" aria-current="page" href="#"><span>Home</span></a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#"><span>About</span></a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#"><span>Contact Us</span></a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#"><span>Products</span></a>\n      </li>\n        </ul>\n      </li>\n    </ul>\n    <form class="d-flex" role="search">\n      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">\n      <button class="btn btn-outline-success" type="submit"><span>Search</span></button>\n    </form>\n  </div>\n</div>\n</nav>\n`),
              (e.heroSect = `\n<div class="hero-container">\n<p class="hero-text">GO TO SPACE</p>\n<p class="text-center text-white hero-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea libero animi neque officiis. Nemo corporis perspiciatis modi amet, saepe quaerat tempora deserunt consequuntur dolore libero recusandae ex, voluptate veniam?</p>\n<a class="btn btn-outline-light btn-lg hero-btn" href="#" style="align-items: center;" ><span>ORDER NOW</span></a>\n</div>\n\n<style>\n.hero-container {\n  background-image: url('https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg');\n  background-color: #2a3448;\n  background-size: 600px 469px;\n  height: 469px;\n  padding: 100px 0px;\n  text-align: center;\n}\n.hero-text {\n  color: #ffffff;\n  font-family: Helvetica;\n  font-size: 45px;\n  line-height: 45px;\n  font-weight: 900;\n  padding: 20px;\n}\n\n@media only screen and (max-width: 600px) {\n  .hero {\n    display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  }\n}\n\n</style>\n`),
              (e.wrapper = `<div class="wrapper shadow-lg p-3 mb-5 bg-body rounded">\n<div class="wrapper-section-top">\n    <div class="wrapper-section-top-column">\n        <img class="rounded" src="https://via.placeholder.com/350x250/78c5d6/fff" style="padding: 0; width: 100%">\n    </div>\n</div>\n\n<div class="wrapper-section-bottom">\n    <div class="wrapper-column">\n        <p class="wrapper-column-text fs-4">First line of text</p>\n        <hr class="wrapper-divider">\n        <p class="wrapper-column-text fs-5"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fugiat dolorum nemo voluptatibus corrupti nesciunt unde ut qui distinctio modi.</p>\n    </div>\n</div>\n</div>\n\n<style>\n    .wrapper {\n        padding: 50px 30px;\n        width: 36rem;\n    }\n    .wrapper-section-top {\n        padding: 20px;\n    }\n    .wrapper-section-bottom {\n        padding: 20px;\n    }\n    .wrapper-column {\n        border: 1px solid #dddddd;\n    }\n    .wrapper-column-text {\n        padding: 20px;\n    }\n    .wrapper-divider {\n        border-width: 1px;\n        border-style: dashed;\n        border-color: lightgrey;\n        padding: 0 20px;\n    }\n\n    @media only screen and (max-width: 600px) {\n      .wrapper{\n        width: 100% !important;\n        padding: 1rem;\n      }\n      .wrapper-column-text{\n        padding: 1rem;\n      }\n\n      .wrapper-section-top {\n        padding: 1rem;\n    }\n    .wrapper-section-bottom {\n        padding: 1rem;\n    }\n    }\n</style>\n`),
              (e.collapse = `\n<p class="d-inline-flex gap-1">\n<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><span>Toggle element</span></a>\n</p>\n<div class="row rowClass">\n<div class="col">\n<div class="collapse multi-collapse" id="multiCollapseExample1">\n  <div class="card card-body">\n  <p class="fs-6"> Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>\n  </div>\n</div>\n</div>\n</div>\n`),
              (e.tabs = `\n<ul class="nav nav-tabs myTab" id="myTab" role="tablist">\n<li class="nav-item" role="presentation">\n  <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><p class="fs-6" style="margin-bottom: 0rem;">Home</p></button>\n</li>\n<li class="nav-item" role="presentation">\n  <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><p class="fs-6" style="margin-bottom: 0rem;">Profile</p></button>\n</li>\n<li class="nav-item" role="presentation">\n  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><p class="fs-6" style="margin-bottom: 0rem;">Contact</p></button>\n</li>\n</ul>\n<div class="tab-content border border-secondary myTab" id="myTabContent">\n<div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">\n<p class="fs-6" style="margin-bottom: 0rem;">\nLorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis ullam expedita sed ipsum tenetur laudantium architecto cumque esse accusamus praesentium quas eos quasi repellendus, a rem. Hic, soluta iusto?\n</p>\n</div>\n<div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">\n<p class="fs-6" style="margin-bottom: 0rem;">\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, velit quasi. Reprehenderit, quidem quos. Quibusdam, in? Veniam quas obcaecati eligendi maxime perferendis, atque ducimus cumque, praesentium voluptas delectus laboriosam quis necessitatibus ratione perspiciatis voluptatibus iusto.\n</p>\n</div>\n<div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">\n<p class="fs-6" style="margin-bottom: 0rem;">\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, facilis. Rerum, ad? Facilis ipsa illum quaerat corrupti earum? Sequi, distinctio!\n</p>\n</div>\n</div>\n\n<style>\n.myTab {\nwidth: 25rem;\n}\n@media only screen and (max-width: 600px) {\n.myTab{\n  width: 100% !important;\n}\n}\n</style>\n`),
              (e.footer = `\n<footer class="w-100 py-4 flex-shrink-0">\n<div class="container py-4">\n    <div class="row">\n        <div class="col-lg-4 col-md-6">\n            <h5 class="h1 text-white">FB.</h5>\n            <p class="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>\n            <p class="small mb-0 text-whte">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">Bootstrapious.com</a></p>\n        </div>\n        <div class="col-lg-2 col-md-6">\n            <h5 class="text-white mb-3">Quick links</h5>\n            <ul class="list-unstyled text-muted">\n                <li><a href="#"><span>Home</span></a></li>\n                <li><a href="#"><span>About</span></a></li>\n                <li><a href="#"><span>Get started</span></a></li>\n                <li><a href="#"><span>FAQ</span></a></li>\n            </ul>\n        </div>\n        <div class="col-lg-2 col-md-6">\n            <h5 class="text-white mb-3">Quick links</h5>\n            <ul class="list-unstyled text-muted">\n            <li><a href="#"><span>Home</span></a></li>\n                <li><a href="#"><span>About</span></a></li>\n                <li><a href="#"><span>Get started</span></a></li>\n                <li><a href="#"><span>FAQ</span></a></li>\n            </ul>\n        </div>\n        <div class="col-lg-4 col-md-6">\n            <h5 class="text-white mb-3">Newsletter</h5>\n            <p class="small  text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>\n        </div>\n    </div>\n</div>\n</footer>\n\n<style>\n\nfooter {\nbackground: #212529;\n}\na {\ncolor: white;\ntext-decoration: none;\ntransition: all 0.3s;\n}\n\na:hover, a:focus {\ntext-decoration: none;\n}\n</style>\n`),
              (e.standardForm = `\n     <section\n        class="mx-auto my-12 relative body-font overflow-hidden container"\n      >\n        <h1\n          class="text-center uppercase tracking-[3px] text-4xl leading-[48px] pb-12 text-blue-500 pb-8 font-bold"\n        >\n          Order Form\n        </h1>\n        <section class="contact-form grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">\n\n          <div class="relative my-4 h-16">\n            <input\n              id="name"\n              name="name"\n              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer px-3 pb-3"\n              type="text"\n              required\n              placeholder=" "\n            />\n            <label class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1" for="name">Name</label>\n          </div>\n\n          <div class="relative my-4 h-16">\n            <input\n              id="phone"\n              name="phone"\n              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer px-3\n              pb-3" placeholder=" "\n              type="text"\n              required\n            />\n            <label class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1" for="phone">Contact Number</label>\n          </div>\n\n          <div class="relative my-4 h-16">\n            <input\n              id="address"\n              name="address"\n              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer px-3 pb-3" placeholder=" "\n              type="text"\n              required\n            />\n            <label class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1" for="address">Address</label>\n          </div>\n\n          <div class="relative my-4 h-16 hidden" id="size"></div>\n\n          <div class="relative h-16 my-4 justify-between flex border-1 items-center rounded border-gray-300 pl-2">\n                <label for="quantity" class="mr-3 leading-relaxed text-gray-500">Choose quantity:</label>\n                <div class="relative flex items-center h-full">\n                  <button\n                   type="button"\n                   id="decrease"\n                   onclick="updateQuantity()"\n                  class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-full focus:ring-gray-100 focus:ring-2 focus:outline-none">\n                    <svg\n                      class="w-3 h-3 text-gray-900"\n                      aria-hidden="true"\n                      xmlns="http://www.w3.org/2000/svg"\n                      fill="none"\n                      viewBox="0 0 18 2"\n                    >\n                      <path\n                        stroke="currentColor"\n                        stroke-linecap="round"\n                        stroke-linejoin="round"\n                        stroke-width="2"\n                        d="M1 1h16"\n                      />\n                    </svg>\n                  </button>\n                  <input\n                    type="text"\n                    id="standardFormquantity"\n                    value="1"\n                    name="quantity"\n                    disabled\n                    class="bg-gray-50 border-x-0 border-gray-300 h-full text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"\n                    required\n                    />\n                  <button\n                    id="increase"\n                    onclick="updateQuantity()"\n                    type="button"\n                    class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-full focus:ring-gray-100 focus:ring-2 focus:outline-none"\n                  >\n                    <svg\n                      class="w-3 h-3 text-gray-900"\n                      aria-hidden="true"\n                      xmlns="http://www.w3.org/2000/svg"\n                      fill="none"\n                      viewBox="0 0 18 18"\n                    >\n                      <path\n                        stroke="currentColor"\n                        stroke-linecap="round"\n                        stroke-linejoin="round"\n                        stroke-width="2"\n                        d="M9 1v16M1 9h16"\n                      />\n                    </svg>\n                  </button>\n                </div>\n              </div>\n\n          <div class="relative my-4 h-16 hidden" id="colorDiv"></div>\n\n          <div>\n              <div class="flex gap-3 mt-3 mb-2 items-center">\n                  <div class="text-gray-900">\n                  Shipping\n                  </div>\n                  <p class="mr-3 leading-relaxed text-gray-500 text-sm">\n                    (Cash on Delivery Available)\n                  </p>\n              </div>\n              <div class="flex gap-3 flex-col md:flex-row" id="shipping">\n                  <div class="flex items-center ps-4 border-1 border-gray-300 rounded w-full lg:w-1/2 h-16">\n                    <input class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" type="radio" id="insideDhaka" value="60" name="shippingFee" required>\n                    <label class="w-full py-4 ms-2 text-sm font-medium text-gray-500" for="insideDhaka">\n                    Inside Dhaka: 60 BDT\n                    </label>\n                  </div>\n                  <div class="flex items-center ps-4 border-1 border-gray-300 rounded w-full lg:w-1/2 h-16">\n                    <input type="radio" checked class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" id="outsideDhaka" value="120" name="shippingFee" required>\n                    <label class="w-full py-4 ms-2 text-sm font-medium text-gray-500" for="outsideDhaka"\n                      >Outside Dhaka: 120 BDT</label>\n                  </div>\n              </div>\n          </div>\n\n          <div style="display: none">\n            <input type="hidden" id="server" name="landingpage" value="true" />\n            <input\n              type="hidden"\n              id="token"\n              name="_token"\n              value="{{ csrf_token() }}"\n            />\n            <input\n              type="hidden"\n              id="productId"\n              name="productId"\n              class="productId"\n              value=""\n            />\n            <input\n              type="hidden"\n              id="formCheck"\n              name="formCheck"\n              value="Standard Form"\n            />\n            <input\n              type="hidden"\n              id="cashOnDelivery"\n              name="cashOnDelivery"\n              value="true"\n            />\n          </div>\n\n          <div id="priceDiv">\n            <div class="text-gray-900 mt-3 mb-2">\n              Total Price\n            </div>\n            <div class="showProduct border-1 border-gray-300 rounded w-full p-3 h-16 hidden"></div>\n            <input\n              type="hidden"\n              id="productPrice"\n              name="productPrice"\n              class="productPrice"\n              value="0"\n              />\n          </div>\n        </section>\n\n          <div class="relative my-4 w-full h-16 flex items-center justify-center">\n            <button type="submit" class="text-white text-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2 focus:outline-none">Submit</button>\n          </div>\n      </section>\n`),
              (e.multipleItemForm = `\n          <section class="multiple-item-form">\n            \t\t<div class="sub-header">\n                  <div class="container">\n                    <h1>Order Form</h1>\n                  </div>\n                </div>\n            \t\t\t<div class="order">\n\t\t\t\t<div class="container">\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="col-lg-8" id="mainContent">\n\n\t\t\t\t\t\t\t\t<div id="sizeGroup" class="row option-box sizeColorAndQuantity"> </div>\n\n\t\t\t\t\t\t\t\t<div id="extraOptionGroup1" class="row option-box">\n\t\t\t\t\t\t\t\t\t<div class="option-box-header">\n\t\t\t\t\t\t\t\t\t\t<h3>ক্যাশ অন ডেলিভারি (হোম ডেলিভারি)</h3>\n\t\t\t\t\t\t\t\t\t\t<p>আপনি যদি ক্যাশ অন ডেলিভারি চান তাহলে নিচের অপশনটি চেক করুন</p>\n\t\t\t\t\t\t\t\t\t</div>\n\n                <div class="col-md-12 col-sm-12 checkbox mb-4">\n                  <div class="checkbox-wrapper-7">\n                      <input type="hidden" name="cashOnDelivery" value="false">\n                      <input id="multipleItemCashOnDelivery" class="tgl tgl-ios" name="cashOnDelivery" type="checkbox" value="true"/>\n                      <label class="tgl-btn" for="multipleItemCashOnDelivery"></label>\n                  </div>\n                  <label class="radio-label" for="multipleItemCashOnDelivery">ক্যাশ অন ডেলিভারি</label>\n                </div>\n\n                <div class="row option-box" id="shipping">\n                \t\t<div class="option-box-header">\n\t\t\t\t\t\t\t\t\t\t<h3>শিপিং ফি</h3>\n\t\t\t\t\t\t\t\t\t  </div>\n                    <div class="form-group">\n                      <input type="radio" id="insideDhaka" value="60" name="shippingFee" required>\n                      <label class="radio-label" for="insideDhaka">Inside Dhaka: 60 BDT</label><br>\n                    </div>\n                    <div class="form-group">\n                      <input type="radio" id="outsideDhaka" value="120" name="shippingFee" required>\n                      <label class="radio-label" for="outsideDhaka">Outside Dhaka: 120 BDT</label><br>\n                    </div>\n                </div>\n\n                \n\t\t\t\t\t\t\t\t<div id="personalDetails">\n\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t<div class="order-box-header">\n\t\t\t\t\t\t\t\t\t\t\t<h3>অর্ডার করতে নিচের ফর্মটি সঠিক তথ্য দিয়ে পূরণ করুন</h3>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input id="username" class="form-control" name="name" placeholder="Enter Full Name" type="text" required />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n                    \t<div class="col-md-6 col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Phone</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input id="phone" class="form-control" name="phone" placeholder="Enter Phone e.g.: 01711111111" type="text" required/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-md-12">\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input id="address" class="form-control" name="address" placeholder="Enter Address" type="text" required />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t<div class="col-md-12">\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Message</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea id="inputMessage" class="form-control" name="message" placeholder="Enter Message"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n                     <div class="form-field col-lg-12" style="display: none;">\n                      <input type="hidden" id="server" name="landingpage" value="true">\n                      <input type="hidden" id="token" name="_token" value="{{ csrf_token() }}">\n                      <input type="hidden" id="productId" name="productId" class="productId" value="">\n                      <input type="hidden" id="formCheck" name="formCheck" value="Multiple Item Form">\n                      <input type="hidden" id="productPrice" name="productPrice" class="productPrice" value="0">\n                    </div>\n\n\n\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t<div class="col-md-12">\n                      <div class="order-box-header">\n                        <h3>আরও তথ্যের জন্য, এই নম্বরে যোগাযোগ করুন 01711111111</h3>\n                      </div>  \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="col-lg-4" id="sidebar">\n\t\t\t\t\t\t\t\t<div id="orderContainer" class="theiaStickySidebar">\n\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t<div class="col-md-12">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Order Summary</h3>\n\t\t\t\t\t\t\t\t\t\t\t<ul id="orderSumList"></ul>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="row total-container">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-6 p-0">\n                        <label>Total Price</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-6 p-0">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" id="totalPrice" class="summaryInput" name="total" value="৳ 0"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t<div class="col-lg-12">\n\t\t\t\t\t\t\t\t\t\t\t<button type="submit" name="submit" class="btn-form-func">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="btn-form-func-content">SUBMIT</span>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n          </section>\n          `),
              (e.basicForm = `\n<div class="max-w-sm mx-auto">\n  <div class="text-center">\n    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Order Form</h1>\n  </div>\n\n    <div class="mb-4">\n      <label for="name" class="block text-sm font-medium text-gray-700">Your Name:</label>\n      <input\n        type="text"\n        name="name"\n        placeholder="Enter your Name"\n        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"\n      />\n    </div>\n\n\n    <div class="mb-4">\n      <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number:</label>\n      <input\n        type="text"\n        name="phone"\n        placeholder="Enter your Number"\n        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"\n      />\n    </div>\n\n\n    <div class="mb-4">\n      <label for="address" class="block text-sm font-medium text-gray-700">Address:</label>\n      <input\n        type="text"\n        name="address"\n        placeholder="Enter your Address"\n        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"\n      />\n    </div>\n\n  <div class="hidden">\n    <input type="hidden" id="server" name="landingpage" value="true" />\n    <input type="hidden" id="token" name="_token" value="{{ csrf_token() }}" />\n    <input type="hidden" id="productId" name="productId" class="productId" />\n    <input type="hidden" id="productPrice" name="productPrice" class="productPrice" />\n    <input type="hidden" id="quantity" name="quantity" class="quantity" />\n    <input type="hidden" id="cashOnDelivery" name="cashOnDelivery" value="true" />\n    <input type="hidden" id="formCheck" name="formCheck" value="Basic Form" />\n  </div>\n\n  <div class="text-center">\n    <button\n      type="submit"\n      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">\n      Submit\n    </button>\n  </div>\n</div>\n`),
              (e.shoppingForm = `\n      <section class="text-gray-600 body-font overflow-hidden container ">\n        <div class="container lg:px-5 m-8 mx-auto flex flex-col">\n          <h2\n          class="title-font text-gray-500 tracking-widest mb-4 text-3xl font-extrabold leading-none md:text-5xl lg:text-6xl text-center w-full"\n        >\n          Order Form\n        </h2>\n        <div class="mx-auto w-full flex gap-4 flex-col md:flex-row">\n\n          \x3c!-- Item and additional information --\x3e\n            <div class="lg:w-1/2 w-full">\n              \x3c!-- Item selection  --\x3e\n              <div class="itemInfo"> </div>\n\n              \x3c!-- Additional Information  --\x3e\n              <div class="lg:py-6 mt-6 lg:mt-0 shadow-xl">\n                <h2 class="text-center text-xl md:text-3xl leading-10 mb-4">\n                  Additional Information\n                </h2>\n                <div class="mb-4 px-4">\n                  <label\n                    for="name"\n                    class="block text-sm font-medium text-gray-700"\n                    >Your Name:</label\n                  >\n                  <input\n                    type="text"\n                    name="name"\n                    placeholder="Enter your Name"\n                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"\n                    required\n                  />\n                </div>\n\n                <div class="mb-4 px-4">\n                  <label\n                    for="phone"\n                    class="block text-sm font-medium text-gray-700"\n                    >Phone Number:</label\n                  >\n                  <input\n                    type="text"\n                    name="phone"\n                    placeholder="Enter your Number"\n                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"\n                    required\n                  />\n                </div>\n\n                <div class="mb-4 px-4">\n                  <label\n                    for="address"\n                    class="block text-sm font-medium text-gray-700"\n                    >Address:</label\n                  >\n                  <input\n                    type="text"\n                    name="address"\n                    placeholder="Enter your Address"\n                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"\n                    required\n                  />\n                </div>\n\n              <div class="flex p-4 w-full">\n                <label for="toggleB" class="flex items-center cursor-pointer">\n                  <div class="relative">\n                    <input type="hidden" name="cashOnDelivery" value="false">\n                    <input type="checkbox" id="toggleB" value="true" class="sr-only" name="cashOnDelivery">\n                    <div class="block bg-gray-400 w-14 h-8 rounded-full"></div>\n                    <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>\n                  </div>\n                  <label for="cashOnDelivery" class="ml-3 text-gray-700 font-medium">\n                    Cash on Delivery!\n                  </label>\n                </label>\n              </div>\n\n              <div class="p-4 w-full mb-4">\n                <h3 class="mb-3 font-semibold text-gray-900">Shipping Fee</h3>\n                <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">\n                    <li class="w-full border-b border-gray-200 rounded-t-lg ">\n                        <div class="flex items-center ps-3">\n                            <input id="insideDhaka" required type="radio" value="60" name="shippingFee" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">\n                            <label for="insideDhaka" class="w-full py-3 ms-2 text-sm font-medium text-gray-900">Inside Dhaka - 60TK </label>\n                        </div>\n                    </li>\n                    <li class="w-full border-b border-gray-200 rounded-t-lg">\n                        <div class="flex items-center ps-3">\n                            <input id="outsideDhaka" required type="radio" value="120" name="shippingFee" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">\n                            <label for="outsideDhaka" class="w-full py-3 ms-2 text-sm font-medium text-gray-900">Outside Dhaka - 120TK</label>\n                        </div>\n                    </li>\n                </ul>\n              </div>\n\n\n                <div class="hidden">\n                  <input\n                    type="hidden"\n                    id="server"\n                    name="landingpage"\n                    value="true"\n                  />\n                  <input\n                    type="hidden"\n                    id="token"\n                    name="_token"\n                    value="{{ csrf_token() }}"\n                  />\n                  <input\n                    type="hidden"\n                    id="productId"\n                    name="productId"\n                    class="productId"\n                  />\n                  <input\n                    type="hidden"\n                    id="productPrice"\n                    name="productPrice"\n                    class="productPrice"\n                  />\n                  <input\n                    type="hidden"\n                    id="formCheck"\n                    name="formCheck"\n                    value="Shopping Form"\n                  />\n                </div>\n              </div>\n            </div>\n\n\n            \x3c!-- Order Summary  --\x3e\n            <div class="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0 shadow-xl">\n              <div class="space-y-4 rounded-lg bg-white p-4 sm:p-6">\n                <p class="text-xl font-semibold text-gray-900">Order summary</p>\n      \n                <div class="space-y-4">\n                  <div class="space-y-2 shoppingOrderSummary"> </div>\n      \n                  <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">\n                    <dt class="text-base font-bold text-gray-900">Total</dt>\n                    <dd class="text-base font-bold text-gray-900 totalPrice">৳ 00.00</dd>\n                  </dl>\n                </div>\n\n                <div class="text-center">\n                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full">Confirm Checkout</button>\n                </div>\n              </div>\n             </div>\n\n\n        </div>\n      </section>\n\n      <style>\n      input:checked ~ .dot {\n        transform: translateX(100%);\n        background-color: #48bb78;\n      }\n      </style>\n\n`);
          },
          121: (t, e) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.basicFormSvg = e.productDummyData = void 0),
              (e.productDummyData = [
                {
                  id: 9,
                  user_id: 1,
                  title: "Hello data",
                  brand_id: 2,
                  category_id: 2,
                  sub_category_id: null,
                  child_category_id: null,
                  seller_id: 2,
                  slug: "Quae ut vitae nostru",
                  size: "Commodo et voluptatu",
                  color: "yellow-#fcba03, red-#fc0303",
                  price: 542,
                  tax: "---Select---",
                  delivery_charge: null,
                  product_type: "---Select---",
                  description: "Fugiat omnis quo qua",
                  short_description: "Ea eos at qui molest",
                  shipping_returns: "Qui dolore iste eos",
                  sku: "Ut quia non dignissi",
                  barcode: "Aut voluptatem sit t",
                  track_qty: "Yes",
                  qty: 125,
                  status: 1,
                  created_at: "2024-05-17T09:08:51.000000Z",
                  updated_at: "2024-05-17T09:08:51.000000Z",
                  product_image: [],
                  brand: {
                    id: 2,
                    brand_name: "babybrand",
                    brand_image: "1711909771.png",
                    slug: "babybrand",
                    status: 1,
                    created_at: "2024-03-31T18:29:31.000000Z",
                    updated_at: "2024-03-31T18:29:31.000000Z",
                  },
                  category: {
                    id: 2,
                    category_name: "baby2",
                    category_image: "1711909830.png",
                    slug: "baby2",
                    status: 1,
                    created_at: "2024-03-31T18:30:30.000000Z",
                    updated_at: "2024-03-31T18:30:30.000000Z",
                  },
                  sub_category: null,
                },
                {
                  id: 8,
                  user_id: 1,
                  title: "good good",
                  brand_id: 2,
                  category_id: 2,
                  sub_category_id: null,
                  child_category_id: null,
                  seller_id: 3,
                  slug: "good-good",
                  size: "xl,xxl",
                  color: "blu",
                  price: 1800,
                  tax: "0%",
                  delivery_charge: null,
                  product_type: "Popular",
                  description:
                    "1. This product description provides an overview of the features and qualities of the product being sold. It aims to inform potential customers about the product's specifications, benefits, and intended use. The description should be concise, clear, and persuasive, highlighting the unique selling points and advantages of the product to attract and engage potential buyers. It should also provide accurate and relevant information to help customers make an informed purchasing decision.\r\n\r\n1. This product description provides an overview of the features and qualities of the product being sold. It aims to inform potential customers about the product's specifications, benefits, and intended use. The description should be concise, clear, and persuasive, highlighting the unique selling points and advantages of the product to attract and engage potential buyers. It should also provide accurate and relevant information to help customers make an informed purchasing decision.\r\n\r\n1. This product description provides an overview of the features and qualities of the product being sold. It aims to inform potential customers about the product's specifications, benefits, and intended use. The description should be concise, clear, and persuasive, highlighting the unique selling points and advantages of the product to attract and engage potential buyers. It should also provide accurate and relevant information to help customers make an informed purchasing decision.",
                  short_description:
                    "1. This product description provides an overview of the features and qualities of the product being sold. It aims to inform potential customers about the product's specifications, benefits, and intended use. The description should be concise, clear, and persuasive, highlighting the unique selling points and advantages of the product to attract and engage potential buyers. It should also provide accurate and relevant information to help customers make an informed purchasing decision.",
                  shipping_returns:
                    "1. This product description provides an overview of the features and qualities of the product being sold. It aims to inform potential customers about the product's specifications, benefits, and intended use. The description should be concise, clear, and persuasive, highlighting the unique selling points and advantages of the product to attract and engage potential buyers. It should also provide accurate and relevant information to help customers make an informed purchasing decision.",
                  sku: "5r544",
                  barcode: "ss",
                  track_qty: "Yes",
                  qty: 1287,
                  status: 1,
                  created_at: "2024-03-31T18:37:26.000000Z",
                  updated_at: "2024-03-31T20:32:22.000000Z",
                  product_image: [
                    {
                      id: 9,
                      product_id: 8,
                      image: "1711909903.png",
                      created_at: "2024-03-31T18:37:26.000000Z",
                      updated_at: "2024-03-31T18:37:26.000000Z",
                    },
                  ],
                  brand: {
                    id: 2,
                    brand_name: "babybrand",
                    brand_image: "1711909771.png",
                    slug: "babybrand",
                    status: 1,
                    created_at: "2024-03-31T18:29:31.000000Z",
                    updated_at: "2024-03-31T18:29:31.000000Z",
                  },
                  category: {
                    id: 2,
                    category_name: "baby2",
                    category_image: "1711909830.png",
                    slug: "baby2",
                    status: 1,
                    created_at: "2024-03-31T18:30:30.000000Z",
                    updated_at: "2024-03-31T18:30:30.000000Z",
                  },
                  sub_category: null,
                },
                {
                  id: 7,
                  user_id: 1,
                  title: "New Gmail account1",
                  brand_id: 1,
                  category_id: 1,
                  sub_category_id: null,
                  child_category_id: null,
                  seller_id: 1,
                  slug: "new-gmail-account1",
                  size: "xl",
                  color: "blu",
                  price: 123,
                  tax: "0%",
                  delivery_charge: null,
                  product_type: "Features",
                  description: "sadfsafsadf",
                  short_description: "dsafsdfsdfsdf",
                  shipping_returns: "asdfsadf",
                  sku: "5r544",
                  barcode: "ssddff",
                  track_qty: "Yes",
                  qty: 1230,
                  status: 1,
                  created_at: "2024-03-29T16:49:00.000000Z",
                  updated_at: "2024-03-31T20:49:35.000000Z",
                  product_image: [
                    {
                      id: 7,
                      product_id: 7,
                      image: "1711730903.JPG",
                      created_at: "2024-03-29T16:49:00.000000Z",
                      updated_at: "2024-03-29T16:49:00.000000Z",
                    },
                    {
                      id: 8,
                      product_id: 7,
                      image: "1711730907.png",
                      created_at: "2024-03-29T16:49:00.000000Z",
                      updated_at: "2024-03-29T16:49:00.000000Z",
                    },
                  ],
                  brand: {
                    id: 1,
                    brand_name: "baby",
                    brand_image: "1710942425.jpg",
                    slug: "baby-bouncer",
                    status: 1,
                    created_at: "2024-03-20T13:47:05.000000Z",
                    updated_at: "2024-03-20T13:47:05.000000Z",
                  },
                  category: {
                    id: 1,
                    category_name: "baby",
                    category_image: "1710942447.jpg",
                    slug: "beby",
                    status: 1,
                    created_at: "2024-03-20T13:47:27.000000Z",
                    updated_at: "2024-03-20T13:47:27.000000Z",
                  },
                  sub_category: null,
                },
                {
                  id: 6,
                  user_id: 1,
                  title: "baby bouncer55",
                  brand_id: 1,
                  category_id: 1,
                  sub_category_id: null,
                  child_category_id: null,
                  seller_id: 1,
                  slug: "baby-bouncer55",
                  size: "xl",
                  color: "blu",
                  price: 123,
                  tax: "0%",
                  delivery_charge: null,
                  product_type: "Features",
                  description: "sdfsdfsdfwerwer",
                  short_description: "fsdfsdfsdfsdf",
                  shipping_returns: "sdfasdfwerwer",
                  sku: "1231",
                  barcode: "ssddff",
                  track_qty: "Yes",
                  qty: 123,
                  status: 1,
                  created_at: "2024-03-29T16:39:27.000000Z",
                  updated_at: "2024-03-29T16:39:27.000000Z",
                  product_image: [
                    {
                      id: 6,
                      product_id: 6,
                      image:
                        "https://test2.chepapest.com/test2.chepapest.com/uploads/product/6-6-1711730367.JPG",
                      created_at: "2024-03-29T16:39:27.000000Z",
                      updated_at: "2024-03-29T16:39:27.000000Z",
                    },
                  ],
                  brand: {
                    id: 1,
                    brand_name: "baby",
                    brand_image: "1710942425.jpg",
                    slug: "baby-bouncer",
                    status: 1,
                    created_at: "2024-03-20T13:47:05.000000Z",
                    updated_at: "2024-03-20T13:47:05.000000Z",
                  },
                  category: {
                    id: 1,
                    category_name: "baby",
                    category_image: "1710942447.jpg",
                    slug: "beby",
                    status: 1,
                    created_at: "2024-03-20T13:47:27.000000Z",
                    updated_at: "2024-03-20T13:47:27.000000Z",
                  },
                  sub_category: null,
                },
                {
                  id: 5,
                  user_id: 1,
                  title: "baby bouncer41",
                  brand_id: 1,
                  category_id: 1,
                  sub_category_id: null,
                  child_category_id: null,
                  seller_id: 1,
                  slug: "baby-bouncer41",
                  size: "xl",
                  color: "blu",
                  price: 12345,
                  tax: "0%",
                  delivery_charge: null,
                  product_type: "Features",
                  description: "sdfsadfas",
                  short_description: "fdsfsdfsdf",
                  shipping_returns: "asdfasdfasdf",
                  sku: "234",
                  barcode: "ssddff",
                  track_qty: "Yes",
                  qty: 123,
                  status: 1,
                  created_at: "2024-03-29T16:18:27.000000Z",
                  updated_at: "2024-03-29T16:18:27.000000Z",
                  product_image: [
                    {
                      id: 5,
                      product_id: 5,
                      image:
                        "https://test2.chepapest.com/test2.chepapest.com/uploads/product/5-5-1711729107.jpeg",
                      created_at: "2024-03-29T16:18:27.000000Z",
                      updated_at: "2024-03-29T16:18:27.000000Z",
                    },
                  ],
                  brand: {
                    id: 1,
                    brand_name: "baby",
                    brand_image: "1710942425.jpg",
                    slug: "baby-bouncer",
                    status: 1,
                    created_at: "2024-03-20T13:47:05.000000Z",
                    updated_at: "2024-03-20T13:47:05.000000Z",
                  },
                  category: {
                    id: 1,
                    category_name: "baby",
                    category_image: "1710942447.jpg",
                    slug: "beby",
                    status: 1,
                    created_at: "2024-03-20T13:47:27.000000Z",
                    updated_at: "2024-03-20T13:47:27.000000Z",
                  },
                  sub_category: null,
                },
                {
                  id: 4,
                  user_id: 1,
                  title: "baby bouncer4",
                  brand_id: 1,
                  category_id: 1,
                  sub_category_id: null,
                  child_category_id: null,
                  seller_id: 1,
                  slug: "baby-bouncer4",
                  size: "xl",
                  color: "blu",
                  price: 1234,
                  tax: "0%",
                  delivery_charge: null,
                  product_type: "Features",
                  description: "sdfsdfsdf",
                  short_description: "fdsfsdfsdf",
                  shipping_returns: "sdfsdfsdf",
                  sku: "4445",
                  barcode: "ssddff",
                  track_qty: "Yes",
                  qty: 234,
                  status: 1,
                  created_at: "2024-03-29T16:06:46.000000Z",
                  updated_at: "2024-03-29T16:06:46.000000Z",
                  product_image: [
                    {
                      id: 4,
                      product_id: 4,
                      image:
                        "https://test2.chepapest.com/uploads/product/4-4-1711728406.jpeg",
                      created_at: "2024-03-29T16:06:46.000000Z",
                      updated_at: "2024-03-29T16:06:46.000000Z",
                    },
                  ],
                  brand: {
                    id: 1,
                    brand_name: "baby",
                    brand_image: "1710942425.jpg",
                    slug: "baby-bouncer",
                    status: 1,
                    created_at: "2024-03-20T13:47:05.000000Z",
                    updated_at: "2024-03-20T13:47:05.000000Z",
                  },
                  category: {
                    id: 1,
                    category_name: "baby",
                    category_image: "1710942447.jpg",
                    slug: "beby",
                    status: 1,
                    created_at: "2024-03-20T13:47:27.000000Z",
                    updated_at: "2024-03-20T13:47:27.000000Z",
                  },
                  sub_category: null,
                },
                {
                  id: 3,
                  user_id: 1,
                  title: "baby bouncer3",
                  brand_id: 1,
                  category_id: 1,
                  sub_category_id: null,
                  child_category_id: null,
                  seller_id: 1,
                  slug: "baby-bouncer3",
                  size: "xl",
                  color: "blu",
                  price: 1234,
                  tax: "0%",
                  delivery_charge: null,
                  product_type: "Features",
                  description: "sdfsdfsdf",
                  short_description: "gfdgdfdfsdfsdf",
                  shipping_returns: "sdfsdfs",
                  sku: "5r5442",
                  barcode: "ssddff",
                  track_qty: "Yes",
                  qty: 23,
                  status: 1,
                  created_at: "2024-03-29T16:04:44.000000Z",
                  updated_at: "2024-03-29T16:04:44.000000Z",
                  product_image: [
                    {
                      id: 3,
                      product_id: 3,
                      image:
                        "https://test2.chepapest.com/uploads/product/3-3-1711728284.png",
                      created_at: "2024-03-29T16:04:44.000000Z",
                      updated_at: "2024-03-29T16:04:44.000000Z",
                    },
                  ],
                  brand: {
                    id: 1,
                    brand_name: "baby",
                    brand_image: "1710942425.jpg",
                    slug: "baby-bouncer",
                    status: 1,
                    created_at: "2024-03-20T13:47:05.000000Z",
                    updated_at: "2024-03-20T13:47:05.000000Z",
                  },
                  category: {
                    id: 1,
                    category_name: "baby",
                    category_image: "1710942447.jpg",
                    slug: "beby",
                    status: 1,
                    created_at: "2024-03-20T13:47:27.000000Z",
                    updated_at: "2024-03-20T13:47:27.000000Z",
                  },
                  sub_category: null,
                },
                {
                  id: 2,
                  user_id: 1,
                  title: "baby bouncer 2",
                  brand_id: 1,
                  category_id: 1,
                  sub_category_id: null,
                  child_category_id: null,
                  seller_id: 1,
                  slug: "baby-bouncer-2",
                  size: "xl",
                  color: "blu",
                  price: 1233,
                  tax: "0%",
                  delivery_charge: null,
                  product_type: "Features",
                  description:
                    "Lorem ipsum, or lipsumas it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorumfor use in a type specimen book",
                  short_description:
                    "Lorem ipsum, or lipsumas it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorumfor use in a type specimen book",
                  shipping_returns:
                    "Lorem ipsum, or lipsumas it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorumfor use in a type specimen book",
                  sku: "5r544",
                  barcode: "ssddff",
                  track_qty: "Yes",
                  qty: 1227,
                  status: 1,
                  created_at: "2024-03-22T07:26:53.000000Z",
                  updated_at: "2024-03-22T08:05:54.000000Z",
                  product_image: [
                    {
                      id: 2,
                      product_id: 2,
                      image:
                        "https://test2.chepapest.com/uploads/product/2-2-1711092413.jpg",
                      created_at: "2024-03-22T07:26:53.000000Z",
                      updated_at: "2024-03-22T07:26:53.000000Z",
                    },
                  ],
                  brand: {
                    id: 1,
                    brand_name: "baby",
                    brand_image: "1710942425.jpg",
                    slug: "baby-bouncer",
                    status: 1,
                    created_at: "2024-03-20T13:47:05.000000Z",
                    updated_at: "2024-03-20T13:47:05.000000Z",
                  },
                  category: {
                    id: 1,
                    category_name: "baby",
                    category_image: "1710942447.jpg",
                    slug: "beby",
                    status: 1,
                    created_at: "2024-03-20T13:47:27.000000Z",
                    updated_at: "2024-03-20T13:47:27.000000Z",
                  },
                  sub_category: null,
                },
                {
                  id: 1,
                  user_id: 1,
                  title: "baby bouncer",
                  brand_id: 1,
                  category_id: 1,
                  sub_category_id: null,
                  child_category_id: null,
                  seller_id: 1,
                  slug: "baby-bouncer",
                  size: "xl",
                  color: "blu",
                  price: 1100,
                  tax: "0%",
                  delivery_charge: null,
                  product_type: "Features",
                  description:
                    "You should be prepared to answer the question, “How would you describe yourself?” in a job interview.\r\n\r\nThe most important thing is to show how your unique abilities and experiences make you the ideal candidate for the post.\r\n\r\nAs you answer the interviewer’s questions about yourself, note that your personal characteristics and attributes should match those important to the position’s success.\r\n\r\nThis guide explores short description about yourself sample with examples to drive home the point. Read on!",
                  short_description:
                    "ou should be prepared to answer the question, “How would you describe yourself?” in a job interview.\r\n\r\nThe most important thing is to show how your unique abilities and experiences make you the ideal candidate for the post.\r\n\r\nAs you answer the interviewer’s questions about yourself, note that your personal characteristics and attributes should match those important to the position’s success.\r\n\r\nThis guide explores short description about yourself sample with examples to drive home the point. Read on!",
                  shipping_returns:
                    "You should be prepared to answer the question, “How would you describe yourself?” in a job interview.\r\n\r\nThe most important thing is to show how your unique abilities and experiences make you the ideal candidate for the post.\r\n\r\nAs you answer the interviewer’s questions about yourself, note that your personal characteristics and attributes should match those important to the position’s success.\r\n\r\nThis guide explores short description about yourself sample with examples to drive home the point. Read on!",
                  sku: "5r544",
                  barcode: "ssddff",
                  track_qty: "Yes",
                  qty: 114,
                  status: 1,
                  created_at: "2024-03-20T13:51:01.000000Z",
                  updated_at: "2024-03-22T14:03:31.000000Z",
                  product_image: [
                    {
                      id: 1,
                      product_id: 1,
                      image:
                        "https://test2.chepapest.com/uploads/product/1-1-1710942661.jpg",
                      created_at: "2024-03-20T13:51:01.000000Z",
                      updated_at: "2024-03-20T13:51:01.000000Z",
                    },
                  ],
                  brand: {
                    id: 1,
                    brand_name: "baby",
                    brand_image: "1710942425.jpg",
                    slug: "baby-bouncer",
                    status: 1,
                    created_at: "2024-03-20T13:47:05.000000Z",
                    updated_at: "2024-03-20T13:47:05.000000Z",
                  },
                  category: {
                    id: 1,
                    category_name: "baby",
                    category_image: "1710942447.jpg",
                    slug: "beby",
                    status: 1,
                    created_at: "2024-03-20T13:47:27.000000Z",
                    updated_at: "2024-03-20T13:47:27.000000Z",
                  },
                  sub_category: null,
                },
              ]),
              (e.basicFormSvg =
                ' <svg  version="1.0" xmlns="http://www.w3.org/2000/svg"  width="300.000000pt" height="239.000000pt" viewBox="0 0 300.000000 239.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,239.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"> <path d="M0 1195 l0 -1195 1500 0 1500 0 0 1195 0 1195 -1500 0 -1500 0 0 -1195z m1222 895 c-2 -44 -8 -80 -13 -80 -5 0 -9 5 -9 10 0 7 -6 7 -20 0 -15 -8 -24 -6 -40 10 -24 24 -25 38 -4 69 12 16 23 22 40 18 21 -4 24 0 24 24 0 17 5 29 13 29 9 0 11 -21 9 -80z m-212 50 c12 -12 20 -33 20 -53 0 -77 -100 -98 -130 -28 -29 71 57 134 110 81z m570 10 c0 -5 -13 -10 -30 -10 -23 0 -30 -4 -30 -20 0 -15 7 -20 25 -20 14 0 25 -4 25 -10 0 -5 -11 -10 -25 -10 -22 0 -25 -4 -25 -35 0 -19 -4 -35 -10 -35 -6 0 -10 32 -10 75 l0 75 40 0 c22 0 40 -4 40 -10z m-498 -40 c6 -20 -4 -100 -13 -100 -5 0 -9 25 -9 55 0 48 12 74 22 45z m38 0 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m204 -6 c27 -27 20 -44 -19 -44 -19 0 -35 -4 -35 -9 0 -13 27 -21 45 -15 8 4 15 2 15 -4 0 -24 -55 -23 -72 2 -14 20 -8 65 10 75 24 15 38 13 56 -5z m56 5 c0 -8 5 -7 15 1 25 20 29 4 5 -20 -13 -13 -20 -31 -18 -47 2 -15 -3 -28 -9 -30 -10 -3 -13 11 -13 51 0 31 5 56 10 56 6 0 10 -5 10 -11z m306 -14 c20 -31 10 -63 -23 -76 -54 -20 -95 40 -56 83 23 26 59 23 79 -7z m54 14 c0 -8 5 -7 15 1 9 7 18 10 22 6 4 -3 -3 -13 -15 -22 -15 -11 -22 -25 -22 -50 0 -19 -4 -34 -10 -34 -5 0 -10 25 -10 55 0 30 5 55 10 55 6 0 10 -5 10 -11z m127 -1 c7 -6 19 -5 31 3 31 20 52 -4 52 -58 0 -58 -24 -54 -28 5 -5 68 -42 51 -42 -19 0 -45 -18 -34 -22 14 -2 29 -8 42 -18 42 -11 0 -16 -13 -18 -43 -5 -62 -27 -49 -27 16 0 50 1 51 30 50 17 0 35 -5 42 -10z m605 -355 c25 -22 27 -193 2 -217 -14 -14 -82 -16 -603 -16 -443 0 -590 3 -599 12 -19 19 -16 202 4 222 14 14 82 16 596 16 527 0 583 -2 600 -17z m-2072 -86 c11 17 11 17 4 -2 -3 -11 -9 -31 -12 -44 -4 -21 -6 -19 -18 15 -17 49 -17 54 0 31 14 -18 15 -18 26 0z m230 -18 c0 12 4 21 8 21 4 0 6 -16 4 -36 l-4 -36 -19 29 -19 28 0 -29 c0 -19 -4 -26 -9 -20 -5 5 -7 22 -4 38 l6 29 18 -22 c19 -23 19 -23 19 -2z m-175 1 c10 -16 -5 -50 -21 -50 -17 0 -28 24 -20 45 6 17 32 20 41 5z m35 -40 c5 0 11 12 13 28 4 25 4 24 6 -6 1 -27 -2 -33 -16 -30 -11 2 -18 13 -19 28 -1 22 0 22 3 3 2 -13 8 -23 13 -23z m52 25 c-7 -37 -22 -41 -22 -6 0 20 5 31 14 31 9 0 12 -8 8 -25z m156 -1 c2 -13 -4 -24 -13 -28 -27 -10 -38 4 -20 24 13 14 13 19 3 24 -7 3 -4 5 7 3 12 -1 21 -11 23 -23z m78 -7 c1 -25 1 -25 -3 -2 -6 34 -23 32 -24 -2 l-2 -28 -4 28 c-2 15 -8 27 -13 27 -5 0 -11 -12 -13 -27 -4 -26 -4 -26 -6 4 -1 31 1 33 32 30 27 -2 32 -6 33 -30z m84 21 c0 -5 -4 -6 -10 -3 -5 3 -10 1 -10 -4 0 -6 -10 -11 -22 -11 -22 -1 -23 -1 -4 -15 18 -13 18 -15 3 -15 -20 0 -32 23 -24 44 6 16 67 19 67 4z m0 -38 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m1610 -270 c17 -17 20 -33 20 -112 0 -71 -4 -95 -17 -110 -15 -17 -47 -18 -596 -18 -526 0 -582 2 -599 17 -15 13 -18 32 -18 114 0 90 2 99 22 113 20 14 93 16 595 16 560 0 573 0 593 -20z m-2063 -96 c5 -13 -26 -54 -40 -54 -4 0 -2 59 2 68 4 9 33 -1 38 -14z m39 -4 c8 0 14 -10 15 -22 l0 -23 9 23 c6 13 18 22 30 22 16 0 21 -5 18 -22 -2 -18 -10 -23 -35 -25 -26 -1 -33 3 -33 18 0 26 -18 24 -23 -3 -2 -13 -5 -5 -5 17 0 22 2 34 5 28 2 -7 11 -13 19 -13z m268 -7 c-4 17 -2 27 5 27 6 0 11 -16 11 -35 0 -40 -14 -45 -32 -12 l-12 22 -7 -25 c-6 -21 -7 -18 -8 15 l0 40 25 -30 25 -30 -7 28z m199 4 c25 -9 17 -41 -11 -45 -19 -3 -22 1 -22 35 0 21 4 33 8 27 4 -6 15 -13 25 -17z m-335 -24 c2 -13 -1 -23 -6 -23 -5 0 -9 6 -8 13 0 6 -3 12 -9 12 -5 0 -9 -6 -9 -12 1 -7 -2 -13 -7 -13 -5 0 -9 12 -9 26 0 21 4 25 23 22 14 -2 23 -11 25 -25z m52 12 c0 -8 -8 -15 -17 -16 -15 0 -15 -2 2 -9 19 -8 19 -9 -2 -9 -18 -1 -23 5 -23 24 0 18 5 25 20 25 11 0 20 -7 20 -15z m131 -25 c5 0 9 9 9 20 0 11 4 20 9 20 4 0 6 -11 3 -25 -7 -37 -42 -35 -41 3 2 23 2 24 6 5 2 -13 9 -23 14 -23z m105 12 c1 -18 1 -19 -3 -2 -6 27 -23 25 -24 -2 l-2 -23 -4 23 c-2 12 -8 22 -13 22 -5 0 -11 -10 -13 -22 -4 -19 -4 -18 -6 5 -1 26 2 28 32 25 25 -2 32 -8 33 -26z m114 13 c0 -8 -8 -15 -17 -16 -15 0 -15 -2 2 -9 19 -8 19 -9 -2 -9 -18 -1 -23 5 -23 24 0 18 5 25 20 25 11 0 20 -7 20 -15z m43 8 c-13 -2 -24 -13 -26 -26 -4 -18 -5 -17 -6 6 -1 23 3 27 27 26 22 -1 23 -2 5 -6z m1449 -310 c25 -23 27 -187 1 -215 -15 -17 -47 -18 -596 -18 -526 0 -582 2 -599 17 -25 22 -27 193 -2 217 14 14 82 16 596 16 527 0 583 -2 600 -17z m-2002 -114 c0 -33 -3 -40 -17 -37 -25 5 -28 36 -6 58 10 10 19 19 21 19 1 1 2 -17 2 -40z m60 1 c0 -33 -4 -40 -19 -40 -30 0 -35 31 -9 56 13 13 24 23 26 23 1 1 2 -17 2 -39z m-121 -2 c6 -17 9 -34 6 -36 -3 -3 -5 0 -5 6 0 7 -9 12 -20 12 -11 0 -20 -5 -20 -12 0 -6 -2 -9 -5 -6 -7 7 15 68 25 68 4 0 13 -14 19 -32z m153 -8 c-2 -16 -8 -30 -13 -30 -10 0 -12 43 -2 53 14 14 19 6 15 -23z m56 12 c2 -7 -3 -12 -12 -12 -22 0 -20 -17 2 -23 16 -4 16 -5 -1 -6 -20 -1 -32 22 -23 45 7 17 27 15 34 -4z m34 11 c-10 -4 -10 -8 -2 -19 13 -15 5 -34 -13 -33 -8 0 -8 2 1 6 10 4 10 8 2 19 -13 15 -5 34 13 33 8 0 8 -2 -1 -6z m39 -2 c-9 -6 -10 -11 -2 -15 17 -11 13 -36 -6 -35 -12 0 -13 2 -5 6 10 4 10 8 2 19 -13 15 -5 34 13 34 8 0 8 -3 -2 -9z m39 5 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-5 -46 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m883 -262 c7 -7 12 -42 12 -88 0 -46 -5 -81 -12 -88 -17 -17 -349 -17 -366 0 -17 17 -16 175 1 181 6 3 89 6 182 6 121 1 175 -3 183 -11z"/> <path d="M1157 2094 c-12 -12 -8 -52 6 -57 22 -8 39 8 35 34 -3 23 -27 37 -41 23z"/> <path d="M938 2129 c-21 -12 -24 -59 -6 -77 18 -18 56 -14 68 7 14 27 13 47 -6 65 -18 18 -32 20 -56 5z"/> <path d="M1275 2090 c-4 -6 5 -10 20 -10 15 0 24 4 20 10 -3 6 -12 10 -20 10 -8 0 -17 -4 -20 -10z"/> <path d="M1621 2086 c-9 -11 -10 -20 -1 -35 12 -23 18 -25 38 -12 18 11 11 55 -9 59 -9 1 -21 -4 -28 -12z"/> <path d="M1282 1748 c-8 -8 -12 -46 -12 -103 0 -57 4 -95 12 -103 9 -9 155 -12 595 -12 673 0 603 -14 603 119 0 59 -4 84 -16 95 -14 14 -81 16 -593 16 -435 0 -580 -3 -589 -12z m66 -86 c-20 -4 -24 -22 -5 -23 10 0 10 -2 0 -6 -18 -7 -16 -21 5 -26 13 -4 11 -5 -5 -6 -20 -1 -23 4 -23 33 0 33 15 49 35 37 6 -3 2 -7 -7 -9z m96 -30 c1 -42 -18 -35 -22 7 -2 23 0 32 9 29 7 -2 13 -18 13 -36z m378 16 l12 -23 7 25 c6 21 7 18 8 -15 l0 -40 -24 29 -23 29 -5 -29 c-3 -25 -4 -24 -6 9 -1 42 12 48 31 15z m-416 -21 c1 -25 1 -25 -3 -2 -6 33 -21 32 -26 -2 -4 -26 -4 -25 -6 5 -1 27 2 33 17 30 11 -2 17 -13 18 -31z m92 16 c2 -8 -6 -13 -20 -13 -22 -1 -22 -1 -4 -15 17 -13 17 -15 4 -15 -18 0 -33 34 -23 50 9 14 37 9 43 -7z m36 9 c-7 -4 -14 -18 -17 -32 -4 -21 -4 -20 -6 8 -1 24 3 32 17 32 11 0 13 -3 6 -8z m47 -20 c0 -12 3 -9 10 7 5 13 12 22 14 19 8 -8 -24 -78 -36 -78 -8 0 -8 4 0 14 9 11 9 20 2 35 -14 25 -14 34 -1 26 6 -3 10 -14 11 -23z m77 4 c2 -10 -1 -23 -7 -29 -16 -16 -44 14 -35 37 8 22 38 17 42 -8z m33 -20 c5 -6 9 1 9 17 0 15 5 27 11 27 6 0 9 -12 7 -27 -2 -20 -9 -28 -23 -28 -15 0 -20 7 -22 30 -1 18 1 22 4 10 3 -11 9 -24 14 -29z m63 36 c-7 -4 -14 -18 -17 -32 -4 -21 -4 -20 -6 8 -1 24 3 32 17 32 11 0 13 -3 6 -8z m146 -22 c0 -19 -5 -30 -14 -30 -23 0 -31 22 -12 36 13 9 14 13 4 17 -8 4 -7 6 5 6 12 1 17 -7 17 -29z m58 -2 c2 -16 -1 -28 -7 -28 -6 0 -11 12 -11 26 0 15 -4 23 -11 19 -6 -4 -8 -13 -5 -21 3 -7 1 -16 -4 -19 -6 -4 -10 8 -10 25 0 27 3 31 23 28 16 -2 23 -11 25 -30z m24 7 c3 -14 2 -28 -2 -30 -4 -3 -10 9 -12 25 -5 36 8 40 14 5z m56 7 c2 -7 -3 -12 -12 -12 -9 0 -16 -5 -16 -11 0 -6 7 -8 18 -4 13 5 14 3 5 -6 -14 -14 -33 -3 -33 20 0 31 28 41 38 13z"/> <path d="M1625 1640 c-7 -12 2 -30 16 -30 5 0 9 9 9 20 0 21 -15 27 -25 10z"/> <path d="M1875 1620 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z"/> <path d="M422 1636 c1 -10 8 -17 13 -17 15 1 12 24 -3 29 -9 3 -13 -2 -10 -12z"/> <path d="M670 1619 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z"/> <path d="M1282 1328 c-19 -19 -16 -183 4 -202 14 -14 80 -16 582 -16 498 0 570 2 590 16 20 13 22 24 22 95 0 133 70 119 -603 119 -440 0 -586 -3 -595 -12z m66 -75 c-21 -5 -24 -23 -5 -24 10 0 10 -2 0 -6 -18 -7 -16 -21 5 -26 13 -4 11 -5 -5 -6 -20 -1 -23 4 -23 34 0 30 3 35 23 34 16 -1 18 -2 5 -6z m93 -25 c0 -30 1 -31 9 -10 10 23 34 30 45 11 4 -6 -3 -13 -16 -16 -22 -6 -22 -7 -3 -14 13 -5 9 -7 -16 -6 -32 2 -35 6 -38 35 -2 18 1 32 7 32 6 0 11 -15 12 -32z m362 0 c-8 -46 -13 -48 -13 -5 0 21 4 37 10 37 5 0 7 -14 3 -32z m43 -36 c-11 -10 -14 3 -7 38 l6 35 3 -33 c2 -19 1 -36 -2 -40z m174 58 c0 -5 7 -10 15 -10 9 0 15 -9 15 -25 0 -20 -5 -25 -25 -25 -22 0 -25 4 -25 35 0 19 5 35 10 35 6 0 10 -4 10 -10z m-611 -37 c-2 -24 -2 -25 -6 -5 -2 12 -8 22 -13 22 -5 0 -11 -10 -13 -22 -4 -20 -4 -19 -6 5 -1 21 4 27 19 27 15 0 20 -6 19 -27z m113 2 c-2 -14 -8 -25 -12 -25 -4 0 -5 11 -2 25 2 14 8 25 12 25 4 0 5 -11 2 -25z m58 8 c0 -15 2 -16 10 -3 5 8 23 16 39 18 27 3 31 0 31 -22 0 -33 -39 -37 -47 -5 -5 19 -7 18 -19 -10 -7 -17 -19 -31 -26 -31 -11 0 -11 2 0 8 9 7 10 15 3 35 -7 17 -7 27 -1 27 6 0 10 -8 10 -17z m111 -23 c5 0 9 9 9 20 0 11 5 20 10 20 6 0 10 -12 10 -26 0 -21 -4 -25 -22 -22 -15 2 -23 10 -24 23 -1 15 0 16 3 3 3 -10 9 -18 14 -18z m63 32 c-7 -4 -14 -16 -17 -27 -4 -15 -5 -14 -6 8 -1 20 4 27 17 27 11 0 13 -3 6 -8z m76 -13 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10 -11 10 -16z m46 5 c0 -9 5 -19 13 -22 10 -3 12 1 8 17 -3 11 -1 21 4 21 5 0 9 -12 9 -26 0 -21 -4 -25 -22 -22 -15 2 -24 11 -26 26 -2 12 1 22 6 22 5 0 9 -7 8 -16z m113 -11 c-2 -24 -2 -25 -6 -5 -2 12 -9 22 -14 22 -5 0 -10 -10 -10 -22 l-2 -23 -4 23 c-2 12 -8 22 -13 22 -5 0 -11 -10 -13 -22 -4 -20 -4 -19 -6 5 -1 25 2 27 34 27 32 0 35 -2 34 -27z m111 12 c0 -8 -8 -15 -17 -16 -15 0 -15 -2 2 -9 16 -7 17 -9 3 -9 -21 -1 -32 15 -24 34 7 20 36 19 36 0z m33 4 c-6 -6 -9 -18 -6 -25 3 -8 0 -14 -6 -14 -6 0 -11 11 -11 25 0 17 6 25 17 25 13 0 14 -3 6 -11z"/> <path d="M1468 1223 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/> <path d="M2020 1215 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0 -10 -7 -10 -15z"/> <path d="M1627 1224 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z"/> <path d="M380 1234 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10 -7 -10 -16z"/> <path d="M480 1215 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0 -15 -7 -15 -15z"/> <path d="M890 1215 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0 -15 -7 -15 -15z"/> <path d="M1286 914 c-12 -11 -16 -36 -16 -99 0 -63 4 -88 16 -99 14 -14 81 -16 588 -16 542 0 574 1 589 18 24 26 24 173 1 196 -14 14 -81 16 -589 16 -508 0 -575 -2 -589 -16z m614 -102 c0 -36 -1 -38 -35 -39 -19 0 -35 3 -35 8 0 5 -7 9 -15 9 -8 0 -15 -4 -15 -10 0 -5 -4 -10 -9 -10 -12 0 6 57 20 66 5 3 16 -10 24 -28 12 -29 14 -30 15 -10 0 15 7 26 20 29 11 3 20 9 20 14 0 5 2 9 5 9 3 0 5 -17 5 -38z m60 -1 c0 -33 -3 -38 -22 -37 -29 1 -35 32 -11 56 27 28 33 24 33 -19z m-612 22 c-21 -5 -24 -23 -5 -24 10 0 10 -2 0 -6 -18 -7 -16 -21 5 -26 13 -4 11 -5 -5 -6 -20 -1 -23 4 -23 34 0 30 3 35 23 34 16 -1 18 -2 5 -6z m96 -31 c1 -42 -18 -35 -22 7 -2 23 0 32 9 29 7 -2 13 -18 13 -36z m-38 -5 c1 -25 1 -25 -3 -2 -6 33 -21 32 -26 -2 -4 -26 -4 -25 -6 5 -1 27 2 33 17 30 11 -2 17 -13 18 -31z m92 16 c2 -8 -6 -13 -20 -13 -22 -1 -22 -1 -4 -15 16 -12 17 -15 4 -15 -19 0 -30 24 -21 45 6 18 34 16 41 -2z m36 9 c-7 -4 -14 -18 -17 -32 -4 -21 -4 -20 -6 8 -1 24 3 32 17 32 11 0 13 -3 6 -8z m47 -20 c0 -11 4 -9 11 8 6 16 12 20 15 12 4 -10 8 -10 19 -1 19 15 37 -1 32 -27 -5 -28 -35 -29 -44 -2 -7 22 -8 22 -21 -9 -7 -18 -18 -33 -24 -33 -8 0 -8 4 0 14 9 11 9 20 2 35 -14 25 -14 34 -1 26 6 -3 10 -14 11 -23z m110 -16 c5 -6 9 1 9 17 0 15 5 27 10 27 6 0 10 -14 10 -31 0 -26 -3 -30 -22 -27 -18 2 -23 10 -25 33 -1 18 1 22 4 10 3 -11 9 -24 14 -29z m63 36 c-7 -4 -14 -18 -17 -32 -4 -21 -4 -20 -6 8 -1 24 3 32 17 32 11 0 13 -3 6 -8z m286 -4 c0 -7 4 -7 13 -1 6 6 28 11 47 11 25 1 30 -2 20 -9 -13 -8 -13 -10 -1 -18 7 -5 11 -13 7 -19 -8 -13 -76 -13 -76 0 0 5 5 6 10 3 6 -3 10 -1 10 4 0 6 -15 11 -32 11 -32 -1 -32 -1 -13 -16 20 -15 20 -16 0 -12 -10 2 -22 14 -26 28 -6 25 -8 23 -22 -20 -3 -8 -6 -1 -6 17 -1 29 1 31 34 31 19 0 35 -5 35 -10z"/> <path d="M1865 810 c-4 -6 -3 -16 3 -22 6 -6 12 -6 17 2 4 6 3 16 -3 22 -6 6 -12 6 -17 -2z"/> <path d="M1920 800 c0 -11 4 -20 9 -20 11 0 22 26 14 34 -12 12 -23 5 -23 -14z"/> <path d="M1625 810 c-7 -12 2 -30 16 -30 5 0 9 9 9 20 0 21 -15 27 -25 10z"/> <path d="M2078 800 c12 -11 27 -20 33 -20 7 0 5 8 -6 20 -10 11 -25 20 -33 20 -12 0 -11 -5 6 -20z"/> <path d="M440 800 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0 -10 -9 -10 -20z"/> <path d="M495 810 c-7 -12 2 -30 16 -30 5 0 9 9 9 20 0 21 -15 27 -25 10z"/> <path d="M380 810 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"/> <path d="M1258 440 c-1 -33 -1 -65 0 -70 2 -6 69 -10 167 -10 l163 0 1 70 0 70 -163 0 -164 0 -4 -60z m87 31 c11 -5 28 -4 38 1 12 6 23 6 30 -1 13 -10 47 -9 85 3 51 17 101 -57 58 -85 -12 -7 -25 -12 -29 -11 -8 2 -36 2 -162 -1 -66 -2 -84 9 -85 54 0 42 23 56 65 40z"/> <path d="M1300 446 c0 -8 5 -18 11 -22 8 -5 8 -9 -1 -14 -6 -4 7 -7 29 -7 35 0 41 3 40 21 -1 17 -2 17 -6 4 -2 -10 -9 -18 -15 -18 -5 0 -8 7 -4 15 3 8 1 15 -4 15 -6 0 -10 -5 -10 -11 0 -8 -5 -7 -16 2 -14 12 -14 14 3 20 16 7 15 8 -4 8 -14 1 -23 -5 -23 -13z"/> <path d="M1391 433 c-1 -27 3 -33 19 -33 13 0 20 7 20 20 0 11 -6 20 -14 20 -8 0 -17 6 -19 13 -3 6 -6 -3 -6 -20z m29 -13 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z"/> <path d="M1530 427 c0 -15 4 -27 8 -27 10 0 9 36 -1 46 -4 4 -7 -5 -7 -19z"/> <path d="M1441 418 c0 -22 1 -22 9 -3 7 17 9 17 9 3 1 -10 6 -18 11 -18 6 0 10 8 11 18 0 14 2 14 9 -3 8 -19 9 -19 9 3 1 18 -4 22 -29 22 -25 0 -30 -4 -29 -22z"/> <path d="M1512 420 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/> </g> </svg>');
          },
          707: (t, e) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.multipleItemFormCss = void 0),
              (e.multipleItemFormCss = `\n\n[data-loader="circle-side"] {\n\tposition: absolute;\n\twidth: 50px;\n\theight: 50px;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-left: -25px;\n\tmargin-top: -25px;\n\t-webkit-animation: circle infinite .95s linear;\n\t-moz-animation: circle infinite .95s linear;\n\t-o-animation: circle infinite .95s linear;\n\tanimation: circle infinite .95s linear;\n\tborder: 3px solid #02b843;\n\tborder-top-color: rgba(0, 0, 0, 0.2);\n\tborder-right-color: rgba(0, 0, 0, 0.2);\n\tborder-bottom-color: rgba(0, 0, 0, 0.2);\n\t-webkit-border-radius: 100%;\n\t-moz-border-radius: 100%;\n\t-ms-border-radius: 100%;\n\tborder-radius: 100%;\n}\n\n.checkbox{\ndisplay: flex;\n    gap: 1rem;\n    align-items: center;\n}\n  .checkbox-wrapper-7 .tgl {\n    display: none;\n  }\n  .checkbox-wrapper-7 .tgl,\n  .checkbox-wrapper-7 .tgl:after,\n  .checkbox-wrapper-7 .tgl:before,\n  .checkbox-wrapper-7 .tgl *,\n  .checkbox-wrapper-7 .tgl *:after,\n  .checkbox-wrapper-7 .tgl *:before,\n  .checkbox-wrapper-7 .tgl + .tgl-btn {\n    box-sizing: border-box;\n  }\n  .checkbox-wrapper-7 .tgl::-moz-selection,\n  .checkbox-wrapper-7 .tgl:after::-moz-selection,\n  .checkbox-wrapper-7 .tgl:before::-moz-selection,\n  .checkbox-wrapper-7 .tgl *::-moz-selection,\n  .checkbox-wrapper-7 .tgl *:after::-moz-selection,\n  .checkbox-wrapper-7 .tgl *:before::-moz-selection,\n  .checkbox-wrapper-7 .tgl + .tgl-btn::-moz-selection,\n  .checkbox-wrapper-7 .tgl::selection,\n  .checkbox-wrapper-7 .tgl:after::selection,\n  .checkbox-wrapper-7 .tgl:before::selection,\n  .checkbox-wrapper-7 .tgl *::selection,\n  .checkbox-wrapper-7 .tgl *:after::selection,\n  .checkbox-wrapper-7 .tgl *:before::selection,\n  .checkbox-wrapper-7 .tgl + .tgl-btn::selection {\n    background: none;\n  }\n  .checkbox-wrapper-7 .tgl + .tgl-btn {\n    outline: 0;\n    display: block;\n    width: 4em;\n    height: 2em;\n    position: relative;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n  .checkbox-wrapper-7 .tgl + .tgl-btn:after,\n  .checkbox-wrapper-7 .tgl + .tgl-btn:before {\n    position: relative;\n    display: block;\n    content: "";\n    width: 50%;\n    height: 100%;\n  }\n  .checkbox-wrapper-7 .tgl + .tgl-btn:after {\n    left: 0;\n  }\n  .checkbox-wrapper-7 .tgl + .tgl-btn:before {\n    display: none;\n  }\n  .checkbox-wrapper-7 .tgl:checked + .tgl-btn:after {\n    left: 50%;\n  }\n\n  .checkbox-wrapper-7 .tgl-ios + .tgl-btn {\n    background: #fbfbfb;\n    border-radius: 2em;\n    padding: 2px;\n    transition: all 0.4s ease;\n    border: 1px solid #e8eae9;\n  }\n  .checkbox-wrapper-7 .tgl-ios + .tgl-btn:after {\n    border-radius: 2em;\n    background: #fbfbfb;\n    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), padding 0.3s ease, margin 0.3s ease;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);\n  }\n  .checkbox-wrapper-7 .tgl-ios + .tgl-btn:hover:after {\n    will-change: padding;\n  }\n  .checkbox-wrapper-7 .tgl-ios + .tgl-btn:active {\n    box-shadow: inset 0 0 0 2em #e8eae9;\n  }\n  .checkbox-wrapper-7 .tgl-ios + .tgl-btn:active:after {\n    padding-right: 0.8em;\n  }\n  .checkbox-wrapper-7 .tgl-ios:checked + .tgl-btn {\n    background: #86d993;\n  }\n  .checkbox-wrapper-7 .tgl-ios:checked + .tgl-btn:active {\n    box-shadow: none;\n  }\n  .checkbox-wrapper-7 .tgl-ios:checked + .tgl-btn:active:after {\n    margin-left: -0.8em;\n  }\n\n\n@-webkit-keyframes circle {\n  0% {\n\t-webkit-transform: rotate(0);\n\t-moz-transform: rotate(0);\n\t-ms-transform: rotate(0);\n\t-o-transform: rotate(0);\n\ttransform: rotate(0);\n  }\n  100% {\n\t-webkit-transform: rotate(360deg);\n\t-moz-transform: rotate(360deg);\n\t-ms-transform: rotate(360deg);\n\t-o-transform: rotate(360deg);\n\ttransform: rotate(360deg);\n  }\n}\n@-moz-keyframes circle {\n  0% {\n\t-webkit-transform: rotate(0);\n\t-moz-transform: rotate(0);\n\t-ms-transform: rotate(0);\n\t-o-transform: rotate(0);\n\ttransform: rotate(0);\n  }\n  100% {\n\t-webkit-transform: rotate(360deg);\n\t-moz-transform: rotate(360deg);\n\t-ms-transform: rotate(360deg);\n\t-o-transform: rotate(360deg);\n\ttransform: rotate(360deg);\n  }\n}\n@-o-keyframes circle {\n  0% {\n\t-webkit-transform: rotate(0);\n\t-moz-transform: rotate(0);\n\t-ms-transform: rotate(0);\n\t-o-transform: rotate(0);\n\ttransform: rotate(0);\n  }\n  100% {\n\t-webkit-transform: rotate(360deg);\n\t-moz-transform: rotate(360deg);\n\t-ms-transform: rotate(360deg);\n\t-o-transform: rotate(360deg);\n\ttransform: rotate(360deg);\n  }\n}\n@keyframes circle {\n  0% {\n\t-webkit-transform: rotate(0);\n\t-moz-transform: rotate(0);\n\t-ms-transform: rotate(0);\n\t-o-transform: rotate(0);\n\ttransform: rotate(0);\n  }\n  100% {\n\t-webkit-transform: rotate(360deg);\n\t-moz-transform: rotate(360deg);\n\t-ms-transform: rotate(360deg);\n\t-o-transform: rotate(360deg);\n\ttransform: rotate(360deg);\n  }\n}\n\n\nmain {\n  background: #f8f8f8;\n  position: relative;\n  z-index: 1;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: #333;\n}\n\nh1,\nh2 {  \t\n  \tfont-weight: 700;  \t\n}\n\nhr {\n\tmargin: 15px 0 30px 0;\t\n\tborder-color: #ededed;\n}\n\np {\n\tmargin-top: 25px;\n\tmargin-bottom: 30px;\n}\n\na {\n\tcolor: #02b843;\n\ttext-decoration: none;\n\t-moz-transition: all 0.5s ease-in-out;\n\t-o-transition: all 0.5s ease-in-out;\n\t-webkit-transition: all 0.5s ease-in-out;\n\t-ms-transition: all 0.5s ease-in-out;\n\ttransition: all 0.5s ease-in-out;\n\toutline: none;\n}\na:hover, \na:focus,\na:visited {\n\tcolor: #333;\n\ttext-decoration: none;\n\toutline: none;\n}\n\nul,\nol {\n  list-style: none;\n  margin: 0 0 25px 0;\n  padding: 0;\n}\n\np {\n  margin-bottom: 25px;\n}\n\np.lead {\n  font-weight: 400;\n  font-size: 20px;\n  color: #555;  \n}\n\nstrong {\n  font-weight: 600;\n}\n\nlabel {\n\tcolor: #555;  \t\n  \tfont-size: 14px;\n  \tfont-weight: 500;  \n  \tmargin: 0;\n}\n\nbutton:focus {\n\toutline: none;\n}\n\n.underline-link {\n\tcolor: #02b843;\n\ttext-decoration: none;\t\n\toutline: none;\n}\n.underline-link:hover {\n\tcolor: #02b843;\n\ttext-decoration: underline;\n\toutline: none;\n}\n\n/* Modal Window */\n\n.btn-modal {\n\tborder: none;\n\tfont-family: inherit;\n\tcolor: #fff;\n\tbackground: #02b843;\n\tcursor: pointer;\n\tpadding: 7px 15px;\n\tdisplay: inline-block;\n\toutline: 0;\n\tfont-size: 15px;\n\t-webkit-transition: all .3s;\n\t-moz-transition: all .3s;\n\ttransition: all .3s;\n\t-webkit-border-radius: 3px;\n\t-moz-border-radius: 3px;\n\tborder-radius: 3px;\n\tfont-weight: 400;\n}\n\n.btn-modal:hover {\n\topacity: 0.7;\n}\n\n.modal-header .close {\n\tcolor: #000 !important;\n}\n\n.alert-text-strong {\n\tcolor: #02b843;\n\tfont-weight: 700;  \n}\n\nbody.modal-open {\n\toverflow: auto;\t\n\tpadding: 0 !important;\t\n}\n\nbody.modal-open .mm-slideout{\n\tz-index: inherit;\n\tpadding:0;\n}\n\n.modal {\n    background: rgba(0, 0, 0, 0.5);\n}\n\n/* Header\n==================================== */\nheader {\n\tbackground-color: #fff;\n\tmin-height: 55px;\n\tpadding: 10px 0;\n\tborder-bottom: 1px solid transparent;\n}\n\nheader.main-header {\n\twidth: 100%;\n\tz-index: 2;\n\tposition: relative;\n\t-moz-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-ms-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\nheader.main-header.sticky {\n\tborder-bottom: 1px solid #fff;\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 2;\n}\n\nheader.main-header.active {\n\tborder-bottom: 1px solid #ddd;\n}\n\nheader.static {\n\tposition: static;\n\tborder-bottom: 1px solid #ddd;\n\tz-index: 2;\n\tposition: relative;\n}\n\n/* Header Menu Color */\n\n.main-menu > ul > li span:hover > a {\n    color: #02b843;\n}\n\n.main-menu ul ul {    \n    border-top: 2px solid #02b843;\n}\n\n.main-menu ul ul li:hover > a {   \n    color: #02b843;   \n}\n\n.main-menu ul ul li span > a:hover {\t\n\tcolor: #02b843;\n}\n\n/* Header Menu Chevron Down */\n\n.main-menu a i {\n\tfont-size: 9px;\n\tmargin-left: 2px;\n}\n\n/* Header Icons */\n\nul#menuIcons {\n\tfloat: right;\n\tposition: relative;\n\ttop: 3px;\n\tmargin: -1px 0 0 0;\n}\n\nul#menuIcons li {\n\tdisplay: inline-block;\n\tposition: relative;\n\tpadding: 0;\n\tmargin-left: 15px;\n}\n\nul#menuIcons li i {\n  \tfont-size: 34px;  \n}\n\nul#menuIcons li a {\n  \tcolor: #02b843;\n}\n\nul#menuIcons li a:hover {\n  \tcolor: #333;\n}\n\n/* Logo */\n\n#logo h1 {\n\tmargin: 0;\n\tpadding: 0;\n\tline-height: 1;\n}\n\n#logo h1 a {\n\twidth: 149px;\n\theight: 35px;\n\tdisplay: block;\n\tbackground: url(../img/logo.green.svg) no-repeat 0 0;\n\tbackground-size: 149px 35px;\n\ttext-indent: -9999px;\n}\n\n/* Sub Header\n==================================== */\n\n.sub-header {\n\tbackground-color: #02b843;\n\tpadding: 15px 0;\n\tmargin-top: 59px;\t\n}\n\n.sub-header h1 {\n    color: #fff;\n    margin: 0;\n\tfont-size: 24px;\n\tfont-weight: 500;\n}\n\n/* Footer\n==================================== */\n\nfooter.main-footer {\n\tpadding-top: 30px;\n\tpadding-bottom: 30px;\t\n\tcolor: #555;\n\tbackground: #fff;\n\tborder-top: 1px solid #ddd;\t\n}\n\nfooter.main-footer ul.nav-links li i {\n\tfont-size: 13px;\n}\n\n.footer-heading {\n\tmargin-bottom: 1.25rem;\n\tfont-weight: 600;\n}\n\n.footer-link {\n\tcolor: #555;\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tline-height: 1.8;\t\n}\n  \n.footer-link:hover, .footer-link:focus {\n\ttext-decoration: underline;\n} \n\n.contact-links i {\n\tcolor: #02b843;\n\tmargin-right: 10px;\n\tfont-size: 18px;\n\tvertical-align: middle;\n}\n\n.social-link {\n\tcolor: #999;\n\topacity: 0.6;\n\tfont-size: 20px;\n\tfont-weight: 400;\n\tmargin-right: 10px;\n}\n\n.social-links li {\n\tdisplay: inline-block;\n}\n\nfooter #copy {\n\ttext-align: right;\n\tfont-size: 13px;\n\tfont-size: 0.8125rem;\n\tcolor: #999;\n}\n\n/* Sub Footer Links */\n\nul#subFooterLinks {\n\tmargin: 0;\n\tfont-size: 13px;\n\tfont-size: 0.8125rem;\n\tcolor: #999;\n}\n\nul#subFooterLinks li {\n\tdisplay: inline-block;\n\tmargin-right: 15px;\n}\n\nul#subFooterLinks li:first-child {\n\tmargin-right: 20px;\n}\n\nul#subFooterLinks li:last-child:after {\n\tcontent: "";\n}\n\nul#subFooterLinks li a {\n\tcolor: #999\n}\n\nul#subFooterLinks li a:hover {\n\ttext-decoration: underline;\n}\n\nul#subFooterLinks li:after {\n\tcontent: "|";\n\tfont-weight: 300;\n\tposition: relative;\n\tleft: 10px;\n}\n\nul#subFooterLinks i {\n\tcolor: #02b843;\t\n}\n\n/* Containers\n==================================== */\n\n#orderContainer,\n#personalDetails {  \n\tbackground: #fff;  \n  margin-bottom: 30px;\n\tpadding: 30px !important;\n\tborder: 1px solid #ddd;\t\n}\n\n.order {\n\tpadding: 60px 0;\n}\n.multiple-item-form{\n  width: 90%;\n  margin: 0 auto;\n}\n.option-box,\n.order-box {  \n\tposition: relative;\n\tbackground: #fff;\n  margin: 0 0 30px 0;\n\tpadding: 30px 15px;\n\tborder: 1px solid #ddd;\t\t\n}\n\n.option-box-header {\n\tmargin: 1rem;\n\twidth: 100%;\n\tborder-bottom: 2px dotted #ddd;\n}\n\n\t.colorAndQuantity{\n    border: 2px solid #0000004a;\n\t\tborder-radius: 5px;\n    padding: 1rem;\n\t}\n\n.order-box-header {\n\tmargin: 0 15px 20px 15px;\n\twidth: 100%;\n\tborder-bottom: 2px dotted #ddd;\t\n}\n\n.option-box-header h3,\n.order-box-header h3 {\n\tfont-size: 20px;\t\n\tcolor: #555;\t\n}\n\n.option-box-header p,\n.order-box-header p {\t\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tmargin-bottom: 20px;\n}\n.order-summary{\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tfont-size: 14px;\n\tfont-weight: 600;\n\tmargin: 1rem 0.5rem;\n}\n\n.option-box-link,\n.option-box-link:focus,\n.option-box-link:active,\n.option-box-link:visited {\n\tcolor: #555;\n    font-size: 11px;\n    font-weight: 500;\n    border: 1px solid #ddd;\n    background: #fff;\n    margin-left: 5px;\n    padding: 4px 8px;\n    position: absolute;\n    top: -1px;\n    right: -1px;\n}\n\n.option-box-link:hover {\n\tbackground: #02b843;\n\tborder: 1px solid #02b843;\n\tcolor: #fff;\n}\n\n/* Form Elements\n==================================== */\n\n/* Fields, Textareas */\n\ninput.form-control,\nselect.form-control,\ntextarea.form-control {\n\t-webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n\tbackground: transparent;\n\tborder: none;\n\tborder: 1px solid #ddd;\n\tborder-radius: 0;\n\t-webkit-box-shadow: none;\n\tbox-shadow: none;\n\ttransition: none;\n\theight: 40px;\n  \tfont-family: 'Karla', sans-serif;\n  \tfont-size: 14px;\n\tfont-weight: 400;\n\tpadding: 10px;\n\tresize: none;\n}\n\ninput.form-control:focus,\ntextarea.form-control:focus {\n\tbackground: transparent;\n\tborder-color: #02b843;\n\toutline: none;\n\t-webkit-box-shadow: none;\n\tbox-shadow: none;\n\tcolor: #555;\n\t-webkit-transition: all 0.9s ease;\n\ttransition: all 0.9s ease;\n}\n\ninput.form-control:disabled {\n\tborder: none;\n}\n\n#inputMessage {\n\theight: 80px;\t\n}\n\n#total {\n  \ttext-align: right;\n}\n\n.summaryInput {\n\twidth: 100%;\n\tfont-family: 'Poppins', sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 700;\n\tbackground: #fff;\n\tborder: none;\n\ttext-align: end;\n}\n\n/* Single Option */\n\ninput.form-control.single-option {\t\n\tborder: 1px solid #02b843;\n\tmargin-top: 20px;\n  \tpadding: 0 10px;\n  \theight: 45px;\n  \tfont-family: 'Poppins', sans-serif;\n  \tfont-size: 14px;\n\tfont-weight: 400;\t\n\ttext-align: center;\n}\n\n.form-control:disabled, .form-control[readonly] {\n\tbackground-color: #fff;\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n/* Range Slider Input */\n\ninput.form-control.qty-input {\n\tborder: 1px solid #ddd;\n\tmargin-top: 20px;\n  \tpadding: 0 10px;\n  \theight: 45px;\n  \tfont-family: 'Karla', sans-serif;\n  \tfont-size: 14px;\n  \tfont-weight: 400;\n}\n\ninput.form-control.qty-input.standalone-slider-round-input {\n  \tmargin-top: 15px;\n}\n\ninput.form-control.qty-input.standalone-slider-flat-input {\n  \tmargin-top: 10px;\n}\n\n.form-group {\n    margin-bottom: 10px;\n}\n\n/* Rounded Range Slider */\n\n.irs {    \n    font-family: 'Karla', sans-serif;\n}\n\n.irs--round {\n\tmargin-top: 20px;\n\theight: 45px;\n}\n\n.irs--round .irs-line {\n    top: 20px;\n    height: 5px;\n    background-color: #ddd;\n    border-radius: 0;\n}\n\n.irs--round .irs-bar {  \n\tbackground-color: #02b843;\n\theight: 5px;\n\ttop: 20px;\n\tborder-radius: 0;\n}\n\n.irs-from, .irs-to, .irs-single {\n    top: -13px;    \n}\n\n.irs--round .irs-from:before, .irs--round .irs-to:before, .irs--round .irs-single:before {  \n  \tborder-top-color: #02b843;\n}\n\n.irs--round .irs-from, .irs--round .irs-to, .irs--round .irs-single {  \n\tbackground-color: #02b843;\n\tborder-radius: 0;\n\ttop: -15px;\t  \n}\n\n.irs--round .irs-handle {\n\ttop: 10px;\n\twidth: 24px;\n\theight: 24px;\n\tborder: 2px solid #02b843;\n\tcursor: pointer;  \n}\n\n/* Flat Range Slider */\n\n.irs--flat { \n  \tmargin-top: 13px;\n}\n\n.irs--flat .irs-bar { \n\tbackground-color: #02b843;\n}\n\n.irs--flat .irs-from, .irs--flat .irs-to, .irs--flat .irs-single {  \n\tfont-size: 14px;  \n\tpadding: 0 5px;\n\tbackground-color: #02b843;\n\tborder-radius: 0;\n\ttop: -1px;\n\tcursor: pointer;\n}\n\n.irs--flat .irs-handle > i:first-child {\n  \tbackground-color: #02b843;\n}\n\n.irs--flat .irs-handle.state_hover > i:first-child, .irs--flat .irs-handle:hover > i:first-child {\n  \tbackground-color: #02b843;\n}\n\n.irs--flat .irs-line {  \n\tbackground-color: #ddd;\n\tborder-radius: 0;\n}\n\n.irs--flat .irs-bar--single {\n  \tborder-radius: 0;\n}\n\n.irs--flat .irs-from:before, .irs--flat .irs-to:before, .irs--flat .irs-single:before {  \n  \tborder-top-color: #02b843;\n}\n\n.irs--flat .irs-handle {\n\tcursor: pointer;  \n}\n\n/* Ribbon Left */\n\n.ribbon-left {\n\tposition: absolute;\n    left: -5px;\n    top: -5px;\n    z-index: 1;\n    overflow: hidden;\n    width: 75px;\n    height: 75px;\n\ttext-align: right;\n}\n\n.ribbon-left span.left {\n    font-size: 10px;\n    font-weight: 700;\n    font-style: normal;\n    color: #555;\n\ttext-align: center;\n\ttext-transform: uppercase;\n    line-height: 20px;\n    -webkit-transform: rotate(-45deg);\n    -moz-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    width: 100px;\n    display: block;\n    background: #ffda8f;    \n    -webkit-box-shadow: 0 3px 10px -5px #000;\n    -moz-box-shadow: 0 3px 10px -5px #000;\n    box-shadow: 0 3px 10px -5px #000;\n    text-shadow: 1px 1px 2px rgba(0,0,0,.25);\n    position: absolute;\n    top: 19px;\n    left: -21px;\n}\n\n.ribbon-left span.left::before,\n.ribbon-left span.left::after {\n    content: "";\n    position: absolute;\n    top: 100%;\n    z-index: -1;\n    border-bottom: 3px solid transparent;\n    border-top: 3px solid #ffda8f;\n}\n\n.ribbon-left span.left::before {\n    left: 0;\n    border-left: 3px solid #ffda8f;\n    border-right: 3px solid transparent;\n}\n\n.ribbon-left span.left::after {\n    right: 0;\n    border-left: 3px solid transparent;\n    border-right: 3px solid #ffda8f;\n}\n\n\n\n/* Placeholders */\n\n.form-control::-webkit-input-placeholder { /* Chrome */\n\tcolor: #ccc;\n\tfont-style: italic;\n}\n\n.form-control:-ms-input-placeholder { /* IE 10+ */\n\tcolor: #ccc;\n\tfont-style: italic;\n}\n\n.form-control::-moz-placeholder { /* Firefox 19+ */\n  \tcolor: #ccc;\n\topacity: 1;\n\tfont-style: italic;\n}\n\n.form-control:-moz-placeholder { /* Firefox 4 - 18 */\n  \tcolor: #ccc;\n\topacity: 1;\n\tfont-style: italic;\n}\n\n/* Form Buttons */\n\n.btn-form-func {\n\tbackground: #02b843;\n\tborder-radius: 4px;\n\tborder: 2px solid #02b843;\n\tcolor: #fff;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tpadding: 12px 30px 12px 16px;\n\tposition: relative;\n\ttext-decoration: none;\n\tline-height: 1;\n\twidth: 100%;\n\tfont-weight: 600;\n\tmargin-bottom: 10px;\n}\n\n.btn-form-func:hover {\n\tcolor: #fff;\n}\n\n.btn-form-func .btn-form-func-content {\n\tfont-size: 1em;\n\tline-height: 1.2;\n\tpadding: 0 15px;\n\tposition: relative;\n\tright: 0;\n\tdisplay: block;\n\ttext-align: left;\n}\n\n.btn-form-func .icon {\n\tborder-left: 1px solid #fff;\n\tposition: absolute;\n\tright: 0;\n\ttext-align: center;\n\ttop: 50%;\n\ttransition: all 300ms ease;\n\ttransform: translateY(-50%);\n\twidth: 58px;\n\theight: 70%;\n}\n\n.btn-form-func .icon i {\n\tposition: relative;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n}\n\n.btn-form-func:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n\tleft: 0;\n\tbackground-color: transparent;\n\topacity: 0;\n\ttransition: opacity 300ms ease;\n}\n\n\n.btn-form-func:hover .icon {\n\tborder-left: 0;\n\tfont-size: 1.4em;\n\twidth: 100%;\n}\n\n.btn-form-func:hover:after {\n  \topacity: .2;\n}\n\n.btn-form-func.btn-form-func-alt-color {\n\tbackground: #fff;\n\tborder-color: #02b843;\n\tcolor: #02b843 !important;\n}\n\n.btn-form-func.btn-form-func-alt-color .icon {\n  \tborder-left-color: #02b843;\n}\n\n.btn-form-func.btn-form-func-alt-color:after {\n  \tbackground-color: transparent;\n}\n\n/* Checkboxes */\n\nlabel.cbx.terms {    \n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0; \n\theight: 22px;\t\n}\n\nlabel.cbx {\t\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tmargin-top: 20px;\n\tborder: solid 1px #ddd;\n    height: 45px;\n    padding: 10px 15px;\n\twidth: 100%\n}\n\n.cbx {\n\t-webkit-user-select: none;\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n.cbx span {\n\tdisplay: inline-block;\n\tvertical-align: middle;  \n\tfont-size: 14px;\n\tfont-weight: 500;\n}\n\n.cbx span:first-child {\n\tposition: relative;\n\twidth: 18px;\n\theight: 18px;\n\ttransform: scale(1);\n\tvertical-align: middle;\n\tborder: 1px solid #02b843;\n\ttransition: all 0.2s ease;\n\tmargin-right: 10px;\t\n}\n\n.cbx span:first-child svg {\n\tposition: absolute;\n\ttop: 3px;\n    left: 2px;\n\tfill: none;\n\tstroke: #fff;\n\tstroke-width: 2;\n\tstroke-linecap: round;\n\tstroke-linejoin: round;\n\tstroke-dasharray: 16px;\n\tstroke-dashoffset: 16px;\n\ttransition: all 0.3s ease;\n\ttransition-delay: 0.1s;\n\ttransform: translate3d(0, 0, 0);\n}\n\n.cbx span:first-child:before {\n\tcontent: "";\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #02b843;\n\tdisplay: block;\n\ttransform: scale(0);\n\topacity: 1;\n\tborder-radius: 50%;\n}\n\n.radio-label{\n  margin-left: 1rem;\n  font-size: 15px;\n  font-weight: 400;\n}\n\n.cbx:hover span:first-child {\n  \tborder-color: #02b843;\n}\n\n.inp-cbx {\n  \tdisplay: none;\n}\n\n.inp-cbx:checked + .cbx span:first-child {\n\tbackground: #02b843;\n\tborder-color: #02b843;\n\tanimation: wave 0.4s ease;\n}\n\n.inp-cbx:checked + .cbx span:first-child svg {\n  \tstroke-dashoffset: 0;\n}\n\n.inp-cbx:checked + .cbx span:first-child:before {\n\ttransform: scale(3.5);\n\topacity: 0;\n\ttransition: all 0.6s ease;\n}\n\n@keyframes wave {\n\t50% {\n\t\ttransform: scale(0.9);\n\t}\n}\n\n/* Terms Link */\n\n.terms-link,\n.terms-link:visited {\n\ttext-decoration: none;\n  \tcolor:#02b843;\n  \tmargin-left: 5px;\n  \ttransition: none;\n}\n\n.terms-link:hover {\n  \tcolor:#02b843;\n  \ttext-decoration: underline;\n}\n\n/* Form validation */\n\n.parsley-errors-list {  \n\tfont-size: 10px !important;\n\ttext-transform: uppercase;\n\tborder: 1px solid #02b843;\n\tbackground-color: #02b843;\n\tcolor: #fff;\n\tpadding: 2px 0 0 3px !important;\n\tmargin: 10px 0 10px 0 !important;\n\tlist-style-type: none;\n\topacity: 0;\n}\n\n.parsley-errors-list.filled {\n\topacity: 1;\n}\n\n.parsley-errors-list:before {\n\tcontent: '';\n\tdisplay: block;\n\tmargin-top: -9px;\n\tpointer-events: none;\n\tposition: absolute;\n\tborder-bottom: solid 6px #02b843;\n\tborder-left: solid 6px transparent;\n\tborder-right: solid 6px transparent;\n}\n\n/* Order Summary\n==================================== */\n\n/* Header */\n\n#orderContainer h3 {\n\tfont-size: 16px;\n\tfont-weight: 700;\n\tcolor: #555;\n\tmargin-bottom: 30px;\n}\n\n/* List */\n\n#orderContainer span {\t\n\tfont-size: 14px;\n\tfont-weight: 700;\n}\n\n#orderContainer ul {\n\tlist-style: none;\n  \tpadding: 15px 0;\n  \tmargin: 0;\n}\n\n#orderSumList li i {\n  \tcolor: #02b843;\n}\n\n#orderContainer ul li span.price,\n.price {\n\tfloat: right;\n}\n\n#orderContainer .total-container {    \n  \tborder-top: 2px dotted #ddd;\n  \tborder-bottom: 2px dotted #ddd;\n  \tpadding: 10px 0;\n  \tmargin: 10px 0;  \n}\n\n/* Order Summary Footer */\n\n.footer {\n  \tfont-size: 13px;\n  \tcolor: #ccc;\n}\n\n.footer i {\n  \tcolor: #f15e75;\n}\n\n.footer a {\n  \ttext-decoration: underline;\n}\n\n.footer small {\n\tcolor: #555;\n}\n\n/* Back To Top\n==================================== */\n\n#toTop {\n\twidth: 40px;\n\theight: 40px;\n\tbackground-color: black;\n\tbackground-color: rgba(0, 0, 0, 0.6);\n\ttext-align: center;\n\tpadding: 10px;\n\tline-height: 20px;\n\tposition: fixed;\n\tbottom: 15px;\n\tright: 15px;\n\tcursor: pointer;\n\tdisplay: none;\n\tcolor: #fff;\n\tfont-size: 20px;\n\t-webkit-border-radius: 3px;\n\t-moz-border-radius: 3px;\n\t-ms-border-radius: 3px;\n\tborder-radius: 3px;\n\tz-index: 2;\n}\n\n/* Success Submit\n==================================== */\n\n#success {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\twidth: 300px;\n\theight: 190px;\n\tmargin-top: -85px;\n\tmargin-left: -150px;\n\ttext-align: center;\n}\n\n#success h4 {\n\tmargin-top: 10px;\n\tfont-family: 'Poppins', sans-serif;\n\tfont-size: 18px;\n}\n\n@-webkit-keyframes checkmark {\n\t0% { stroke-dashoffset: 50 }\n\t100% { stroke-dashoffset: 0 }\n}\n\n@-ms-keyframes checkmark {\n\t0% { stroke-dashoffset: 50 }\n\t100% { stroke-dashoffset: 0 }\n}\n\n@keyframes checkmark {\n\t0% { stroke-dashoffset: 50 }\n\t100% { stroke-dashoffset: 0 }\n}\n\n@-webkit-keyframes checkmark-circle {\n\t0% { stroke-dashoffset: 240 }\n\t100% { stroke-dashoffset: 480 }\n}\n\n@-ms-keyframes checkmark-circle {\n\t0% { stroke-dashoffset: 240 }\n\t100% { stroke-dashoffset: 480 }\n}\n\n@keyframes checkmark-circle {\n\t0% { stroke-dashoffset: 240 }\n\t100% { stroke-dashoffset: 480 }\n}\n\n.inlinesvg .svg svg {\n\tdisplay: inline\n}\n\n.icon-order-success svg path {\n\t-webkit-animation: checkmark 0.25s ease-in-out 0.7s backwards;\n\tanimation: checkmark 0.25s ease-in-out 0.7s backwards\n}\n\n.icon-order-success svg circle {\n\t-webkit-animation: checkmark-circle 0.6s ease-in-out backwards;\n\tanimation: checkmark-circle 0.6s ease-in-out backwards\n}\n\n/* Responsive\n==================================== */\n\n@media (max-width: 575px) {\t\n\t.hero-home .content h3 {\t  \n\t\tfont-size: 32px;\t\t\n\t}\n}\n\n@media (max-width: 767px) {\t\n\t/* Footer\n\t==================================== */\n\tfooter #copy {\t\t\n\t\ttext-align: left;\n\t\tmargin-bottom: 25px;\n\t}\n\tfooter ul li {\n\t\tmargin-bottom: 10px;\n\t}\n}\n\n@media (max-width: 991px) {\t\t\n\t/* Header\n\t==================================== */\n\theader.main-header.sticky {\t\t\n\t\tposition: static;\n\t}\n\theader .container {\t\n\t\twidth: 100% !important;\n\t\tmargin-right: auto !important;\n\t\tmargin-left: auto !important;\n\t\tpadding-right: 15px !important;\n\t\tpadding-left: 15px !important;\n\t\twidth: 100% !important;\n\t\tmax-width: 100%;\n\t}\n\t/* Header Menu Chevron Down */\n\t.main-menu a i {\n\t\tdisplay: none;\n\t}\t\n\t/* Header Icons */\n\tul#menuIcons {\t\t\n\t\tright: 0;\n\t\ttop: 2px;\n\t}\t\n\t/* Logo */\n\t#logo {\n\t\tposition: relative;\n\t\tleft: 45px;\n\t}\n\t/* Sub Header\n\t==================================== */\n\t.sub-header {\n\t\tmargin-top: 0;\n\t}\t\t\n\t/* Containers\n\t==================================== */\t\n\t#orderContainer,\n\t#personalDetails {\t\t\n\t\tmargin-bottom: 15px;\t\t\n\t}\n\t.order {\n\t\tpadding: 15px 0 0 0;\n\t}\t\t\t\n\t.option-box {\n\t\tmargin: 0 0 15px 0;\n\t}\n\t/* Color Panel */\n\t#colorPanel {\n\t\tdisplay: none;\n\t}\n\t\t.sizeColorAndQuantity{\n\t\tdisplay: none;\n\t\t}\n\n\n\n\n\n\n    \n\n`);
          },
          440: function (t, e, n) {
            var a =
                (this && this.__awaiter) ||
                function (t, e, n, a) {
                  return new (n || (n = Promise))(function (o, i) {
                    function r(t) {
                      try {
                        l(a.next(t));
                      } catch (t) {
                        i(t);
                      }
                    }
                    function s(t) {
                      try {
                        l(a["throw"](t));
                      } catch (t) {
                        i(t);
                      }
                    }
                    function l(t) {
                      var e;
                      t.done
                        ? o(t.value)
                        : ((e = t.value),
                          e instanceof n
                            ? e
                            : new n(function (t) {
                                t(e);
                              })).then(r, s);
                    }
                    l((a = a.apply(t, e || [])).next());
                  });
                },
              o =
                (this && this.__importDefault) ||
                function (t) {
                  return t && t.__esModule ? t : { default: t };
                };
            Object.defineProperty(e, "__esModule", { value: !0 });
            const i = o(n(476)),
              r = o(n(40)),
              s = o(n(126)),
              l = n(879),
              d = o(n(161)),
              c = o(n(143));
            e["default"] = (t, ...e) =>
              a(void 0, [t, ...e], void 0, function* (t, e = {}) {
                const n = Object.assign(
                  {
                    id: [
                      "basicForm",
                      "standardForm",
                      "multipleItemForm",
                      "shoppingFrom",
                    ],
                    label: [
                      "Basic Form",
                      "Standard Form",
                      "Multiple Item Form",
                      "Shopping Form",
                    ],
                    category: ["Basic", "Form", "Extra"],
                    block: () => ({}),
                    style: "",
                    styleAdditional: "",
                    classPrefix: "productform",
                    inlineCss: !0,
                    updateStyleManager: !0,
                  },
                  e
                );
                t.on("load", () => {
                  (0, l.getData)(), t.runCommand("sortBlocks");
                }),
                  t.on("update", () => {
                    const e = t.getProjectData();
                    localStorage.setItem("gjsProject", JSON.stringify(e));
                  }),
                  (0, s.default)(t, n),
                  (0, i.default)(t, n),
                  (0, c.default)(t),
                  (0, d.default)(t, n),
                  (0, r.default)(t);
              });
          },
          161: (t, e) => {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e["default"] = (t, e) => {
                const { Panels: n } = t;
                n.addButton("options", {
                  id: "publishSite",
                  active: !1,
                  attributes: { title: "Save as Template" },
                  className: "fa fa-floppy-o",
                  command: "save-template",
                }),
                  n.addButton("options", {
                    id: "backToListBtn",
                    active: !1,
                    attributes: { title: "Back to Landing page list" },
                    className: "fa fa-arrow-left",
                    command: "back-to-landing-page-list",
                  }),
                  n.addButton("options", {
                    id: "themeChange",
                    active: !1,
                    attributes: { title: "Change Theme" },
                    className: "fa fa-adjust",
                    command: "theme-change",
                  });
              });
          },
          143: function (t, e, n) {
            var a =
              (this && this.__awaiter) ||
              function (t, e, n, a) {
                return new (n || (n = Promise))(function (o, i) {
                  function r(t) {
                    try {
                      l(a.next(t));
                    } catch (t) {
                      i(t);
                    }
                  }
                  function s(t) {
                    try {
                      l(a["throw"](t));
                    } catch (t) {
                      i(t);
                    }
                  }
                  function l(t) {
                    var e;
                    t.done
                      ? o(t.value)
                      : ((e = t.value),
                        e instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })).then(r, s);
                  }
                  l((a = a.apply(t, e || [])).next());
                });
              };
            Object.defineProperty(e, "__esModule", { value: !0 });
            const o = n(126),
              i = n(121);
            let r;
            e["default"] = (t) =>
              a(void 0, void 0, void 0, function* () {
                r =
                  "localhost:8080" === document.location.host
                    ? "https://test2.chepapest.com/api/dev/products"
                    : `${
                        document.location.protocol +
                        "//" +
                        document.location.host
                      }/api/dev/products`;
                let e = null;
                try {
                  const n = yield fetch(r);
                  if (!n.ok) throw new Error("Failed to fetch data");
                  yield n.json();
                  (e = i.productDummyData),
                    t.TraitManager.addType(o.typeBasicForm, {
                      events: { keyup: "click" },
                      createInput({ trait: t }) {
                        const n = t.get("options") || [],
                          a = n.length ? n : e,
                          o = document.createElement("div");
                        o.innerHTML = `\n          <select class="products">\n          <option value="" disabled selected>Select a Product</option>\n            ${a
                          .map(
                            (t) => `<option value="${t.id}">${t.title}</option>`
                          )
                          .join("")}\n          </select>\n        `;
                        return (
                          o
                            .querySelector(".products")
                            .addEventListener("click", (t) => {
                              let e = o.querySelector("option:first-child");
                              t.target !== e ||
                                e.dataset.clicked ||
                                ((e.dataset.clicked = !0),
                                (e.style.display = "none"),
                                (e.disabled = !0));
                            }),
                          o
                        );
                      },
                      onEvent({ elInput: t, component: n }) {
                        const a = t.querySelector(".products");
                        let o;
                        for (let t = 0; t < e.length; t++)
                          e[t].id == a.value &&
                            (e[t].value, a.value, (o = e[t]));
                        n.addAttributes({ selectedData: JSON.stringify(o) }),
                          (n.attributes.selectedData = JSON.stringify(o));
                      },
                    });
                } catch (t) {
                  console.log("Error in Fetching Data", t);
                }
              });
          },
        },
        e = {};
      function n(a) {
        var o = e[a];
        if (void 0 !== o) return o.exports;
        var i = (e[a] = { exports: {} });
        return t[a].call(i.exports, i, i.exports, n), i.exports;
      }
      return (
        (n.d = (t, e) => {
          for (var a in e)
            n.o(e, a) &&
              !n.o(t, a) &&
              Object.defineProperty(t, a, { enumerable: !0, get: e[a] });
        }),
        (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (n.r = (t) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        n(440)
      );
    })()
);
//# sourceMappingURL=index.js.map
