(this.webpackJsonpcswap = this.webpackJsonpcswap || []).push([
  [0],
  {
      1182: function (e, n) {},
      1234: function (e, n) {},
      1429: function (e, n) {},
      1498: function (e, n) {},
      1616: function (e, n, t) {},
      1617: function (e, n, t) {},
      1618: function (e, n, t) {},
      1619: function (e, n, t) {},
      1637: function (e, n, t) {},
      1638: function (e, n, t) {},
      1639: function (e, n, t) {},
      1640: function (e, n, t) {},
      1641: function (e, n, t) {},
      1642: function (e, n, t) {},
      1643: function (e, n, t) {},
      1644: function (e, n, t) {},
      1645: function (e, n, t) {},
      1647: function (e, n, t) {},
      1648: function (e, n, t) {},
      1650: function (e, n, t) {
          "use strict";
          t.r(n);
          Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
          var i = t(175),
              o = t(37),
              a = (t(835), t(21)),
              l = t(0),
              s = t.n(l),
              c = t.p + "static/media/svg-sprite.8dbed3f5.svg",
              r = t(3),
              d = (t(836), t(201)),
              u = t(35),
              v = t(181),
              m = t(291),
              b = t.n(m),
              j = "ACCOUNT_ADDRESS_SET",
              p = "ACCOUNT_CONNECT_MODAL_SHOW",
              h = "ACCOUNT_VAULTS_SET",
              f = "TOTAL_VALUE_SET",
              O = "TRANSACTION_HISTORY_SET",
              x = "FORM_MODAL_SHOW",
              g = "VAULT_SET",
              N = "ACCOUNT_BALANCES_SET",
              y = "ASSET_BALANCE_SET",
              w = "ACCOUNT_POOL_BALANCE_SET",
              C = "BALANCE_REFRESH_SET",
              _ = "ACCOUNT_NAME_SET",
              D = function (e) {
                  return { type: j, value: e };
              },
              S = function (e) {
                  return { type: _, value: e };
              },
              T = function (e) {
                  return { type: p, value: e };
              },
              I = function (e, n) {
                  return { type: N, list: e, pagination: n };
              },
              k = t(1663),
              E = "PAIRS_SET",
              A = "PAIR_ID_SET",
              P = "PAIR_SET",
              M = "ASSETS_SET",
              F = "APP_ASSETS_SET",
              L = "OUT_ASSET_SET",
              R = "IN_ASSET_SET",
              q = "OUT_AMOUNT_SET",
              B = "IN_AMOUNT_SET",
              U = "COLLATERAL_RATIO_SET",
              H = "ASSETS_IN_PROGRESS_SET",
              V = function (e) {
                  return { type: P, value: e };
              },
              W = function (e, n, t) {
                  var i = "".concat(e, "/ibc/core/channel/v1/channels/").concat(n, "/ports/transfer");
                  k.a
                      .get(i, { headers: { "Content-Type": "application/json" } })
                      .then(function (e) {
                          var n;
                          t(null, null === (n = e.data) || void 0 === n ? void 0 : n.proof_height);
                      })
                      .catch(function (e) {
                          a.a.error(null === e || void 0 === e ? void 0 : e.message), t(null === e || void 0 === e ? void 0 : e.message);
                      });
              },
              z = 10,
              Y = 1e5,
              G = Number("1"),
              K = Number("1"),
              Q = "POOLS_SET",
              X = "POOL_SET",
              $ = "POOL_BALANCE_SET",
              J = "POOL_DEPOSITS_SET",
              Z = "SPOT_PRICE_SET",
              ee = "POOL_BALANCE_FETCH_IN_PROGRESS",
              ne = "FIRST_RESERVE_COIN_DENOM_SET",
              te = "SECOND_RESERVE_COIN_DENOM_SET",
              ie = "POOL_TOKEN_SUPPLY_SET",
              oe = "POOL_BALANCES_SET",
              ae = "POOLS_LIQUIDITY_LIST_SET",
              le = "BASE_COIN_POOL_PRICE_SET",
              se = "USER_LIQUIDITY_IN_DOLLAR_SET",
              ce = "USER_LIQUIDITY_IN_POOLS_SET",
              re = "POOL_INCENTIVES_SET",
              de = "FARMED_TOKENS_DOLLAR_VALUE",
              ue = "POOL_REWARDS_SET",
              ve = function (e, n) {
                  return { type: Q, list: e, pagination: n };
              },
              me = function (e) {
                  return { type: X, value: e };
              },
              be = function (e) {
                  return { type: $, list: e };
              },
              je = function (e) {
                  return { type: ne, value: e };
              },
              pe = function (e) {
                  return { type: te, value: e };
              },
              he = function (e, n) {
                  return { type: le, value: e, baseValue: n };
              },
              fe = function (e, n) {
                  return { type: ce, value: n, poolId: e };
              },
              Oe = "MARKET_LIST_SET",
              xe = function (e, n) {
                  var t =
                      null === e || void 0 === e
                          ? void 0
                          : e.reduce(function (e, n) {
                                return (e[null === n || void 0 === n ? void 0 : n.denom] = n), e;
                            }, {});
                  return { type: Oe, list: t, pagination: n };
              },
              ge = "CAUTION_NOTICE_VALUES_SET",
              Ne = "DEMAND_COIN_DENOM_SET",
              ye = "DEMAND_COIN_AMOUNT_SET",
              we = "OFFER_COIN_DENOM_SET",
              Ce = "OFFER_COIN_AMOUNT_SET",
              _e = "REVERSE_SET",
              De = "COMPLETE_SET",
              Se = "SLIPPAGE_SET",
              Te = "PARAMS_SET",
              Ie = "SLIPPAGE_TOLERANCE_SET;",
              ke = "LIMIT_ORDER_TOGGLE_SET",
              Ee = "LIMIT_PRICE_SET",
              Ae = "SWAP_CALCULATIONS_SET",
              Pe = function (e) {
                  return { type: _e, value: e };
              },
              Me = function (e, n) {
                  return { type: De, value: e, data: n };
              },
              Fe = function (e) {
                  return { type: Te, value: e };
              },
              Le = t(4),
              Re = t(18),
              qe = t(5),
              Be = t.n(qe),
              Ue = (t(250), t(802), t(2)),
              He = s.a.createContext({});
          He.Consumer, He.Provider;
          function Ve(e, n) {
              var t = Object(l.useContext)(He);
              return e || t[n] || n;
          }
          var We = ["bsPrefix", "className", "as"],
              ze = ["xl", "lg", "md", "sm", "xs"],
              Ye = s.a.forwardRef(function (e, n) {
                  var t = e.bsPrefix,
                      i = e.className,
                      o = e.as,
                      a = void 0 === o ? "div" : o,
                      l = Object(Re.a)(e, We),
                      s = Ve(t, "col"),
                      c = [],
                      r = [];
                  return (
                      ze.forEach(function (e) {
                          var n,
                              t,
                              i,
                              o = l[e];
                          if ((delete l[e], null != o && "object" === typeof o)) {
                              var a = o.span;
                              (n = void 0 === a || a), (t = o.offset), (i = o.order);
                          } else n = o;
                          var d = "xs" !== e ? "-".concat(e) : "";
                          null != n && c.push(!0 === n ? "".concat(s).concat(d) : "".concat(s).concat(d, "-").concat(n)), null != i && r.push("order".concat(d, "-").concat(i)), null != t && r.push("offset".concat(d, "-").concat(t));
                      }),
                      c.length || c.push(s),
                      Object(Ue.jsx)(a, Object(Le.a)(Object(Le.a)({}, l), {}, { ref: n, className: Be.a.apply(void 0, [i].concat(c, r)) }))
                  );
              });
          Ye.displayName = "Col";
          var Ge = Ye,
              Ke = ["bsPrefix", "fluid", "as", "className"],
              Qe = s.a.forwardRef(function (e, n) {
                  var t = e.bsPrefix,
                      i = e.fluid,
                      o = e.as,
                      a = void 0 === o ? "div" : o,
                      l = e.className,
                      s = Object(Re.a)(e, Ke),
                      c = Ve(t, "container"),
                      r = "string" === typeof i ? "-".concat(i) : "-fluid";
                  return Object(Ue.jsx)(a, Object(Le.a)(Object(Le.a)({ ref: n }, s), {}, { className: Be()(l, i ? "".concat(c).concat(r) : c) }));
              });
          (Qe.displayName = "Container"), (Qe.defaultProps = { fluid: !1 });
          var Xe = ["bsPrefix", "noGutters", "as", "className"],
              $e = s.a.forwardRef(function (e, n) {
                  var t = e.bsPrefix,
                      i = e.noGutters,
                      o = e.as,
                      a = void 0 === o ? "div" : o,
                      l = e.className,
                      s = Object(Re.a)(e, Xe),
                      c = Ve(t, "row");
                  return Object(Ue.jsx)(a, Object(Le.a)(Object(Le.a)({ ref: n }, s), {}, { className: Be()(l, c, i && "no-gutters") }));
              });
          ($e.displayName = "Row"), ($e.defaultProps = { noGutters: !1 });
          var Je,
              Ze = $e,
              en = ["name", "viewbox", "width", "height", "fill", "className", "onClick"],
              nn = function (e) {
                  var n = e.name,
                      t = e.viewbox,
                      i = e.width,
                      o = e.height,
                      a = e.fill,
                      l = e.className,
                      s = e.onClick,
                      c = Object(Re.a)(e, en),
                      r = Be()(l, "icon");
                  return Object(Ue.jsx)(Ue.Fragment, {
                      children: Object(Ue.jsx)("svg", Object(Le.a)(Object(Le.a)({ className: r, viewBox: t }, c), {}, { style: { width: i, height: o, fill: a }, onClick: s, children: Object(Ue.jsx)("use", { xlinkHref: "#" + n }) })),
                  });
              },
              tn = t(139),
              on = t(169),
              an =
                  (t(839),
                  function () {
                      var e = Object(l.useState)(null === localStorage.getItem("agreement_accepted")),
                          n = Object(r.a)(e, 2),
                          t = n[0],
                          i = n[1],
                          o = Object(l.useState)(!1),
                          a = Object(r.a)(o, 2),
                          s = a[0],
                          c = a[1];
                      return Object(Ue.jsx)(Ue.Fragment, {
                          children: Object(Ue.jsx)(tn.a, {
                              centered: !0,
                              className: "caution-notice-modal",
                              footer: null,
                              header: null,
                              open: t,
                              width: 630,
                              isHidecloseButton: !0,
                              children: Object(Ue.jsxs)("div", {
                                  className: "d-flex flex-wrap flex-column",
                                  children: [
                                      Object(Ue.jsx)("h2", { children: "Disclaimer" }),
                                      Object(Ue.jsxs)("div", {
                                          className: "disclaimer-box-container",
                                          children: [
                                              Object(Ue.jsxs)("p", {
                                                  children: [
                                                      "Your access and/or use of (a) the website located at https://cswap.one/ (being the Website referred to in the Terms (as defined below); (b) the cSwap Smart Contracts; and (c) the Comdex Chain on which the cSwap Smart Contracts are deployed, including related trademarks, and other intellectual property, whether such access and/or use is via (i) the Website or (ii) command line, locally installed programs, Software Development Kits, software code and blockchain and smart contract explorers shall be subject to Terms of Use of cSwap (the \u201cTerms\u201d) (accessible at ",
                                                      Object(Ue.jsx)("a", { href: "https://terms.comdex.one/Comdex_Cswap_Terms_and_Conditions.pdf", children: "Terms of Use of cSwap " }),
                                                      ")  and in particular, to the various disclaimers and liability limitation set out in the section of the Terms entitled \u201cDisclaimers and Limitation of Liability\u201d.",
                                                  ],
                                              }),
                                              Object(Ue.jsxs)("div", {
                                                  className: "border-box",
                                                  children: [
                                                      Object(Ue.jsx)("p", {
                                                          children:
                                                              "cSwap (which includes the Website, the cSwap Smart Contracts and Comdex Chain are not intended for (a) access and/or use by Excluded Persons; or (b) access and/or use by any person or entity in, or accessing or using the Website from, an Excluded Jurisdiction.",
                                                      }),
                                                      Object(Ue.jsx)("p", {
                                                          children:
                                                              "Accordingly, if you are an Excluded Person or a person seeking to access and/or use cSwap from an Excluded Jurisdiction, you should not access and/or use or attempt to access and/or use cSwap.",
                                                      }),
                                                  ],
                                              }),
                                              Object(Ue.jsx)("p", {
                                                  children:
                                                      "The terms \u201ccSwap Smart Contracts\u201d and \u201cComdex Chain\u201d (collectively referred to as \u201ccSwap\u201d) as well as \u201cExcluded Persons\u201d and \u201cExcluded Jurisdictions\u201d are as defined in the Terms.",
                                              }),
                                              Object(Ue.jsx)("p", {
                                                  children:
                                                      "Upgrades and modifications to cSwap are managed in a community-driven way by governance vote of holders of the CMDX Token native to the Comdex blockchain. There may be changes to the Terms since you had last accessed and/or used cSwap.",
                                              }),
                                              Object(Ue.jsx)("p", {
                                                  children:
                                                      "By proceeding to access and/or use cSwap you are agreeing to the prevailing Terms on behalf of yourself and any entity you represent, and you represent and warrant that you have the right and authority to do so.",
                                              }),
                                          ],
                                      }),
                                      Object(Ue.jsx)("div", {
                                          children: Object(Ue.jsx)(on.a, {
                                              checked: s,
                                              onChange: function () {
                                                  c(function (e) {
                                                      return !e;
                                                  });
                                              },
                                              children: "I have read and understood the Terms of Use and wish to proceed.",
                                          }),
                                      }),
                                      Object(Ue.jsx)("div", {
                                          className: "d-flex agree-btn",
                                          children: Object(Ue.jsx)(u.a, {
                                              onClick: function (e) {
                                                  e.preventDefault(), i(!1), localStorage.setItem("agreement_accepted", "true");
                                              },
                                              disabled: !s,
                                              name: "Agree",
                                              type: "primary",
                                              className: "btn-filled",
                                              children: "Agree",
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      });
                  }),
              ln = {
                  chainId: "comdex-1",
                  chainName: "Comdex",
                  rpc: "https://rpc.comdex.one",
                  rest: "https://rest.comdex.one",
                  explorerUrlToTx: "https://www.mintscan.io/comdex/txs/{txHash}",
                  walletUrlForStaking: "https://comdex.omniflix.co/stake",
                  networkTag: "Mainnet",
                  coinDenom: "CMDX",
                  coinMinimalDenom: "ucmdx",
                  coinDecimals: 6,
                  prefix: "comdex",
                  coinType: 118,
              },
              sn = { coinDenom: "CMST", coinMinimalDenom: "ucmst", coinDecimals: 6 },
              cn = { coinDenom: "HARBOR", coinMinimalDenom: "uharbor", coinDecimals: 6 },
              rn = "ibc/961FA3E54F5DCCA639F37A7C45F7BBE41815579EF1513B5AFBEFCFEB8F256352",
              dn = "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
              un = "ibc/E1616E7C19EA474C565737709A628D6F8A23FF9D3E9A7A6871306CF5E0A5341E",
              vn = "ibc/81C3A46287D7664A8FD19843AC8D0CFD6C284EF1F750C661C48B3544277B1B29",
              mn = "ibc/167E3D88D71B7D2F6308D3EF93FC3DD51932B2D9672D72B71418F61CBC5F5717",
              bn = "ibc/0A6F20FA34BEBB63568E44C81C6E154C63ED061BA45E7EBC144B24C0DBBD0A4F",
              jn = "ibc/21476176CD2CBF2F8017EFF231B1132DF23F350B0219AB47A6E087527ECADCC2",
              pn = t(495),
              hn = t(48),
              fn = t.n(hn),
              On = t(12),
              xn = t(47),
              gn = t(359),
              Nn = t(183),
              yn = t(197),
              wn = t(285),
              Cn = t(165),
              _n = t(130),
              Dn = t(9),
              Sn = t(1),
              Tn = t(116),
              In = t(96),
              kn = function (e) {
                  return e >= 1e3 && e < 1e6 ? (e / 1e3).toFixed(2) + "K" : e >= 1e6 ? (e / 1e6).toFixed(2) + "M" : e < 1e3 ? e : void 0;
              },
              En = function (e) {
                  var n = e.toString().split("."),
                      t = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  return n[1] ? t.concat(".", n[1]) : t;
              },
              An = function (e) {
                  return In.Decimal.fromAtomics(e || "0", 18).toString();
              },
              Pn = function (e, n) {
                  var t, i, o;
                  return null !== e && void 0 !== e && null !== (t = e[n]) && void 0 !== t && t.price && "-" !== (null === e || void 0 === e || null === (i = e[n]) || void 0 === i ? void 0 : i.price)
                      ? null === e || void 0 === e || null === (o = e[n]) || void 0 === o
                          ? void 0
                          : o.price
                      : 0;
              },
              Mn = function (e) {
                  return "" === e ? "0" : e;
              },
              Fn = function (e) {
                  for (var n = 0; e > 1; ) (e /= 10), n++;
                  return n;
              },
              Ln = t(70),
              Rn =
                  ((Je = { ucgold: "gold-icon", ucsilver: "silver-icon", ucoil: "crude-oil", uatom: "atom-icon" }),
                  Object(Sn.a)(Je, rn, "atom-icon"),
                  Object(Sn.a)(Je, "ucmdx", "comdex-icon"),
                  Object(Sn.a)(Je, "uosmo", "osmosis-icon"),
                  Object(Sn.a)(Je, dn, "osmosis-icon"),
                  Object(Sn.a)(Je, "ucmst", "cmst-icon"),
                  Object(Sn.a)(Je, "uharbor", "harbor-icon"),
                  Object(Sn.a)(Je, "uusdc", "usdc-icon"),
                  Object(Sn.a)(Je, un, "usdc-icon"),
                  Object(Sn.a)(Je, "weth-wei", "weth-icon"),
                  Object(Sn.a)(Je, vn, "weth-icon"),
                  Object(Sn.a)(Je, "ujuno", "juno-icon"),
                  Object(Sn.a)(Je, mn, "juno-icon"),
                  Object(Sn.a)(Je, "wbtc-satoshi", "wbtc-icon"),
                  Object(Sn.a)(Je, bn, "wbtc-icon"),
                  Object(Sn.a)(Je, "stuatom", "statom-icon"),
                  Object(Sn.a)(Je, jn, "statom-icon"),
                  Je),
              qn = function (e) {
                  return Rn[e];
              },
              Bn = function (e) {
                  switch (e) {
                      case 0:
                          return "UNSPECIFIED";
                      case 1:
                          return "NOT EXECUTED";
                      case 2:
                          return "NOT MATCHED";
                      case 3:
                          return "PARTIALLY MATCHED";
                      case 4:
                          return "COMPLETED";
                      case 5:
                          return "CANCELED";
                      case 6:
                          return "EXPIRED";
                      default:
                          return "";
                  }
              },
              Un = function (e, n, t) {
                  if ("string" === typeof e)
                      return ""
                          .concat(null === e || void 0 === e ? void 0 : e.substr(0, n), "...")
                          .concat(null === e || void 0 === e ? void 0 : e.substr((null === e || void 0 === e ? void 0 : e.length) - t, null === e || void 0 === e ? void 0 : e.length));
              },
              Hn = function (e, n) {
                  return e.indexOf(".") >= 0 ? e.substr(0, e.indexOf(".")) + e.substr(e.indexOf("."), Number(n) ? Number(Fn(n)) + 1 : (null === ln || void 0 === ln ? void 0 : ln.coinDecimals) + 1) : e;
              },
              Vn = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0",
                      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0",
                      t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ln.coinType;
                  return Object(Tn.stringToPath)("m/44'/" + t + "'/" + e + "'/0/" + n);
              },
              Wn = {
                  PROPOSAL_STATUS_UNSPECIFIED: "Nil",
                  PROPOSAL_STATUS_DEPOSIT_PERIOD: "Deposit Period",
                  PROPOSAL_STATUS_VOTING_PERIOD: "Voting Period",
                  PROPOSAL_STATUS_PASSED: "Passed",
                  PROPOSAL_STATUS_REJECTED: "Rejected",
                  PROPOSAL_STATUS_FAILED: "Failed",
              },
              zn = { 1: "Yes", 2: "Abstain", 3: "No", 4: "No With Veto" },
              Yn = function (e) {
                  var n = e.split("\n"),
                      t = [];
                  return (
                      n.forEach(function (e, n) {
                          n > 0 && t.push(Object(Ue.jsx)("br", {})), t.push(e);
                      }),
                      t
                  );
              },
              Gn = t(182),
              Kn = t.n(Gn),
              Qn = {
                  "/comdex.liquidity.v1beta1.MsgLimitOrder": {
                      aminoType: "comdex/liquidity/MsgLimitOrder",
                      toAmino: function (e) {
                          var n = e.orderer,
                              t = e.pairId,
                              i = e.appId,
                              o = e.direction,
                              a = e.offerCoin,
                              l = e.demandCoinDenom,
                              s = e.price,
                              c = e.amount,
                              r = "".concat(new Kn.a(s).shiftedBy(-18).toFixed(18));
                          return { orderer: n, pair_id: String(t), app_id: String(i), direction: Number(o), offer_coin: a, demand_coin_denom: l, price: r, amount: c, order_lifespan: "0" };
                      },
                      fromAmino: function (e) {
                          var n = e.orderer,
                              t = e.pair_id,
                              i = e.app_id,
                              o = e.direction,
                              a = e.offer_coin,
                              l = e.demand_coin_denom,
                              s = e.price,
                              c = e.amount;
                          return {
                              orderer: n,
                              pairId: parseInt(t),
                              appId: parseInt(i),
                              direction: o,
                              offerCoin: a,
                              demandCoinDenom: l,
                              price: new Kn.a(s).multipliedBy(Math.pow(10, 18)).toString(),
                              amount: c,
                              orderLifespan: { seconds: 0, nanos: 0 },
                          };
                      },
                  },
                  "/comdex.liquidity.v1beta1.MsgDeposit": {
                      aminoType: "comdex/liquidity/MsgDeposit",
                      toAmino: function (e) {
                          var n = e.depositor,
                              t = e.depositCoins,
                              i = e.poolId,
                              o = e.appId;
                          return { depositor: n, deposit_coins: t, pool_id: String(i), app_id: String(o) };
                      },
                      fromAmino: function (e) {
                          var n = e.depositor,
                              t = e.deposit_coins,
                              i = e.pool_id,
                              o = e.app_id;
                          return { depositor: n, depositCoins: t, poolId: Number(i), appId: Number(o) };
                      },
                  },
                  "/comdex.liquidity.v1beta1.MsgWithdraw": {
                      aminoType: "comdex/liquidity/MsgWithdraw",
                      toAmino: function (e) {
                          var n = e.withdrawer,
                              t = e.poolId,
                              i = e.poolCoin,
                              o = e.appId;
                          return { withdrawer: n, pool_id: String(t), app_id: String(o), pool_coin: i };
                      },
                      fromAmino: function (e) {
                          var n = e.withdrawer,
                              t = e.pool_id,
                              i = e.pool_coin,
                              o = e.app_id;
                          return { withdrawer: n, poolId: Number(t), appId: Number(o), poolCoin: i };
                      },
                  },
                  "/comdex.liquidity.v1beta1.MsgCreatePool": {
                      aminoType: "comdex/liquidity/MsgCreatePool",
                      toAmino: function (e) {
                          var n = e.creator,
                              t = e.pairId,
                              i = e.depositCoins,
                              o = e.appId;
                          return { creator: n, pair_id: String(t), app_id: String(o), deposit_coins: i };
                      },
                      fromAmino: function (e) {
                          var n = e.creator,
                              t = e.pair_id,
                              i = e.deposit_coins,
                              o = e.app_id;
                          return { creator: n, pairId: Number(t), appId: Number(o), depositCoins: i };
                      },
                  },
                  "/comdex.liquidity.v1beta1.MsgFarm": {
                      aminoType: "comdex/liquidity/MsgFarm",
                      toAmino: function (e) {
                          var n = e.farmer,
                              t = e.poolId,
                              i = e.farmingPoolCoin,
                              o = e.appId;
                          return { farmer: n, pool_id: String(t), app_id: String(o), farming_pool_coin: i };
                      },
                      fromAmino: function (e) {
                          var n = e.farmer,
                              t = e.pool_id,
                              i = e.farming_pool_coin,
                              o = e.app_id;
                          return { farmer: n, poolId: Number(t), appId: Number(o), farmingPoolCoin: i };
                      },
                  },
                  "/comdex.liquidity.v1beta1.MsgUnfarm": {
                      aminoType: "comdex/liquidity/MsgUnfarm",
                      toAmino: function (e) {
                          var n = e.farmer,
                              t = e.poolId,
                              i = e.unfarmingPoolCoin,
                              o = e.appId;
                          return { farmer: n, pool_id: String(t), app_id: String(o), unfarming_pool_coin: i };
                      },
                      fromAmino: function (e) {
                          var n = e.farmer,
                              t = e.pool_id,
                              i = e.unfarming_pool_coin,
                              o = e.app_id;
                          return { farmer: n, poolId: Number(t), appId: Number(o), unfarmingPoolCoin: i };
                      },
                  },
                  "/comdex.liquidity.v1beta1.MsgCancelOrder": {
                      aminoType: "comdex/liquidity/MsgCancelOrder",
                      toAmino: function (e) {
                          var n = e.orderer,
                              t = e.pairId,
                              i = e.orderId,
                              o = e.appId;
                          return { orderer: n, pair_id: String(t), order_id: String(i), app_id: String(o) };
                      },
                      fromAmino: function (e) {
                          var n = e.orderer,
                              t = e.pair_id,
                              i = e.order_id,
                              o = e.app_id;
                          return { orderer: n, pairId: Number(t), appId: Number(o), orderId: Number(i) };
                      },
                  },
                  "/cosmos.gov.v1beta1.MsgVote": {
                      aminoType: "cosmos-sdk/MsgVote",
                      toAmino: function (e) {
                          var n = e.proposalId,
                              t = e.voter,
                              i = e.option;
                          return { proposal_id: String(n), voter: t, option: i };
                      },
                      fromAmino: function (e) {
                          var n = e.proposal_id,
                              t = e.voter,
                              i = e.option;
                          return { proposalId: Number(n), voter: t, option: i };
                      },
                  },
              },
              Xn = t(153),
              $n = t(205),
              Jn = new Xn.Registry(
                  [].concat(Object(Dn.a)(Nn.defaultRegistryTypes), [
                      ["/comdex.liquidity.v1beta1.MsgCreatePool", $n.MsgCreatePool],
                      ["/comdex.liquidity.v1beta1.MsgDeposit", $n.MsgDeposit],
                      ["/comdex.liquidity.v1beta1.MsgWithdraw", $n.MsgWithdraw],
                      ["/comdex.liquidity.v1beta1.MsgLimitOrder", $n.MsgLimitOrder],
                      ["/comdex.liquidity.v1beta1.MsgFarm", $n.MsgFarm],
                      ["/comdex.liquidity.v1beta1.MsgUnfarm", $n.MsgUnfarm],
                      ["/comdex.liquidity.v1beta1.MsgCancelOrder", $n.MsgCancelOrder],
                  ])
              ),
              Zn = new Nn.AminoTypes(Qn),
              et = function (e) {
                  return nt(ln.rpc, e);
              },
              nt = function (e, n) {
                  yn.Tendermint34Client.connect(e)
                      .then(function (e) {
                          var t = new Nn.QueryClient(e),
                              i = Object(Nn.createProtobufRpcClient)(t);
                          n(null, i);
                      })
                      .catch(function (e) {
                          n(null === e || void 0 === e ? void 0 : e.message);
                      });
              },
              tt = (function () {
                  var e = Object(xn.a)(
                      Object(On.a)().mark(function e() {
                          var n,
                              t,
                              i,
                              o = arguments;
                          return Object(On.a)().wrap(function (e) {
                              for (;;)
                                  switch ((e.prev = e.next)) {
                                      case 0:
                                          return (n = o.length > 0 && void 0 !== o[0] ? o[0] : ln.chainId), (e.next = 3), window.keplr.enable(n);
                                      case 3:
                                          return (e.next = 5), window.getOfflineSignerAuto(n);
                                      case 5:
                                          return (t = e.sent), (e.next = 8), t.getAccounts();
                                      case 8:
                                          return (i = e.sent), e.abrupt("return", [t, i]);
                                      case 10:
                                      case "end":
                                          return e.stop();
                                  }
                          }, e);
                      })
                  );
                  return function () {
                      return e.apply(this, arguments);
                  };
              })(),
              it = function (e, n, t) {
                  return "ledger" === localStorage.getItem("loginType")
                      ? (function (e, n, t) {
                            return st.apply(this, arguments);
                        })(e, n, t)
                      : ot(e, n, t);
              },
              ot = (function () {
                  var e = Object(xn.a)(
                      Object(On.a)().mark(function e(n, t, i) {
                          var o, a, l, s;
                          return Object(On.a)().wrap(function (e) {
                              for (;;)
                                  switch ((e.prev = e.next)) {
                                      case 0:
                                          return (e.next = 2), tt(ln.chainId);
                                      case 2:
                                          if (((o = e.sent), (a = Object(r.a)(o, 2)), (l = a[0]), (s = a[1]), t === s[0].address)) {
                                              e.next = 10;
                                              break;
                                          }
                                          return "Connected account is not active in Keplr", i("Connected account is not active in Keplr"), e.abrupt("return");
                                      case 10:
                                          Nn.SigningStargateClient.connectWithSigner(ln.rpc, l, { registry: Jn, aminoTypes: Zn })
                                              .then(function (e) {
                                                  e.signAndBroadcast(t, [n.message], n.fee, n.memo)
                                                      .then(function (e) {
                                                          i(null, e);
                                                      })
                                                      .catch(function (e) {
                                                          i(null === e || void 0 === e ? void 0 : e.message);
                                                      });
                                              })
                                              .catch(function (e) {
                                                  i(e && e.message);
                                              });
                                      case 11:
                                      case "end":
                                          return e.stop();
                                  }
                          }, e);
                      })
                  );
                  return function (n, t, i) {
                      return e.apply(this, arguments);
                  };
              })();
          function at(e, n) {
              return lt.apply(this, arguments);
          }
          function lt() {
              return (
                  (lt = Object(xn.a)(
                      Object(On.a)().mark(function e(n, t) {
                          var i, o, a, l, s, c, d, u;
                          return Object(On.a)().wrap(function (e) {
                              for (;;)
                                  switch ((e.prev = e.next)) {
                                      case 0:
                                          return (
                                              (a = function () {
                                                  return (a = Object(xn.a)(
                                                      Object(On.a)().mark(function e() {
                                                          var n;
                                                          return Object(On.a)().wrap(function (e) {
                                                              for (;;)
                                                                  switch ((e.prev = e.next)) {
                                                                      case 0:
                                                                          return (e.next = 2), wn.default.create(i, i);
                                                                      case 2:
                                                                          return (n = e.sent), e.abrupt("return", n);
                                                                      case 4:
                                                                      case "end":
                                                                          return e.stop();
                                                                  }
                                                          }, e);
                                                      })
                                                  )).apply(this, arguments);
                                              }),
                                              (o = function () {
                                                  return a.apply(this, arguments);
                                              }),
                                              (i = 12e4),
                                              (e.next = 5),
                                              o()
                                          );
                                      case 5:
                                          return (l = e.sent), (s = new gn.LedgerSigner(l, { testModeAllowed: !0, hdPaths: [n], prefix: t })), (e.next = 9), s.getAccounts();
                                      case 9:
                                          return (c = e.sent), (d = Object(r.a)(c, 1)), (u = d[0]), e.abrupt("return", [s, u.address]);
                                      case 13:
                                      case "end":
                                          return e.stop();
                                  }
                          }, e);
                      })
                  )),
                  lt.apply(this, arguments)
              );
          }
          function st() {
              return (st = Object(xn.a)(
                  Object(On.a)().mark(function e(n, t, i) {
                      var o, a, l, s;
                      return Object(On.a)().wrap(function (e) {
                          for (;;)
                              switch ((e.prev = e.next)) {
                                  case 0:
                                      return (e.next = 2), at(Vn(), ln.prefix);
                                  case 2:
                                      if (((o = e.sent), (a = Object(r.a)(o, 2)), (l = a[0]), (s = a[1]), t === s)) {
                                          e.next = 10;
                                          break;
                                      }
                                      return "Connected account is not active in Keplr", i("Connected account is not active in Keplr"), e.abrupt("return");
                                  case 10:
                                      ct(l, s, [null === n || void 0 === n ? void 0 : n.message], null === n || void 0 === n ? void 0 : n.fee, null === n || void 0 === n ? void 0 : n.memo)
                                          .then(function (e) {
                                              i(null, e);
                                          })
                                          .catch(function (e) {
                                              i(e && e.message);
                                          });
                                  case 12:
                                  case "end":
                                      return e.stop();
                              }
                      }, e);
                  })
              )).apply(this, arguments);
          }
          function ct(e, n, t, i) {
              return rt.apply(this, arguments);
          }
          function rt() {
              return (
                  (rt = Object(xn.a)(
                      Object(On.a)().mark(function e(n, t, i, o) {
                          var a,
                              l,
                              s,
                              c,
                              r,
                              d,
                              u,
                              v,
                              m = arguments;
                          return Object(On.a)().wrap(function (e) {
                              for (;;)
                                  switch ((e.prev = e.next)) {
                                      case 0:
                                          return (a = m.length > 4 && void 0 !== m[4] ? m[4] : ""), (e.next = 3), Nn.SigningStargateClient.connectWithSigner(ln.rpc, n, { registry: Jn, aminoTypes: Zn });
                                      case 3:
                                          return (l = e.sent), (e.next = 6), l.getSequence(t);
                                      case 6:
                                          return (s = e.sent), (c = s.accountNumber), (r = s.sequence), (e.next = 11), l.getChainId();
                                      case 11:
                                          return (d = e.sent), (e.next = 14), l.sign(t, i, o, a, { accountNumber: c, sequence: Number(r), chainId: d });
                                      case 14:
                                          return (u = e.sent), (v = Uint8Array.from(Cn.TxRaw.encode(u).finish())), e.abrupt("return", l.broadcastTx(v));
                                      case 17:
                                      case "end":
                                          return e.stop();
                                  }
                          }, e);
                      })
                  )),
                  rt.apply(this, arguments)
              );
          }
          var dt = function (e, n, t) {
                  Object(xn.a)(
                      Object(On.a)().mark(function i() {
                          var o, a, l, s, c, r, d, u, v, m, b, j, p, h, f;
                          return Object(On.a)().wrap(function (i) {
                              for (;;)
                                  switch ((i.prev = i.next)) {
                                      case 0:
                                          return (i.next = 2), window.keplr;
                                      case 2:
                                          if (((i.t0 = i.sent), !i.t0)) {
                                              i.next = 5;
                                              break;
                                          }
                                          window.keplr.enable(e.chainId);
                                      case 5:
                                          return (f = window.getOfflineSignerOnlyAmino && window.getOfflineSignerOnlyAmino(e.chainId)), (i.next = 8), Nn.SigningStargateClient.connectWithSigner(e.rpc, f);
                                      case 8:
                                          i.sent
                                              .sendIbcTokens(
                                                  null === (o = n.msg) || void 0 === o || null === (a = o.value) || void 0 === a ? void 0 : a.sender,
                                                  null === (l = n.msg) || void 0 === l || null === (s = l.value) || void 0 === s ? void 0 : s.receiver,
                                                  null === (c = n.msg) || void 0 === c || null === (r = c.value) || void 0 === r ? void 0 : r.token,
                                                  null === (d = n.msg) || void 0 === d || null === (u = d.value) || void 0 === u ? void 0 : u.source_port,
                                                  null === (v = n.msg) || void 0 === v || null === (m = v.value) || void 0 === m ? void 0 : m.source_channel,
                                                  null === (b = n.msg) || void 0 === b || null === (j = b.value) || void 0 === j ? void 0 : j.timeout_height,
                                                  null === (p = n.msg) || void 0 === p || null === (h = p.value) || void 0 === h ? void 0 : h.timeout_timestamp,
                                                  n.fee,
                                                  n.memo
                                              )
                                              .then(function (e) {
                                                  void 0 !== (null === e || void 0 === e ? void 0 : e.code) && 0 !== e.code ? t(e.log || e.rawLog) : t(null, e);
                                              })
                                              .catch(function (e) {
                                                  t(null === e || void 0 === e ? void 0 : e.message);
                                              });
                                      case 10:
                                      case "end":
                                          return i.stop();
                                  }
                          }, i);
                      })
                  )();
              },
              ut = null,
              vt = function (e, n, t, i, o) {
                  !(function (e) {
                      if (ut) {
                          var n = new pn.QueryClientImpl(ut);
                          return e(null, n);
                      }
                      et(function (n, t) {
                          if (n) return e(n);
                          ut = t;
                          var i = new pn.QueryClientImpl(t);
                          return e(null, i);
                      });
                  })(function (a, l) {
                      a
                          ? o(a)
                          : l
                                .QueryAssets({ pagination: { key: "", offset: fn.a.fromNumber(e), limit: fn.a.fromNumber(n), countTotal: t, reverse: i } })
                                .then(function (e) {
                                    o(null, e);
                                })
                                .catch(function (e) {
                                    o(null === e || void 0 === e ? void 0 : e.message);
                                });
                  });
              },
              mt = t(264),
              bt = null,
              jt = function (e, n) {
                  !(function (e) {
                      if (bt) {
                          var n = new mt.QueryClientImpl(bt);
                          return e(null, n);
                      }
                      et(function (n, t) {
                          if (n) return e(n);
                          bt = t;
                          var i = new mt.QueryClientImpl(t);
                          return e(null, i);
                      });
                  })(function (t, i) {
                      t
                          ? n(t)
                          : i
                                .AllBalances({ address: e })
                                .then(function (e) {
                                    n(null, e);
                                })
                                .catch(function (e) {
                                    n(null === e || void 0 === e ? void 0 : e.message);
                                });
                  });
              },
              pt = function (e, n, t, i) {
                  nt(e, function (e, o) {
                      e
                          ? i(e)
                          : new mt.QueryClientImpl(o)
                                .Balance({ address: n, denom: t })
                                .then(function (e) {
                                    i(null, e);
                                })
                                .catch(function (e) {
                                    i(null === e || void 0 === e ? void 0 : e.message);
                                });
                  });
              },
              ht = t(79),
              ft = t(388),
              Ot = function (e) {
                  return (null === e || void 0 === e ? void 0 : e.rpc) === (null === ln || void 0 === ln ? void 0 : ln.rpc)
                      ? [
                            { coinDenom: null === e || void 0 === e ? void 0 : e.coinDenom, coinMinimalDenom: null === e || void 0 === e ? void 0 : e.coinMinimalDenom, coinDecimals: null === e || void 0 === e ? void 0 : e.coinDecimals },
                            {
                                coinDenom: null === sn || void 0 === sn ? void 0 : sn.coinDenom,
                                coinMinimalDenom: null === sn || void 0 === sn ? void 0 : sn.coinMinimalDenom,
                                coinDecimals: null === sn || void 0 === sn ? void 0 : sn.coinDecimals,
                            },
                            {
                                coinDenom: null === cn || void 0 === cn ? void 0 : cn.coinDenom,
                                coinMinimalDenom: null === cn || void 0 === cn ? void 0 : cn.coinMinimalDenom,
                                coinDecimals: null === cn || void 0 === cn ? void 0 : cn.coinDecimals,
                            },
                        ]
                      : [{ coinDenom: null === e || void 0 === e ? void 0 : e.coinDenom, coinMinimalDenom: null === e || void 0 === e ? void 0 : e.coinMinimalDenom, coinDecimals: null === e || void 0 === e ? void 0 : e.coinDecimals }];
              },
              xt = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ln;
                  return {
                      chainId: null === e || void 0 === e ? void 0 : e.chainId,
                      chainName: null === e || void 0 === e ? void 0 : e.chainName,
                      rpc: null === e || void 0 === e ? void 0 : e.rpc,
                      rest: null === e || void 0 === e ? void 0 : e.rest,
                      stakeCurrency: {
                          coinDenom: null === e || void 0 === e ? void 0 : e.coinDenom,
                          coinMinimalDenom: null === e || void 0 === e ? void 0 : e.coinMinimalDenom,
                          coinDecimals: null === e || void 0 === e ? void 0 : e.coinDecimals,
                      },
                      walletUrlForStaking: null === e || void 0 === e ? void 0 : e.walletUrlForStaking,
                      bip44: { coinType: null === e || void 0 === e ? void 0 : e.coinType },
                      bech32Config: ht.Bech32Address.defaultBech32Config(null === e || void 0 === e ? void 0 : e.prefix),
                      currencies: Ot(e),
                      feeCurrencies: [
                          {
                              coinDenom: null === e || void 0 === e ? void 0 : e.coinDenom,
                              coinMinimalDenom: null === e || void 0 === e ? void 0 : e.coinMinimalDenom,
                              coinDecimals: null === e || void 0 === e ? void 0 : e.coinDecimals,
                              coinGeckoId: null === e || void 0 === e ? void 0 : e.coinGeckoId,
                              gasPriceStep: { low: 0.01, average: 0.025, high: 0.04 },
                          },
                      ],
                      coinType: null === e || void 0 === e ? void 0 : e.coinType,
                  };
              },
              gt = function (e) {
                  Object(xn.a)(
                      Object(On.a)().mark(function n() {
                          var t, i;
                          return Object(On.a)().wrap(
                              function (n) {
                                  for (;;)
                                      switch ((n.prev = n.next)) {
                                          case 0:
                                              if (window.getOfflineSigner && window.keplr) {
                                                  n.next = 5;
                                                  break;
                                              }
                                              "Please install keplr extension", e("Please install keplr extension"), (n.next = 23);
                                              break;
                                          case 5:
                                              if (!window.keplr.experimentalSuggestChain) {
                                                  n.next = 21;
                                                  break;
                                              }
                                              return (n.prev = 6), (n.next = 9), window.keplr.experimentalSuggestChain(xt());
                                          case 9:
                                              return (t = window.getOfflineSigner(null === ln || void 0 === ln ? void 0 : ln.chainId)), (n.next = 12), t.getAccounts();
                                          case 12:
                                              (i = n.sent), e(null, i[0]), (n.next = 19);
                                              break;
                                          case 16:
                                              (n.prev = 16), (n.t0 = n.catch(6)), e(null === n.t0 || void 0 === n.t0 ? void 0 : n.t0.message);
                                          case 19:
                                              n.next = 23;
                                              break;
                                          case 21:
                                              "Please use the recent version of keplr extension", e("Please use the recent version of keplr extension");
                                          case 23:
                                          case "end":
                                              return n.stop();
                                      }
                              },
                              n,
                              null,
                              [[6, 16]]
                          );
                      })
                  )();
              },
              Nt = function (e, n) {
                  Object(xn.a)(
                      Object(On.a)().mark(function t() {
                          var i, o;
                          return Object(On.a)().wrap(
                              function (t) {
                                  for (;;)
                                      switch ((t.prev = t.next)) {
                                          case 0:
                                              if (window.getOfflineSigner && window.keplr) {
                                                  t.next = 5;
                                                  break;
                                              }
                                              "Please install keplr extension", n("Please install keplr extension"), (t.next = 23);
                                              break;
                                          case 5:
                                              if (!window.keplr.experimentalSuggestChain) {
                                                  t.next = 21;
                                                  break;
                                              }
                                              return (t.prev = 6), (t.next = 9), window.keplr.experimentalSuggestChain(e);
                                          case 9:
                                              return (i = window.getOfflineSigner(null === e || void 0 === e ? void 0 : e.chainId)), (t.next = 12), i.getAccounts();
                                          case 12:
                                              (o = t.sent), n(null, o[0]), (t.next = 19);
                                              break;
                                          case 16:
                                              (t.prev = 16), (t.t0 = t.catch(6)), n(null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message);
                                          case 19:
                                              t.next = 23;
                                              break;
                                          case 21:
                                              "Please use the recent version of keplr extension", n("Please use the recent version of keplr extension");
                                          case 23:
                                          case "end":
                                              return t.stop();
                                      }
                              },
                              t,
                              null,
                              [[6, 16]]
                          );
                      })
                  )();
              },
              yt = (function () {
                  var e = Object(xn.a)(
                      Object(On.a)().mark(function e() {
                          var n, t;
                          return Object(On.a)().wrap(function (e) {
                              for (;;)
                                  switch ((e.prev = e.next)) {
                                      case 0:
                                          return (
                                              (n = new ft.ChainStore([xt()])),
                                              (t = new ft.AccountSetBase({ addEventListener: function () {}, removeEventListener: function () {} }, n, null === ln || void 0 === ln ? void 0 : ln.chainId, {
                                                  suggestChain: !1,
                                                  autoInit: !0,
                                                  getKeplr: ft.getKeplrFromWindow,
                                              })),
                                              (e.next = 4),
                                              new Promise(function (e) {
                                                  setTimeout(e, 1e3);
                                              })
                                          );
                                      case 4:
                                          return e.abrupt("return", null === t || void 0 === t ? void 0 : t.name);
                                      case 5:
                                      case "end":
                                          return e.stop();
                                  }
                          }, e);
                      })
                  );
                  return function () {
                      return e.apply(this, arguments);
                  };
              })(),
              wt = t(501),
              Ct = "https://stat.comdex.one",
              _t = null,
              Dt = function (e) {
                  if (_t) {
                      var n = new wt.QueryClientImpl(_t);
                      return e(null, n);
                  }
                  et(function (n, t) {
                      if (n) return e(n);
                      _t = t;
                      var i = new wt.QueryClientImpl(t);
                      return e(null, i);
                  });
              },
              St = function (e) {
                  Dt(function (n, t) {
                      n
                          ? e(n)
                          : t
                                .Pairs({ appId: fn.a.fromNumber(G), denoms: [] })
                                .then(function (n) {
                                    e(null, n);
                                })
                                .catch(function (n) {
                                    return e(null === n || void 0 === n ? void 0 : n.message);
                                });
                  });
              },
              Tt = function (e, n, t) {
                  Dt(function (i, o) {
                      i
                          ? t(i)
                          : o
                                .OrdersByOrderer({ pairId: e, appId: fn.a.fromNumber(G), orderer: n.toString() })
                                .then(function (e) {
                                    t(null, e);
                                })
                                .catch(function (e) {
                                    return t(null === e || void 0 === e ? void 0 : e.message);
                                });
                  });
              },
              It = function (e, n, t, i, o) {
                  Dt(function (e, n) {
                      e
                          ? o(e)
                          : n
                                .Pools({ appId: fn.a.fromNumber(G), pairId: fn.a.fromNumber(0), disabled: "false" })
                                .then(function (e) {
                                    o(null, e);
                                })
                                .catch(function (e) {
                                    o(null === e || void 0 === e ? void 0 : e.message);
                                });
                  });
              },
              kt = function (e, n) {
                  Dt(function (t, i) {
                      t
                          ? n(t)
                          : i
                                .Pair({ appId: fn.a.fromNumber(G), pairId: e })
                                .then(function (e) {
                                    n(null, e);
                                })
                                .catch(function (e) {
                                    return n(null === e || void 0 === e ? void 0 : e.message);
                                });
                  });
              },
              Et = function (e, n, t) {
                  Dt(function (i, o) {
                      i
                          ? t(i)
                          : o
                                .Farmer({ appId: fn.a.fromNumber(G), poolId: n, farmer: e })
                                .then(function (e) {
                                    t(null, e);
                                })
                                .catch(function (e) {
                                    return t(null === e || void 0 === e ? void 0 : e.message);
                                });
                  });
              },
              At = function (e, n, t) {
                  Dt(function (i, o) {
                      i
                          ? t(i)
                          : o
                                .DeserializePoolCoin({ appId: fn.a.fromNumber(G), poolId: e, poolCoinAmount: fn.a.fromNumber(n) })
                                .then(function (e) {
                                    t(null, e);
                                })
                                .catch(function (e) {
                                    return t(null === e || void 0 === e ? void 0 : e.message);
                                });
                  });
              },
              Pt = function (e, n) {
                  Dt(function (t, i) {
                      t
                          ? n(t)
                          : i
                                .Pool({ appId: fn.a.fromNumber(G), poolId: fn.a.fromNumber(e) })
                                .then(function (e) {
                                    n(null, e);
                                })
                                .catch(function (e) {
                                    n(null === e || void 0 === e ? void 0 : e.message);
                                });
                  });
              },
              Mt = function (e) {
                  k.a
                      .get("".concat(Ct, "/api/v2/cswap/tokens/all"))
                      .then(function (n) {
                          e(null, null === n || void 0 === n ? void 0 : n.data);
                      })
                      .catch(function (n) {
                          e(null === n || void 0 === n ? void 0 : n.message);
                      });
              },
              Ft = function (e, n) {
                  return (e * (n || Math.pow(10, ln.coinDecimals))).toFixed(0).toString();
              },
              Lt = function (e, n) {
                  var t = isFinite(Number(e)) ? Number(e) : 0,
                      i = Number(t) / (n || Math.pow(10, ln.coinDecimals));
                  return En(i.toFixed(Fn(n) || ln.coinDecimals));
              },
              Rt = function (e, n) {
                  return En(e.toFixed(Fn(n)));
              },
              qt = function (e, n) {
                  var t = isFinite(Number(e)) ? Number(e) : 0;
                  return (Number(t) / (n || Math.pow(10, ln.coinDecimals))).toFixed(Fn(n) || ln.coinDecimals);
              },
              Bt = function (e) {
                  var n;
                  Math.abs(e) < 1
                      ? (n = parseInt(e.toString().split("e-")[1])) && ((e *= Math.pow(10, n - 1)), (e = "0." + new Array(n).join("0") + e.toString().substring(2)))
                      : (n = parseInt(e.toString().split("+")[1])) > 20 && ((n -= 20), (e /= Math.pow(10, n)), (e += new Array(n + 1).join("0")));
                  return e;
              },
              Ut = function (e) {
                  var n = Number(e) * Math.pow(10, 18);
                  return (n = Bt(n)).toString();
              },
              Ht = function (e) {
                  if ("weth-wei" === e || e === vn) return "WETH";
                  if ("wbtc-satoshi" === e || e === bn) return "WBTC";
                  if ("stuatom" === e || e === jn) return "stATOM";
                  if (e && "u" === e.substr(0, 1))
                      return e && "uc" === e.substr(0, 2) && "ucm" !== e.substr(0, 3)
                          ? e.substr(1, e.length) && (t = e.substr(1, e.length)).charAt(0).toLowerCase() + t.slice(1).toUpperCase()
                          : e.substr(1, e.length) && e.substr(1, e.length).toUpperCase();
                  if (e && "ibc" === e.substr(0, 3)) {
                      var n = (function (e) {
                          switch (e) {
                              case rn:
                                  return "uatom";
                              case dn:
                                  return "uosmo";
                              case un:
                                  return "uusdc";
                              case vn:
                                  return "WETH";
                              case mn:
                                  return "ujuno";
                              case bn:
                                  return "wbtc-satoshi";
                              case jn:
                                  return "stuatom";
                              default:
                                  return "";
                          }
                      })(e);
                      return n.substr(1, n.length).toUpperCase();
                  }
                  return e;
                  var t;
              },
              Vt = function (e, n) {
                  return (
                      e &&
                      e.length > 0 &&
                      e.find(function (e) {
                          return e.denom === n;
                      }) &&
                      e.find(function (e) {
                          return e.denom === n;
                      }).amount
                  );
              },
              Wt = {
                  en: {
                      dashboard: "Dashboard",
                      balances: "Balances",
                      c_swap: "Trade",
                      borrow: "Borrow",
                      farm: "Farm",
                      un_farm: "Unfarm",
                      mint: "Mint",
                      MyHome: "Portfolio",
                      assets: "Assets",
                      govern: "Govern",
                      auction: "Auction",
                      more: "More",
                      connect: "Connect",
                      connected: "Connected",
                      connect_wallet: "Connect Wallet",
                      keplr_wallet: "Keplr Wallet",
                      balance_wallet: "Balance",
                      address_wallet: "Address",
                      disconnect: "Disconnect",
                      disconnect_wallet: "Disconnect Wallet",
                      yes: "Yes",
                      no: "No",
                      view_explore: "View Explorer",
                      overview: "Overview",
                      tvl: "Total Value Locked (TVL)",
                      tv: "Total Value",
                      collateral: "Collateral",
                      liquidity: "Liquidity",
                      pair_id: "Pair Id",
                      cmdx_circulating_supply: "Circulating Supply",
                      cmdx_market_cap: "Market Cap",
                      cmdx_price: "CMDX Price",
                      others: "OTHERS",
                      staked: "Staked",
                      trading_fee: "Trading Fee",
                      txn_fee: "TXN Fee",
                      gold: "ucgold",
                      silver: "Silver",
                      crude_oil: "Crude Oil",
                      price: "Price",
                      trade: "Trade",
                      comdex_description: "Comdex's synthetics protocol unlocks access to a vast set of commodity debt assets and liquidity, making the flow of capital from DeFi to CeFi seamless.",
                      day: "Day",
                      week: "Week",
                      month: "Month",
                      year: "Year",
                      comdexs: "Comdex\u2019s",
                      decentralized: "Decentralized",
                      synthetic_exchange: "Synthetics Exchange",
                      platform: "Platform",
                      find_out_more: "Find Out More",
                      total_volume: "TOTAL VOLUME",
                      total_value_locked: "TOTAL VALUE LOCKED",
                      total_liquidity: "Liquidity",
                      total_collateral: "Collateral",
                      total_claimable_rewards: "total claimable rewards",
                      holding: "Holding",
                      borrowed: "Borrowed",
                      farming: "Farming",
                      total_value: "Total Value",
                      current_ltv: "Current LTV",
                      mint_balance: "Mint Balance",
                      farm_balance: "Farm Balance",
                      asset_balance: "Asset Balance",
                      borrowing_power_used: "Borrowing Power Used",
                      your_collateral: "Your Collateral",
                      health_factor: "Health Factor",
                      you_borrowed: "You Borrowed",
                      borrow_information: "Borrow Information",
                      cmdx: "cmdx",
                      ust: "ust",
                      atom: "atom",
                      xprt: "xprt",
                      USD: "USD",
                      CMDX: "CMDX",
                      deposit: "Deposit",
                      withdraw: "Withdraw",
                      draw: "Draw",
                      repay: "Repay",
                      deposit_collateral: "Deposit Collateral",
                      withdraw_collateral: "Withdraw Collateral",
                      draw_debt: "Draw Debt",
                      repay_debt: "Repay Debt",
                      closeVault: "Close Vault",
                      collateral_type: "Collateral Type",
                      add_remove: "Add/Remove",
                      receiver_address: "Reciepient address",
                      receiver_address_placeholder: "Enter Reciepient's address",
                      token: "Token",
                      amount: "Amount",
                      send: "Send",
                      cancel: "Cancel",
                      available: "Available",
                      max: "Max",
                      half: "Half",
                      from: "From",
                      to: "To",
                      edit: "Edit",
                      close: "Close",
                      choose_collateral: "Collateral Asset",
                      collateral_asset: "Collateral asset may affect the minimum collateral ratio.",
                      set_collateral_ratio: "Set a Collateral Ratio",
                      liquidate_below_minimum: "Position will be liquidated if the collateral ratio moves below the minimum threshold",
                      confirm_borrow_amount: "Confirm borrow amount",
                      position_closed: "Position can be closed by repaying the borrowed amount.",
                      asset_description: "",
                      withdraw_amount: "Withdrawn Amount",
                      burn_amount: "Burn Amount",
                      collateral_ratio: "Collateral Ratio",
                      borrowed_assets: "Borrowed Assets",
                      remove: "Remove",
                      remove_liquidity: " Remove Liquidity",
                      long: "Long",
                      short: "Short",
                      provide_ust: "Provide UST",
                      provide: "Provide",
                      total_amount: "Total Amount",
                      pool_details: "POOL DETAILS",
                      your_details: "YOUR DETAILS",
                      my_amount: "My amount",
                      my_liquidity: "My liquidity",
                      available_amount: "Available Amount ",
                      available_lp: "Available LP",
                      bonded_lp: "Bonded LP",
                      manage_liquidity: "Manage Liquidity",
                      unbond_token: "Unbond Token",
                      unbond: "Unbond",
                      bond: "Bond",
                      start_earning: "Start Earning",
                      bond_lptokens: "Bond LP Tokens",
                      unbonding_period: "Unbonding Period",
                      amount_to_unbond: "Amount to Unbond",
                      amount_to_bond: "Amount to Bond",
                      unbonding: "Unbonding",
                      unbonding_duration: "Unbonding Duration",
                      unbond_lp_token: "Unbond LP Token",
                      unbonding_complete: "Unbonding Complete",
                      limit_order: "Limit Order",
                      pay: "Pay",
                      pool_price: "Pool Price",
                      at_price: "At",
                      you_get: "And get",
                      balance: "Balance",
                      tobuy: "To Buy",
                      expected_price: "Expected Price",
                      minimum_received: "Minimum Received",
                      tx_fee: "Transaction Fee",
                      tx_hash: "Transaction Hash",
                      swap_fee: "Swap Fee",
                      oracle_price: "Oracle Price",
                      sell: "Sell",
                      to_get: "To Get",
                      buy: "Buy",
                      price_per_gld: "Price per ucgold",
                      spread: "Spread",
                      slippage: "Slippage",
                      commission: "Commission",
                      swap: "Swap",
                      swap_anyway: "Swap Anyway",
                      oracle_price_tooltip: "Asset price feched from oracle",
                      volume_tooltip: "24 hour trading volume for the Asset",
                      premium_tooltip: "Difference between the Asset price in the pool and the oracle price",
                      liquidity_tooltip: "Total liquidity for current Asset",
                      estimated_slippage: "Estimated Slippage",
                      back: "Back",
                      caution_header: "Caution Notice",
                      sub_text: "Trading involves a significant risk of loss and is not suitable for all investors, in particular, past developments do not necessarily indicate future results",
                      risk: "TRADE AT YOUR OWN RISK",
                      read_and_understand: "I have read and understand these risks, and wish to proceed.",
                      agree: "Agree",
                      switch_dark: "Enable dark mode",
                      switch_light: "Enable light mode",
                      poolSize: "Pool Size",
                      poolLiquidity: "Pool Liquidity",
                      apr: "APR",
                      tooltip_circulating_supply: "Circulating supply is the amount of CMDX available and circulating in the market.",
                      tooltip_total_value: "Total value of farmed and asset balances across the platform",
                      tooltip_total_value_locked: "Total value locked of collateral, liquidity and staked CMDX",
                      tooltip_market_cap: "Market Cap = Current Price * Circulating Supply",
                      tooltip_staked: "Total Value of Staked CMDX",
                      tooltip_total_mint: "Total collateral value minus borrowed value",
                      tooltip_total_farm: "Total value of all assets in liquidity pools",
                      tooltip_total_asset: "Total value of native and IBC tokens in wallet",
                      tooltip_cswap_price: "cSwap price calculated based on the pool price and spread",
                      tooltip_tx_fee: "Fee paid to the protocol to execute this transaction",
                      lq_ratio: "Liquidation Ratio",
                      debt: "Debt",
                      cswap_price: "cSwap Price",
                      total_asset_balance: "Total Asset Balance",
                      comdex_assets: "Assets",
                      tx_success: "Transaction Successful",
                      tx_failed: "Transaction Failed",
                      asset_bought: "Asset Bought",
                      asset_swap: "Asset Swapped",
                      banner_paira: "Stake your CMDX tokens to earn rewards and participate in governance proposals",
                      yield_card_text: "  Yield smarter with Unagii, the automated DeFi yield platform redefining the way you earn.",
                      omniflix_card_text: "OmniFlix Network is a trusted Proof-of-Stake infrastructure provider and validator to comfortably stake your coins and earn rewards.",
                      manage_stake: " Manage Stake",
                      details: "Details",
                      filter: "Filter",
                      campaign: "Campaign",
                  },
              },
              zt = t(91),
              Yt = t(808),
              Gt =
                  (t(1616),
                  function (e) {
                      var n = e.text,
                          t = Object(l.useState)(!1),
                          i = Object(r.a)(t, 2),
                          o = i[0],
                          a = i[1],
                          s = function () {
                              a(!1);
                          };
                      return Object(Ue.jsx)("div", {
                          className: "copy-section",
                          onClick: function (e) {
                              e.preventDefault(), e.stopPropagation();
                          },
                          children: Object(Ue.jsx)(zt.a, {
                              arrow: !0,
                              open: o,
                              color: "#FE4350",
                              title: "Copied!",
                              children: Object(Ue.jsx)(Yt.CopyToClipboard, {
                                  onCopy: function () {
                                      a(!0), setTimeout(s, 1e3);
                                  },
                                  text: n,
                                  children: Object(Ue.jsx)(nn, { name: "copy", viewbox: "0 0 17.61 20.985" }),
                              }),
                          }),
                      });
                  }),
              Kt = { showAccountConnectModal: T, setAccountAddress: D },
              Qt = Object(o.b)(function (e) {
                  return { lang: e.language, address: e.account.address, balances: e.account.balances.list, show: e.account.showModal, poolBalance: e.account.balances.pool, name: e.account.name };
              }, Kt)(function (e) {
                  var n = e.setAccountAddress,
                      t = e.lang,
                      i = e.address,
                      o = e.name,
                      a = e.balances,
                      s = Object(l.useState)(!1),
                      c = Object(r.a)(s, 2),
                      v = c[0],
                      m = c[1],
                      b = function () {
                          m(!1);
                      },
                      j = [
                          {
                              label: Object(Ue.jsxs)("div", {
                                  className: "wallet-connect-dropdown",
                                  children: [
                                      Object(Ue.jsxs)("div", {
                                          className: "wallet-connect-upper",
                                          children: [Object(Ue.jsx)("span", {}), Object(Ue.jsx)("div", { children: "ledger" === localStorage.getItem("loginType") ? "native-ledger" : o })],
                                      }),
                                      Object(Ue.jsxs)("div", {
                                          className: "px-3",
                                          children: [
                                              Object(Ue.jsxs)("div", { children: [" ", Wt[t].balance_wallet] }),
                                              Object(Ue.jsxs)("div", {
                                                  className: "balance__value__data",
                                                  children: [Lt(Vt(a, null === ln || void 0 === ln ? void 0 : ln.coinMinimalDenom) || 0), " ", Ht(null === ln || void 0 === ln ? void 0 : ln.coinMinimalDenom)],
                                              }),
                                          ],
                                      }),
                                      Object(Ue.jsxs)("div", {
                                          className: "mt-2 px-3",
                                          children: [
                                              Object(Ue.jsxs)("div", { children: [Wt[t].address_wallet, " "] }),
                                              Object(Ue.jsx)("div", {
                                                  className: "wallet-address",
                                                  children: Object(Ue.jsxs)("div", {
                                                      className: "address-wallet-address d-flex",
                                                      children: [Object(Ue.jsxs)("span", { className: "mr-3", children: [" ", Un(i, 6, 6), " "] }), " ", Object(Ue.jsx)(Gt, { text: i })],
                                                  }),
                                              }),
                                          ],
                                      }),
                                      Object(Ue.jsx)("div", {
                                          className: "mb-2 mt-3",
                                          children: Object(Ue.jsx)(u.a, {
                                              type: "primary",
                                              onClick: function () {
                                                  m(!0);
                                              },
                                              className: "btn-filled",
                                              block: !0,
                                              size: "small",
                                              children: Wt[t].disconnect,
                                          }),
                                      }),
                                  ],
                              }),
                              key: "item-1",
                          },
                      ];
                  return Object(Ue.jsxs)(Ue.Fragment, {
                      children: [
                          Object(Ue.jsx)(d.a, {
                              menu: { items: j },
                              trigger: ["click"],
                              overlayClassName: "dropconnect-overlay",
                              children: Object(Ue.jsxs)("div", { className: "connected_button", children: [" ", Object(Ue.jsx)(nn, { name: "user-icon" }), " "] }),
                          }),
                          Object(Ue.jsx)(tn.a, {
                              centered: !0,
                              className: "connect-modal",
                              footer: null,
                              header: null,
                              open: v,
                              width: 550,
                              onCancel: b,
                              onOk: function () {
                                  m(!1);
                              },
                              closeIcon: Object(Ue.jsx)(nn, { name: "close", viewbox: "0 0 19 19" }),
                              children: Object(Ue.jsxs)("div", {
                                  className: "d-flex flex-wrap flex-column",
                                  children: [
                                      Object(Ue.jsxs)("h2", { children: [" ", Wt[t].disconnect_wallet] }),
                                      Object(Ue.jsxs)("div", {
                                          className: "d-flex",
                                          children: [
                                              Object(Ue.jsxs)(u.a, { type: "primary", className: "btn-filled mx-3", size: "large", onClick: b, block: !0, children: [" ", Wt[t].no] }),
                                              Object(Ue.jsxs)(u.a, {
                                                  type: "primary",
                                                  className: "mx-3",
                                                  size: "large",
                                                  onClick: function () {
                                                      n(""), localStorage.removeItem("ac"), localStorage.removeItem("loginType"), window.location.reload();
                                                  },
                                                  block: !0,
                                                  children: [" ", Wt[t].yes],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  });
              }),
              Xt = t(141),
              $t = "SIGN_IN_LEDGER_MODAL_HIDE",
              Jt = "SIGN_IN_LEDGER_MODAL_SHOW",
              Zt = "SET_LEDGER_INFO",
              ei = "SET_LEDGER_ACCOUNT_NUMBER",
              ni = "SET_LEDGER_ACCOUNT_INDEX",
              ti = 12e4;
          function ii() {
              return oi.apply(this, arguments);
          }
          function oi() {
              return (oi = Object(xn.a)(
                  Object(On.a)().mark(function e() {
                      var n;
                      return Object(On.a)().wrap(function (e) {
                          for (;;)
                              switch ((e.prev = e.next)) {
                                  case 0:
                                      return (e.next = 2), wn.default.create(ti, ti);
                                  case 2:
                                      return (n = e.sent), e.abrupt("return", n);
                                  case 4:
                                  case "end":
                                      return e.stop();
                              }
                      }, e);
                  })
              )).apply(this, arguments);
          }
          var ai = (function () {
                  var e = Object(xn.a)(
                      Object(On.a)().mark(function e() {
                          var n,
                              t,
                              i,
                              o,
                              a,
                              l,
                              s,
                              c = arguments;
                          return Object(On.a)().wrap(function (e) {
                              for (;;)
                                  switch ((e.prev = e.next)) {
                                      case 0:
                                          return (n = c.length > 0 && void 0 !== c[0] ? c[0] : "0"), (t = c.length > 1 && void 0 !== c[1] ? c[1] : "0"), (e.next = 4), ii();
                                      case 4:
                                          return (
                                              (i = e.sent).on("disconnect", function () {
                                                  alert("ledger disconnected please login again"), localStorage.removeItem("ac"), localStorage.removeItem("loginType"), window.location.reload();
                                              }),
                                              (o = new gn.LedgerSigner(i, { testModeAllowed: !0, hdPaths: [Vn(n, t)], prefix: ln.prefix })),
                                              (e.next = 9),
                                              o.getAccounts()
                                          );
                                      case 9:
                                          return (a = e.sent), (l = Object(r.a)(a, 1)), (s = l[0]), e.abrupt("return", s.address);
                                      case 13:
                                      case "end":
                                          return e.stop();
                                  }
                          }, e);
                      })
                  );
                  return function () {
                      return e.apply(this, arguments);
                  };
              })(),
              li = function () {
                  var e = Object(o.c)(),
                      n = Object(o.d)(function (e) {
                          return e.ledger.accountIndex;
                      }),
                      t = Object(o.d)(function (e) {
                          return e.ledger.accountNumber;
                      });
                  return Object(Ue.jsx)("div", {
                      onClick: function () {
                          e(
                              (function () {
                                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0",
                                      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0";
                                  return (function () {
                                      var t = Object(xn.a)(
                                          Object(On.a)().mark(function t(i) {
                                              return Object(On.a)().wrap(function (t) {
                                                  for (;;)
                                                      switch ((t.prev = t.next)) {
                                                          case 0:
                                                              try {
                                                                  ai(e, n)
                                                                      .then(function (e) {
                                                                          localStorage.setItem("loginType", "ledger"), i(D(e));
                                                                      })
                                                                      .catch(function (e) {
                                                                          a.a.error(e.response ? e.response.data.message : e.message);
                                                                      });
                                                              } catch (o) {
                                                                  a.a.error(o.response ? o.response.data.message : o.message);
                                                              }
                                                          case 1:
                                                          case "end":
                                                              return t.stop();
                                                      }
                                              }, t);
                                          })
                                      );
                                      return function (e) {
                                          return t.apply(this, arguments);
                                      };
                                  })();
                              })(Mn(t.value), Mn(n.value))
                          );
                      },
                      children: "Ledger",
                  });
              },
              si = (t(1617), { showAccountConnectModal: T, setAccountAddress: D, setAccountName: S }),
              ci = Object(o.b)(function (e) {
                  return { show: e.account.showModal, lang: e.language };
              }, si)(function (e) {
                  var n = e.setAccountAddress,
                      t = e.setAccountName,
                      i = e.lang,
                      o = e.showAccountConnectModal,
                      s = Object(l.useState)(!1),
                      c = Object(r.a)(s, 2),
                      d = c[0],
                      u = c[1];
                  return Object(Ue.jsx)(Xt.a, {
                      spinning: d,
                      children: Object(Ue.jsxs)("div", {
                          className: "wallet-connect-dropdown",
                          children: [
                              Object(Ue.jsx)("div", { className: "wallet-connect-upper", children: Object(Ue.jsx)("h3", { className: "text-center", children: Wt[i].connect_wallet }) }),
                              Object(Ue.jsx)("div", {
                                  className: "mb-2 mt-3",
                                  children: Object(Ue.jsxs)("div", {
                                      className: "wallet-links",
                                      onClick: function () {
                                          u(!0),
                                              gt(function (e, i) {
                                                  u(!1),
                                                      e
                                                          ? a.a.error(e)
                                                          : (n(i.address),
                                                            yt().then(function (e) {
                                                                t(e);
                                                            }),
                                                            localStorage.setItem("ac", Object(v.b)(i.address)),
                                                            localStorage.setItem("loginType", "keplr"),
                                                            o(!1));
                                              });
                                      },
                                      children: [Object(Ue.jsx)("span", { children: Wt[i].keplr_wallet }), " "],
                                  }),
                              }),
                              Object(Ue.jsx)("div", { className: "wallet-links", children: Object(Ue.jsx)(li, {}) }),
                          ],
                      }),
                  });
              }),
              ri = {
                  showAccountConnectModal: T,
                  setAccountAddress: D,
                  setAccountBalances: I,
                  setPoolBalance: function (e) {
                      return { type: w, value: e };
                  },
                  setAssetBalance: function (e) {
                      return { type: y, value: e };
                  },
                  setMarkets: xe,
                  setAccountName: S,
                  setPoolIncentives: function (e) {
                      for (var n = {}, t = {}, i = 0; i < e.length; i++)
                          if ((void 0 === t[e[i].poolId] && (t[e[i].poolId] = e[i]), void 0 === n[e[i].poolId] && (n[e[i].poolId] = { normalRewards: {}, swapRewards: {} }), e[i].isSwapFee)) {
                              var o, a, l, s, c;
                              if (void 0 === n[e[i].poolId].swapRewards[null === (o = e[i].totalRewards) || void 0 === o ? void 0 : o.denom])
                                  n[e[i].poolId].swapRewards[null === (c = e[i].totalRewards) || void 0 === c ? void 0 : c.denom] = 0;
                              n[e[i].poolId].swapRewards[null === (a = e[i].totalRewards) || void 0 === a ? void 0 : a.denom] +=
                                  (null === (l = e[i].totalRewards) || void 0 === l ? void 0 : l.amount) / (null === (s = e[i]) || void 0 === s ? void 0 : s.totalEpochs);
                          } else {
                              var r, d, u, v, m;
                              if (void 0 === n[e[i].poolId].normalRewards[null === (r = e[i].totalRewards) || void 0 === r ? void 0 : r.denom])
                                  n[e[i].poolId].normalRewards[null === (m = e[i].totalRewards) || void 0 === m ? void 0 : m.denom] = 0;
                              n[e[i].poolId].normalRewards[null === (d = e[i].totalRewards) || void 0 === d ? void 0 : d.denom] +=
                                  (null === (u = e[i].totalRewards) || void 0 === u ? void 0 : u.amount) / (null === (v = e[i]) || void 0 === v ? void 0 : v.totalEpochs);
                          }
                      var b =
                              e.length > 0
                                  ? null === e || void 0 === e
                                      ? void 0
                                      : e.filter(function (e) {
                                            var n;
                                            return !0 === (null === e || void 0 === e ? void 0 : e.masterPool) || (null === e || void 0 === e || null === (n = e.poolId) || void 0 === n ? void 0 : n.toNumber()) === K;
                                        })
                                  : [],
                          j =
                              null === b || void 0 === b
                                  ? void 0
                                  : b.reduce(function (e, n) {
                                        return (e[null === n || void 0 === n ? void 0 : n.poolId] = n), e;
                                    }, {});
                      return { type: re, value: e, rewardMap: n, incentivesMap: t, masterPoolMap: j };
                  },
                  setParams: Fe,
                  setAssets: function (e, n) {
                      var t =
                          null === e || void 0 === e
                              ? void 0
                              : e.reduce(function (e, n) {
                                    return (e[null === n || void 0 === n ? void 0 : n.denom] = n), e;
                                }, {});
                      return { type: M, list: e, pagination: n, map: t, assetDenomMap: t };
                  },
                  setAppAssets: function (e, n) {
                      var t =
                          null === e || void 0 === e
                              ? void 0
                              : e.reduce(function (e, n) {
                                    return (e[null === n || void 0 === n ? void 0 : n.denom] = n), e;
                                }, {});
                      return { type: F, list: e, pagination: n, map: t };
                  },
                  setAssetsInPrgoress: function (e) {
                      return { type: H, value: e };
                  },
              },
              di = Object(o.b)(function (e) {
                  return {
                      lang: e.language,
                      address: e.account.address,
                      show: e.account.showModal,
                      markets: e.oracle.market.list,
                      refreshBalance: e.account.refreshBalance,
                      poolBalances: e.liquidity.poolBalances,
                      pools: e.liquidity.pool.list,
                      balances: e.account.balances.list,
                      assetMap: e.asset.map,
                      assetDenomMap: e.asset._.assetDenomMap,
                  };
              }, ri)(function (e) {
                  var n = e.setAccountAddress,
                      t = e.address,
                      i = e.setAccountBalances,
                      o = e.lang,
                      s = e.setAssetBalance,
                      c = e.setPoolBalance,
                      m = e.markets,
                      j = e.refreshBalance,
                      p = e.setMarkets,
                      h = e.poolBalances,
                      f = e.setAccountName,
                      O = e.setPoolIncentives,
                      x = e.setParams,
                      g = e.balances,
                      N = e.setAssets,
                      y = e.setAppAssets,
                      w = e.assetMap,
                      C = e.setAssetsInPrgoress,
                      _ = e.assetDenomMap,
                      D = Object(l.useState)(),
                      S = Object(r.a)(D, 2),
                      T = S[0],
                      I = S[1],
                      E = { jsonrpc: "2.0", method: "subscribe", id: "0", params: { query: "coin_spent.spender='".concat(t, "'") } },
                      A = { jsonrpc: "2.0", method: "subscribe", id: "0", params: { query: "coin_received.receiver='".concat(t, "'") } };
                  Object(l.useEffect)(function () {
                      var e = localStorage.getItem("ac");
                      (e = e ? Object(v.a)(e) : ""), I(e);
                  }, []),
                      Object(l.useEffect)(
                          function () {
                              T &&
                                  gt(function (e, t) {
                                      e
                                          ? a.a.error(e)
                                          : (n(t.address),
                                            yt().then(function (e) {
                                                f(e);
                                            }),
                                            localStorage.setItem("ac", Object(v.b)(t.address)),
                                            localStorage.setItem("loginType", "keplr"));
                                  });
                          },
                          [T]
                      ),
                      Object(l.useEffect)(
                          function () {
                              if (t) {
                                  var e = new WebSocket("".concat("wss://rpc.comdex.one/websocket"));
                                  (e.onopen = function () {
                                      e.send(JSON.stringify(E)), e.send(JSON.stringify(A));
                                  }),
                                      (e.onmessage = function (e) {
                                          var n,
                                              i = JSON.parse(e.data);
                                          if (null !== i && void 0 !== i && null !== (n = i.result) && void 0 !== n && n.events) {
                                              var o = localStorage.getItem("ac"),
                                                  a = o ? Object(v.a)(o) : t;
                                              L(a);
                                          }
                                      }),
                                      (e.onclose = function () {
                                          console.log("Connection Closed! 0");
                                      }),
                                      (e.onerror = function (e) {
                                          console.log(e, "WS Error");
                                      });
                              }
                          },
                          [t]
                      ),
                      Object(l.useEffect)(
                          function () {
                              var e = localStorage.getItem("ac"),
                                  i = e ? Object(v.a)(e) : t;
                              i &&
                                  (n(i),
                                  yt().then(function (e) {
                                      f(e);
                                  }));
                          },
                          [t, j]
                      ),
                      Object(l.useEffect)(function () {
                          R(), q(0, 20, !0, !1);
                      }, []);
                  var P = Object(l.useCallback)(
                          function (e) {
                              return Pn(m, e) || 0;
                          },
                          [m]
                      ),
                      M = Object(l.useCallback)(
                          function (e) {
                              var n = e
                                  .filter(function (e) {
                                      return "ibc/" === e.denom.substr(0, 4) || e.denom === ln.coinMinimalDenom || e.denom === sn.coinMinimalDenom || e.denom === cn.coinMinimalDenom;
                                  })
                                  .map(function (e) {
                                      var n;
                                      return P(e.denom) * qt(e.amount, null === (n = w[null === e || void 0 === e ? void 0 : e.denom]) || void 0 === n ? void 0 : n.decimals);
                                  });
                              s(b.a.sum(n));
                          },
                          [P, s, w]
                      ),
                      F = Object(l.useCallback)(
                          function () {
                              var e = b.a.sumBy(h);
                              c(Number(e * Math.pow(10, 6)));
                          },
                          [h, c]
                      ),
                      L = Object(l.useCallback)(
                          function (e) {
                              jt(e, function (e, n) {
                                  e || (i(n.balances, n.pagination), M(n.balances), F(n.balances));
                              });
                          },
                          [M, i, F]
                      );
                  Object(l.useEffect)(
                      function () {
                          t && L(t);
                      },
                      [t, j, m, L]
                  ),
                      Object(l.useEffect)(
                          function () {
                              M(g);
                          },
                          [g, M]
                      ),
                      Object(l.useEffect)(function () {
                          U(), B();
                      }, []),
                      Object(l.useEffect)(
                          function () {
                              var e, n;
                              (null !== (e = Object.keys(_)) && void 0 !== e && e.length) ||
                                  (C(!0),
                                  (n = function (e, n) {
                                      var t;
                                      e || (null !== n && void 0 !== n && null !== (t = n.data) && void 0 !== t && t.length && y(null === n || void 0 === n ? void 0 : n.data));
                                  }),
                                  k.a
                                      .get("".concat(Ct, "/api/v2/cswap/tokens/all"))
                                      .then(function (e) {
                                          n(null, null === e || void 0 === e ? void 0 : e.data);
                                      })
                                      .catch(function (e) {
                                          n(null === e || void 0 === e ? void 0 : e.message);
                                      }));
                          },
                          [y, _]
                      );
                  var R = function () {
                          Mt(function (e, n) {
                              e ? a.a.error(e) : p(n.data);
                          });
                      },
                      q = function (e, n, t, i) {
                          vt(e, n, t, i, function (e, n) {
                              e ? a.a.error(e) : N(n.assets);
                          });
                      },
                      B = function () {
                          var e;
                          (e = function (e, n) {
                              e ? a.a.error(e) : null !== n && void 0 !== n && n.params && x(null === n || void 0 === n ? void 0 : n.params);
                          }),
                              Dt(function (n, t) {
                                  n
                                      ? e(n)
                                      : t
                                            .GenericParams({ appId: fn.a.fromNumber(G) })
                                            .then(function (n) {
                                                e(null, n);
                                            })
                                            .catch(function (n) {
                                                return e(null === n || void 0 === n ? void 0 : n.message);
                                            });
                              });
                      },
                      U = function () {
                          var e;
                          (e = function (e, n) {
                              e ? a.a.error(e) : O(null === n || void 0 === n ? void 0 : n.poolIncentives);
                          }),
                              Dt(function (n, t) {
                                  n
                                      ? e(n)
                                      : t
                                            .PoolIncentives({ appId: fn.a.fromNumber(G) })
                                            .then(function (n) {
                                                e(null, n);
                                            })
                                            .catch(function (n) {
                                                return e(null === n || void 0 === n ? void 0 : n.message);
                                            });
                              });
                      },
                      H = [{ label: Object(Ue.jsx)(ci, {}), key: "item-1" }];
                  return Object(Ue.jsx)(Ue.Fragment, {
                      children: t
                          ? Object(Ue.jsxs)("div", {
                                className: "connected_div",
                                children: [
                                    Object(Ue.jsx)("div", {
                                        className: "connected_left",
                                        children: Object(Ue.jsxs)("div", { className: "testnet-top", children: [Object(Ue.jsx)(nn, { name: "testnet" }), " ", (null === ln || void 0 === ln ? void 0 : ln.networkTag) || "Testnet"] }),
                                    }),
                                    Object(Ue.jsx)(Qt, {}),
                                ],
                            })
                          : Object(Ue.jsx)("div", {
                                children: Object(Ue.jsx)(d.a, {
                                    menu: { items: H },
                                    placement: "bottomRight",
                                    trigger: ["click"],
                                    overlayClassName: "dropconnect-overlay",
                                    children: Object(Ue.jsx)(u.a, { shape: "round", type: "primary", children: Wt[o].connect }),
                                }),
                            }),
                  });
              }),
              ui = "TOGGLE_DARK_THEME",
              vi = {
                  setDarkTheme: function (e) {
                      return { type: ui, value: e };
                  },
              },
              mi = Object(o.b)(function (e) {
                  return { lang: e.language, isDarkMode: e.theme.theme.darkThemeEnabled };
              }, vi)(function (e) {
                  var n = e.isDarkMode,
                      t = e.setDarkTheme;
                  Object(l.useEffect)(
                      function () {
                          "false" === localStorage.getItem("isDarkMode") ? (document.body.classList.remove("dark-mode"), t(!1)) : document.body.classList.add("dark-mode");
                      },
                      [t]
                  );
                  return Object(Ue.jsx)("div", {
                      className: "theme-toogle",
                      children: Object(Ue.jsx)("div", {
                          onClick: function () {
                              n ? document.body.classList.remove("dark-mode") : document.body.classList.add("dark-mode"), t(!n), localStorage.setItem("isDarkMode", !n);
                          },
                          className: "theme-icons",
                          children: Object(Ue.jsx)(nn, { name: "false" === localStorage.getItem("isDarkMode") ? "dark-theme" : "light-theme" }),
                      }),
                  });
              }),
              bi = function () {
                  var e = Object(l.useState)(!1),
                      n = Object(r.a)(e, 2),
                      t = n[0],
                      i = n[1];
                  return (
                      Object(l.useEffect)(function () {
                          var e = function () {
                              i(window.scrollY > 10);
                          };
                          return (
                              window.addEventListener("scroll", e),
                              function () {
                                  return window.removeEventListener("scroll", e);
                              }
                          );
                      }, []),
                      Object(Ue.jsxs)("nav", { className: t ? "top_bar fixedHeaderOnScroll" : "top_bar", children: [Object(Ue.jsx)(mi, {}), Object(Ue.jsx)("div", { className: "connect-button", children: Object(Ue.jsx)(di, {}) })] })
                  );
              },
              ji = t(502),
              pi = (t(1618), t(295)),
              hi = t.n(pi),
              fi =
                  (t(1619),
                  function () {
                      return Object(Ue.jsxs)("div", {
                          className: "footer",
                          children: [
                              null,
                              Object(Ue.jsxs)("div", {
                                  className: "social-icons",
                                  children: [
                                      Object(Ue.jsx)("a", {
                                          "aria-label": "Twitter",
                                          title: "Twitter",
                                          target: "_blank",
                                          rel: "noreferrer",
                                          href: "https://twitter.com/cSwap_DEX",
                                          children: Object(Ue.jsx)(nn, { name: "twitter", viewbox: "0 0 25.617 20.825" }),
                                      }),
                                      Object(Ue.jsx)("a", {
                                          "aria-label": "Telegram",
                                          title: "Telegram",
                                          target: "_blank",
                                          rel: "noreferrer",
                                          href: "https://t.me/cSwap_DEX",
                                          children: Object(Ue.jsx)(nn, { name: "telegram", viewbox: "0 0 24.635 20.66" }),
                                      }),
                                      Object(Ue.jsx)("a", {
                                          "aria-label": "Discord",
                                          title: "Discord",
                                          target: "_blank",
                                          rel: "noreferrer",
                                          href: "https://bit.ly/ComdexOfficialDiscord",
                                          children: Object(Ue.jsx)(nn, { name: "discord", viewbox: "0 0 29.539 22.155" }),
                                      }),
                                      Object(Ue.jsx)("a", {
                                          "aria-label": "Medium",
                                          title: "Medium",
                                          target: "_blank",
                                          rel: "noreferrer",
                                          href: "https://medium.com/@cSwap_DEX",
                                          children: Object(Ue.jsx)(nn, { name: "medium", viewbox: "0 0 25.825 20.66" }),
                                      }),
                                      Object(Ue.jsx)("a", {
                                          "aria-label": "Github",
                                          title: "Github",
                                          target: "_blank",
                                          rel: "noreferrer",
                                          href: "https://github.com/comdex-official",
                                          children: Object(Ue.jsx)(nn, { name: "github", viewbox: "0 0 22.154 21.607" }),
                                      }),
                                  ],
                              }),
                          ],
                      });
                  }),
              Oi = t(30),
              xi = [
                  { name: "c Swap", value: "swap", langKey: "c_swap", route: "trade", index: 0 },
                  { name: "Assets", value: "assets", langKey: "assets", route: "assets", index: 1 },
                  { name: "Farm", value: "farm", langKey: "farm", route: "farm", index: 2 },
                  { name: "Govern", value: "govern", langKey: "govern", route: "govern", index: 3 },
                  { name: "MyHome", value: "portfolio", langKey: "MyHome", route: "portfolio", index: 4 },
              ],
              gi = { setAccountAddress: D, setAccountName: S },
              Ni = Object(o.b)(function (e) {
                  return { lang: e.language };
              }, gi)(function (e) {
                  var n = e.setAccountAddress,
                      t = e.lang,
                      i = e.setAccountName,
                      o = e.onClick,
                      l = Object(Oi.j)(),
                      s = Object(Oi.l)(),
                      c = l.pathname && l.pathname.split("/")[1];
                  window.addEventListener("keplr_keystorechange", function () {
                      r();
                  });
                  var r = function () {
                      gt(function (e, t) {
                          e
                              ? a.a.error(e)
                              : (yt().then(function (e) {
                                    i(e);
                                }),
                                n(t.address),
                                localStorage.setItem("ac", Object(v.b)(t.address)),
                                localStorage.setItem("loginType", "keplr"));
                      });
                  };
                  return Object(Ue.jsx)("div", {
                      className: "vertical_tabs",
                      children: Object(Ue.jsx)("ul", {
                          className: "tabs_content",
                          children: xi.map(function (e) {
                              return Object(Ue.jsx)(
                                  "li",
                                  Object(Le.a)(
                                      Object(Le.a)(
                                          {
                                              className: "tab " + ("trade" !== e.route || c ? (e.route === c ? "active_tab" : "") : "active_tab"),
                                              value: e.value,
                                              onClick: function () {
                                                  s("/" + e.route), o();
                                              },
                                          },
                                          { id: "simple-tab-".concat(0) }
                                      ),
                                      {},
                                      { children: Object(Ue.jsxs)("div", { className: "tab-inner", children: [Object(Ue.jsx)(nn, { name: e.value }), Wt[t][e.langKey]] }) }
                                  ),
                                  e.index
                              );
                          }),
                      }),
                  });
              }),
              yi = t(809),
              wi = t.p + "static/media/cSwap-dark-logo.04c68bc9.svg",
              Ci = t.p + "static/media/cSwap-light-logo.46d25f35.svg",
              _i = ji.a.Sider,
              Di = function () {
                  var e = Object(pi.useMediaQuery)({ query: "(max-width: 991px)" }),
                      n = Object(Oi.l)(),
                      t = Object(l.useState)(!!e),
                      i = Object(r.a)(t, 2),
                      o = i[0],
                      a = i[1],
                      s = function () {
                          a(!o), o && e ? document.body.classList.add("sidebar-open") : document.body.classList.remove("sidebar-open");
                      };
                  return Object(Ue.jsxs)(Ue.Fragment, {
                      children: [
                          Object(Ue.jsxs)(ji.a, {
                              className: o ? "sidebar-wrapper" : "sidebar-open sidebar-wrapper",
                              children: [
                                  Object(Ue.jsx)("button", {
                                      className: "sidebar-toggle",
                                      title: "sidebar-toggle",
                                      onClick: s,
                                      children: e
                                          ? Object(Ue.jsx)(nn, { className: o ? "open" : "", name: o ? "sidebar-menu" : "sidebar-close" })
                                          : Object(Ue.jsx)(nn, { className: o ? "open" : "", name: o ? "sidebar-open" : "sidebar-close" }),
                                  }),
                                  Object(Ue.jsx)(_i, {
                                      collapsible: !0,
                                      breakpoint: "lg",
                                      collapsed: o,
                                      collapsedWidth: "0",
                                      trigger: null,
                                      children: Object(Ue.jsxs)("div", {
                                          className: "side_bar",
                                          children: [
                                              Object(Ue.jsxs)("div", {
                                                  className: "logo",
                                                  onClick: function () {
                                                      return n({ pathname: "/" });
                                                  },
                                                  children: [Object(Ue.jsx)("img", { className: "blue", src: wi, alt: "Logo" }), Object(Ue.jsx)("img", { className: "white", src: Ci, alt: "Logo" })],
                                              }),
                                              Object(Ue.jsx)(yi.Scrollbars, {
                                                  children: Object(Ue.jsx)("div", {
                                                      className: "side_bar_inner",
                                                      children: Object(Ue.jsx)(Ni, {
                                                          onClick: function () {
                                                              a(!0);
                                                          },
                                                      }),
                                                  }),
                                              }),
                                              Object(Ue.jsx)(fi, {}),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                          Object(Ue.jsx)("div", { onClick: s, children: e && !o && Object(Ue.jsx)("div", { className: "sidebar-overlay" }) }),
                      ],
                  });
              },
              Si = t(199),
              Ti = t(818),
              Ii =
                  (t(1637),
                  function (e) {
                      var n = e.text;
                      return Object(Ue.jsxs)("div", {
                          className: "no-data-card",
                          children: [Object(Ue.jsx)(nn, { name: "nodata-icon", viewbox: "0 0 110.441 126.947" }), Object(Ue.jsx)("div", { className: "empty-text", children: n ? "".concat(n) : "No Data" })],
                      });
                  }),
              ki = t(390),
              Ei = t(112),
              Ai = function (e) {
                  var n = e.message,
                      t = e.explorerUrlToTx,
                      i = void 0 === t ? ln.explorerUrlToTx : t,
                      o = e.hash;
                  return Object(Ue.jsxs)("span", {
                      children: [
                          n,
                          Object(Ue.jsxs)("a", {
                              href: "".concat(i.replace("{txHash}", null === o || void 0 === o ? void 0 : o.toUpperCase())),
                              target: "_blank",
                              className: "ml-3",
                              rel: "noreferrer",
                              "aria-label": "explorer",
                              children: [" ", "View Explorer"],
                          }),
                      ],
                  });
              },
              Pi = t(378),
              Mi = function (e) {
                  var n,
                      t = e.type,
                      i = void 0 === t ? "number" : t,
                      o = e.className,
                      a = e.value,
                      l = e.disabled,
                      s = e.placeholder,
                      c = e.onChange,
                      r = e.onFocus,
                      d = e.validationError,
                      u = e.decimals,
                      v = (null === d || void 0 === d || null === (n = d.message) || void 0 === n ? void 0 : n.length) > 0;
                  return Object(Ue.jsxs)(Ue.Fragment, {
                      children: [
                          Object(Ue.jsx)(Pi.a, { type: i, value: a || "", className: o, disabled: l, placeholder: s || Number().toFixed(u || ln.coinDecimals), onChange: c, onFocus: r, "aria-label": "Input" }),
                          v ? Object(Ue.jsx)("div", { className: v ? "alert-label" : "alert-label alert-hidden", children: null === d || void 0 === d ? void 0 : d.message }) : null,
                      ],
                  });
              },
              Fi = function (e, n, t) {
                  return e < 0
                      ? new Error("Input must be positive number")
                      : 0 === n
                      ? new Error("No available balance")
                      : n && Number(n) < e
                      ? new Error("Insufficient funds")
                      : "macro" === t && 0 !== e && qt(e) <= 1e-4
                      ? new Error("Input amount should be over 100 micro")
                      : "whole" !== t || Number.isInteger(Number(e))
                      ? void 0
                      : new Error("Input must be a whole number");
              },
              Li = t(281),
              Ri = function e(n) {
                  var t, i, o, a;
                  if (Array.isArray(n)) {
                      var l = n
                              .map(function (n) {
                                  return e(n);
                              })
                              .reduce(function (e, n) {
                                  var t = e;
                                  return t[n] ? (t[n] += 1) : (t[n] = 1), t;
                              }, {}),
                          s = [];
                      return (
                          Object.keys(l).forEach(function (e) {
                              s.push(l[e] > 1 ? "".concat(e, "\xd7").concat(l[e]) : e);
                          }),
                          s.join(", ")
                      );
                  }
                  return n["@type"]
                      ? n["@type"].substring((null === (o = n["@type"]) || void 0 === o ? void 0 : o.lastIndexOf(".")) + 1).replace("Msg", "")
                      : null !== n && void 0 !== n && n.typeUrl
                      ? null === n || void 0 === n
                          ? void 0
                          : n.typeUrl.substring((null === n || void 0 === n || null === (a = n.typeUrl) || void 0 === a ? void 0 : a.lastIndexOf(".")) + 1).replace("Msg", "")
                      : null === n || void 0 === n || null === (t = n.type) || void 0 === t
                      ? void 0
                      : t.substring((null === n || void 0 === n || null === (i = n.type) || void 0 === i ? void 0 : i.lastIndexOf("/")) + 1).replace("Msg", "");
              },
              qi = function () {
                  return { amount: [{ denom: "ucmdx", amount: Y.toString() }], gas: "500000" };
              },
              Bi = function (e, n, t, i) {
                  yn.Tendermint34Client.connect(null === ln || void 0 === ln ? void 0 : ln.rpc)
                      .then(function (o) {
                          o.txSearch(
                              (function (e, n, t, i) {
                                  return { query: Object(Li.buildQuery)({ tags: [{ key: i, value: e }] }), page: n, per_page: t, prove: !1, order_by: "desc" };
                              })(e, n, t, "message.sender")
                          )
                              .then(function (e) {
                                  i(null, e);
                              })
                              .catch(function (e) {
                                  i(e && e.message);
                              });
                      })
                      .catch(function (e) {
                          i(e && e.message);
                      });
              },
              Ui = (function () {
                  var e = Object(xn.a)(
                      Object(On.a)().mark(function e(n) {
                          var t, i, o, a;
                          return Object(On.a)().wrap(function (e) {
                              for (;;)
                                  switch ((e.prev = e.next)) {
                                      case 0:
                                          return (e.next = 2), yn.Tendermint34Client.connect(null === ln || void 0 === ln ? void 0 : ln.rpc);
                                      case 2:
                                          return (o = e.sent), (e.next = 5), o.block(n);
                                      case 5:
                                          return (a = e.sent), e.abrupt("return", null === a || void 0 === a || null === (t = a.block) || void 0 === t || null === (i = t.header) || void 0 === i ? void 0 : i.time);
                                      case 7:
                                      case "end":
                                          return e.stop();
                                  }
                          }, e);
                      })
                  );
                  return function (n) {
                      return e.apply(this, arguments);
                  };
              })(),
              Hi = function (e, n) {
                  yn.Tendermint34Client.connect(null === ln || void 0 === ln ? void 0 : ln.rpc)
                      .then(function (t) {
                          t.tx({ hash: e })
                              .then(function (e) {
                                  n(null, e);
                              })
                              .catch(function (e) {
                                  n(e && e.message);
                              });
                      })
                      .catch(function (e) {
                          n(e && e.message);
                      });
              },
              Vi =
                  (t(1638),
                  Object(o.b)(function (e) {
                      return { lang: e.language, address: e.account.address, refreshBalance: e.account.refreshBalance, assetMap: e.asset.map };
                  })(function (e) {
                      var n,
                          t = e.lang,
                          i = e.chain,
                          o = e.address,
                          s = e.handleRefresh,
                          c = e.balances,
                          d = e.assetMap,
                          v = Object(l.useState)(!1),
                          m = Object(r.a)(v, 2),
                          b = m[0],
                          j = m[1],
                          p = Object(l.useState)(""),
                          h = Object(r.a)(p, 2),
                          f = h[0],
                          O = h[1],
                          x = Object(l.useState)(!1),
                          g = Object(r.a)(x, 2),
                          N = g[0],
                          y = g[1],
                          w = Object(l.useState)(),
                          C = Object(r.a)(w, 2),
                          _ = C[0],
                          D = C[1],
                          S = Object(l.useState)(0),
                          T = Object(r.a)(S, 2),
                          I = T[0],
                          k = T[1],
                          E = Object(l.useState)(0),
                          A = Object(r.a)(E, 2),
                          P = A[0],
                          M = A[1],
                          F = Object(l.useState)(),
                          L = Object(r.a)(F, 2),
                          R = L[0],
                          q = L[1],
                          B = Object(l.useState)(!1),
                          U = Object(r.a)(B, 2),
                          H = U[0],
                          V = U[1];
                      Object(l.useEffect)(
                          function () {
                              z();
                          },
                          [o]
                      );
                      var z = function () {
                              Nt(i.chainInfo, function (e, n) {
                                  var t;
                                  if (e) return a.a.error(e), void y(!1);
                                  O(null === n || void 0 === n ? void 0 : n.address),
                                      V(!0),
                                      pt(
                                          null === i || void 0 === i || null === (t = i.chainInfo) || void 0 === t ? void 0 : t.rpc,
                                          null === n || void 0 === n ? void 0 : n.address,
                                          null === i || void 0 === i ? void 0 : i.coinMinimalDenom,
                                          function (e, n) {
                                              V(!1), e || k(null === n || void 0 === n ? void 0 : n.balance);
                                          }
                                      ),
                                      W(null === ln || void 0 === ln ? void 0 : ln.rest, i.sourceChannelId, function (e, n) {
                                          e || M(n);
                                      });
                              });
                          },
                          G = function () {
                              y(!1), j(!1), D();
                          },
                          K = function (e) {
                              var n = 0,
                                  t = setInterval(function () {
                                      Hi(e, function (l) {
                                          if (l && void 0 !== (null === l || void 0 === l ? void 0 : l.code) && 0 !== (null === l || void 0 === l ? void 0 : l.code))
                                              return (
                                                  a.a.error(
                                                      Object(Ue.jsx)(Ai, {
                                                          message: null === l || void 0 === l ? void 0 : l.raw_log,
                                                          explorerUrlToTx: null === i || void 0 === i ? void 0 : i.explorerUrlToTx,
                                                          hash: null === l || void 0 === l ? void 0 : l.hash,
                                                      })
                                                  ),
                                                  G(),
                                                  void clearInterval(t)
                                              );
                                          if (3 === ++n) {
                                              if (l && void 0 !== l.code && 0 !== l.code)
                                                  return (
                                                      a.a.error(
                                                          Object(Ue.jsx)(Ai, {
                                                              message: null === l || void 0 === l ? void 0 : l.raw_log,
                                                              explorerUrlToTx: null === i || void 0 === i ? void 0 : i.explorerUrlToTx,
                                                              hash: null === l || void 0 === l ? void 0 : l.hash,
                                                          })
                                                      ),
                                                      G(),
                                                      void clearInterval(t)
                                                  );
                                              a.a.success(Object(Ue.jsx)(Ai, { message: "Transaction Successful. Token Transfer in progress.", explorerUrlToTx: null === i || void 0 === i ? void 0 : i.explorerUrlToTx, hash: e })),
                                                  G(),
                                                  clearInterval(t);
                                              var r = setInterval(function () {
                                                  pt(null === ln || void 0 === ln ? void 0 : ln.rpc, o, null === i || void 0 === i ? void 0 : i.ibcDenomHash, function (e, n) {
                                                      var t;
                                                      if (!e) {
                                                          var o =
                                                              (null === c || void 0 === c ? void 0 : c.length) &&
                                                              (null === i || void 0 === i ? void 0 : i.ibcDenomHash) &&
                                                              c.find(function (e) {
                                                                  return e.denom === (null === i || void 0 === i ? void 0 : i.ibcDenomHash);
                                                              });
                                                          (null === n || void 0 === n || null === (t = n.balance) || void 0 === t ? void 0 : t.amount) !== (null === o || void 0 === o ? void 0 : o.amount) &&
                                                              (s(), G(), a.a.success("IBC Transfer Complete"), clearInterval(r));
                                                      }
                                                  });
                                              }, 5e3);
                                          }
                                      });
                                  }, 5e3);
                          };
                      return Object(Ue.jsxs)(Ue.Fragment, {
                          children: [
                              Object(Ue.jsx)(u.a, {
                                  type: "primary",
                                  size: "small",
                                  onClick: function () {
                                      z(), j(!0);
                                  },
                                  children: Wt[t].deposit,
                              }),
                              Object(Ue.jsx)(tn.a, {
                                  className: "asstedepositw-modal",
                                  centered: !0,
                                  closable: !0,
                                  footer: null,
                                  open: b,
                                  width: 480,
                                  onCancel: function () {
                                      j(!1);
                                  },
                                  onOk: function () {
                                      j(!1);
                                  },
                                  closeIcon: Object(Ue.jsx)(nn, { name: "close", viewbox: "0 0 19 19" }),
                                  title: "IBC Deposit",
                                  children: Object(Ue.jsxs)(Ei.a, {
                                      layout: "vertical",
                                      children: [
                                          Object(Ue.jsxs)(Ze, {
                                              children: [
                                                  Object(Ue.jsx)(Ge, { children: Object(Ue.jsx)(Ei.a.Item, { label: "From", children: Object(Ue.jsx)(Mi, { type: "text", value: Un(f, 9, 9), disabled: !0 }) }) }),
                                                  Object(Ue.jsx)(nn, { name: "arrow-right", viewbox: "0 0 17.04 15.13" }),
                                                  Object(Ue.jsx)(Ge, { children: Object(Ue.jsx)(Ei.a.Item, { label: "To", children: Object(Ue.jsx)(Mi, { type: "text", value: Un(o, 9, 9), disabled: !0 }) }) }),
                                              ],
                                          }),
                                          Object(Ue.jsx)(Ze, {
                                              children: Object(Ue.jsxs)(Ge, {
                                                  className: "position-relative mt-3",
                                                  children: [
                                                      Object(Ue.jsx)("div", {
                                                          className: "availabe-balance",
                                                          children: H
                                                              ? Object(Ue.jsx)(Xt.a, {})
                                                              : Object(Ue.jsxs)(Ue.Fragment, {
                                                                    children: [
                                                                        Wt[t].available,
                                                                        Object(Ue.jsxs)("span", {
                                                                            className: "ml-1",
                                                                            children: [
                                                                                (I && I.amount && qt(I.amount, null === (n = d[null === I || void 0 === I ? void 0 : I.denom]) || void 0 === n ? void 0 : n.decimals)) || 0,
                                                                                " ",
                                                                                Ht((null === i || void 0 === i ? void 0 : i.coinMinimalDenom) || ""),
                                                                            ],
                                                                        }),
                                                                        Object(Ue.jsx)("span", {
                                                                            className: "assets-maxhalf",
                                                                            children: Object(Ue.jsx)(u.a, {
                                                                                className: " active",
                                                                                onClick: function () {
                                                                                    var e, n;
                                                                                    D(
                                                                                        (null === I || void 0 === I ? void 0 : I.amount) > Y
                                                                                            ? qt(
                                                                                                  (null === I || void 0 === I ? void 0 : I.amount) - Y,
                                                                                                  null === (e = d[null === I || void 0 === I ? void 0 : I.denom]) || void 0 === e ? void 0 : e.decimals
                                                                                              )
                                                                                            : qt(
                                                                                                  null === I || void 0 === I ? void 0 : I.amount,
                                                                                                  null === (n = d[null === I || void 0 === I ? void 0 : I.denom]) || void 0 === n ? void 0 : n.decimals
                                                                                              )
                                                                                    );
                                                                                },
                                                                                children: Wt[t].max,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                      }),
                                                      Object(Ue.jsx)(Ei.a.Item, {
                                                          label: "Amount to Deposit",
                                                          className: "assets-input-box",
                                                          children: Object(Ue.jsx)(Mi, {
                                                              value: _,
                                                              onChange: function (e) {
                                                                  return (function (e) {
                                                                      var n;
                                                                      (e = Hn(e, null === (n = d[null === i || void 0 === i ? void 0 : i.coinMinimalDenom]) || void 0 === n ? void 0 : n.decimals)
                                                                          .toString()
                                                                          .trim()),
                                                                          D(e),
                                                                          q(Fi(Ft(e), null === I || void 0 === I ? void 0 : I.amount));
                                                                  })(e.target.value);
                                                              },
                                                              validationError: R,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          Object(Ue.jsx)(Ze, {
                                              children: Object(Ue.jsx)(Ge, {
                                                  className: "text-center mt-2",
                                                  children: Object(Ue.jsx)(u.a, {
                                                      loading: N,
                                                      type: "primary",
                                                      disabled: N || H || !Number(_) || (null === R || void 0 === R ? void 0 : R.message),
                                                      className: "btn-filled modal-btn",
                                                      onClick: function () {
                                                          var e;
                                                          if ((y(!0), null === P || void 0 === P || !P.revision_height)) return a.a.error("Unable to get the latest block height"), void y(!1);
                                                          var n = {
                                                              msg: {
                                                                  typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                                                                  value: {
                                                                      source_port: "transfer",
                                                                      source_channel: i.destChannelId,
                                                                      token: {
                                                                          denom: null === i || void 0 === i ? void 0 : i.coinMinimalDenom,
                                                                          amount: Ft(_, null === (e = d[null === i || void 0 === i ? void 0 : i.coinMinimalDenom]) || void 0 === e ? void 0 : e.decimals),
                                                                      },
                                                                      sender: f,
                                                                      receiver: o,
                                                                      timeout_height: { revisionNumber: Number(P.revision_number), revisionHeight: Number(P.revision_height) + 100 },
                                                                      timeout_timestamp: void 0,
                                                                  },
                                                              },
                                                              fee: { amount: [{ denom: i.denom, amount: "25000" }], gas: "200000" },
                                                              memo: "",
                                                          };
                                                          dt(i.chainInfo, n, function (e, n) {
                                                              if (e)
                                                                  return (
                                                                      null !== n && void 0 !== n && n.transactionHash
                                                                          ? a.a.error(
                                                                                Object(Ue.jsx)(Ai, {
                                                                                    message: Wt[t].tx_failed,
                                                                                    explorerUrlToTx: null === i || void 0 === i ? void 0 : i.explorerUrlToTx,
                                                                                    hash: null === n || void 0 === n ? void 0 : n.transactionHash,
                                                                                })
                                                                            )
                                                                          : a.a.error(e),
                                                                      void G()
                                                                  );
                                                              null !== n &&
                                                                  void 0 !== n &&
                                                                  n.transactionHash &&
                                                                  (a.a.loading("Transaction Broadcasting, Waiting for transaction to be included in the block"), K(null === n || void 0 === n ? void 0 : n.transactionHash));
                                                          });
                                                      },
                                                      children: Wt[t].deposit,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                          ],
                      });
                  })),
              Wi =
                  (t(1639),
                  t(1640),
                  Object(o.b)(function (e) {
                      return { lang: e.language, address: e.account.address, assetMap: e.asset.map };
                  })(function (e) {
                      var n,
                          t = e.lang,
                          i = e.chain,
                          o = e.address,
                          s = e.assetMap,
                          c = e.balances,
                          d = e.handleRefresh,
                          v = Object(l.useState)(!1),
                          m = Object(r.a)(v, 2),
                          b = m[0],
                          j = m[1],
                          p = Object(l.useState)(""),
                          h = Object(r.a)(p, 2),
                          f = h[0],
                          O = h[1],
                          x = Object(l.useState)(!1),
                          g = Object(r.a)(x, 2),
                          N = g[0],
                          y = g[1],
                          w = Object(l.useState)(),
                          C = Object(r.a)(w, 2),
                          _ = C[0],
                          D = C[1],
                          S = Object(l.useState)(0),
                          T = Object(r.a)(S, 2),
                          I = T[0],
                          k = T[1],
                          E = Object(l.useState)(),
                          A = Object(r.a)(E, 2),
                          P = A[0],
                          M = A[1];
                      Object(l.useEffect)(
                          function () {
                              F();
                          },
                          [o]
                      );
                      var F = function () {
                              Nt(i.chainInfo, function (e, n) {
                                  var t;
                                  e
                                      ? a.a.error(e)
                                      : (O(null === n || void 0 === n ? void 0 : n.address),
                                        W(null === (t = i.chainInfo) || void 0 === t ? void 0 : t.rest, i.sourceChannelId, function (e, n) {
                                            e || k(n);
                                        }));
                              });
                          },
                          L = function () {
                              y(!1), j(!1), D();
                          },
                          R = function (e) {
                              var n = 0,
                                  t = setInterval(function () {
                                      Hi(e, function (l) {
                                          if (l && void 0 !== (null === l || void 0 === l ? void 0 : l.code) && 0 !== (null === l || void 0 === l ? void 0 : l.code))
                                              return (
                                                  a.a.error(
                                                      Object(Ue.jsx)(Ai, {
                                                          message: null === l || void 0 === l ? void 0 : l.raw_log,
                                                          explorerUrlToTx: null === ln || void 0 === ln ? void 0 : ln.explorerUrlToTx,
                                                          hash: null === l || void 0 === l ? void 0 : l.hash,
                                                      })
                                                  ),
                                                  L(),
                                                  void clearInterval(t)
                                              );
                                          if (3 === ++n) {
                                              if (l && void 0 !== l.code && 0 !== l.code)
                                                  return (
                                                      a.a.error(
                                                          Object(Ue.jsx)(Ai, {
                                                              message: null === l || void 0 === l ? void 0 : l.raw_log,
                                                              explorerUrlToTx: null === ln || void 0 === ln ? void 0 : ln.explorerUrlToTx,
                                                              hash: null === l || void 0 === l ? void 0 : l.hash,
                                                          })
                                                      ),
                                                      L(),
                                                      void clearInterval(t)
                                                  );
                                              a.a.success(Object(Ue.jsx)(Ai, { message: "Transaction Successful. Token Transfer in progress.", explorerUrlToTx: null === ln || void 0 === ln ? void 0 : ln.explorerUrlToTx, hash: e })),
                                                  L(),
                                                  clearInterval(t);
                                              var s = setInterval(function () {
                                                  pt(null === ln || void 0 === ln ? void 0 : ln.rpc, o, null === i || void 0 === i ? void 0 : i.ibcDenomHash, function (e, n) {
                                                      var t;
                                                      if (!e) {
                                                          var o =
                                                              (null === c || void 0 === c ? void 0 : c.length) &&
                                                              (null === i || void 0 === i ? void 0 : i.ibcDenomHash) &&
                                                              c.find(function (e) {
                                                                  return e.denom === (null === i || void 0 === i ? void 0 : i.ibcDenomHash);
                                                              });
                                                          (null === n || void 0 === n || null === (t = n.balance) || void 0 === t ? void 0 : t.amount) !== (null === o || void 0 === o ? void 0 : o.amount) &&
                                                              (d(), L(), a.a.success("IBC Transfer Complete"), clearInterval(s));
                                                      }
                                                  });
                                              }, 5e3);
                                          }
                                      });
                                  }, 5e3);
                          };
                      return Object(Ue.jsxs)(Ue.Fragment, {
                          children: [
                              Object(Ue.jsx)(u.a, {
                                  type: "primary",
                                  size: "small",
                                  onClick: function () {
                                      F(), j(!0);
                                  },
                                  children: Wt[t].withdraw,
                              }),
                              Object(Ue.jsx)(tn.a, {
                                  className: "asstedepositw-modal",
                                  centered: !0,
                                  closable: !0,
                                  footer: null,
                                  open: b,
                                  width: 480,
                                  onCancel: function () {
                                      j(!1);
                                  },
                                  onOk: function () {
                                      j(!1);
                                  },
                                  closeIcon: Object(Ue.jsx)(nn, { name: "close", viewbox: "0 0 19 19" }),
                                  title: "IBC Withdraw",
                                  children: Object(Ue.jsxs)(Ei.a, {
                                      layout: "vertical",
                                      children: [
                                          Object(Ue.jsxs)(Ze, {
                                              children: [
                                                  Object(Ue.jsx)(Ge, { children: Object(Ue.jsx)(Ei.a.Item, { label: "From", children: Object(Ue.jsx)(Mi, { type: "text", value: Un(o, 9, 9), disabled: !0 }) }) }),
                                                  Object(Ue.jsx)(nn, { name: "arrow-right", viewbox: "0 0 17.04 15.13" }),
                                                  Object(Ue.jsx)(Ge, { children: Object(Ue.jsx)(Ei.a.Item, { label: "To", children: Object(Ue.jsx)(Mi, { type: "text", value: Un(f, 9, 9), disabled: !0 }) }) }),
                                              ],
                                          }),
                                          Object(Ue.jsx)(Ze, {
                                              children: Object(Ue.jsxs)(Ge, {
                                                  className: "position-relative",
                                                  children: [
                                                      Object(Ue.jsxs)("div", {
                                                          className: "availabe-balance",
                                                          children: [
                                                              Wt[t].available,
                                                              Object(Ue.jsxs)("span", {
                                                                  className: "ml-1",
                                                                  children: [
                                                                      (null === i || void 0 === i || null === (n = i.balance) || void 0 === n ? void 0 : n.amount) || 0,
                                                                      " ",
                                                                      Ht(null === i || void 0 === i ? void 0 : i.coinMinimalDenom) || "",
                                                                  ],
                                                              }),
                                                              Object(Ue.jsx)("span", {
                                                                  className: "assets-maxhalf",
                                                                  children: Object(Ue.jsx)(u.a, {
                                                                      className: " active",
                                                                      onClick: function () {
                                                                          var e;
                                                                          D((null === i || void 0 === i || null === (e = i.balance) || void 0 === e ? void 0 : e.amount) || 0);
                                                                      },
                                                                      children: Wt[t].max,
                                                                  }),
                                                              }),
                                                          ],
                                                      }),
                                                      Object(Ue.jsx)(Ei.a.Item, {
                                                          label: "Amount to Withdraw",
                                                          className: "assets-input-box",
                                                          children: Object(Ue.jsx)(Mi, {
                                                              value: _,
                                                              onChange: function (e) {
                                                                  return (function (e) {
                                                                      var n, t;
                                                                      (e = Hn(e, null === (n = s[null === i || void 0 === i ? void 0 : i.ibcDenomHash]) || void 0 === n ? void 0 : n.decimals)
                                                                          .toString()
                                                                          .trim()),
                                                                          D(e),
                                                                          M(Fi(e, null === i || void 0 === i || null === (t = i.balance) || void 0 === t ? void 0 : t.amount));
                                                                  })(e.target.value);
                                                              },
                                                              validationError: P,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          Object(Ue.jsx)(Ze, {
                                              children: Object(Ue.jsx)(Ge, {
                                                  className: "text-center mt-2",
                                                  children: Object(Ue.jsx)(u.a, {
                                                      loading: N,
                                                      type: "primary",
                                                      disabled: N || !Number(_) || (null === P || void 0 === P ? void 0 : P.message),
                                                      onClick: function () {
                                                          var e;
                                                          if ((y(!0), null === I || void 0 === I || !I.revision_height)) return a.a.error("Unable to get the latest block height"), void y(!1);
                                                          var n = {
                                                              msg: {
                                                                  typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                                                                  value: {
                                                                      source_port: "transfer",
                                                                      source_channel: null === i || void 0 === i ? void 0 : i.sourceChannelId,
                                                                      token: {
                                                                          denom: null === i || void 0 === i ? void 0 : i.ibcDenomHash,
                                                                          amount: Ft(_, null === (e = s[null === i || void 0 === i ? void 0 : i.ibcDenomHash]) || void 0 === e ? void 0 : e.decimals),
                                                                      },
                                                                      sender: o,
                                                                      receiver: f,
                                                                      timeout_height: {
                                                                          revisionNumber: Number(null === I || void 0 === I ? void 0 : I.revision_number),
                                                                          revisionHeight: Number(null === I || void 0 === I ? void 0 : I.revision_height) + 100,
                                                                      },
                                                                      timeout_timestamp: void 0,
                                                                  },
                                                              },
                                                              fee: qi(),
                                                              memo: "",
                                                          };
                                                          dt(xt(), n, function (e, n) {
                                                              if (e)
                                                                  return (
                                                                      null !== n && void 0 !== n && n.transactionHash
                                                                          ? a.a.error(
                                                                                Object(Ue.jsx)(Ai, {
                                                                                    message: Wt[t].tx_failed,
                                                                                    explorerUrlToTx: null === ln || void 0 === ln ? void 0 : ln.explorerUrlToTx,
                                                                                    hash: null === n || void 0 === n ? void 0 : n.transactionHash,
                                                                                })
                                                                            )
                                                                          : a.a.error(e),
                                                                      void L()
                                                                  );
                                                              null !== n &&
                                                                  void 0 !== n &&
                                                                  n.transactionHash &&
                                                                  (a.a.loading("Transaction Broadcasting, Waiting for transaction to be included in the block"), R(null === n || void 0 === n ? void 0 : n.transactionHash));
                                                          });
                                                      },
                                                      className: "btn-filled modal-btn",
                                                      children: Wt[t].withdraw,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                          ],
                      });
                  })),
              zi = { setAccountBalances: I, setMarkets: xe },
              Yi = Object(o.b)(function (e) {
                  return {
                      lang: e.language,
                      assetBalance: e.account.balances.asset,
                      balances: e.account.balances.list,
                      markets: e.oracle.market.list,
                      refreshBalance: e.account.refreshBalance,
                      assetMap: e.asset.map,
                      assetDenomMap: e.asset.appAssetMap,
                  };
              }, zi)(function (e) {
                  var n,
                      t = e.lang,
                      i = e.assetBalance,
                      s = e.balances,
                      c = e.markets,
                      d = e.parent,
                      v = e.refreshBalance,
                      m = e.assetMap,
                      j = e.assetDenomMap,
                      p = Object(l.useState)(!1),
                      h = Object(r.a)(p, 2),
                      f = h[0],
                      O = h[1],
                      x = Object(o.c)(),
                      g = function () {
                          x({ type: "BALANCE_REFRESH_SET", value: v + 1 }), N();
                      },
                      N = function () {
                          O(!0),
                              Mt(function (e, n) {
                                  O(!1), e ? a.a.error(e) : xe(n.data);
                              });
                      },
                      y = [
                          { title: "Asset", dataIndex: "asset", key: "asset" },
                          {
                              title: "No. of Tokens",
                              dataIndex: "noOfTokens",
                              key: "noOfTokens",
                              align: "left",
                              render: function (e) {
                                  return Object(Ue.jsx)(Ue.Fragment, { children: Object(Ue.jsx)("p", { children: En(Number(e || 0)) }) });
                              },
                          },
                          {
                              title: "Price",
                              dataIndex: "price",
                              key: "price",
                              align: "left",
                              width: 150,
                              render: function (e) {
                                  return Object(Ue.jsx)(Ue.Fragment, { children: Object(Ue.jsxs)("p", { className: "text-left", children: ["$", En(Number((null === e || void 0 === e ? void 0 : e.value) || 0).toFixed(2))] }) });
                              },
                          },
                          {
                              title: "Amount",
                              dataIndex: "amount",
                              key: "amount",
                              align: "left",
                              render: function (e) {
                                  return Object(Ue.jsx)(Ue.Fragment, { children: Object(Ue.jsxs)("p", { children: ["$", En(Number((null === e || void 0 === e ? void 0 : e.value) || 0).toFixed(2))] }) });
                              },
                          },
                          {
                              title: "IBC Deposit",
                              dataIndex: "ibcdeposit",
                              key: "ibcdeposit",
                              align: "left",
                              render: function (e) {
                                  if (e)
                                      return null !== e && void 0 !== e && e.depositUrlOverride
                                          ? Object(Ue.jsx)(u.a, {
                                                type: "primary",
                                                size: "small",
                                                children: Object(Ue.jsxs)("a", {
                                                    href: null === e || void 0 === e ? void 0 : e.depositUrlOverride,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: ["Deposit", " ", Object(Ue.jsxs)("span", { className: "hyperlink-icon", children: [" ", Object(Ue.jsx)(nn, { name: "hyperlink" })] })],
                                                }),
                                            })
                                          : Object(Ue.jsx)(Vi, { chain: e, balances: s, handleRefresh: g });
                              },
                          },
                          {
                              title: "IBC Withdraw",
                              dataIndex: "ibcwithdraw",
                              key: "ibcwithdraw",
                              width: 110,
                              render: function (e) {
                                  if (e)
                                      return null !== e && void 0 !== e && e.withdrawUrlOverride
                                          ? Object(Ue.jsx)(u.a, {
                                                type: "primary",
                                                size: "small",
                                                children: Object(Ue.jsxs)("a", {
                                                    href: null === e || void 0 === e ? void 0 : e.withdrawUrlOverride,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: ["Withdraw", " ", Object(Ue.jsxs)("span", { className: "hyperlink-icon", children: [" ", Object(Ue.jsx)(nn, { name: "hyperlink" })] })],
                                                }),
                                            })
                                          : Object(Ue.jsx)(Wi, { chain: e, balances: s, handleRefresh: g });
                              },
                          },
                      ],
                      w = function (e) {
                          return Pn(c, e) || 0;
                      },
                      C =
                          null === ki || void 0 === ki || null === (n = ki.tokens) || void 0 === n
                              ? void 0
                              : n.filter(function (e) {
                                    var n;
                                    return (
                                        (null === e || void 0 === e ? void 0 : e.ibcDenomHash) === (null === j || void 0 === j || null === (n = j[null === e || void 0 === e ? void 0 : e.ibcDenomHash]) || void 0 === n ? void 0 : n.denom)
                                    );
                                }),
                      _ =
                          null === C || void 0 === C
                              ? void 0
                              : C.map(function (e) {
                                    var n,
                                        t,
                                        i = s.find(function (n) {
                                            return n.denom === (null === e || void 0 === e ? void 0 : e.ibcDenomHash);
                                        }),
                                        o =
                                            w(null === i || void 0 === i ? void 0 : i.denom) *
                                            qt(null === i || void 0 === i ? void 0 : i.amount, null === (n = m[null === i || void 0 === i ? void 0 : i.denom]) || void 0 === n ? void 0 : n.decimals);
                                    return {
                                        chainInfo: xt(e),
                                        coinMinimalDenom: null === e || void 0 === e ? void 0 : e.coinMinimalDenom,
                                        balance: {
                                            amount: null !== i && void 0 !== i && i.amount ? qt(i.amount, null === (t = m[null === i || void 0 === i ? void 0 : i.denom]) || void 0 === t ? void 0 : t.decimals) : 0,
                                            value: o || 0,
                                            denom: null === i || void 0 === i ? void 0 : i.denom,
                                        },
                                        sourceChannelId: e.comdexChannel,
                                        destChannelId: e.channel,
                                        ibcDenomHash: null === e || void 0 === e ? void 0 : e.ibcDenomHash,
                                        explorerUrlToTx: null === e || void 0 === e ? void 0 : e.explorerUrlToTx,
                                        depositUrlOverride: null === e || void 0 === e ? void 0 : e.depositUrlOverride,
                                        withdrawUrlOverride: null === e || void 0 === e ? void 0 : e.withdrawUrlOverride,
                                    };
                                }),
                      D = s.filter(function (e) {
                          return e.denom === (null === ln || void 0 === ln ? void 0 : ln.coinMinimalDenom);
                      })[0],
                      S = w(null === D || void 0 === D ? void 0 : D.denom) * (null === D || void 0 === D ? void 0 : D.amount),
                      T = s.filter(function (e) {
                          return e.denom === (null === sn || void 0 === sn ? void 0 : sn.coinMinimalDenom);
                      })[0],
                      I = w(null === T || void 0 === T ? void 0 : T.denom) * (null === T || void 0 === T ? void 0 : T.amount),
                      k = s.filter(function (e) {
                          return e.denom === (null === cn || void 0 === cn ? void 0 : cn.coinMinimalDenom);
                      })[0],
                      E = w(null === k || void 0 === k ? void 0 : k.denom) * (null === k || void 0 === k ? void 0 : k.amount),
                      A = [
                          {
                              key: ln.chainId,
                              asset: Object(Ue.jsx)(Ue.Fragment, {
                                  children: Object(Ue.jsxs)("div", {
                                      className: "assets-withicon",
                                      children: [
                                          Object(Ue.jsx)("div", { className: "assets-icon", children: Object(Ue.jsx)(nn, { name: qn(null === ln || void 0 === ln ? void 0 : ln.coinMinimalDenom) }) }),
                                          " ",
                                          Ht(null === ln || void 0 === ln ? void 0 : ln.coinMinimalDenom),
                                          " ",
                                      ],
                                  }),
                              }),
                              noOfTokens: null !== D && void 0 !== D && D.amount ? qt(D.amount) : 0,
                              price: { value: w(null === ln || void 0 === ln ? void 0 : ln.coinMinimalDenom), denom: null === ln || void 0 === ln ? void 0 : ln.coinMinimalDenom },
                              amount: { value: qt(S || 0), denom: null === ln || void 0 === ln ? void 0 : ln.coinMinimalDenom },
                          },
                          {
                              key: sn.coinMinimalDenom,
                              asset: Object(Ue.jsx)(Ue.Fragment, {
                                  children: Object(Ue.jsxs)("div", {
                                      className: "assets-withicon",
                                      children: [
                                          Object(Ue.jsx)("div", { className: "assets-icon", children: Object(Ue.jsx)(nn, { name: qn(null === sn || void 0 === sn ? void 0 : sn.coinMinimalDenom) }) }),
                                          " ",
                                          Ht(null === sn || void 0 === sn ? void 0 : sn.coinMinimalDenom),
                                          " ",
                                      ],
                                  }),
                              }),
                              noOfTokens: null !== T && void 0 !== T && T.amount ? qt(T.amount) : 0,
                              price: { value: w(null === sn || void 0 === sn ? void 0 : sn.coinMinimalDenom), denom: null === sn || void 0 === sn ? void 0 : sn.coinMinimalDenom },
                              amount: { value: qt(I || 0), denom: null === sn || void 0 === sn ? void 0 : sn.coinMinimalDenom },
                          },
                          {
                              key: cn.coinMinimalDenom,
                              asset: Object(Ue.jsx)(Ue.Fragment, {
                                  children: Object(Ue.jsxs)("div", {
                                      className: "assets-withicon",
                                      children: [
                                          Object(Ue.jsx)("div", { className: "assets-icon", children: Object(Ue.jsx)(nn, { name: qn(null === cn || void 0 === cn ? void 0 : cn.coinMinimalDenom) }) }),
                                          " ",
                                          Ht(null === cn || void 0 === cn ? void 0 : cn.coinMinimalDenom),
                                          " ",
                                      ],
                                  }),
                              }),
                              noOfTokens: null !== k && void 0 !== k && k.amount ? qt(k.amount) : 0,
                              price: { value: w(null === cn || void 0 === cn ? void 0 : cn.coinMinimalDenom), denom: null === cn || void 0 === cn ? void 0 : cn.coinMinimalDenom },
                              amount: { value: qt(E || 0), denom: null === cn || void 0 === cn ? void 0 : cn.coinMinimalDenom },
                          },
                      ],
                      P =
                          (_ =
                              d && "portfolio" === d
                                  ? _.filter(function (e) {
                                        var n;
                                        return (null === e || void 0 === e || null === (n = e.balance) || void 0 === n ? void 0 : n.amount) > 0;
                                    })
                                  : _) &&
                          _.map(function (e) {
                              var n, t;
                              return {
                                  key: null === e || void 0 === e ? void 0 : e.coinMinimalDenom,
                                  asset: Object(Ue.jsx)(Ue.Fragment, {
                                      children: Object(Ue.jsxs)("div", {
                                          className: "assets-withicon",
                                          children: [
                                              Object(Ue.jsx)("div", { className: "assets-icon", children: Object(Ue.jsx)(nn, { name: qn(null === e || void 0 === e ? void 0 : e.coinMinimalDenom) }) }),
                                              " ",
                                              Ht(null === e || void 0 === e ? void 0 : e.coinMinimalDenom),
                                              " ",
                                          ],
                                      }),
                                  }),
                                  noOfTokens:
                                      null === (n = Number((null === e || void 0 === e || null === (t = e.balance) || void 0 === t ? void 0 : t.amount) || 0)) || void 0 === n
                                          ? void 0
                                          : n.toFixed(null === ln || void 0 === ln ? void 0 : ln.coinDecimals),
                                  price: { value: w(null === e || void 0 === e ? void 0 : e.ibcDenomHash), denom: null === e || void 0 === e ? void 0 : e.ibcDenomHash },
                                  amount: e.balance,
                                  ibcdeposit: e,
                                  ibcwithdraw: e,
                              };
                          }),
                      M = b.a.concat(A, P);
                  return Object(Ue.jsx)("div", {
                      className: "app-content-wrapper",
                      children: Object(Ue.jsxs)("div", {
                          className: "assets-section",
                          children: [
                              d && "portfolio" === d
                                  ? null
                                  : Object(Ue.jsx)(Ze, {
                                        children: Object(Ue.jsx)(Ge, {
                                            children: Object(Ue.jsxs)("div", {
                                                className: "assets-head",
                                                children: [
                                                    Object(Ue.jsx)("div", { children: Object(Ue.jsx)("h2", { children: Wt[t].comdex_assets }) }),
                                                    Object(Ue.jsxs)("div", {
                                                        children: [
                                                            Object(Ue.jsx)("span", { children: Wt[t].total_asset_balance }),
                                                            " ",
                                                            Rt(i, 2),
                                                            " ",
                                                            Wt[t].USD,
                                                            Object(Ue.jsxs)("span", {
                                                                className: "asset-reload-btn",
                                                                onClick: function () {
                                                                    return g();
                                                                },
                                                                children: [" ", Object(Ue.jsx)(Ti.a, {}), " "],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                              Object(Ue.jsx)(Ze, {
                                  children: Object(Ue.jsx)(Ge, {
                                      children: Object(Ue.jsx)(Si.a, { className: "custom-table assets-table", dataSource: M, columns: y, loading: f, pagination: !1, scroll: { x: "100%" }, locale: { emptyText: Object(Ue.jsx)(Ii, {}) } }),
                                  }),
                              }),
                          ],
                      }),
                  });
              }),
              Gi = t(817),
              Ki = t(391),
              Qi = t.n(Ki),
              Xi = {
                  setPoolRewards: function (e) {
                      return { type: ue, value: e };
                  },
              },
              $i = Object(o.b)(function (e) {
                  return { rewardsMap: e.liquidity.rewardsMap };
              }, Xi)(function (e) {
                  var n,
                      t,
                      i,
                      o,
                      s,
                      c,
                      d = e.pool,
                      u = e.rewardsMap,
                      v = e.setPoolRewards,
                      m = Object(l.useState)(!1),
                      b = Object(r.a)(m, 2),
                      j = b[0],
                      p = b[1];
                  Object(l.useEffect)(
                      function () {
                          !(function () {
                              var e;
                              p(!0),
                                  (e = function (e, n) {
                                      p(!1), e ? a.a.error(e) : v(null === n || void 0 === n ? void 0 : n.data);
                                  }),
                                  k.a
                                      .get("".concat(Ct, "/api/v2/cswap/aprs"))
                                      .then(function (n) {
                                          e(null, null === n || void 0 === n ? void 0 : n.data);
                                      })
                                      .catch(function (n) {
                                          e(null === n || void 0 === n ? void 0 : n.message);
                                      });
                          })();
                      },
                      [d, v]
                  );
                  return Object(Ue.jsx)(Ue.Fragment, {
                      children:
                          !j || (null !== u && void 0 !== u && u[null === d || void 0 === d || null === (n = d.id) || void 0 === n ? void 0 : n.toNumber()])
                              ? Number(
                                    null === u ||
                                        void 0 === u ||
                                        null === (t = u[null === d || void 0 === d || null === (o = d.id) || void 0 === o ? void 0 : o.toNumber()]) ||
                                        void 0 === t ||
                                        null === (i = t.incentive_rewards[0]) ||
                                        void 0 === i
                                        ? void 0
                                        : i.apr
                                )
                                  ? (function (e) {
                                        var n, t, i;
                                        return (null === e || void 0 === e ? void 0 : e.length) > 2
                                            ? Object(Ue.jsxs)(Ue.Fragment, {
                                                  children: [
                                                      null === (n = Object.keys(e)) || void 0 === n
                                                          ? void 0
                                                          : n.map(function (n, t) {
                                                                var i, o, a;
                                                                return Object(Ue.jsx)(
                                                                    "div",
                                                                    {
                                                                        children:
                                                                            t < 2
                                                                                ? Object(Ue.jsxs)("span", {
                                                                                      className: "ml-1",
                                                                                      children: [
                                                                                          Object(Ue.jsx)(nn, { name: qn(null === (i = e[n]) || void 0 === i ? void 0 : i.denom) }),
                                                                                          En((Number(null === (o = e[n]) || void 0 === o ? void 0 : o.apr) || 0).toFixed(2)),
                                                                                          "% ",
                                                                                          null !== (a = e[n]) && void 0 !== a && a.master_pool ? "- Master Pool" : "- External",
                                                                                      ],
                                                                                  })
                                                                                : "",
                                                                    },
                                                                    Qi()()
                                                                );
                                                            }),
                                                      Object(Ue.jsx)("span", {
                                                          className: "comdex-tooltip ",
                                                          children: Object(Ue.jsx)(zt.a, {
                                                              overlayClassName: " farm-apr-modal ",
                                                              title:
                                                                  null === (t = Object.keys(e)) || void 0 === t
                                                                      ? void 0
                                                                      : t.map(function (n) {
                                                                            var t, i, o;
                                                                            return Object(Ue.jsx)(
                                                                                "div",
                                                                                {
                                                                                    children: Object(Ue.jsxs)("span", {
                                                                                        className: "ml-1",
                                                                                        children: [
                                                                                            Object(Ue.jsx)(nn, { name: qn(null === (t = e[n]) || void 0 === t ? void 0 : t.denom) }),
                                                                                            En((Number(null === (i = e[n]) || void 0 === i ? void 0 : i.apr) || 0).toFixed()),
                                                                                            "%",
                                                                                            null !== (o = e[n]) && void 0 !== o && o.master_pool ? "- Master Pool" : "- External",
                                                                                        ],
                                                                                    }),
                                                                                },
                                                                                Qi()()
                                                                            );
                                                                        }),
                                                              children: Object(Ue.jsx)("span", { className: "view-all-farm-apr", children: " View All" }),
                                                          }),
                                                      }),
                                                  ],
                                              })
                                            : null === (i = Object.keys(e)) || void 0 === i
                                            ? void 0
                                            : i.map(function (n) {
                                                  var t, i, o;
                                                  return Object(Ue.jsx)(
                                                      "div",
                                                      {
                                                          children: Object(Ue.jsxs)("span", {
                                                              className: "ml-1",
                                                              children: [
                                                                  Object(Ue.jsx)(nn, { name: qn(null === (t = e[n]) || void 0 === t ? void 0 : t.denom) }),
                                                                  En((Number(null === (i = e[n]) || void 0 === i ? void 0 : i.apr) || 0).toFixed(2)),
                                                                  "% ",
                                                                  null !== (o = e[n]) && void 0 !== o && o.master_pool ? "- Master Pool" : "- External",
                                                              ],
                                                          }),
                                                      },
                                                      Qi()()
                                                  );
                                              });
                                    })(null === u || void 0 === u || null === (s = u[null === d || void 0 === d || null === (c = d.id) || void 0 === c ? void 0 : c.toNumber()]) || void 0 === s ? void 0 : s.incentive_rewards)
                                  : "".concat(En(Number(0).toFixed(2)), "%")
                              : Object(Ue.jsx)(Gi.a.Button, { className: "apr-skeleton", active: !0, size: "small" }),
                  });
              }),
              Ji = { setUserLiquidityInPools: fe },
              Zi = Object(o.b)(function (e) {
                  return {
                      address: e.account.address,
                      markets: e.oracle.market.list,
                      rewardsMap: e.liquidity.rewardsMap,
                      lang: e.language,
                      balances: e.account.balances.list,
                      userLiquidityInPools: e.liquidity.userLiquidityInPools,
                      assetMap: e.asset.map,
                  };
              }, Ji)(function (e) {
                  var n,
                      t,
                      i,
                      o = e.lang,
                      s = e.pool,
                      c = e.markets,
                      d = e.setUserLiquidityInPools,
                      u = e.userLiquidityInPools,
                      v = e.address,
                      m = e.balances,
                      b = e.rewardsMap,
                      j = e.parent,
                      p = e.assetMap,
                      h = Object(l.useState)(),
                      f = Object(r.a)(h, 2),
                      O = f[0],
                      x = f[1],
                      g = Object(Oi.l)();
                  Object(l.useEffect)(
                      function () {
                          null !== s &&
                              void 0 !== s &&
                              s.pairId &&
                              kt(null === s || void 0 === s ? void 0 : s.pairId, function (e, n) {
                                  e || x(null === n || void 0 === n ? void 0 : n.pair);
                              });
                      },
                      [s]
                  ),
                      Object(l.useEffect)(
                          function () {
                              null !== s && void 0 !== s && s.id && v && w(s);
                          },
                          [s, v, c]
                      );
                  var N = Object(l.useCallback)(
                          function (e) {
                              if (e && e.length > 0) {
                                  var n = e.map(function (e) {
                                      var n;
                                      return (
                                          Number(qt(null === e || void 0 === e ? void 0 : e.amount, null === (n = p[null === e || void 0 === e ? void 0 : e.denom]) || void 0 === n ? void 0 : n.decimals)) *
                                          Pn(c, null === e || void 0 === e ? void 0 : e.denom)
                                      );
                                  });
                                  return null === n || void 0 === n
                                      ? void 0
                                      : n.reduce(function (e, n) {
                                            return e + n;
                                        }, 0);
                              }
                              return 0;
                          },
                          [c, p]
                      ),
                      y = Rt(N(null === s || void 0 === s ? void 0 : s.balances), 2),
                      w = function (e) {
                          v &&
                              Et(v, null === e || void 0 === e ? void 0 : e.id, function (n, t) {
                                  if (n) a.a.error(n);
                                  else {
                                      var i = Vt(m, null === e || void 0 === e ? void 0 : e.poolCoinDenom) || 0,
                                          o = null === t || void 0 === t ? void 0 : t.activePoolCoin,
                                          l = null === t || void 0 === t ? void 0 : t.queuedPoolCoin,
                                          s =
                                              l &&
                                              l.length > 0 &&
                                              (null === l || void 0 === l
                                                  ? void 0
                                                  : l.map(function (e) {
                                                        var n;
                                                        return null === e || void 0 === e || null === (n = e.poolCoin) || void 0 === n ? void 0 : n.amount;
                                                    })),
                                          r =
                                              Number(
                                                  (null === s || void 0 === s ? void 0 : s.length) > 0 &&
                                                      (null === s || void 0 === s
                                                          ? void 0
                                                          : s.reduce(function (e, n) {
                                                                return Number(e) + Number(n);
                                                            }, 0))
                                              ) + Number(null === o || void 0 === o ? void 0 : o.amount) || 0,
                                          u = Number(i) + r;
                                      At(null === e || void 0 === e ? void 0 : e.id, u, function (n, t) {
                                          var i, o, l, s, r, u, v, m;
                                          if (n) a.a.error(n);
                                          else {
                                              var b = null === t || void 0 === t ? void 0 : t.coins,
                                                  j =
                                                      Number(
                                                          qt(
                                                              null === b || void 0 === b || null === (i = b[0]) || void 0 === i ? void 0 : i.amount,
                                                              null === (o = p[null === b || void 0 === b || null === (l = b[0]) || void 0 === l ? void 0 : l.denom]) || void 0 === o ? void 0 : o.decimals
                                                          )
                                                      ) *
                                                          Pn(c, null === b || void 0 === b || null === (s = b[0]) || void 0 === s ? void 0 : s.denom) +
                                                      Number(
                                                          qt(
                                                              null === b || void 0 === b || null === (r = b[1]) || void 0 === r ? void 0 : r.amount,
                                                              null === (u = p[null === b || void 0 === b || null === (v = b[1]) || void 0 === v ? void 0 : v.denom]) || void 0 === u ? void 0 : u.decimals
                                                          )
                                                      ) *
                                                          Pn(c, null === b || void 0 === b || null === (m = b[1]) || void 0 === m ? void 0 : m.denom);
                                              j && d(null === e || void 0 === e ? void 0 : e.id, j);
                                          }
                                      });
                                  }
                              });
                      };
                  return Object(Ue.jsx)("div", {
                      className: "poolcard-two",
                      onClick: function () {
                          return g("/farm/".concat(s.id && s.id.toNumber()));
                      },
                      children: Object(Ue.jsxs)("div", {
                          className: "poolcard-two-inner",
                          children: [
                              Object(Ue.jsx)("div", {
                                  className: "card-upper",
                                  children: Object(Ue.jsxs)("div", {
                                      className: "card-svg-icon-container",
                                      children: [
                                          Object(Ue.jsx)("div", {
                                              className: "card-svgicon card-svgicon-1",
                                              children: Object(Ue.jsxs)("div", { className: "card-svgicon-inner", children: [Object(Ue.jsx)(nn, { name: qn(null === O || void 0 === O ? void 0 : O.baseCoinDenom) }), " "] }),
                                          }),
                                          Object(Ue.jsx)("div", {
                                              className: "card-svgicon  card-svgicon-2",
                                              children: Object(Ue.jsxs)("div", { className: "card-svgicon-inner", children: [Object(Ue.jsx)(nn, { name: qn(null === O || void 0 === O ? void 0 : O.quoteCoinDenom) }), " "] }),
                                          }),
                                          Object(Ue.jsx)("h3", {
                                              children: (function () {
                                                  if (null !== O && void 0 !== O && O.baseCoinDenom)
                                                      return "".concat(Ht(null === O || void 0 === O ? void 0 : O.baseCoinDenom), "/").concat(Ht(null === O || void 0 === O ? void 0 : O.quoteCoinDenom));
                                              })(),
                                          }),
                                      ],
                                  }),
                              }),
                              Object(Ue.jsxs)("div", {
                                  className: "card-bottom",
                                  children: [
                                      Object(Ue.jsxs)("div", {
                                          className: "d-flex flex-column",
                                          children: [
                                              Object(Ue.jsxs)("div", { className: "cardbottom-row", children: [Object(Ue.jsx)("label", { children: Wt[o].poolLiquidity }), Object(Ue.jsx)("p", { children: "$".concat(y) })] }),
                                              Object(Ue.jsx)("div", {
                                                  className: "cardbottom-row",
                                                  children:
                                                      "user" === j
                                                          ? Object(Ue.jsxs)(Ue.Fragment, {
                                                                children: [
                                                                    Object(Ue.jsx)("label", { children: "My Liquidity" }),
                                                                    Object(Ue.jsxs)("p", { children: ["$", En(Number(u[null === s || void 0 === s ? void 0 : s.id] || 0).toFixed(2))] }),
                                                                ],
                                                            })
                                                          : null,
                                              }),
                                          ],
                                      }),
                                      Object(Ue.jsxs)("div", {
                                          className: "cardbottom-row",
                                          children: [
                                              Object(Ue.jsx)("label", { children: Wt[o].apr }),
                                              Object(Ue.jsx)("div", { className: "percent-box", children: Object(Ue.jsx)($i, { pool: s, isSwapFee: !0 }) }),
                                              Object(Ue.jsxs)("div", {
                                                  className: "swap-apr mt-1",
                                                  children: [
                                                      "Swap APR -",
                                                      " ",
                                                      En(
                                                          Number(
                                                              (null === b ||
                                                              void 0 === b ||
                                                              null === (n = b[null === s || void 0 === s || null === (i = s.id) || void 0 === i ? void 0 : i.toNumber()]) ||
                                                              void 0 === n ||
                                                              null === (t = n.swap_fee_rewards[0]) ||
                                                              void 0 === t
                                                                  ? void 0
                                                                  : t.apr) || 0
                                                          ).toFixed(2)
                                                      ),
                                                      "%",
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  });
              }),
              eo = t(810),
              no = function (e) {
                  var n = e.expiryTimestamp,
                      t = e.text,
                      i = Object(eo.useTimer)({ expiryTimestamp: n }),
                      o = i.seconds,
                      a = i.minutes,
                      l = i.hours,
                      s = String(o),
                      c = String(a),
                      r = String(l);
                  return Object(Ue.jsxs)("div", {
                      className: "timer-main",
                      children: [
                          Object(Ue.jsx)("div", { className: "left-text", children: t || "" }),
                          Object(Ue.jsxs)("div", {
                              className: "timer-count",
                              children: [
                                  Object(Ue.jsxs)("div", {
                                      className: "cols",
                                      children: [
                                          Object(Ue.jsx)("div", { className: "cols-card", children: Object(Ue.jsx)("div", { className: "cols-inner", children: 1 === (null === r || void 0 === r ? void 0 : r.length) ? "0" + r : r }) }),
                                          Object(Ue.jsx)("div", { className: "label", children: "Hours" }),
                                      ],
                                  }),
                                  Object(Ue.jsxs)("div", {
                                      className: "cols",
                                      children: [
                                          Object(Ue.jsx)("div", { className: "cols-card", children: Object(Ue.jsx)("div", { className: "cols-inner", children: 1 === (null === c || void 0 === c ? void 0 : c.length) ? "0" + c : c }) }),
                                          Object(Ue.jsx)("div", { className: "label", children: "Minutes" }),
                                      ],
                                  }),
                                  Object(Ue.jsxs)("div", {
                                      className: "cols",
                                      children: [
                                          Object(Ue.jsx)("div", { className: "cols-card", children: Object(Ue.jsx)("div", { className: "cols-inner", children: 1 === (null === s || void 0 === s ? void 0 : s.length) ? "0" + s : s }) }),
                                          Object(Ue.jsx)("div", { className: "label", children: "Seconds" }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
              },
              to = t(503),
              io = t(159),
              oo = io.a.Option,
              ao = function (e) {
                  var n = e.value,
                      t = e.onChange,
                      i = e.list,
                      o = e.loading,
                      a = e.disabled;
                  return Object(Ue.jsx)(io.a, {
                      "aria-label": "Select",
                      className: "assets-select",
                      popupClassName: "asset-select-dropdown swap-asset-select-dropdown",
                      value: n,
                      disabled: a,
                      loading: o || !1,
                      placeholder: Object(Ue.jsxs)("div", {
                          className: "select-placeholder",
                          children: [Object(Ue.jsx)("div", { className: "circle-icon", children: Object(Ue.jsx)("div", { className: "circle-icon-inner" }) }), "Select"],
                      }),
                      onChange: t,
                      defaultActiveFirstOption: !0,
                      notFoundContent: Object(Ue.jsx)(Ii, {}),
                      suffixIcon: Object(Ue.jsx)(nn, { name: "arrow-down", viewbox: "0 0 19.244 10.483" }),
                      children:
                          i &&
                          i.map(function (e) {
                              var n = null !== e && void 0 !== e && e.denom ? (null === e || void 0 === e ? void 0 : e.denom) : e;
                              return Object(Ue.jsx)(
                                  oo,
                                  {
                                      value: n,
                                      children: Object(Ue.jsxs)("div", {
                                          className: "select-inner",
                                          children: [
                                              Object(Ue.jsx)("div", { className: "svg-icon", children: Object(Ue.jsx)("div", { className: "svg-icon-inner swap-svg-icon-inner", children: Object(Ue.jsx)(nn, { name: qn(n) }) }) }),
                                              Object(Ue.jsx)("div", { className: "name", children: Ht(n) }),
                                          ],
                                      }),
                                  },
                                  n
                              );
                          }),
                  });
              },
              lo =
                  (t(1641),
                  {
                      setPoolTokenSupply: function (e) {
                          return { type: ie, value: e };
                      },
                  }),
              so = Object(o.b)(function (e) {
                  return { lang: e.language, address: e.account.address, balances: e.account.balances.list, markets: e.oracle.market.list, params: e.swap.params, assetMap: e.asset.map };
              }, lo)(function (e) {
                  var n,
                      t,
                      i,
                      o,
                      s,
                      c,
                      d,
                      v,
                      m,
                      b,
                      j,
                      p,
                      h,
                      f,
                      O,
                      x,
                      g = e.openPoolModal,
                      N = e.closePool,
                      y = e.balances,
                      w = e.address,
                      C = e.refreshData,
                      _ = e.refreshBalance,
                      D = e.params,
                      S = e.lang,
                      T = e.assetMap,
                      I = Object(l.useState)(0),
                      k = Object(r.a)(I, 2),
                      E = k[0],
                      A = k[1],
                      P = Object(l.useState)(),
                      M = Object(r.a)(P, 2),
                      F = M[0],
                      L = M[1],
                      R = Object(l.useState)(),
                      q = Object(r.a)(R, 2),
                      B = q[0],
                      U = q[1],
                      H = Object(l.useState)(),
                      V = Object(r.a)(H, 2),
                      W = V[0],
                      z = V[1],
                      K = Object(l.useState)(),
                      Q = Object(r.a)(K, 2),
                      X = Q[0],
                      $ = Q[1],
                      J = Object(l.useState)(!1),
                      Z = Object(r.a)(J, 2),
                      ee = Z[0],
                      ne = Z[1],
                      te = Object(l.useState)(!1),
                      ie = Object(r.a)(te, 2),
                      oe = ie[0],
                      ae = ie[1],
                      le = Object(l.useState)(),
                      se = Object(r.a)(le, 2),
                      ce = se[0],
                      re = se[1],
                      de = Object(l.useState)(),
                      ue = Object(r.a)(de, 2),
                      ve = ue[0],
                      me = ue[1],
                      be = Object(l.useState)(),
                      je = Object(r.a)(be, 2),
                      pe = je[0],
                      he = je[1],
                      fe = Vt(y, F),
                      Oe = Vt(y, B);
                  Object(l.useEffect)(function () {
                      St(function (e, n) {
                          e || re(null === n || void 0 === n ? void 0 : n.pairs);
                      }),
                          Ne();
                  }, []);
                  var xe,
                      ge,
                      Ne = function () {
                          A(0), L(), U(), z(), $(), ne(!1);
                      },
                      ye = to.a.Step,
                      we = function (e) {
                          var n, t, i;
                          (e = null === (n = Hn(e, null === (t = T[F]) || void 0 === t ? void 0 : t.decimals)) || void 0 === n ? void 0 : n.toString().trim()),
                              me(Fi(Number(Ft(e, null === (i = T[F]) || void 0 === i ? void 0 : i.decimals)))),
                              z(e);
                      },
                      Ce = function (e) {
                          var n, t;
                          (e = Hn(e, null === (n = T[B]) || void 0 === n ? void 0 : n.decimals)
                              .toString()
                              .trim()),
                              $(e),
                              he(Fi(Number(Ft(e, null === (t = T[B]) || void 0 === t ? void 0 : t.decimals))));
                      },
                      _e =
                          ((xe = ce),
                          (ge = "in"),
                          Object(Dn.a)(
                              new Set(
                                  xe && xe.length > 0
                                      ? xe.map(function (e) {
                                            return "in" === ge ? e.baseCoinDenom : e.quoteCoinDenom;
                                        })
                                      : []
                              )
                          )),
                      De = (function (e, n, t) {
                          var i = (e && e.length > 0
                              ? e.filter(function (e) {
                                    return "in" === n ? e.baseCoinDenom === t : e.quoteCoinDenom === t;
                                })
                              : []
                          ).map(function (e) {
                              return "in" === n ? e.quoteCoinDenom : e.baseCoinDenom;
                          });
                          return Object(Dn.a)(new Set(i));
                      })(ce, "in", F),
                      Se = (0 === E && (!F || !B)) || (1 === E && (!W || !X)) || (null === ve || void 0 === ve ? void 0 : ve.message) || (null === pe || void 0 === pe ? void 0 : pe.message),
                      Te = [
                          {
                              title: "",
                              content: Object(Ue.jsxs)(Ue.Fragment, {
                                  children: [
                                      Object(Ue.jsx)("div", {
                                          className: "pool-asset-first-container mt-4",
                                          children: Object(Ue.jsxs)("div", {
                                              className: "assets-select-card",
                                              children: [
                                                  Object(Ue.jsx)("div", {
                                                      className: "assets-left",
                                                      children: Object(Ue.jsx)("div", {
                                                          className: "assets-select-wrapper",
                                                          children: Object(Ue.jsx)(ao, {
                                                              onChange: function (e) {
                                                                  L(e);
                                                              },
                                                              list: _e.length > 0 ? _e : null,
                                                              value: F || null,
                                                          }),
                                                      }),
                                                  }),
                                                  Object(Ue.jsx)("div", {
                                                      className: "assets-right",
                                                      children: Object(Ue.jsxs)("div", {
                                                          className: "input-select",
                                                          children: [
                                                              Object(Ue.jsx)(Mi, { decimals: 2, value: 50, disabled: !0, className: "assets-select-input with-select" }),
                                                              Object(Ue.jsx)("span", { className: "percentage ml-1", children: "%" }),
                                                          ],
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      }),
                                      Object(Ue.jsx)("div", {
                                          className: "pool-asset-second-container mt-3",
                                          children: Object(Ue.jsxs)("div", {
                                              className: "assets-select-card",
                                              children: [
                                                  Object(Ue.jsx)("div", {
                                                      className: "assets-left",
                                                      children: Object(Ue.jsx)("div", {
                                                          className: "assets-select-wrapper",
                                                          children: Object(Ue.jsx)(ao, {
                                                              disabled: !F,
                                                              onChange: function (e) {
                                                                  U(e);
                                                              },
                                                              list: De.length > 0 ? De : null,
                                                              value: B || null,
                                                          }),
                                                      }),
                                                  }),
                                                  Object(Ue.jsx)("div", {
                                                      className: "assets-right",
                                                      children: Object(Ue.jsxs)("div", {
                                                          className: "input-select",
                                                          children: [
                                                              Object(Ue.jsx)(Mi, { disabled: !0, decimals: 2, value: 50, className: "assets-select-input with-select" }),
                                                              Object(Ue.jsx)("span", { className: "percentage ml-1", children: "%" }),
                                                          ],
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      }),
                                  ],
                              }),
                          },
                          {
                              title: "",
                              content: Object(Ue.jsxs)(Ue.Fragment, {
                                  children: [
                                      Object(Ue.jsx)("div", {
                                          className: "pool-asset-first-container mt-3",
                                          children: Object(Ue.jsxs)("div", {
                                              className: "assets-select-card",
                                              children: [
                                                  Object(Ue.jsx)("div", {
                                                      className: "assets-left",
                                                      children: Object(Ue.jsx)("div", {
                                                          className: "assets-select-wrapper",
                                                          children: Object(Ue.jsxs)(Ze, {
                                                              children: [
                                                                  Object(Ue.jsx)("div", {
                                                                      className: "cswap-head",
                                                                      children: Object(Ue.jsx)("div", {
                                                                          className: "header-left circle-icon",
                                                                          children: Object(Ue.jsx)("div", {
                                                                              className: "icon-circle",
                                                                              children: Object(Ue.jsx)("div", { className: "svg-icon-inner", children: Object(Ue.jsx)(nn, { name: qn(F), viewbox: "0 0 26.229 14" }) }),
                                                                          }),
                                                                      }),
                                                                  }),
                                                                  Object(Ue.jsxs)(Ge, {
                                                                      children: [Object(Ue.jsx)("div", { className: "pool-denom", children: Ht(F) }), Object(Ue.jsxs)("div", { className: "pool-denom", children: [50, "%"] })],
                                                                  }),
                                                              ],
                                                          }),
                                                      }),
                                                  }),
                                                  Object(Ue.jsxs)("div", {
                                                      className: "assets-right",
                                                      children: [
                                                          Object(Ue.jsxs)("div", {
                                                              className: "label-right",
                                                              children: [
                                                                  "Available",
                                                                  Object(Ue.jsxs)("span", { className: "ml-1", children: [Lt(fe || 0, null === (n = T[F]) || void 0 === n ? void 0 : n.decimals), " ", Ht(F)] }),
                                                                  " ",
                                                                  Object(Ue.jsx)("div", {
                                                                      className: "maxhalf",
                                                                      children: Object(Ue.jsx)(u.a, {
                                                                          className: "active",
                                                                          onClick: function () {
                                                                              return (function () {
                                                                                  if (Number(fe)) {
                                                                                      var e,
                                                                                          n = F === ln.coinMinimalDenom ? (Number(fe) > Y ? fe - Y : null) : fe;
                                                                                      return we(qt(n, null === (e = T[F]) || void 0 === e ? void 0 : e.decimals));
                                                                                  }
                                                                              })();
                                                                          },
                                                                          children: "Max",
                                                                      }),
                                                                  }),
                                                              ],
                                                          }),
                                                          Object(Ue.jsx)("div", {
                                                              className: "input-select validation-input-select",
                                                              children: Object(Ue.jsx)(Mi, {
                                                                  value: W,
                                                                  validationError: ve,
                                                                  className: "assets-select-input with-select",
                                                                  onChange: function (e) {
                                                                      return we(e.target.value);
                                                                  },
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      }),
                                      Object(Ue.jsx)("div", {
                                          className: "pool-asset-second-container mt-3",
                                          children: Object(Ue.jsxs)("div", {
                                              className: "assets-select-card",
                                              children: [
                                                  Object(Ue.jsx)("div", {
                                                      className: "assets-left",
                                                      children: Object(Ue.jsx)("div", {
                                                          className: "assets-select-wrapper ",
                                                          children: Object(Ue.jsxs)(Ze, {
                                                              children: [
                                                                  Object(Ue.jsx)("div", {
                                                                      className: "cswap-head",
                                                                      children: Object(Ue.jsx)("div", {
                                                                          className: "header-left circle-icon",
                                                                          children: Object(Ue.jsx)("div", {
                                                                              className: "icon-circle",
                                                                              children: Object(Ue.jsx)("div", { className: "svg-icon-inner", children: Object(Ue.jsx)(nn, { name: qn(B), viewbox: "0 0 26.229 14" }) }),
                                                                          }),
                                                                      }),
                                                                  }),
                                                                  Object(Ue.jsxs)(Ge, {
                                                                      children: [Object(Ue.jsx)("div", { className: "pool-denom", children: Ht(B) }), Object(Ue.jsxs)("div", { className: "pool-denom", children: [50, "%"] })],
                                                                  }),
                                                              ],
                                                          }),
                                                      }),
                                                  }),
                                                  Object(Ue.jsxs)("div", {
                                                      className: "assets-right",
                                                      children: [
                                                          Object(Ue.jsxs)("div", {
                                                              className: "label-right",
                                                              children: [
                                                                  "Available",
                                                                  Object(Ue.jsxs)("span", { className: "ml-1", children: [Lt(Oe || 0, null === (t = T[B]) || void 0 === t ? void 0 : t.decimals), " ", Ht(B)] }),
                                                                  " ",
                                                                  Object(Ue.jsx)("div", {
                                                                      className: "maxhalf",
                                                                      children: Object(Ue.jsx)(u.a, {
                                                                          className: "active",
                                                                          onClick: function () {
                                                                              return (function () {
                                                                                  if (Number(Oe)) {
                                                                                      var e,
                                                                                          n = B === ln.coinMinimalDenom ? (Number(Oe) > Y ? Oe - Y : null) : Oe;
                                                                                      return Ce(qt(n, null === (e = T[B]) || void 0 === e ? void 0 : e.decimals));
                                                                                  }
                                                                              })();
                                                                          },
                                                                          children: "Max",
                                                                      }),
                                                                  }),
                                                              ],
                                                          }),
                                                          Object(Ue.jsx)("div", {
                                                              className: "input-select validation-input-select",
                                                              children: Object(Ue.jsx)(Mi, {
                                                                  value: X,
                                                                  validationError: pe,
                                                                  className: "assets-select-input with-select",
                                                                  onChange: function (e) {
                                                                      return Ce(e.target.value);
                                                                  },
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      }),
                                  ],
                              }),
                          },
                          {
                              title: "",
                              content: Object(Ue.jsxs)(Ue.Fragment, {
                                  children: [
                                      Object(Ue.jsx)("div", {
                                          className: "pool-asset-first-container mt-4",
                                          children: Object(Ue.jsxs)("div", {
                                              className: "assets-select-card",
                                              children: [
                                                  Object(Ue.jsx)("div", {
                                                      className: "assets-left",
                                                      children: Object(Ue.jsx)("div", {
                                                          className: "assets-select-wrapper",
                                                          children: Object(Ue.jsxs)(Ze, {
                                                              children: [
                                                                  Object(Ue.jsx)("div", {
                                                                      className: "cswap-head",
                                                                      children: Object(Ue.jsx)("div", {
                                                                          className: "header-left circle-icon",
                                                                          children: Object(Ue.jsx)("div", {
                                                                              className: "icon-circle",
                                                                              children: Object(Ue.jsx)("div", { className: "svg-icon-inner", children: Object(Ue.jsx)(nn, { name: qn(F), viewbox: "0 0 26.229 14" }) }),
                                                                          }),
                                                                      }),
                                                                  }),
                                                                  Object(Ue.jsxs)(Ge, {
                                                                      children: [Object(Ue.jsx)("div", { className: "pool-denom", children: Ht(F) }), Object(Ue.jsxs)("div", { className: "pool-denom", children: [50, "%"] })],
                                                                  }),
                                                              ],
                                                          }),
                                                      }),
                                                  }),
                                                  Object(Ue.jsx)("div", {
                                                      className: "assets-right",
                                                      children: Object(Ue.jsx)("div", { className: "input-select", children: Object(Ue.jsx)("div", { className: "selected-amount", children: W }) }),
                                                  }),
                                              ],
                                          }),
                                      }),
                                      Object(Ue.jsx)("div", {
                                          className: "pool-asset-second-container mt-3",
                                          children: Object(Ue.jsxs)("div", {
                                              className: "assets-select-card",
                                              children: [
                                                  Object(Ue.jsx)("div", {
                                                      className: "assets-left",
                                                      children: Object(Ue.jsx)("div", {
                                                          className: "assets-select-wrapper ",
                                                          children: Object(Ue.jsxs)(Ze, {
                                                              children: [
                                                                  Object(Ue.jsx)("div", {
                                                                      className: "cswap-head",
                                                                      children: Object(Ue.jsx)("div", {
                                                                          className: "header-left circle-icon",
                                                                          children: Object(Ue.jsx)("div", {
                                                                              className: "icon-circle",
                                                                              children: Object(Ue.jsx)("div", { className: "svg-icon-inner", children: Object(Ue.jsx)(nn, { name: qn(B), viewbox: "0 0 26.229 14" }) }),
                                                                          }),
                                                                      }),
                                                                  }),
                                                                  Object(Ue.jsxs)(Ge, {
                                                                      children: [Object(Ue.jsxs)("div", { className: "pool-denom", children: [" ", Ht(B)] }), Object(Ue.jsxs)("div", { className: "pool-denom", children: [50, "%"] })],
                                                                  }),
                                                              ],
                                                          }),
                                                      }),
                                                  }),
                                                  Object(Ue.jsx)("div", {
                                                      className: "assets-right",
                                                      children: Object(Ue.jsx)("div", { className: "input-select", children: Object(Ue.jsx)("div", { className: "selected-amount", children: X }) }),
                                                  }),
                                              ],
                                          }),
                                      }),
                                      Object(Ue.jsx)("div", {
                                          className: "checkbox-container mt-3 text-center ml-3",
                                          children: Object(Ue.jsxs)(on.a, {
                                              onChange: function (e) {
                                                  ne(e.target.checked);
                                              },
                                              checked: ee,
                                              children: [
                                                  Object(Ue.jsxs)("p", {
                                                      children: [
                                                          "I understand that creating a new pool will cost",
                                                          " ",
                                                          ""
                                                              .concat(
                                                                  Lt(
                                                                      null === D || void 0 === D || null === (i = D.poolCreationFee) || void 0 === i || null === (o = i[0]) || void 0 === o ? void 0 : o.amount,
                                                                      null === (s = T[null === D || void 0 === D || null === (c = D.poolCreationFee) || void 0 === c || null === (d = c[0]) || void 0 === d ? void 0 : d.denom]) ||
                                                                          void 0 === s
                                                                          ? void 0
                                                                          : s.decimals
                                                                  ),
                                                                  " \n              "
                                                              )
                                                              .concat(Ht(null === D || void 0 === D || null === (v = D.poolCreationFee) || void 0 === v || null === (m = v[0]) || void 0 === m ? void 0 : m.denom)),
                                                          " ",
                                                      ],
                                                  }),
                                                  " ",
                                              ],
                                          }),
                                      }),
                                  ],
                              }),
                          },
                      ];
                  return Object(Ue.jsx)(Ue.Fragment, {
                      children: Object(Ue.jsxs)(tn.a, {
                          open: g,
                          onOk: N,
                          onCancel: N,
                          footer: !1,
                          centered: !0,
                          className: "create-pool-modal",
                          closeIcon: Object(Ue.jsx)(nn, { name: "close", viewbox: "0 0 19 19" }),
                          children: [
                              Object(Ue.jsx)("h2", { className: "pool-denom", children: "Create New Pool" }),
                              Object(Ue.jsx)(to.a, {
                                  className: "comdex-steps",
                                  current: E,
                                  children: Te.map(function (e) {
                                      return Object(Ue.jsx)(ye, { title: e.title }, e.title);
                                  }),
                              }),
                              Object(Ue.jsx)("div", {
                                  className: "pool-fee-container pool-asset-second-container mt-4",
                                  children: Object(Ue.jsx)("div", {
                                      className: "poolcreation-fee",
                                      children: Object(Ue.jsxs)("div", {
                                          className: "poolcreationfee-inner",
                                          children: [
                                              Object(Ue.jsxs)("div", {
                                                  className: "poolcreationfree-left",
                                                  children: [Object(Ue.jsx)("div", { className: "pool-denom", children: "Pool Creation Fee" }), Object(Ue.jsx)("p", { className: "pool-paira", children: "Transferred to community pool" })],
                                              }),
                                              Object(Ue.jsxs)("div", {
                                                  className: "poolcreationfee-right",
                                                  children: [
                                                      Object(Ue.jsx)("span", {
                                                          children: Lt(
                                                              (null === D || void 0 === D || null === (b = D.poolCreationFee) || void 0 === b || null === (j = b[0]) || void 0 === j ? void 0 : j.amount) || 0,
                                                              null === (p = T[null === D || void 0 === D || null === (h = D.poolCreationFee) || void 0 === h || null === (f = h[0]) || void 0 === f ? void 0 : f.denom]) || void 0 === p
                                                                  ? void 0
                                                                  : p.decimals
                                                          ),
                                                      }),
                                                      Object(Ue.jsx)("span", {
                                                          className: "ml-1",
                                                          children: Ht(null === D || void 0 === D || null === (O = D.poolCreationFee) || void 0 === O || null === (x = O[0]) || void 0 === x ? void 0 : x.denom),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                              Object(Ue.jsx)("div", { className: "steps-content", children: Te[E].content }),
                              Object(Ue.jsxs)("div", {
                                  className: "steps-action text-right mt-3",
                                  children: [
                                      E > 0 &&
                                          Object(Ue.jsx)(u.a, {
                                              style: { margin: "0 8px" },
                                              type: "primary",
                                              onClick: function () {
                                                  A(E - 1);
                                              },
                                              children: "Previous",
                                          }),
                                      E < Te.length - 1 &&
                                          Object(Ue.jsx)(u.a, {
                                              disabled: Se,
                                              type: "primary",
                                              onClick: function () {
                                                  A(E + 1);
                                              },
                                              children: "Next",
                                          }),
                                      E === Te.length - 1 &&
                                          Object(Ue.jsx)(u.a, {
                                              loading: oe,
                                              disabled: !ee,
                                              type: "primary",
                                              onClick: function () {
                                                  return (function () {
                                                      var e =
                                                          null === ce || void 0 === ce
                                                              ? void 0
                                                              : ce.filter(function (e) {
                                                                    return (e.baseCoinDenom === F && e.quoteCoinDenom === B) || (e.baseCoinDenom === F && e.quoteCoinDenom === B);
                                                                })[0];
                                                      if (null !== e && void 0 !== e && e.id) {
                                                          var n, t;
                                                          ae(!0);
                                                          var i = [
                                                              { denom: F, amount: Ft(W, null === (n = T[F]) || void 0 === n ? void 0 : n.decimals) },
                                                              { denom: B, amount: Ft(X, null === (t = T[B]) || void 0 === t ? void 0 : t.decimals) },
                                                          ].sort(function (e, n) {
                                                              return e.denom.localeCompare(n.denom);
                                                          });
                                                          it(
                                                              {
                                                                  message: {
                                                                      typeUrl: "/comdex.liquidity.v1beta1.MsgCreatePool",
                                                                      value: { creator: w.toString(), appId: fn.a.fromNumber(G), pairId: null === e || void 0 === e ? void 0 : e.id, depositCoins: i },
                                                                  },
                                                                  fee: qi(),
                                                                  memo: "",
                                                              },
                                                              w,
                                                              function (e, n) {
                                                                  ae(!1),
                                                                      e
                                                                          ? a.a.error(e)
                                                                          : null !== n && void 0 !== n && n.code
                                                                          ? a.a.info(null === n || void 0 === n ? void 0 : n.rawLog)
                                                                          : (C(), _(), Ne(), a.a.success(Object(Ue.jsx)(Ai, { message: Wt[S].tx_success, hash: null === n || void 0 === n ? void 0 : n.transactionHash })));
                                                              }
                                                          );
                                                      } else a.a.info("No pair exists");
                                                  })();
                                              },
                                              children: "Create",
                                          }),
                                  ],
                              }),
                          ],
                      }),
                  });
              }),
              co = function (e) {
                  var n = e.refreshData,
                      t = e.refreshBalance,
                      i = Object(l.useState)(),
                      o = Object(r.a)(i, 2),
                      a = o[0],
                      s = o[1];
                  return Object(Ue.jsxs)(Ue.Fragment, {
                      children: [
                          Object(Ue.jsx)(u.a, {
                              className: "ant-btn-primary btn-filled ",
                              onClick: function () {
                                  s(!0);
                              },
                              children: "Create Pool",
                          }),
                          Object(Ue.jsx)(so, {
                              openPoolModal: a,
                              closePool: function () {
                                  s(!1);
                              },
                              refreshData: n,
                              refreshBalance: t,
                          }),
                      ],
                  });
              },
              ro = (t(791), { setPools: ve }),
              uo = Object(o.b)(function (e) {
                  return {
                      lang: e.language,
                      pools: e.liquidity.pool.list,
                      refreshBalance: e.account.refreshBalance,
                      masterPoolMap: e.liquidity.masterPoolMap,
                      userLiquidityInPools: e.liquidity.userLiquidityInPools,
                      incentivesMap: e.liquidity.incentivesMap,
                  };
              }, ro)(function (e) {
                  var n,
                      t,
                      i,
                      s = e.setPools,
                      c = e.pools,
                      d = e.lang,
                      u = e.refreshBalance,
                      v = e.masterPoolMap,
                      m = e.userLiquidityInPools,
                      b = e.incentivesMap,
                      j = Object(l.useState)(!1),
                      p = Object(r.a)(j, 2),
                      h = p[0],
                      f = p[1],
                      O = Object(o.c)();
                  Object(l.useEffect)(function () {
                      x(0, z, !0, !1);
                  }, []);
                  var x = function (e, n, t, i) {
                          f(!0),
                              It(0, 0, 0, 0, function (e, n) {
                                  f(!1), e ? a.a.error(e) : s(n.pools);
                              });
                      },
                      g = (null === (n = Object.keys(m)) || void 0 === n
                          ? void 0
                          : n.map(function (e) {
                                return null === c || void 0 === c
                                    ? void 0
                                    : c.find(function (n) {
                                          var t;
                                          return (null === n || void 0 === n || null === (t = n.id) || void 0 === t ? void 0 : t.toNumber()) === Number(e) && Number(m[e]) > 0;
                                      });
                            })
                      ).filter(function (e) {
                          return e;
                      });
                  return Object(Ue.jsx)("div", {
                      className: "app-content-wrapper",
                      children:
                          !h || (null !== c && void 0 !== c && c.length)
                              ? Object(Ue.jsxs)(Ue.Fragment, {
                                    children: [
                                        Object(Ue.jsx)("div", {
                                            className: "create-pool-main-container text-right mb-n3",
                                            children: Object(Ue.jsx)(co, {
                                                refreshData: function () {
                                                    x(0, z, !0, !1);
                                                },
                                                refreshBalance: function () {
                                                    O({ type: "BALANCE_REFRESH_SET", value: u + 1 });
                                                },
                                            }),
                                        }),
                                        Object(Ue.jsx)("div", {
                                            className: "farm-heading mb-5",
                                            children: Object(Ue.jsxs)("p", {
                                                children: [
                                                    " ",
                                                    null !== b && void 0 !== b && null !== (t = b[K]) && void 0 !== t && t.nextDistribution
                                                        ? Object(Ue.jsx)(no, { text: "Reward distribution in ", expiryTimestamp: null === b || void 0 === b || null === (i = b[K]) || void 0 === i ? void 0 : i.nextDistribution })
                                                        : null,
                                                ],
                                            }),
                                        }),
                                        (null === g || void 0 === g ? void 0 : g.length) > 0
                                            ? Object(Ue.jsxs)("div", {
                                                  className: "pools-bottom-section mb-5",
                                                  children: [
                                                      Object(Ue.jsx)("div", { className: "farm-heading", children: "My Pools" }),
                                                      Object(Ue.jsx)(Ze, {
                                                          children: Object(Ue.jsx)(Ge, {
                                                              sm: "12",
                                                              children: Object(Ue.jsx)("div", {
                                                                  className: "pool-card-section",
                                                                  children:
                                                                      (null === g || void 0 === g ? void 0 : g.length) > 0
                                                                          ? g.map(function (e, n) {
                                                                                return Object(Ue.jsx)(Zi, { parent: "user", pool: e, poolIndex: n, lang: d }, null === e || void 0 === e ? void 0 : e.id);
                                                                            })
                                                                          : Object(Ue.jsx)("div", { className: "ml-3", children: h ? "" : "Empty pool" }),
                                                              }),
                                                          }),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        Object(Ue.jsxs)("div", {
                                            className: "pools-upper-section",
                                            children: [
                                                Object(Ue.jsx)("div", { className: "farm-heading", children: "Master Pools" }),
                                                Object(Ue.jsx)(Ze, {
                                                    children: Object(Ue.jsx)(Ge, {
                                                        children: Object(Ue.jsx)("div", {
                                                            className: "pool-card-section",
                                                            children:
                                                                (null === c || void 0 === c ? void 0 : c.length) > 0
                                                                    ? null === c || void 0 === c
                                                                        ? void 0
                                                                        : c.map(function (e, n) {
                                                                              var t;
                                                                              if (null !== v && void 0 !== v && null !== (t = v[null === e || void 0 === e ? void 0 : e.id]) && void 0 !== t && t.poolId)
                                                                                  return Object(Ue.jsx)(Zi, { pool: e, poolIndex: n, lang: d }, null === e || void 0 === e ? void 0 : e.id);
                                                                          })
                                                                    : null,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        Object(Ue.jsxs)("div", {
                                            className: "pools-upper-section mt-5",
                                            children: [
                                                Object(Ue.jsx)("div", { className: "farm-heading", children: "Child Pools" }),
                                                Object(Ue.jsx)(Ze, {
                                                    children: Object(Ue.jsx)(Ge, {
                                                        children: Object(Ue.jsx)("div", {
                                                            className: "pool-card-section",
                                                            children:
                                                                (null === c || void 0 === c ? void 0 : c.length) > 0
                                                                    ? c.map(function (e, n) {
                                                                          var t;
                                                                          if (null === v || void 0 === v || null === (t = v[null === e || void 0 === e ? void 0 : e.id]) || void 0 === t || !t.poolId)
                                                                              return Object(Ue.jsx)(Zi, { pool: e, poolIndex: n, lang: d }, null === e || void 0 === e ? void 0 : e.id);
                                                                      })
                                                                    : null,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                })
                              : Object(Ue.jsx)("div", { className: "loader", children: Object(Ue.jsx)(Xt.a, {}) }),
                  });
              }),
              vo = t(255),
              mo = function (e) {
                  return Object(Ue.jsx)(zt.a, { overlayClassName: "comdex-tooltip", title: e.text || "Tooltip info text", children: Object(Ue.jsx)(nn, { className: "tooltip-icon", name: "info-icon" }) });
              },
              bo = t(19),
              jo = function (e) {
                  var n = e.pool,
                      t = e.poolTokens,
                      i = e.markets,
                      o = e.assetMap,
                      s = Object(l.useState)(),
                      c = Object(r.a)(s, 2),
                      d = c[0],
                      u = c[1];
                  Object(l.useEffect)(
                      function () {
                          null !== n && void 0 !== n && n.poolCoinDenom && v(n);
                      },
                      [n, i, t]
                  );
                  var v = function (e) {
                      t &&
                          At(null === e || void 0 === e ? void 0 : e.id, t, function (e, n) {
                              var t, l, s, c, r, d, v, m;
                              if (e) a.a.error(e);
                              else {
                                  var b = null === n || void 0 === n ? void 0 : n.coins,
                                      j =
                                          Number(
                                              qt(
                                                  null === b || void 0 === b || null === (t = b[0]) || void 0 === t ? void 0 : t.amount,
                                                  null === (l = o[null === b || void 0 === b || null === (s = b[0]) || void 0 === s ? void 0 : s.denom]) || void 0 === l ? void 0 : l.decimals
                                              )
                                          ) *
                                              Pn(i, null === b || void 0 === b || null === (c = b[0]) || void 0 === c ? void 0 : c.denom) +
                                          Number(
                                              qt(
                                                  null === b || void 0 === b || null === (r = b[1]) || void 0 === r ? void 0 : r.amount,
                                                  null === (d = o[null === b || void 0 === b || null === (v = b[1]) || void 0 === v ? void 0 : v.denom]) || void 0 === d ? void 0 : d.decimals
                                              )
                                          ) *
                                              Pn(i, null === b || void 0 === b || null === (m = b[1]) || void 0 === m ? void 0 : m.denom);
                                  j && u(j);
                              }
                          });
                  };
                  return Object(Ue.jsxs)(Ue.Fragment, { children: ["$", En(Number((t && d) || 0).toFixed(2)), " "] });
              };
          jo.propTypes = {
              lang: bo.string.isRequired,
              assetMap: bo.object,
              markets: bo.object,
              pool: bo.shape({ id: bo.shape({ high: bo.number, low: bo.number, unsigned: bo.bool }), reserveAccountAddress: bo.string, poolCoinDenom: bo.string }),
              poolTokens: bo.oneOfType([bo.string, bo.number]),
          };
          var po = Object(o.b)(function (e) {
                  return { lang: e.language, pool: e.liquidity.pool._, balances: e.account.balances.list, markets: e.oracle.market.list, assetMap: e.asset.map };
              })(jo),
              ho = Object(o.b)(function (e) {
                  return { lang: e.language, pool: e.liquidity.pool._, balances: e.account.balances.list };
              })(function (e) {
                  var n = e.pool,
                      t = e.balances,
                      i = Vt(t, null === n || void 0 === n ? void 0 : n.poolCoinDenom) || 0;
                  return Object(Ue.jsxs)(Ue.Fragment, {
                      children: [
                          Object(Ue.jsx)(Ge, { className: "label-left", children: "You have" }),
                          Object(Ue.jsxs)(Ge, { className: "text-right", children: [Object(Ue.jsx)(po, { poolTokens: i }), " \u2248", " ", Number(i).toFixed() || 0, " PoolToken"] }),
                      ],
                  });
              }),
              fo = { setPoolBalance: be, setPool: me, setFirstReserveCoinDenom: je, setSecondReserveCoinDenom: pe, setComplete: Me, setBaseCoinPoolPrice: he, setReverse: Pe },
              Oo = Object(o.b)(function (e) {
                  return {
                      lang: e.language,
                      pools: e.liquidity.pool.list,
                      pool: e.liquidity.pool._,
                      address: e.account.address,
                      reverse: e.swap.reverse,
                      markets: e.oracle.market.list,
                      baseCoinPoolPrice: e.liquidity.baseCoinPoolPrice,
                      balances: e.account.balances.list,
                      firstReserveCoinDenom: e.liquidity.firstReserveCoinDenom,
                      secondReserveCoinDenom: e.liquidity.secondReserveCoinDenom,
                      pair: e.asset.pair,
                      poolBalance: e.liquidity.poolBalance,
                      assetMap: e.asset.map,
                  };
              }, fo)(function (e) {
                  var n,
                      t,
                      i = e.lang,
                      o = e.address,
                      s = e.pool,
                      c = e.balances,
                      d = e.reverse,
                      v = e.setReverse,
                      m = e.markets,
                      b = e.setComplete,
                      j = e.pair,
                      p = e.refreshData,
                      h = e.updateBalance,
                      f = e.baseCoinPoolPrice,
                      O = e.setBaseCoinPoolPrice,
                      x = e.assetMap,
                      g = Object(l.useState)(),
                      N = Object(r.a)(g, 2),
                      y = N[0],
                      w = N[1],
                      C = Object(l.useState)(),
                      _ = Object(r.a)(C, 2),
                      D = _[0],
                      S = _[1],
                      T = Object(l.useState)(!1),
                      I = Object(r.a)(T, 2),
                      k = I[0],
                      E = I[1],
                      A = Object(l.useState)(),
                      P = Object(r.a)(A, 2),
                      M = P[0],
                      F = P[1],
                      L = Object(l.useState)(),
                      R = Object(r.a)(L, 2),
                      q = R[0],
                      B = R[1];
                  Object(l.useEffect)(function () {
                      b(!1), v(!1);
                  }, []),
                      Object(l.useEffect)(
                          function () {
                              var e;
                              if ((null === s || void 0 === s || null === (e = s.balances) || void 0 === e ? void 0 : e.length) > 0 && null !== j && void 0 !== j && j.id) {
                                  var n,
                                      t,
                                      i,
                                      o,
                                      a,
                                      l,
                                      c =
                                          null === s ||
                                          void 0 === s ||
                                          null === (n = s.balances) ||
                                          void 0 === n ||
                                          null ===
                                              (t = n.find(function (e) {
                                                  return e.denom === (null === j || void 0 === j ? void 0 : j.baseCoinDenom);
                                              })) ||
                                          void 0 === t
                                              ? void 0
                                              : t.amount,
                                      r =
                                          null === s ||
                                          void 0 === s ||
                                          null === (i = s.balances) ||
                                          void 0 === i ||
                                          null ===
                                              (o = i.find(function (e) {
                                                  return e.denom === (null === j || void 0 === j ? void 0 : j.quoteCoinDenom);
                                              })) ||
                                          void 0 === o
                                              ? void 0
                                              : o.amount,
                                      d =
                                          Number(qt(r, null === (a = x[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === a ? void 0 : a.decimals)) /
                                          Number(qt(c, null === (l = x[null === j || void 0 === j ? void 0 : j.baseCoinDenom]) || void 0 === l ? void 0 : l.decimals));
                                  O(Number(d));
                              }
                          },
                          [s, j]
                      ),
                      Object(l.useEffect)(
                          function () {
                              if (y) {
                                  var e,
                                      n,
                                      t = (y * U()).toFixed(null === (e = x[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === e ? void 0 : e.decimals);
                                  B(Fi(Number(Ft(t, null === (n = x[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === n ? void 0 : n.decimals)), K, "macro")), isFinite(Number(t)) && S(t);
                              }
                          },
                          [f]
                      );
                  var U = function () {
                          return d ? 1 / f : f;
                      },
                      H = function () {
                          return d ? f : 1 / f;
                      },
                      V = function (e) {
                          var n, t, i, o;
                          (e = Hn(e, null === (n = x[null === j || void 0 === j ? void 0 : j.baseCoinDenom]) || void 0 === n ? void 0 : n.decimals)
                              .toString()
                              .trim()),
                              F(Fi(Number(Ft(e, null === (t = x[null === j || void 0 === j ? void 0 : j.baseCoinDenom]) || void 0 === t ? void 0 : t.decimals)), z, "macro"));
                          var a = (e * U()).toFixed(Fn(null === (i = x[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === i ? void 0 : i.decimals));
                          w(e), B(Fi(Number(Ft(a, null === (o = x[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === o ? void 0 : o.decimals)), K, "macro")), isFinite(Number(a)) && S(a);
                      },
                      W = function (e) {
                          var n, t, i, o;
                          (e = Hn(e, null === (n = x[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === n ? void 0 : n.decimals)
                              .toString()
                              .trim()),
                              B(Fi(Number(Ft(e, null === (t = x[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === t ? void 0 : t.decimals)), K, "macro"));
                          var a = (e * H()).toFixed(Fn(null === (i = x[null === j || void 0 === j ? void 0 : j.baseCoinDenom]) || void 0 === i ? void 0 : i.decimals));
                          S(e), F(Fi(Number(Ft(a, null === (o = x[null === j || void 0 === j ? void 0 : j.baseCoinDenom]) || void 0 === o ? void 0 : o.decimals)), z, "macro")), isFinite(Number(a)) && w(a);
                      },
                      z = Vt(c, null === j || void 0 === j ? void 0 : j.baseCoinDenom) || 0,
                      K = Vt(c, null === j || void 0 === j ? void 0 : j.quoteCoinDenom) || 0,
                      Q = function () {
                          var e, n;
                          E(!0);
                          var t = [
                              { denom: null === j || void 0 === j ? void 0 : j.baseCoinDenom, amount: Ft(y, null === (e = x[null === j || void 0 === j ? void 0 : j.baseCoinDenom]) || void 0 === e ? void 0 : e.decimals) },
                              { denom: null === j || void 0 === j ? void 0 : j.quoteCoinDenom, amount: Ft(D, null === (n = x[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === n ? void 0 : n.decimals) },
                          ].sort(function (e, n) {
                              return e.denom.localeCompare(n.denom);
                          });
                          it(
                              {
                                  message: { typeUrl: "/comdex.liquidity.v1beta1.MsgDeposit", value: { depositor: o.toString(), poolId: null === s || void 0 === s ? void 0 : s.id, appId: fn.a.fromNumber(G), depositCoins: t } },
                                  fee: qi(),
                                  memo: "",
                              },
                              o,
                              function (e, n) {
                                  E(!1),
                                      p(),
                                      h(),
                                      e
                                          ? a.a.error(e)
                                          : null !== n && void 0 !== n && n.code
                                          ? a.a.info(null === n || void 0 === n ? void 0 : n.rawLog)
                                          : (b(!0), w(), S(), F(), B(), a.a.success(Object(Ue.jsx)(Ai, { message: Wt[i].tx_success, hash: null === n || void 0 === n ? void 0 : n.transactionHash })));
                              }
                          );
                      },
                      X = Object(l.useCallback)(
                          function () {
                              var e = (d ? 1 / f : f) * Pn(m, null === j || void 0 === j ? void 0 : j.quoteCoinDenom) * y;
                              return "\u2248 $".concat(Number(e && isFinite(e) ? e : 0).toFixed(2));
                          },
                          [m, f, y, null === j || void 0 === j ? void 0 : j.quoteCoinDenom, d]
                      ),
                      $ = Object(l.useCallback)(
                          function () {
                              var e = (d ? f : 1 / f) * Pn(m, null === j || void 0 === j ? void 0 : j.baseCoinDenom) * D;
                              return "\u2248 $".concat(Number(e && isFinite(e) ? e : 0).toFixed(2));
                          },
                          [m, f, D, null === j || void 0 === j ? void 0 : j.baseCoinDenom, d]
                      );
                  return Object(Ue.jsx)("div", {
                      className: "common-card",
                      children: Object(Ue.jsxs)("div", {
                          className: "farm-content-card",
                          children: [
                              Object(Ue.jsxs)("div", {
                                  className: "assets-select-card",
                                  children: [
                                      Object(Ue.jsxs)("div", {
                                          className: "assets-left",
                                          children: [
                                              Object(Ue.jsxs)("label", { className: "leftlabel", children: [Wt[i].provide, " ", Ht(null === j || void 0 === j ? void 0 : j.baseCoinDenom)] }),
                                              Object(Ue.jsx)("div", {
                                                  className: "assets-select-wrapper",
                                                  children: Object(Ue.jsx)("div", {
                                                      className: "farm-asset-icon-container",
                                                      children: Object(Ue.jsxs)("div", {
                                                          className: "select-inner",
                                                          children: [
                                                              Object(Ue.jsx)("div", {
                                                                  className: "svg-icon",
                                                                  children: Object(Ue.jsx)("div", { className: "svg-icon-inner", children: Object(Ue.jsx)(nn, { name: qn(null === j || void 0 === j ? void 0 : j.baseCoinDenom) }) }),
                                                              }),
                                                              Object(Ue.jsx)("div", { className: "name", children: Ht(null === j || void 0 === j ? void 0 : j.baseCoinDenom) }),
                                                          ],
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                      Object(Ue.jsxs)("div", {
                                          className: "assets-right",
                                          children: [
                                              Object(Ue.jsxs)("div", {
                                                  className: "label-right",
                                                  children: [
                                                      Wt[i].available,
                                                      " ",
                                                      Object(Ue.jsxs)("span", {
                                                          className: "ml-1",
                                                          children: [
                                                              " ",
                                                              Lt(z, null === (n = x[null === j || void 0 === j ? void 0 : j.baseCoinDenom]) || void 0 === n ? void 0 : n.decimals),
                                                              " ",
                                                              Ht(null === j || void 0 === j ? void 0 : j.baseCoinDenom),
                                                          ],
                                                      }),
                                                      Object(Ue.jsx)("div", {
                                                          className: "maxhalf",
                                                          children: Object(Ue.jsx)(u.a, {
                                                              className: "active",
                                                              onClick: function () {
                                                                  var e, n;
                                                                  return (function (e) {
                                                                      var n, t;
                                                                      return Number(Ft(e * U(), null === (n = x[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === n ? void 0 : n.decimals)) < Number(K)
                                                                          ? V(e)
                                                                          : W(qt(K, null === (t = x[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === t ? void 0 : t.decimals));
                                                                  })(
                                                                      (null === j || void 0 === j ? void 0 : j.baseCoinDenom) === (null === ln || void 0 === ln ? void 0 : ln.coinDenom) && Number(z) > Y
                                                                          ? qt(z - Y, null === (e = x[null === j || void 0 === j ? void 0 : j.baseCoinDenom]) || void 0 === e ? void 0 : e.decimals)
                                                                          : qt(z, null === (n = x[null === j || void 0 === j ? void 0 : j.baseCoinDenom]) || void 0 === n ? void 0 : n.decimals)
                                                                  );
                                                              },
                                                              children: Wt[i].max,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              Object(Ue.jsxs)("div", {
                                                  className: "input-select",
                                                  children: [
                                                      Object(Ue.jsx)(Mi, {
                                                          value: y,
                                                          onChange: function (e) {
                                                              return V(e.target.value);
                                                          },
                                                          validationError: M,
                                                      }),
                                                      Object(Ue.jsx)("small", { children: (null === s || void 0 === s ? void 0 : s.id) && X() }),
                                                      Object(Ue.jsx)("small", {
                                                          children:
                                                              (null === s || void 0 === s ? void 0 : s.id) &&
                                                              (function () {
                                                                  var e = Ht(null === j || void 0 === j ? void 0 : j.baseCoinDenom),
                                                                      n = Ht(null === j || void 0 === j ? void 0 : j.quoteCoinDenom),
                                                                      t = d ? 1 / f : f;
                                                                  return "1 "
                                                                      .concat(e || "", " = ")
                                                                      .concat(Number(t && isFinite(t) ? t : 0).toFixed(null === ln || void 0 === ln ? void 0 : ln.coinDecimals), " ")
                                                                      .concat(n || "");
                                                              })(),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              Object(Ue.jsxs)("div", {
                                  className: "assets-select-card mb-3",
                                  children: [
                                      Object(Ue.jsxs)("div", {
                                          className: "assets-left",
                                          children: [
                                              Object(Ue.jsxs)("label", { className: "leftlabel", children: [Wt[i].provide, " ", Ht(null === j || void 0 === j ? void 0 : j.quoteCoinDenom), " "] }),
                                              Object(Ue.jsx)("div", {
                                                  className: "assets-select-wrapper",
                                                  children: Object(Ue.jsx)("div", {
                                                      className: "farm-asset-icon-container",
                                                      children: Object(Ue.jsxs)("div", {
                                                          className: "select-inner",
                                                          children: [
                                                              Object(Ue.jsx)("div", {
                                                                  className: "svg-icon",
                                                                  children: Object(Ue.jsx)("div", { className: "svg-icon-inner", children: Object(Ue.jsx)(nn, { name: qn(null === j || void 0 === j ? void 0 : j.quoteCoinDenom) }) }),
                                                              }),
                                                              Object(Ue.jsx)("div", { className: "name", children: Ht(null === j || void 0 === j ? void 0 : j.quoteCoinDenom) }),
                                                          ],
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                      Object(Ue.jsxs)("div", {
                                          className: "assets-right",
                                          children: [
                                              Object(Ue.jsxs)("div", {
                                                  className: "label-right",
                                                  children: [
                                                      Wt[i].available,
                                                      " ",
                                                      Object(Ue.jsxs)("span", {
                                                          className: "ml-1",
                                                          children: [
                                                              Lt(K, null === (t = x[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === t ? void 0 : t.decimals),
                                                              " ",
                                                              Ht(null === j || void 0 === j ? void 0 : j.quoteCoinDenom),
                                                          ],
                                                      }),
                                                      Object(Ue.jsx)("div", {
                                                          className: "maxhalf",
                                                          children: Object(Ue.jsx)(u.a, {
                                                              className: "active",
                                                              onClick: function () {
                                                                  var e, n;
                                                                  return (function (e) {
                                                                      var n, t;
                                                                      return Number(Ft(e * H(), null === (n = x[null === j || void 0 === j ? void 0 : j.baseCoinDenom]) || void 0 === n ? void 0 : n.decimals)) < Number(z)
                                                                          ? W(e)
                                                                          : V(qt(z, null === (t = x[null === j || void 0 === j ? void 0 : j.baseCoinDenom]) || void 0 === t ? void 0 : t.decimals));
                                                                  })(
                                                                      (null === j || void 0 === j ? void 0 : j.quoteCoinDenom) === (null === ln || void 0 === ln ? void 0 : ln.coinDenom) && Number(K) > Y
                                                                          ? qt(K - Y, null === (e = x[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === e ? void 0 : e.decimals)
                                                                          : qt(K, null === (n = x[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === n ? void 0 : n.decimals)
                                                                  );
                                                              },
                                                              children: Wt[i].max,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              Object(Ue.jsxs)("div", {
                                                  className: "input-select",
                                                  children: [
                                                      Object(Ue.jsx)(Mi, {
                                                          value: D,
                                                          onChange: function (e) {
                                                              return W(e.target.value);
                                                          },
                                                          validationError: q,
                                                      }),
                                                      Object(Ue.jsx)("small", { children: (null === s || void 0 === s ? void 0 : s.id) && $() }),
                                                      Object(Ue.jsx)("small", {
                                                          children:
                                                              (null === s || void 0 === s ? void 0 : s.id) &&
                                                              (function () {
                                                                  var e = Ht(null === j || void 0 === j ? void 0 : j.baseCoinDenom),
                                                                      n = Ht(null === j || void 0 === j ? void 0 : j.quoteCoinDenom),
                                                                      t = d ? f : 1 / f;
                                                                  return "1 "
                                                                      .concat(n || "", " = ")
                                                                      .concat(Number(t && isFinite(t) ? t : 0).toFixed(6), " ")
                                                                      .concat(e || "");
                                                              })(),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              Object(Ue.jsx)(Ze, { className: "pool_balance p-1", children: Object(Ue.jsx)(ho, {}) }),
                              Object(Ue.jsx)("div", {
                                  className: "assets PoolSelect-btn",
                                  children: Object(Ue.jsx)("div", {
                                      className: "assets-form-btn text-center  mb-2",
                                      children: Object(Ue.jsx)(u.a, {
                                          loading: k,
                                          disabled: k || !(null !== s && void 0 !== s && s.id) || !Number(y) || !Number(D) || (null === M || void 0 === M ? void 0 : M.message) || (null === q || void 0 === q ? void 0 : q.message),
                                          type: "primary",
                                          className: "btn-filled",
                                          onClick: function () {
                                              return Q();
                                          },
                                          children: "Add Liquidity",
                                      }),
                                  }),
                              }),
                          ],
                      }),
                  });
              }),
              xo = t(256),
              go = { 0: "0", 50: "50%", 100: "100%" },
              No = Object(o.b)(function (e) {
                  return { lang: e.language, address: e.account.address, pool: e.liquidity.pool._ };
              })(function (e) {
                  var n = e.lang,
                      t = e.address,
                      i = e.pool,
                      o = e.refreshData,
                      s = e.updateBalance,
                      c = e.userPoolTokens,
                      d = Object(l.useState)(!1),
                      v = Object(r.a)(d, 2),
                      m = v[0],
                      b = v[1],
                      j = Object(l.useState)(),
                      p = Object(r.a)(j, 2),
                      h = p[0],
                      f = p[1],
                      O = Object(l.useState)(0),
                      x = Object(r.a)(O, 2),
                      g = x[0],
                      N = x[1],
                      y = function (e) {
                          f(e), w(e);
                      },
                      w = function (e) {
                          N((e / 100) * c);
                      };
                  return Object(Ue.jsx)("div", {
                      className: "common-card",
                      children: Object(Ue.jsx)("div", {
                          className: "farm-content-card",
                          children: Object(Ue.jsxs)(Ei.a, {
                              layout: "vertical",
                              children: [
                                  Object(Ue.jsx)(Ze, { className: "mb-3", children: Object(Ue.jsx)(Ge, { children: Object(Ue.jsx)("h2", { className: "card-titles", children: "Amount to Farm" }) }) }),
                                  Object(Ue.jsx)(Ze, {
                                      className: "mb-5",
                                      children: Object(Ue.jsx)(Ge, {
                                          children: Object(Ue.jsx)("div", {
                                              className: "slider-bar mt-4 pb-4",
                                              children: Object(Ue.jsxs)("div", {
                                                  className: "slider-numbers remove-liquidity-slider",
                                                  children: [
                                                      Object(Ue.jsx)(xo.a, { className: "comdex-slider-alt", marks: go, value: h, max: 100, min: 0, disabled: !Number(c), onChange: y, tooltip: { open: !1 } }),
                                                      Object(Ue.jsx)(Mi, {
                                                          defaultValue: h,
                                                          onChange: function (e) {
                                                              var n;
                                                              y(null === (n = e.target) || void 0 === n ? void 0 : n.value);
                                                          },
                                                          disabled: !Number(c),
                                                          placeholder: "0",
                                                          value: "".concat(h),
                                                      }),
                                                      Object(Ue.jsx)("span", { className: "percent-text", children: "%" }),
                                                  ],
                                              }),
                                          }),
                                      }),
                                  }),
                                  Object(Ue.jsxs)(Ze, {
                                      className: "pool_balance p-1 mb-2 pt-1",
                                      children: [
                                          Object(Ue.jsx)(Ge, { className: "label-left", children: "You will farm" }),
                                          Object(Ue.jsxs)(Ge, { className: "text-right", children: [Object(Ue.jsx)(po, { poolTokens: g }), " \u2248", " ", Number(g).toFixed() || 0, " PoolToken"] }),
                                      ],
                                  }),
                                  Object(Ue.jsx)(Ze, { className: "pool_balance p-1", children: Object(Ue.jsx)(ho, {}) }),
                                  Object(Ue.jsx)(Ze, {
                                      children: Object(Ue.jsx)(Ge, {
                                          className: "text-center mt-5",
                                          children: Object(Ue.jsx)(u.a, {
                                              onClick: function () {
                                                  b(!0),
                                                      it(
                                                          {
                                                              message: {
                                                                  typeUrl: "/comdex.liquidity.v1beta1.MsgFarm",
                                                                  value: {
                                                                      farmer: t,
                                                                      poolId: null === i || void 0 === i ? void 0 : i.id,
                                                                      appId: fn.a.fromNumber(G),
                                                                      farmingPoolCoin: { amount: Number(g).toFixed(0).toString(), denom: null === i || void 0 === i ? void 0 : i.poolCoinDenom },
                                                                  },
                                                              },
                                                              fee: qi(),
                                                              memo: "",
                                                          },
                                                          t,
                                                          function (e, t) {
                                                              b(!1),
                                                                  f(0),
                                                                  N(0),
                                                                  e
                                                                      ? a.a.error(e)
                                                                      : null !== t && void 0 !== t && t.code
                                                                      ? a.a.info(null === t || void 0 === t ? void 0 : t.rawLog)
                                                                      : (o(i), s(), a.a.success(Object(Ue.jsx)(Ai, { message: Wt[n].tx_success, hash: null === t || void 0 === t ? void 0 : t.transactionHash })));
                                                          }
                                                      );
                                              },
                                              disabled: !Number(g) || !h || m || h > 100,
                                              loading: m,
                                              type: "primary",
                                              className: "btn-filled px-5",
                                              children: Wt[n].farm,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  });
              }),
              yo = (t(1642), { 0: "0", 50: "50%", 100: "100%" }),
              wo = Object(o.b)(function (e) {
                  return { lang: e.language, address: e.account.address, pool: e.liquidity.pool._, balances: e.account.balances.list };
              })(function (e) {
                  var n = e.lang,
                      t = e.address,
                      i = e.pool,
                      o = e.refreshData,
                      s = e.updateBalance,
                      c = e.userLockedPoolTokens,
                      d = Object(l.useState)(!1),
                      v = Object(r.a)(d, 2),
                      m = v[0],
                      b = v[1],
                      j = Object(l.useState)(),
                      p = Object(r.a)(j, 2),
                      h = p[0],
                      f = p[1],
                      O = Object(l.useState)(0),
                      x = Object(r.a)(O, 2),
                      g = x[0],
                      N = x[1],
                      y = function (e) {
                          f(e), w(e);
                      },
                      w = function (e) {
                          N((e / 100) * c);
                      };
                  return Object(Ue.jsx)("div", {
                      className: "common-card",
                      children: Object(Ue.jsx)("div", {
                          className: "farm-content-card",
                          children: Object(Ue.jsxs)(Ei.a, {
                              layout: "vertical",
                              children: [
                                  Object(Ue.jsx)(Ze, { className: "mb-3", children: Object(Ue.jsx)(Ge, { children: Object(Ue.jsx)("h2", { className: "card-titles", children: "Amount to Unfarm" }) }) }),
                                  Object(Ue.jsx)(Ze, {
                                      className: "mb-5",
                                      children: Object(Ue.jsx)(Ge, {
                                          children: Object(Ue.jsx)("div", {
                                              className: "slider-bar mt-4 pb-4",
                                              children: Object(Ue.jsxs)("div", {
                                                  className: "slider-numbers remove-liquidity-slider",
                                                  children: [
                                                      Object(Ue.jsx)(xo.a, { className: "comdex-slider-alt", marks: yo, value: h, max: 100, min: 0, disabled: !Number(c), onChange: y, tooltip: { open: !1 } }),
                                                      Object(Ue.jsx)(Mi, {
                                                          defaultValue: h,
                                                          onChange: function (e) {
                                                              var n;
                                                              y(null === (n = e.target) || void 0 === n ? void 0 : n.value);
                                                          },
                                                          placeholder: "0",
                                                          disabled: !Number(c),
                                                          value: "".concat(h),
                                                      }),
                                                      Object(Ue.jsx)("span", { className: "percent-text", children: "%" }),
                                                  ],
                                              }),
                                          }),
                                      }),
                                  }),
                                  Object(Ue.jsxs)(Ze, {
                                      className: "pool_balance p-1 mb-2 pt-1",
                                      children: [
                                          Object(Ue.jsx)(Ge, { className: "label-left", children: "You will unfarm" }),
                                          Object(Ue.jsxs)(Ge, { className: "text-right", children: [Object(Ue.jsx)(po, { poolTokens: g }), " \u2248", " ", Number(g).toFixed() || 0, " PoolToken"] }),
                                      ],
                                  }),
                                  Object(Ue.jsxs)(Ze, {
                                      className: "pool_balance p-1",
                                      children: [
                                          Object(Ue.jsx)(Ge, { className: "label-left", children: "You farmed" }),
                                          Object(Ue.jsxs)(Ge, { className: "text-right", children: [Object(Ue.jsx)(po, { poolTokens: c }), " \u2248", " ", Number(c).toFixed() || 0, " PoolToken"] }),
                                      ],
                                  }),
                                  Object(Ue.jsx)(Ze, {
                                      children: Object(Ue.jsx)(Ge, {
                                          className: "text-center mt-5",
                                          children: Object(Ue.jsx)(u.a, {
                                              onClick: function () {
                                                  b(!0),
                                                      it(
                                                          {
                                                              message: {
                                                                  typeUrl: "/comdex.liquidity.v1beta1.MsgUnfarm",
                                                                  value: {
                                                                      farmer: t,
                                                                      poolId: null === i || void 0 === i ? void 0 : i.id,
                                                                      appId: fn.a.fromNumber(G),
                                                                      unfarmingPoolCoin: { amount: Number(g).toFixed(0).toString(), denom: null === i || void 0 === i ? void 0 : i.poolCoinDenom },
                                                                  },
                                                              },
                                                              fee: qi(),
                                                              memo: "",
                                                          },
                                                          t,
                                                          function (e, t) {
                                                              b(!1),
                                                                  f(0),
                                                                  N(0),
                                                                  e
                                                                      ? a.a.error(e)
                                                                      : null !== t && void 0 !== t && t.code
                                                                      ? a.a.info(null === t || void 0 === t ? void 0 : t.rawLog)
                                                                      : (o(i), s(), a.a.success(Object(Ue.jsx)(Ai, { message: Wt[n].tx_success, hash: null === t || void 0 === t ? void 0 : t.transactionHash })));
                                                          }
                                                      );
                                              },
                                              disabled: !Number(g) || !h || m || h > 100,
                                              loading: m,
                                              type: "primary",
                                              className: "btn-filled px-5",
                                              children: Wt[n].un_farm,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  });
              }),
              Co = { 0: "0", 50: "50%", 100: "100%" },
              _o = Object(o.b)(function (e) {
                  return { lang: e.language, address: e.account.address, pool: e.liquidity.pool._, balances: e.account.balances.list };
              })(function (e) {
                  var n = e.lang,
                      t = e.pool,
                      i = e.balances,
                      o = e.address,
                      s = e.refreshData,
                      c = e.updateBalance,
                      d = Object(l.useState)(0),
                      v = Object(r.a)(d, 2),
                      m = v[0],
                      b = v[1],
                      j = Object(l.useState)(!1),
                      p = Object(r.a)(j, 2),
                      h = p[0],
                      f = p[1],
                      O = Object(l.useState)(),
                      x = Object(r.a)(O, 2),
                      g = x[0],
                      N = x[1],
                      y = qt(Vt(i, null === t || void 0 === t ? void 0 : t.poolCoinDenom)) || 0,
                      w = function (e) {
                          b(e), C(e);
                      },
                      C = function (e) {
                          var n = (e / 100) * y;
                          N(n && Ft(n));
                      },
                      _ = Vt(i, null === t || void 0 === t ? void 0 : t.poolCoinDenom) || 0;
                  return Object(Ue.jsx)("div", {
                      className: "common-card",
                      children: Object(Ue.jsx)("div", {
                          className: "farm-content-card",
                          children: Object(Ue.jsxs)(Ei.a, {
                              layout: "vertical",
                              children: [
                                  Object(Ue.jsx)(Ze, { className: "mb-3", children: Object(Ue.jsx)(Ge, { children: Object(Ue.jsx)("h2", { className: "card-titles", children: "Amount to Withdraw" }) }) }),
                                  Object(Ue.jsx)(Ze, {
                                      className: "mb-5",
                                      children: Object(Ue.jsx)(Ge, {
                                          children: Object(Ue.jsx)("div", {
                                              className: "slider-bar mt-4 pb-4",
                                              children: Object(Ue.jsxs)("div", {
                                                  className: "slider-numbers remove-liquidity-slider",
                                                  children: [
                                                      Object(Ue.jsx)(xo.a, { className: "comdex-slider-alt", marks: Co, value: m, max: 100, min: 0, onChange: w, tooltip: { open: !1 } }),
                                                      Object(Ue.jsx)(Mi, {
                                                          defaultValue: m,
                                                          onChange: function (e) {
                                                              var n;
                                                              w(null === (n = e.target) || void 0 === n ? void 0 : n.value);
                                                          },
                                                          placeholder: "0",
                                                          value: "".concat(m),
                                                      }),
                                                      Object(Ue.jsx)("span", { className: "percent-text", children: "%" }),
                                                  ],
                                              }),
                                          }),
                                      }),
                                  }),
                                  Object(Ue.jsxs)(Ze, {
                                      className: "pool_balance p-1 mb-2 pt-1",
                                      children: [
                                          Object(Ue.jsx)(Ge, { className: "label-left", children: "Tokens to be withdrawn" }),
                                          Object(Ue.jsxs)(Ge, { className: "text-right", children: [Object(Ue.jsx)(po, { poolTokens: g || 0 }), " \u2248 ", g || 0, " ", "PoolToken"] }),
                                      ],
                                  }),
                                  Object(Ue.jsx)(Ze, { className: "pool_balance p-1", children: Object(Ue.jsx)(ho, {}) }),
                                  Object(Ue.jsx)(Ze, {
                                      children: Object(Ue.jsx)(Ge, {
                                          className: "text-center mt-5",
                                          children: Object(Ue.jsx)(u.a, {
                                              onClick: function () {
                                                  f(!0),
                                                      it(
                                                          {
                                                              message: {
                                                                  typeUrl: "/comdex.liquidity.v1beta1.MsgWithdraw",
                                                                  value: {
                                                                      withdrawer: o,
                                                                      poolId: null === t || void 0 === t ? void 0 : t.id,
                                                                      appId: fn.a.fromNumber(G),
                                                                      poolCoin: { denom: null === t || void 0 === t ? void 0 : t.poolCoinDenom, amount: g },
                                                                  },
                                                              },
                                                              fee: qi(),
                                                              memo: "",
                                                          },
                                                          o,
                                                          function (e, i) {
                                                              f(!1),
                                                                  b(),
                                                                  N(),
                                                                  s(t),
                                                                  c(),
                                                                  e
                                                                      ? a.a.error(e)
                                                                      : null !== i && void 0 !== i && i.code
                                                                      ? a.a.info(null === i || void 0 === i ? void 0 : i.rawLog)
                                                                      : a.a.success(Object(Ue.jsx)(Ai, { message: Wt[n].tx_success, hash: null === i || void 0 === i ? void 0 : i.transactionHash }));
                                                          }
                                                      );
                                              },
                                              type: "primary",
                                              disabled: !m || h || m > 100 || !_,
                                              loading: h,
                                              className: "btn-filled px-4",
                                              children: "Remove Liquidity",
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  });
              }),
              Do = Object(Ue.jsx)(hi.a, { maxWidth: 767, children: Object(Ue.jsx)(i.b, { to: "/farm", children: Object(Ue.jsx)(u.a, { type: "primary", className: "back-btn", children: "Back" }) }) }),
              So = {
                  setPool: me,
                  setPoolBalance: be,
                  setFetchBalanceInProgress: function (e) {
                      return { type: ee, value: e };
                  },
                  setSpotPrice: function (e) {
                      return { type: Z, value: e };
                  },
                  setPair: V,
                  setUserLiquidityInPools: fe,
              },
              To = Object(o.b)(function (e) {
                  return {
                      address: e.account.address,
                      inProgress: e.liquidity.inProgress,
                      pools: e.liquidity.pool.list,
                      pool: e.liquidity.pool._,
                      refreshBalance: e.account.refreshBalance,
                      balances: e.account.balances.list,
                      userLiquidityInPools: e.liquidity.userLiquidityInPools,
                      pair: e.asset.pair,
                      markets: e.oracle.market.list,
                      assetMap: e.asset.map,
                      rewardsMap: e.liquidity.rewardsMap,
                  };
              }, So)(function (e) {
                  var n,
                      t,
                      s,
                      c = e.address,
                      d = e.setPool,
                      v = e.pool,
                      m = e.setPoolBalance,
                      b = e.setFetchBalanceInProgress,
                      j = e.setSpotPrice,
                      p = e.refreshBalance,
                      h = e.pair,
                      f = e.setPair,
                      O = e.markets,
                      x = e.balances,
                      g = e.setUserLiquidityInPools,
                      N = e.userLiquidityInPools,
                      y = e.assetMap,
                      w = e.rewardsMap,
                      C = Object(l.useState)(),
                      _ = Object(r.a)(C, 2),
                      D = _[0],
                      S = _[1],
                      T = Object(l.useState)(0),
                      I = Object(r.a)(T, 2),
                      k = I[0],
                      E = I[1],
                      A = Object(l.useState)(0),
                      P = Object(r.a)(A, 2),
                      M = P[0],
                      F = P[1],
                      L = Object(o.c)(),
                      R = Object(Oi.n)().id,
                      q = Vt(x, null === v || void 0 === v ? void 0 : v.poolCoinDenom) || 0,
                      B =
                          M && M.length > 0
                              ? null === M || void 0 === M
                                  ? void 0
                                  : M.map(function (e) {
                                        var n;
                                        return null === e || void 0 === e || null === (n = e.poolCoin) || void 0 === n ? void 0 : n.amount;
                                    })
                              : 0,
                      U =
                          Number(
                              (null === B || void 0 === B ? void 0 : B.length) > 0 &&
                                  (null === B || void 0 === B
                                      ? void 0
                                      : B.reduce(function (e, n) {
                                            return Number(e) + Number(n);
                                        }, 0))
                          ) + Number(null === k || void 0 === k ? void 0 : k.amount) || 0;
                  Object(l.useEffect)(
                      function () {
                          c && null !== v && void 0 !== v && v.id && H();
                      },
                      [c, v, p]
                  );
                  var H = function () {
                      Et(c, null === v || void 0 === v ? void 0 : v.id, function (e, n) {
                          e || (E(null === n || void 0 === n ? void 0 : n.activePoolCoin), F(null === n || void 0 === n ? void 0 : n.queuedPoolCoin));
                      });
                  };
                  Object(l.useEffect)(function () {
                      R && V(R), f({});
                  }, []);
                  var V = function () {
                      Pt(R, function (e, n) {
                          e || d(null === n || void 0 === n ? void 0 : n.pool);
                      });
                  };
                  Object(l.useEffect)(
                      function () {
                          null !== v &&
                              void 0 !== v &&
                              v.pairId &&
                              kt(null === v || void 0 === v ? void 0 : v.pairId, function (e, n) {
                                  e ? a.a.error(e) : f(n.pair);
                              });
                      },
                      [v]
                  ),
                      Object(l.useEffect)(
                          function () {
                              null !== v && void 0 !== v && v.id && W();
                          },
                          [v, q, U]
                      );
                  var W = function () {
                          At(null === v || void 0 === v ? void 0 : v.id, Number(q) + U, function (e, n) {
                              e ? a.a.error(e) : S(null === n || void 0 === n ? void 0 : n.coins);
                          });
                      },
                      z = function () {
                          null !== v && void 0 !== v && v.reserveAccountAddress && Y(null === v || void 0 === v ? void 0 : v.reserveAccountAddress), R && V(R);
                      },
                      Y = function (e) {
                          b(!0),
                              jt(e, function (e, n) {
                                  if ((b(!1), !e)) {
                                      m(n.balances);
                                      var t = (n.balances && n.balances[0] && n.balances[0].amount) / (n.balances && n.balances[1] && n.balances[1].amount);
                                      j(t.toFixed(6));
                                  }
                              });
                      },
                      G = function () {
                          L({ type: "BALANCE_REFRESH_SET", value: p + 1 });
                      },
                      K = function (e, n) {
                          var t,
                              i =
                                  null === e || void 0 === e
                                      ? void 0
                                      : e.filter(function (e) {
                                            return e.denom === n;
                                        })[0];
                          return "".concat(Lt((null === i || void 0 === i ? void 0 : i.amount) || 0, null === (t = y[null === i || void 0 === i ? void 0 : i.denom]) || void 0 === t ? void 0 : t.decimals), " ").concat(Ht(n));
                      },
                      Q = function (e) {
                          return e && e.length > 0
                              ? e
                                    .map(function (e) {
                                        var n;
                                        return (
                                            Number(qt(null === e || void 0 === e ? void 0 : e.amount, null === (n = y[null === e || void 0 === e ? void 0 : e.denom]) || void 0 === n ? void 0 : n.decimals)) *
                                            Pn(O, null === e || void 0 === e ? void 0 : e.denom)
                                        );
                                    })
                                    .reduce(function (e, n) {
                                        return e + n;
                                    }, 0)
                              : 0;
                      },
                      X = Rt(Q(null === v || void 0 === v ? void 0 : v.balances), 2);
                  Object(l.useEffect)(
                      function () {
                          var e = Number(Q(D));
                          null !== v && void 0 !== v && v.id && g(null === v || void 0 === v ? void 0 : v.id, e);
                      },
                      [D]
                  );
                  var $ = [
                      { label: "Deposit", key: "1", children: Object(Ue.jsx)(Oo, { refreshData: z, updateBalance: G }) },
                      { label: "Withdraw", key: "2", children: Object(Ue.jsx)(_o, { refreshData: z, updateBalance: G }) },
                      { label: "Farm", key: "3", children: Object(Ue.jsx)(No, { refreshData: z, updateBalance: G, userPoolTokens: q }) },
                      { label: "Unfarm", key: "4", children: Object(Ue.jsx)(wo, { refreshData: z, updateBalance: G, userLockedPoolTokens: U }) },
                  ];
                  return Object(Ue.jsxs)(Ze, {
                      children: [
                          Object(Ue.jsx)(Ge, { md: "6", children: Object(Ue.jsx)(vo.a, { className: "comdex-tabs farm-modal-tab farm-details-tab", tabBarExtraContent: Do, items: $ }) }),
                          Object(Ue.jsxs)(Ge, {
                              md: "6",
                              children: [
                                  Object(Ue.jsx)(hi.a, {
                                      minWidth: 767,
                                      children: Object(Ue.jsx)("div", { className: "text-right mb-4", children: Object(Ue.jsx)(i.b, { to: "/farm", children: Object(Ue.jsx)(u.a, { className: "back-btn", children: "Back" }) }) }),
                                  }),
                                  Object(Ue.jsxs)("div", {
                                      className: "farm-content-card-right",
                                      children: [
                                          Object(Ue.jsx)("h3", { className: "mt-2 mb-2", children: "Pool Details" }),
                                          Object(Ue.jsxs)(Ze, {
                                              children: [
                                                  Object(Ue.jsx)(Ge, {
                                                      sm: "6",
                                                      children: Object(Ue.jsxs)("div", {
                                                          className: "pool-details-upper",
                                                          children: [
                                                              Object(Ue.jsx)("div", {
                                                                  className: "pool-details-icon",
                                                                  children: Object(Ue.jsx)("div", {
                                                                      className: "pool-details-icon-inner",
                                                                      children: Object(Ue.jsx)(nn, { name: qn(null === h || void 0 === h ? void 0 : h.baseCoinDenom) }),
                                                                  }),
                                                              }),
                                                              Object(Ue.jsxs)("div", {
                                                                  className: "pool-details-dlt",
                                                                  children: [Object(Ue.jsx)("h2", { children: "50%" }), Object(Ue.jsx)("small", { children: Ht(null === h || void 0 === h ? void 0 : h.baseCoinDenom) })],
                                                              }),
                                                          ],
                                                      }),
                                                  }),
                                                  Object(Ue.jsx)(Ge, {
                                                      sm: "6",
                                                      children: Object(Ue.jsxs)("div", {
                                                          className: "pool-details-upper",
                                                          children: [
                                                              Object(Ue.jsx)("div", {
                                                                  className: "pool-details-icon",
                                                                  children: Object(Ue.jsx)("div", {
                                                                      className: "pool-details-icon-inner",
                                                                      children: Object(Ue.jsx)(nn, { name: qn(null === h || void 0 === h ? void 0 : h.quoteCoinDenom) }),
                                                                  }),
                                                              }),
                                                              Object(Ue.jsxs)("div", {
                                                                  className: "pool-details-dlt",
                                                                  children: [Object(Ue.jsx)("h2", { children: "50%" }), Object(Ue.jsx)("small", { children: Ht(null === h || void 0 === h ? void 0 : h.quoteCoinDenom) })],
                                                              }),
                                                          ],
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          Object(Ue.jsxs)(Ze, {
                                              className: "pool-details-list",
                                              children: [
                                                  Object(Ue.jsxs)(Ge, {
                                                      sm: "6",
                                                      className: "mb-3",
                                                      children: [
                                                          Object(Ue.jsx)("label", { children: "Total Amount" }),
                                                          Object(Ue.jsxs)("p", {
                                                              children: [
                                                                  " ",
                                                                  (null === h || void 0 === h ? void 0 : h.baseCoinDenom) && K(null === v || void 0 === v ? void 0 : v.balances, null === h || void 0 === h ? void 0 : h.baseCoinDenom),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                                  Object(Ue.jsxs)(Ge, {
                                                      sm: "6",
                                                      className: "mb-3",
                                                      children: [
                                                          Object(Ue.jsx)("label", { children: "Total Amount" }),
                                                          Object(Ue.jsxs)("p", {
                                                              children: [
                                                                  " ",
                                                                  (null === h || void 0 === h ? void 0 : h.quoteCoinDenom) && K(null === v || void 0 === v ? void 0 : v.balances, null === h || void 0 === h ? void 0 : h.quoteCoinDenom),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                                  Object(Ue.jsxs)(Ge, {
                                                      sm: "6",
                                                      className: "mb-3",
                                                      children: [
                                                          Object(Ue.jsxs)("label", { children: ["Pool Liquidity", Object(Ue.jsx)(mo, { text: "Total Liquidity of the current pool" })] }),
                                                          Object(Ue.jsx)("p", { children: "$".concat(X) }),
                                                      ],
                                                  }),
                                                  Object(Ue.jsxs)(Ge, {
                                                      sm: "6",
                                                      className: "mb-3",
                                                      children: [
                                                          Object(Ue.jsxs)("label", {
                                                              children: ["Apr", Object(Ue.jsx)(mo, { text: "Annual percentage rate of rewards for the corresponding pool. Note:- APRs are subject to change with pool size." })],
                                                          }),
                                                          Object(Ue.jsxs)("div", {
                                                              className: "farm-apr-modal",
                                                              children: [
                                                                  Object(Ue.jsx)($i, { pool: v }),
                                                                  Object(Ue.jsxs)("div", {
                                                                      className: "swap-apr mt-1",
                                                                      children: [
                                                                          "Swap APR -",
                                                                          " ",
                                                                          En(
                                                                              Number(
                                                                                  (null === w ||
                                                                                  void 0 === w ||
                                                                                  null === (n = w[null === v || void 0 === v || null === (s = v.id) || void 0 === s ? void 0 : s.toNumber()]) ||
                                                                                  void 0 === n ||
                                                                                  null === (t = n.swap_fee_rewards[0]) ||
                                                                                  void 0 === t
                                                                                      ? void 0
                                                                                      : t.apr) || 0
                                                                              ).toFixed(2)
                                                                          ),
                                                                          "%",
                                                                      ],
                                                                  }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  Object(Ue.jsxs)("div", {
                                      className: "farm-content-card-right mt-4",
                                      children: [
                                          Object(Ue.jsx)("h3", { className: "mt-2 mb-2", children: "Your Details" }),
                                          Object(Ue.jsxs)(Ze, {
                                              className: "pool-details-list",
                                              children: [
                                                  Object(Ue.jsxs)(Ge, {
                                                      sm: "4",
                                                      className: "mb-3",
                                                      children: [
                                                          Object(Ue.jsxs)("label", { children: ["My Amount", Object(Ue.jsx)(mo, { text: "Total Liquidity of the current pool" })] }),
                                                          Object(Ue.jsxs)("p", { children: [" ", (null === h || void 0 === h ? void 0 : h.baseCoinDenom) && K(D, null === h || void 0 === h ? void 0 : h.baseCoinDenom)] }),
                                                      ],
                                                  }),
                                                  Object(Ue.jsxs)(Ge, {
                                                      sm: "4",
                                                      className: "mb-3",
                                                      children: [
                                                          Object(Ue.jsx)("label", { children: "My Amount" }),
                                                          Object(Ue.jsxs)("p", { children: [" ", (null === h || void 0 === h ? void 0 : h.quoteCoinDenom) && K(D, null === h || void 0 === h ? void 0 : h.quoteCoinDenom)] }),
                                                      ],
                                                  }),
                                                  Object(Ue.jsxs)(Ge, {
                                                      sm: "4",
                                                      className: "mb-3",
                                                      children: [Object(Ue.jsx)("label", { children: "My liquidity" }), Object(Ue.jsxs)("p", { children: ["$", En(Number(N[null === v || void 0 === v ? void 0 : v.id] || 0).toFixed(2))] })],
                                                  }),
                                                  Object(Ue.jsxs)(Ge, {
                                                      sm: "4",
                                                      className: "mb-3",
                                                      children: [Object(Ue.jsx)("label", { children: "Available LP Amount" }), Object(Ue.jsx)("p", { children: Object(Ue.jsx)(po, { poolTokens: q }) })],
                                                  }),
                                                  Object(Ue.jsxs)(Ge, {
                                                      sm: "4",
                                                      className: "mb-3",
                                                      children: [Object(Ue.jsx)("label", { children: "Farmed LP Amount" }), Object(Ue.jsx)("p", { children: Object(Ue.jsx)(po, { poolTokens: U }) })],
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
              }),
              Io = "ALL_PROPOSALS_SET",
              ko = "PROPOSALS_SET",
              Eo = "PROPOSAL_SET",
              Ao = "PROPOSAL_TALLY_SET",
              Po = "PROPOSER_SET",
              Mo = t(360),
              Fo = null,
              Lo = function (e) {
                  if (Fo) {
                      var n = new Mo.QueryClientImpl(Fo);
                      return e(null, n);
                  }
                  et(function (n, t) {
                      if (n) return e(n);
                      Fo = t;
                      var i = new Mo.QueryClientImpl(t);
                      return e(null, i);
                  });
              },
              Ro = t(375),
              qo = t.n(Ro),
              Bo = function (e) {
                  return qo()(e).format("YYYY-MM-DD HH:mm:ss");
              },
              Uo = (t(1643), io.a.Option),
              Ho = {
                  setAllProposals: function (e) {
                      return { type: Io, list: e };
                  },
                  setProposals: function (e) {
                      return { type: ko, list: e };
                  },
              },
              Vo = Object(o.b)(function (e) {
                  return { lang: e.language, allProposals: e.govern.allProposals, proposals: e.govern.proposals };
              }, Ho)(function (e) {
                  var n = e.setAllProposals,
                      t = e.allProposals,
                      i = e.setProposals,
                      o = e.proposals,
                      s = Object(Oi.l)(),
                      c = Object(l.useState)(!1),
                      d = Object(r.a)(c, 2),
                      v = d[0],
                      m = d[1];
                  Object(l.useEffect)(function () {
                      b();
                  }, []);
                  var b = function () {
                      var e;
                      m(!0),
                          (e = function (e, t) {
                              var o;
                              m(!1), e ? a.a.error(e) : (i(null === t || void 0 === t || null === (o = t.proposals) || void 0 === o ? void 0 : o.reverse()), n(null === t || void 0 === t ? void 0 : t.proposals));
                          }),
                          k.a
                              .get("".concat(null === ln || void 0 === ln ? void 0 : ln.rest, "/cosmos/gov/v1beta1/proposals"))
                              .then(function (n) {
                                  e(null, null === n || void 0 === n ? void 0 : n.data);
                              })
                              .catch(function (n) {
                                  e(null === n || void 0 === n ? void 0 : n.message);
                              });
                  };
                  return Object(Ue.jsx)("div", {
                      className: "app-content-wrapper",
                      children:
                          !v || (null !== o && void 0 !== o && o.length)
                              ? Object(Ue.jsx)(Ue.Fragment, {
                                    children: Object(Ue.jsx)(Ze, {
                                        children: Object(Ue.jsx)(Ge, {
                                            children: Object(Ue.jsxs)("div", {
                                                className: "comdex-card govern-card",
                                                children: [
                                                    Object(Ue.jsxs)("div", {
                                                        className: "governcard-head",
                                                        children: [
                                                            Object(Ue.jsx)("a", {
                                                                "aria-label": "Twitter",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                href: "https://forum.comdex.one",
                                                                children: Object(Ue.jsx)(u.a, { type: "secondary", className: "px-5", children: "Forum" }),
                                                            }),
                                                            Object(Ue.jsxs)(io.a, {
                                                                defaultValue: "Filter",
                                                                className: "select-primary ml-2 filter-select",
                                                                onChange: function (e) {
                                                                    return (function (e) {
                                                                        var n =
                                                                            t &&
                                                                            (null === t || void 0 === t
                                                                                ? void 0
                                                                                : t.filter(function (n) {
                                                                                      return "all" === e ? t : n.status === e;
                                                                                  }));
                                                                        i(n);
                                                                    })(e);
                                                                },
                                                                suffixIcon: Object(Ue.jsx)(nn, { name: "arrow-down", viewbox: "0 0 19.244 10.483" }),
                                                                children: [
                                                                    Object(Ue.jsx)(Uo, { value: "all", className: "govern-select-option", children: "All" }),
                                                                    Object(Ue.jsx)(Uo, { value: "PROPOSAL_STATUS_VOTING_PERIOD", children: "Open" }),
                                                                    Object(Ue.jsx)(Uo, { value: "PROPOSAL_STATUS_DEPOSIT_PERIOD", children: "Pending" }),
                                                                    Object(Ue.jsx)(Uo, { value: "PROPOSAL_STATUS_PASSED", children: "Passed" }),
                                                                    Object(Ue.jsx)(Uo, { value: "PROPOSAL_STATUS_FAILED", children: "Failed" }),
                                                                    Object(Ue.jsx)(Uo, { value: "PROPOSAL_STATUS_REJECTED", children: "Rejected" }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    Object(Ue.jsx)("div", {
                                                        className: "govern-card-content",
                                                        children:
                                                            (null === o || void 0 === o ? void 0 : o.length) > 0
                                                                ? null === o || void 0 === o
                                                                    ? void 0
                                                                    : o.map(function (e) {
                                                                          var n, t;
                                                                          return Object(Ue.jsxs)(
                                                                              "div",
                                                                              {
                                                                                  className: "governlist-row",
                                                                                  onClick: function () {
                                                                                      return s("/govern/".concat(null === e || void 0 === e ? void 0 : e.proposal_id));
                                                                                  },
                                                                                  children: [
                                                                                      Object(Ue.jsxs)("div", {
                                                                                          className: "left-section",
                                                                                          children: [
                                                                                              Object(Ue.jsxs)("h3", {
                                                                                                  children: [
                                                                                                      "#",
                                                                                                      null === e || void 0 === e ? void 0 : e.proposal_id,
                                                                                                      Object(Ue.jsxs)(u.a, {
                                                                                                          type: "primary",
                                                                                                          className: "ml-1",
                                                                                                          children: [
                                                                                                              Object(Ue.jsx)("span", {
                                                                                                                  className:
                                                                                                                      "Rejected" === Wn[null === e || void 0 === e ? void 0 : e.status] ||
                                                                                                                      "Failed" === Wn[null === e || void 0 === e ? void 0 : e.status]
                                                                                                                          ? "failed-circle"
                                                                                                                          : "Passed" === Wn[null === e || void 0 === e ? void 0 : e.status]
                                                                                                                          ? "passed-circle"
                                                                                                                          : "warning-circle",
                                                                                                              }),
                                                                                                              Wn[null === e || void 0 === e ? void 0 : e.status],
                                                                                                          ],
                                                                                                      }),
                                                                                                  ],
                                                                                              }),
                                                                                              Object(Ue.jsx)("h3", { children: null === e || void 0 === e || null === (n = e.content) || void 0 === n ? void 0 : n.title }),
                                                                                              Object(Ue.jsxs)("p", { children: [null === e || void 0 === e || null === (t = e.content) || void 0 === t ? void 0 : t.description, " "] }),
                                                                                          ],
                                                                                      }),
                                                                                      Object(Ue.jsx)("div", {
                                                                                          className: "right-section",
                                                                                          children: Object(Ue.jsxs)(Ze, {
                                                                                              children: [
                                                                                                  Object(Ue.jsxs)(Ge, {
                                                                                                      sm: "6",
                                                                                                      className: "right-col",
                                                                                                      children: [
                                                                                                          Object(Ue.jsx)("label", { children: "Voting starts :" }),
                                                                                                          Object(Ue.jsx)("p", { children: Bo(null === e || void 0 === e ? void 0 : e.voting_start_time) || "--/--/--" }),
                                                                                                      ],
                                                                                                  }),
                                                                                                  Object(Ue.jsxs)(Ge, {
                                                                                                      sm: "6",
                                                                                                      className: "right-col",
                                                                                                      children: [
                                                                                                          Object(Ue.jsx)("label", { children: "Voting Ends :" }),
                                                                                                          Object(Ue.jsx)("p", { children: Bo(null === e || void 0 === e ? void 0 : e.voting_end_time) || "--/--/--" }),
                                                                                                      ],
                                                                                                  }),
                                                                                              ],
                                                                                          }),
                                                                                      }),
                                                                                  ],
                                                                              },
                                                                              null === e || void 0 === e ? void 0 : e.proposal_id
                                                                          );
                                                                      })
                                                                : Object(Ue.jsx)(Ii, {}),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                })
                              : Object(Ue.jsx)("div", { className: "loader", children: Object(Ue.jsx)(Xt.a, {}) }),
                  });
              }),
              Wo = t(297),
              zo = t(376),
              Yo = t.n(zo),
              Go = t(377),
              Ko = t.n(Go),
              Qo = t(386),
              Xo = t(113),
              $o =
                  (t(1644),
                  Object(o.b)(function (e) {
                      return { lang: e.language, address: e.account.address };
                  }, {})(function (e) {
                      var n,
                          t = e.address,
                          i = e.proposal,
                          o = e.lang,
                          s = e.refreshVote,
                          c = Object(l.useState)(!1),
                          d = Object(r.a)(c, 2),
                          v = d[0],
                          m = d[1],
                          b = Object(l.useState)(!1),
                          j = Object(r.a)(b, 2),
                          p = j[0],
                          h = j[1],
                          f = Object(l.useState)(),
                          O = Object(r.a)(f, 2),
                          x = O[0],
                          g = O[1],
                          N = function () {
                              h(!0),
                                  it(
                                      { message: { typeUrl: "/cosmos.gov.v1beta1.MsgVote", value: { option: x, proposalId: fn.a.fromNumber(null === i || void 0 === i ? void 0 : i.proposal_id), voter: t } }, fee: qi(), memo: "" },
                                      t,
                                      function (e, n) {
                                          h(!1),
                                              m(!1),
                                              g(),
                                              e
                                                  ? a.a.error(e)
                                                  : null !== n && void 0 !== n && n.code
                                                  ? a.a.info(null === n || void 0 === n ? void 0 : n.rawLog)
                                                  : (s(), a.a.success(Object(Ue.jsx)(Ai, { message: Wt[o].tx_success, hash: null === n || void 0 === n ? void 0 : n.transactionHash })));
                                      }
                                  );
                          },
                          y = function () {
                              m(!1), g();
                          };
                      return Object(Ue.jsxs)(Ue.Fragment, {
                          children: [
                              Object(Ue.jsx)(u.a, {
                                  type: "primary",
                                  className: "btn-filled mb-n4",
                                  onClick: function () {
                                      m(!0);
                                  },
                                  loading: p,
                                  disabled: "PROPOSAL_STATUS_VOTING_PERIOD" !== (null === i || void 0 === i ? void 0 : i.status),
                                  children: "Vote Now",
                              }),
                              Object(Ue.jsx)(tn.a, {
                                  centered: !0,
                                  className: "votenow-modal",
                                  footer: null,
                                  header: null,
                                  open: v,
                                  width: 550,
                                  onOk: N,
                                  onCancel: y,
                                  closeIcon: Object(Ue.jsx)(nn, { name: "close", viewbox: "0 0 19 19" }),
                                  children: Object(Ue.jsxs)("div", {
                                      className: "votenow-modal-inner",
                                      children: [
                                          Object(Ue.jsx)(Ze, {
                                              children: Object(Ue.jsxs)(Ge, {
                                                  sm: "12",
                                                  children: [
                                                      Object(Ue.jsx)("h3", { children: "Your Vote" }),
                                                      Object(Ue.jsxs)("p", {
                                                          children: ["#", null === i || void 0 === i ? void 0 : i.proposal_id, " ", null === i || void 0 === i || null === (n = i.content) || void 0 === n ? void 0 : n.title],
                                                      }),
                                                      Object(Ue.jsx)(Xo.a.Group, {
                                                          value: x,
                                                          name: "radiogroup",
                                                          onChange: function (e) {
                                                              g(e.target.value);
                                                          },
                                                          children: Object(Ue.jsxs)(Qo.b, {
                                                              direction: "vertical",
                                                              children: [
                                                                  Object(Ue.jsx)(Xo.a, { value: 1, children: "Yes" }),
                                                                  Object(Ue.jsx)(Xo.a, { value: 3, children: "No" }),
                                                                  Object(Ue.jsx)(Xo.a, { value: 4, children: "No With Veto" }),
                                                                  Object(Ue.jsx)(Xo.a, { value: 2, children: "Abstain" }),
                                                              ],
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          Object(Ue.jsx)(Ze, {
                                              className: "p-0",
                                              children: Object(Ue.jsxs)(Ge, {
                                                  className: "text-right mt-3",
                                                  children: [
                                                      Object(Ue.jsx)(u.a, { type: "primary", className: "px-5 mr-3", size: "large", onClick: y, children: "Cancel" }),
                                                      Object(Ue.jsx)(u.a, { type: "primary", loading: p, disabled: p || !x, className: "btn-filled px-5", size: "large", onClick: N, children: "Confirm" }),
                                                  ],
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                          ],
                      });
                  })),
              Jo =
                  (t(1645),
                  {
                      setProposal: function (e) {
                          return { type: Eo, value: e };
                      },
                      setProposer: function (e, n) {
                          return { type: Po, proposalId: n, value: e };
                      },
                      setProposalTally: function (e, n) {
                          return { type: Ao, proposalId: n, value: e };
                      },
                  }),
              Zo = Object(o.b)(function (e) {
                  return { lang: e.language, address: e.account.address, proposalMap: e.govern.proposalMap, proposerMap: e.govern.proposerMap, proposalTallyMap: e.govern.proposalTallyMap };
              }, Jo)(function (e) {
                  var n,
                      t,
                      o = e.address,
                      s = e.setProposal,
                      c = e.proposalMap,
                      d = e.setProposer,
                      v = e.proposerMap,
                      m = e.setProposalTally,
                      b = e.proposalTallyMap,
                      j = Object(Oi.n)().id,
                      p = Object(l.useState)(),
                      h = Object(r.a)(p, 2),
                      f = h[0],
                      O = h[1],
                      x = Object(l.useState)({ yes: 0, no: 0, veto: 0, abstain: 0 }),
                      g = Object(r.a)(x, 2),
                      N = g[0],
                      y = g[1],
                      w = null === c || void 0 === c ? void 0 : c[j],
                      C = null === v || void 0 === v ? void 0 : v[j],
                      _ = null === b || void 0 === b ? void 0 : b[j],
                      D = [
                          { title: "Voting Starts", counts: Bo(null === w || void 0 === w ? void 0 : w.voting_start_time) || "--/--/--" },
                          { title: "Voting Ends", counts: Bo(null === w || void 0 === w ? void 0 : w.voting_end_time) || "--/--/--" },
                          {
                              title: "Proposer",
                              counts: Object(Ue.jsx)("div", {
                                  className: "address_with_copy",
                                  children: C ? Object(Ue.jsxs)(Ue.Fragment, { children: [Object(Ue.jsx)("span", { className: "mr-1", children: Un(C, 6, 6) }), Object(Ue.jsx)(Gt, { text: C })] }) : null,
                              }),
                          },
                      ];
                  Object(l.useEffect)(
                      function () {
                          j &&
                              ((function (e, n) {
                                  k.a
                                      .get("".concat(null === ln || void 0 === ln ? void 0 : ln.rest, "/cosmos/gov/v1beta1/proposals/").concat(e))
                                      .then(function (e) {
                                          n(null, null === e || void 0 === e ? void 0 : e.data);
                                      })
                                      .catch(function (e) {
                                          n(null === e || void 0 === e ? void 0 : e.message);
                                      });
                              })(j, function (e, n) {
                                  e ? a.a.error(e) : s(null === n || void 0 === n ? void 0 : n.proposal);
                              }),
                              (function (e, n) {
                                  k.a
                                      .get("".concat(null === ln || void 0 === ln ? void 0 : ln.rest, "/cosmos/gov/v1beta1/proposals/").concat(e, "/tally"))
                                      .then(function (e) {
                                          n(null, null === e || void 0 === e ? void 0 : e.data);
                                      })
                                      .catch(function (e) {
                                          n(null === e || void 0 === e ? void 0 : e.message);
                                      });
                              })(j, function (e, n) {
                                  e ? a.a.error(e) : m(null === n || void 0 === n ? void 0 : n.tally, j);
                              }),
                              (function (e, n) {
                                  k.a
                                      .get("".concat(null === ln || void 0 === ln ? void 0 : ln.rest, "/cosmos/tx/v1beta1/txs?events=submit_proposal.proposal_id=").concat(e))
                                      .then(function (e) {
                                          n(null, null === e || void 0 === e ? void 0 : e.data);
                                      })
                                      .catch(function (e) {
                                          n(null === e || void 0 === e ? void 0 : e.message);
                                      });
                              })(j, function (e, n) {
                                  var t, i, o, l, s, c, r, u, v, m, b, p;
                                  e
                                      ? a.a.error(e)
                                      : null !== n &&
                                        void 0 !== n &&
                                        null !== (t = n.tx_responses) &&
                                        void 0 !== t &&
                                        null !== (i = t[0]) &&
                                        void 0 !== i &&
                                        null !== (o = i.tx) &&
                                        void 0 !== o &&
                                        null !== (l = o.body) &&
                                        void 0 !== l &&
                                        null !== (s = l.messages) &&
                                        void 0 !== s &&
                                        null !== (c = s[0]) &&
                                        void 0 !== c &&
                                        c.proposer &&
                                        d(
                                            null === n ||
                                                void 0 === n ||
                                                null === (r = n.tx_responses) ||
                                                void 0 === r ||
                                                null === (u = r[0]) ||
                                                void 0 === u ||
                                                null === (v = u.tx) ||
                                                void 0 === v ||
                                                null === (m = v.body) ||
                                                void 0 === m ||
                                                null === (b = m.messages) ||
                                                void 0 === b ||
                                                null === (p = b[0]) ||
                                                void 0 === p
                                                ? void 0
                                                : p.proposer,
                                            j
                                        );
                              }));
                      },
                      [j]
                  );
                  var S = Object(l.useCallback)(
                      function () {
                          !(function (e, n, t) {
                              Lo(function (i, o) {
                                  i
                                      ? t(i)
                                      : o
                                            .Vote({ proposalId: fn.a.fromNumber(n), voter: e })
                                            .then(function (e) {
                                                t(null, e);
                                            })
                                            .catch(function (e) {
                                                t(null === e || void 0 === e ? void 0 : e.message);
                                            });
                              });
                          })(o, null === w || void 0 === w ? void 0 : w.proposal_id, function (e, n) {
                              var t;
                              e || O(null === n || void 0 === n || null === (t = n.vote) || void 0 === t ? void 0 : t.option);
                          });
                      },
                      [o, null === w || void 0 === w ? void 0 : w.proposal_id]
                  );
                  Object(l.useEffect)(
                      function () {
                          null !== w && void 0 !== w && w.proposal_id && S();
                      },
                      [o, j, w, S]
                  ),
                      Object(l.useEffect)(
                          function () {
                              null !== _ && void 0 !== _ && _.yes && I();
                          },
                          [b]
                      );
                  var T = [
                          {
                              title: "Total Vote",
                              counts: Object(Ue.jsxs)(Ue.Fragment, {
                                  children: [
                                      (function () {
                                          var e = Number(null === _ || void 0 === _ ? void 0 : _.yes),
                                              n = Number(null === _ || void 0 === _ ? void 0 : _.no),
                                              t = Number(null === _ || void 0 === _ ? void 0 : _.no_with_veto),
                                              i = e + n + Number(null === _ || void 0 === _ ? void 0 : _.abstain) + t;
                                          return (i = kn((i /= 1e6)));
                                      })() || "0",
                                      " ",
                                      Ht(null === ln || void 0 === ln ? void 0 : ln.coinMinimalDenom),
                                  ],
                              }),
                          },
                      ],
                      I = function () {
                          var e = Number(null === _ || void 0 === _ ? void 0 : _.yes),
                              n = Number(null === _ || void 0 === _ ? void 0 : _.no),
                              t = Number(null === _ || void 0 === _ ? void 0 : _.no_with_veto),
                              i = Number(null === _ || void 0 === _ ? void 0 : _.abstain),
                              o = e + n + i + t;
                          (e = Number(100 * (e / o || 0)).toFixed(2)),
                              (n = Number(100 * (n / o || 0)).toFixed(2)),
                              (t = Number(100 * (t / o || 0)).toFixed(2)),
                              (i = Number(100 * (i / o || 0)).toFixed(2)),
                              y(Object(Le.a)(Object(Le.a)({}, N), {}, { yes: e || 0, no: n || 0, veto: t || 0, abstain: i || 0 }));
                      },
                      E = {
                          chart: { type: "pie", backgroundColor: null, height: 180, margin: 5 },
                          credits: { enabled: !1 },
                          title: { text: null },
                          subtitle: { floating: !0, style: { fontSize: "25px", fontWeight: "500", fontFamily: "Lexend Deca", color: "#fff" }, y: 70 },
                          plotOptions: { pie: { showInLegend: !1, size: "120%", innerSize: "75%", borderWidth: 0, className: "votes-chart", dataLabels: { enabled: !1, distance: -14, style: { fontsize: 50 } } } },
                          series: [
                              {
                                  states: { hover: { enabled: !1 } },
                                  name: "",
                                  data: [
                                      { name: "Yes", y: Number((null === N || void 0 === N ? void 0 : N.yes) || 0), color: "#52B788" },
                                      { name: "No", y: Number((null === N || void 0 === N ? void 0 : N.no) || 0), color: "#F76872" },
                                      { name: "No With Veto", y: Number((null === N || void 0 === N ? void 0 : N.veto) || 0), color: "#AACBB9" },
                                      { name: "Abstain", y: Number((null === N || void 0 === N ? void 0 : N.abstain) || 0), color: "#6A7B6C" },
                                  ],
                              },
                          ],
                      };
                  return Object(Ue.jsxs)("div", {
                      className: "app-content-wrapper",
                      children: [
                          Object(Ue.jsx)(Ze, {
                              children: Object(Ue.jsx)(Ge, { className: "text-right mb-3", children: Object(Ue.jsx)(i.b, { to: "/govern", children: Object(Ue.jsx)(u.a, { className: "back-btn", type: "primary", children: "Back" }) }) }),
                          }),
                          Object(Ue.jsx)(Ze, {
                              children: Object(Ue.jsx)(Ge, {
                                  children: Object(Ue.jsxs)("div", {
                                      className: "composite-card myhome-upper earn-deposite-card d-block",
                                      children: [
                                          Object(Ue.jsx)("div", { className: "card-header", children: "PROPOSAL DETAILS" }),
                                          Object(Ue.jsx)("div", {
                                              className: "myhome-upper-left w-100",
                                              children: Object(Ue.jsx)(Wo.b, {
                                                  grid: { gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 },
                                                  dataSource: D,
                                                  renderItem: function (e) {
                                                      return Object(Ue.jsx)(Wo.b.Item, {
                                                          children: Object(Ue.jsxs)("div", {
                                                              children: [
                                                                  Object(Ue.jsx)("p", { children: null === e || void 0 === e ? void 0 : e.title }),
                                                                  Object(Ue.jsx)("h3", { children: null === e || void 0 === e ? void 0 : e.counts }),
                                                              ],
                                                          }),
                                                      });
                                                  },
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          Object(Ue.jsxs)(Ze, {
                              children: [
                                  Object(Ue.jsx)(Ge, {
                                      md: "6",
                                      children: Object(Ue.jsxs)("div", {
                                          className: "composite-card govern-card2 earn-deposite-card h-100",
                                          children: [
                                              Object(Ue.jsxs)(Ze, {
                                                  children: [
                                                      Object(Ue.jsx)(Ge, { children: Object(Ue.jsxs)("h3", { children: ["#", (null === w || void 0 === w ? void 0 : w.proposal_id) || j] }) }),
                                                      Object(Ue.jsx)(Ge, {
                                                          className: "text-right",
                                                          children: Object(Ue.jsxs)(u.a, {
                                                              type: "primary",
                                                              children: [
                                                                  Object(Ue.jsx)("span", {
                                                                      className:
                                                                          "Rejected" === Wn[null === w || void 0 === w ? void 0 : w.status] || "Failed" === Wn[null === w || void 0 === w ? void 0 : w.status]
                                                                              ? "failed-circle"
                                                                              : "Passed" === Wn[null === w || void 0 === w ? void 0 : w.status]
                                                                              ? "passed-circle"
                                                                              : "warning-circle",
                                                                  }),
                                                                  Wn[null === w || void 0 === w ? void 0 : w.status],
                                                              ],
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              Object(Ue.jsx)(Ze, {
                                                  children: Object(Ue.jsxs)(Ge, {
                                                      children: [
                                                          Object(Ue.jsx)("h3", { children: null === w || void 0 === w || null === (n = w.content) || void 0 === n ? void 0 : n.title }),
                                                          Object(Ue.jsx)("div", {
                                                              className: "description-row",
                                                              children: Object(Ue.jsxs)("p", { children: [Yn((null === w || void 0 === w || null === (t = w.content) || void 0 === t ? void 0 : t.description) || " "), " "] }),
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                                  Object(Ue.jsx)(Ge, {
                                      md: "6",
                                      children: Object(Ue.jsxs)("div", {
                                          className: "composite-card govern-card2 earn-deposite-card",
                                          children: [
                                              Object(Ue.jsx)(Ze, {
                                                  children:
                                                      o && zn[f]
                                                          ? Object(Ue.jsxs)("div", {
                                                                className: "user-vote-container",
                                                                children: [
                                                                    (null === zn || void 0 === zn ? void 0 : zn[f]) &&
                                                                        Object(Ue.jsxs)("div", { children: ["Your Vote :", " ", Object(Ue.jsxs)("span", { className: "vote_msg", children: [" ", zn[f], " "] }), " "] }),
                                                                    Object(Ue.jsx)(Ge, { className: "text-right", children: Object(Ue.jsx)($o, { refreshVote: S, proposal: w }) }),
                                                                ],
                                                            })
                                                          : Object(Ue.jsx)(Ge, { className: "text-right", children: Object(Ue.jsx)($o, { refreshVote: S, proposal: w }) }),
                                              }),
                                              Object(Ue.jsx)(Ze, {
                                                  children: Object(Ue.jsx)(Ge, {
                                                      children: Object(Ue.jsxs)("div", {
                                                          className: "govern-dlt-card",
                                                          children: [
                                                              Object(Ue.jsx)("div", { className: "govern-dlt-chart", children: Object(Ue.jsx)(Ko.a, { highcharts: Yo.a, options: E }) }),
                                                              Object(Ue.jsxs)("div", {
                                                                  className: "govern-dlt-right",
                                                                  children: [
                                                                      Object(Ue.jsx)(Wo.b, {
                                                                          grid: { gutter: 16, xs: 1 },
                                                                          dataSource: T,
                                                                          renderItem: function (e) {
                                                                              return Object(Ue.jsx)(Wo.b.Item, {
                                                                                  children: Object(Ue.jsxs)("div", {
                                                                                      children: [Object(Ue.jsx)("p", { children: e.title }), Object(Ue.jsx)("h3", { className: "count", children: e.counts })],
                                                                                  }),
                                                                              });
                                                                          },
                                                                      }),
                                                                      Object(Ue.jsxs)("ul", {
                                                                          className: "vote-lists",
                                                                          children: [
                                                                              Object(Ue.jsxs)("li", {
                                                                                  children: [
                                                                                      Object(Ue.jsx)(nn, { name: "rectangle", viewbox: "0 0 34 34" }),
                                                                                      Object(Ue.jsxs)("div", {
                                                                                          children: [
                                                                                              Object(Ue.jsx)("label", { children: "Yes" }),
                                                                                              Object(Ue.jsxs)("p", { children: [Number((null === N || void 0 === N ? void 0 : N.yes) || "0.00"), "%"] }),
                                                                                          ],
                                                                                      }),
                                                                                  ],
                                                                              }),
                                                                              Object(Ue.jsxs)("li", {
                                                                                  children: [
                                                                                      Object(Ue.jsx)(nn, { name: "rectangle", viewbox: "0 0 34 34" }),
                                                                                      Object(Ue.jsxs)("div", {
                                                                                          children: [
                                                                                              Object(Ue.jsx)("label", { children: "No" }),
                                                                                              Object(Ue.jsxs)("p", { children: [Number((null === N || void 0 === N ? void 0 : N.no) || "0.00"), "%"] }),
                                                                                          ],
                                                                                      }),
                                                                                  ],
                                                                              }),
                                                                              Object(Ue.jsxs)("li", {
                                                                                  children: [
                                                                                      Object(Ue.jsx)(nn, { name: "rectangle", viewbox: "0 0 34 34" }),
                                                                                      Object(Ue.jsxs)("div", {
                                                                                          children: [
                                                                                              Object(Ue.jsx)("label", { children: "No With Veto " }),
                                                                                              Object(Ue.jsxs)("p", { children: [Number((null === N || void 0 === N ? void 0 : N.veto) || "0.00"), "%"] }),
                                                                                          ],
                                                                                      }),
                                                                                  ],
                                                                              }),
                                                                              Object(Ue.jsxs)("li", {
                                                                                  children: [
                                                                                      Object(Ue.jsx)(nn, { name: "rectangle", viewbox: "0 0 34 34" }),
                                                                                      Object(Ue.jsxs)("div", {
                                                                                          children: [
                                                                                              Object(Ue.jsx)("label", { children: "Abstain" }),
                                                                                              Object(Ue.jsxs)("p", { children: [Number((null === N || void 0 === N ? void 0 : N.abstain) || "0.00"), "%"] }),
                                                                                          ],
                                                                                      }),
                                                                                  ],
                                                                              }),
                                                                          ],
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  });
              }),
              ea = function (e) {
                  var n = e.height,
                      t = Object(l.useState)(),
                      i = Object(r.a)(t, 2),
                      o = i[0],
                      a = i[1],
                      s = Object(l.useCallback)(
                          Object(xn.a)(
                              Object(On.a)().mark(function e() {
                                  var t;
                                  return Object(On.a)().wrap(function (e) {
                                      for (;;)
                                          switch ((e.prev = e.next)) {
                                              case 0:
                                                  return (e.next = 2), Ui(n);
                                              case 2:
                                                  (t = e.sent) && a(t);
                                              case 4:
                                              case "end":
                                                  return e.stop();
                                          }
                                  }, e);
                              })
                          ),
                          [n]
                      );
                  return (
                      Object(l.useEffect)(
                          function () {
                              n && s();
                          },
                          [n, s]
                      ),
                      Object(Ue.jsx)("div", { className: "dates-col", style: { width: "240px" }, children: Object(Ue.jsx)("div", { className: "dates", children: Bo(o) }) })
                  );
              },
              na = [
                  { title: "Message Type", dataIndex: "msgType", key: "msgType", width: 300 },
                  {
                      title: "Date",
                      dataIndex: "date",
                      key: "date",
                      width: 300,
                      render: function (e) {
                          return Object(Ue.jsx)(ea, { height: e });
                      },
                  },
                  { title: "Height", dataIndex: "height", key: "height", width: 300 },
                  { title: "Transaction Hash", dataIndex: "transactionHash", key: "txHash", width: 300, align: "right" },
              ],
              ta = {
                  setTransactionHistory: function (e, n) {
                      return { type: O, list: e, count: n };
                  },
              },
              ia = Object(o.b)(function (e) {
                  return { lang: e.language, history: e.account.history, address: e.account.address };
              }, ta)(function (e) {
                  var n = e.address,
                      t = e.setTransactionHistory,
                      i = e.history,
                      o = Object(l.useState)(!1),
                      s = Object(r.a)(o, 2),
                      c = s[0],
                      d = s[1],
                      u = Object(l.useState)(1),
                      v = Object(r.a)(u, 2),
                      m = v[0],
                      b = v[1],
                      j = Object(l.useState)(5),
                      p = Object(r.a)(j, 2),
                      h = p[0],
                      f = p[1];
                  Object(l.useEffect)(function () {
                      O(n, m, h);
                  }, []);
                  var O = function (e, n, i) {
                          d(!0),
                              Bi(e, n, i, function (e, n) {
                                  d(!1), e ? a.a.error(e) : t(n.txs, n.totalCount);
                              });
                      },
                      x =
                          i &&
                          i.list &&
                          i.list.length > 0 &&
                          i.list.map(function (e, n) {
                              var t,
                                  i = Object(Xn.decodeTxRaw)(e.tx),
                                  o = ((t = e.tx), Ln.toHex(Object(Tn.sha256)(t)).toUpperCase());
                              return {
                                  key: n,
                                  transactionHash: Object(Ue.jsxs)("div", {
                                      className: "tx-hash-col",
                                      children: [
                                          Object(Ue.jsxs)("span", {
                                              children: [
                                                  " ",
                                                  Object(Ue.jsxs)("a", {
                                                      href: "".concat(ln.explorerUrlToTx.replace("{txHash}", null === o || void 0 === o ? void 0 : o.toUpperCase())),
                                                      rel: "noreferrer",
                                                      target: "_blank",
                                                      "aria-label": "explorer",
                                                      children: [" ", o && Un(o, 10, 10)],
                                                  }),
                                                  " ",
                                              ],
                                          }),
                                          Object(Ue.jsx)(Gt, { text: o }),
                                      ],
                                  }),
                                  msgType: Ri(i.body.messages),
                                  date: null === e || void 0 === e ? void 0 : e.height,
                                  height: e.height,
                              };
                          });
                  return Object(Ue.jsx)("div", {
                      className: "app-content-wrapper",
                      children: Object(Ue.jsx)(Ze, {
                          children: Object(Ue.jsx)(Ge, {
                              children: Object(Ue.jsx)("div", {
                                  className: "custom-table  history-table",
                                  children: Object(Ue.jsx)(Si.a, {
                                      columns: na,
                                      dataSource: x,
                                      loading: c,
                                      pagination: { total: i && i.count, showSizeChanger: !0, defaultPageSize: 5, pageSizeOptions: ["5", "10", "20", "50"] },
                                      total: i && i.count,
                                      onChange: function (e) {
                                          return b((t = e).current), f(t.pageSize), void O(n, t.current, t.pageSize);
                                          var t;
                                      },
                                      locale: { emptyText: Object(Ue.jsx)(Ii, {}) },
                                      scroll: { x: "100%" },
                                  }),
                              }),
                          }),
                      }),
                  });
              }),
              oa =
                  (t(792),
                  function (e) {
                      var n = e.pool,
                          t = Object(l.useState)(),
                          i = Object(r.a)(t, 2),
                          o = i[0],
                          a = i[1];
                      return (
                          Object(l.useEffect)(
                              function () {
                                  null !== n &&
                                      void 0 !== n &&
                                      n.pairId &&
                                      kt(null === n || void 0 === n ? void 0 : n.pairId, function (e, n) {
                                          e || a(null === n || void 0 === n ? void 0 : n.pair);
                                      });
                              },
                              [n]
                          ),
                          Object(Ue.jsx)(Ue.Fragment, {
                              children: Object(Ue.jsxs)("div", {
                                  className: "assets-withicon",
                                  children: [
                                      Object(Ue.jsxs)("div", { className: "assets-icon assets-icon-1", children: [Object(Ue.jsx)(nn, { name: qn(null === o || void 0 === o ? void 0 : o.baseCoinDenom), viewBox: "0 0 23.515 31" }), " "] }),
                                      Object(Ue.jsxs)("div", { className: "assets-icon assets-icon-2", children: [Object(Ue.jsx)(nn, { name: qn(null === o || void 0 === o ? void 0 : o.quoteCoinDenom) }), " "] }),
                                      Ht(null === o || void 0 === o ? void 0 : o.baseCoinDenom),
                                      "-",
                                      Ht(null === o || void 0 === o ? void 0 : o.quoteCoinDenom),
                                  ],
                              }),
                          })
                      );
                  }),
              aa = { setPools: ve, setFirstReserveCoinDenom: je, setSecondReserveCoinDenom: pe },
              la = Object(o.b)(function (e) {
                  return { lang: e.language, balances: e.account.balances.list, pools: e.liquidity.pool.list, markets: e.oracle.market.list, userLiquidityInPools: e.liquidity.userLiquidityInPools };
              }, aa)(function (e) {
                  var n,
                      t = e.setPools,
                      i = e.pools,
                      o = e.lang,
                      s = e.userLiquidityInPools,
                      c = Object(l.useState)(!1),
                      d = Object(r.a)(c, 2),
                      v = d[0],
                      m = d[1],
                      b = Object(Oi.l)();
                  Object(l.useEffect)(function () {
                      m(!0),
                          It(0, 0, 0, 0, function (e, n) {
                              m(!1), e ? a.a.error(e) : t(n.pools);
                          });
                  }, []);
                  var j =
                          null === (n = Object.keys(s)) || void 0 === n
                              ? void 0
                              : n.map(function (e) {
                                    return null === i || void 0 === i
                                        ? void 0
                                        : i.find(function (n) {
                                              var t;
                                              return (null === n || void 0 === n || null === (t = n.id) || void 0 === t ? void 0 : t.toNumber()) === Number(e);
                                          });
                                }),
                      p = [
                          {
                              title: "Asset Pair",
                              dataIndex: "assetpair",
                              key: "assetpair",
                              align: "center",
                              width: 200,
                              render: function (e) {
                                  return Object(Ue.jsx)(oa, { pool: e, lang: o }, e.id);
                              },
                          },
                          {
                              title: "APR",
                              dataIndex: "apr",
                              key: "apr",
                              align: "left",
                              width: 150,
                              render: function (e) {
                                  return Object(Ue.jsx)("div", { className: "farm-apr-modal portfolio-apr", children: Object(Ue.jsx)($i, { pool: e }) });
                              },
                          },
                          {
                              title: Object(Ue.jsxs)(Ue.Fragment, { children: ["My Liquidity", Object(Ue.jsx)(mo, { text: "Your current liquidity position in the corresponding Asset pool" })] }),
                              dataIndex: "position",
                              key: "position",
                              width: 300,
                              render: function (e) {
                                  return Object(Ue.jsxs)("div", { children: ["$", En(Number(e || 0).toFixed(2))] });
                              },
                          },
                          {
                              title: "Action",
                              dataIndex: "action",
                              key: "action",
                              align: "right",
                              width: 100,
                              render: function (e) {
                                  return Object(Ue.jsx)(u.a, {
                                      type: "primary",
                                      onClick: function () {
                                          return b("/farm/".concat(e.id && e.id.toNumber()));
                                      },
                                      className: "btn-filled",
                                      size: "small",
                                      children: "Manage",
                                  });
                              },
                          },
                      ],
                      h =
                          j.length > 0 &&
                          j.map(function (e, n) {
                              return { key: n, assetpair: e, position: s[null === e || void 0 === e ? void 0 : e.id], reward: e.reward, apr: e, action: e };
                          });
                  return Object(Ue.jsx)("div", {
                      className: "app-content-wrapper",
                      children: Object(Ue.jsx)(Ze, {
                          children: Object(Ue.jsx)(Ge, {
                              children: Object(Ue.jsx)(Si.a, { className: "custom-table farm-table", loading: v, dataSource: h, columns: p, pagination: !1, scroll: { x: "100%" }, locale: { emptyText: Object(Ue.jsx)(Ii, {}) } }),
                          }),
                      }),
                  });
              }),
              sa = Object(o.b)(function (e) {
                  return { assetMap: e.asset.map };
              })(function (e) {
                  var n,
                      t,
                      i = e.lang,
                      o = e.assetBalance,
                      s = e.isDarkMode,
                      c = e.address,
                      d = e.setPools,
                      u = e.balances,
                      v = e.markets,
                      m = e.assetMap,
                      b = e.setUserLiquidityInPools,
                      j = e.userLiquidityInPools,
                      p = Object(l.useState)("1"),
                      h = Object(r.a)(p, 2),
                      f = h[0],
                      O = h[1],
                      x = Object(Oi.j)(),
                      g = ((t = x.hash), decodeURIComponent(t.replace("#", "")) || void 0);
                  Object(l.useEffect)(
                      function () {
                          g && O(g);
                      },
                      [g]
                  ),
                      Object(l.useEffect)(
                          function () {
                              b(), N(0, z, !0, !1);
                          },
                          [v, u]
                      );
                  var N = function (e, n, t, i) {
                          It(0, 0, 0, 0, function (e, n) {
                              if (e) a.a.error(e);
                              else {
                                  d(n.pools, n.pagination);
                                  var t = null === n || void 0 === n ? void 0 : n.pools;
                                  u &&
                                      u.length > 0 &&
                                      t &&
                                      t.length > 0 &&
                                      t.forEach(function (e) {
                                          return C(e);
                                      });
                              }
                          });
                      },
                      y =
                          null === (n = Object.values(j)) || void 0 === n
                              ? void 0
                              : n.reduce(function (e, n) {
                                    return e + n;
                                }, 0),
                      w = Object(l.useCallback)(
                          function () {
                              var e = Number(o) + Number(y);
                              return En((e || 0).toFixed(2));
                          },
                          [o, y]
                      ),
                      C = Object(l.useCallback)(
                          function (e) {
                              c &&
                                  Et(c, null === e || void 0 === e ? void 0 : e.id, function (n, t) {
                                      if (!n) {
                                          var i = Vt(u, null === e || void 0 === e ? void 0 : e.poolCoinDenom) || 0,
                                              o = null === t || void 0 === t ? void 0 : t.activePoolCoin,
                                              l = null === t || void 0 === t ? void 0 : t.queuedPoolCoin,
                                              s =
                                                  l &&
                                                  l.length > 0 &&
                                                  (null === l || void 0 === l
                                                      ? void 0
                                                      : l.map(function (e) {
                                                            var n;
                                                            return null === e || void 0 === e || null === (n = e.poolCoin) || void 0 === n ? void 0 : n.amount;
                                                        })),
                                              c =
                                                  Number(
                                                      (null === s || void 0 === s ? void 0 : s.length) > 0 &&
                                                          (null === s || void 0 === s
                                                              ? void 0
                                                              : s.reduce(function (e, n) {
                                                                    return Number(e) + Number(n);
                                                                }, 0))
                                                  ) + Number(null === o || void 0 === o ? void 0 : o.amount) || 0,
                                              r = Number(i) + c;
                                          At(null === e || void 0 === e ? void 0 : e.id, r, function (n, t) {
                                              var i, o, l, s, c, r, d, u;
                                              if (n) a.a.error(n);
                                              else {
                                                  var j = null === t || void 0 === t ? void 0 : t.coins,
                                                      p =
                                                          Number(
                                                              qt(
                                                                  null === j || void 0 === j || null === (i = j[0]) || void 0 === i ? void 0 : i.amount,
                                                                  null === (o = m[null === j || void 0 === j || null === (l = j[0]) || void 0 === l ? void 0 : l.denom]) || void 0 === o ? void 0 : o.decimals
                                                              )
                                                          ) *
                                                              Pn(v, null === j || void 0 === j || null === (s = j[0]) || void 0 === s ? void 0 : s.denom) +
                                                          Number(
                                                              qt(
                                                                  null === j || void 0 === j || null === (c = j[1]) || void 0 === c ? void 0 : c.amount,
                                                                  null === (r = m[null === j || void 0 === j || null === (d = j[1]) || void 0 === d ? void 0 : d.denom]) || void 0 === r ? void 0 : r.decimals
                                                              )
                                                          ) *
                                                              Pn(v, null === j || void 0 === j || null === (u = j[1]) || void 0 === u ? void 0 : u.denom);
                                                  p && b(null === e || void 0 === e ? void 0 : e.id, p);
                                              }
                                          });
                                      }
                                  });
                          },
                          [m, c, v, u, b]
                      ),
                      _ = {
                          chart: { type: "pie", backgroundColor: null, height: 160 },
                          credits: { enabled: !1 },
                          title: { text: null },
                          subtitle: { text: "".concat(w(), " <br /> ").concat(Wt[i].USD), floating: !!c, style: { fontSize: "20px", fontWeight: "300", fontFamily: "Lexend Deca", color: s ? "#fff" : "#000" }, y: 70 },
                          plotOptions: { pie: { showInLegend: !1, size: "130%", innerSize: "80%", borderWidth: 0, dataLabels: { enabled: !1, distance: -14, style: { fontsize: 50 } } } },
                          tooltip: {
                              formatter: function () {
                                  return '<div style="text-align:center; font-weight:800; ">' + kn(this.y.toFixed(2)) + '<br /><small style="font-size: 10px; font-weight:400;">' + this.key + "</small></div>";
                              },
                              useHTML: !0,
                              backgroundColor: "#222A49",
                              borderColor: "#222A49",
                              borderRadius: 10,
                              zIndex: 99,
                              style: { color: "#fff" },
                          },
                          series: [
                              {
                                  states: { hover: { enabled: !1 } },
                                  name: "",
                                  data: [
                                      { name: Wt[i].farm_balance, y: Number(y) || 0, color: s ? "#1A4F94" : "#5099f4" },
                                      { name: Wt[i].asset_balance, y: Number(o) || 0, color: s ? "#123C73" : "#78c1ff" },
                                  ],
                              },
                          ],
                      },
                      D = [
                          { label: "Assets", key: "1", children: Object(Ue.jsx)(Yi, { parent: "portfolio" }) },
                          { label: "Liquidity", key: "2", children: Object(Ue.jsx)(la, {}) },
                          { label: "History", key: "3", children: Object(Ue.jsx)(ia, {}) },
                      ];
                  return Object(Ue.jsx)("div", {
                      className: "app-content-wrapper",
                      children: c
                          ? Object(Ue.jsxs)(Ue.Fragment, {
                                children: [
                                    Object(Ue.jsx)(Ze, {
                                        children: Object(Ue.jsx)(Ge, {
                                            children: Object(Ue.jsxs)("div", {
                                                className: "MyHome-upper",
                                                children: [
                                                    Object(Ue.jsxs)("div", {
                                                        className: "MyHome-chart",
                                                        children: [
                                                            w() <= 0
                                                                ? Object(Ue.jsxs)("div", { className: "nodatachart", children: [Number(0).toFixed(2), " ", Object(Ue.jsx)("p", { children: "USD" })] })
                                                                : Object(Ue.jsx)(Ko.a, { highcharts: Yo.a, options: _ }),
                                                            " ",
                                                        ],
                                                    }),
                                                    Object(Ue.jsxs)("div", {
                                                        className: "MyHome-upper-right",
                                                        children: [
                                                            Object(Ue.jsx)(Ze, {
                                                                className: "mb-2",
                                                                children: Object(Ue.jsxs)(Ge, {
                                                                    children: [
                                                                        Object(Ue.jsxs)("label", { children: [Wt[i].tv, " ", Object(Ue.jsx)(mo, { text: Wt[i].tooltip_total_value })] }),
                                                                        Object(Ue.jsxs)("h2", { children: [w(), " ", Wt[i].USD] }),
                                                                    ],
                                                                }),
                                                            }),
                                                            Object(Ue.jsxs)(Ze, {
                                                                children: [
                                                                    Object(Ue.jsxs)(Ge, {
                                                                        xs: "12",
                                                                        md: "12",
                                                                        lg: "6",
                                                                        children: [
                                                                            Object(Ue.jsxs)("label", {
                                                                                className: "stats-label",
                                                                                children: [
                                                                                    Object(Ue.jsx)("div", { className: "rect-shape shape-asset-bal" }),
                                                                                    " ",
                                                                                    Wt[i].asset_balance,
                                                                                    " ",
                                                                                    Object(Ue.jsx)(mo, { text: Wt[i].tooltip_total_asset }),
                                                                                ],
                                                                            }),
                                                                            Object(Ue.jsxs)("h3", { children: [Rt(o, 2), " ", Wt[i].USD] }),
                                                                        ],
                                                                    }),
                                                                    Object(Ue.jsxs)(Ge, {
                                                                        xs: "12",
                                                                        md: "12",
                                                                        lg: "6",
                                                                        children: [
                                                                            Object(Ue.jsxs)("label", {
                                                                                className: "stats-label",
                                                                                children: [
                                                                                    Object(Ue.jsx)("div", { className: "rect-shape shape-farm-bal" }),
                                                                                    " ",
                                                                                    Wt[i].farm_balance,
                                                                                    " ",
                                                                                    Object(Ue.jsx)(mo, { text: Wt[i].tooltip_total_farm }),
                                                                                ],
                                                                            }),
                                                                            Object(Ue.jsxs)("h3", { children: [En(Number(y || 0).toFixed(2)), " ", Wt[i].USD] }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                    Object(Ue.jsx)(Ze, {
                                        className: "mt-4",
                                        children: Object(Ue.jsx)(Ge, {
                                            children: Object(Ue.jsx)("div", { className: "myhome-bottom", children: Object(Ue.jsx)(vo.a, { className: "comdex-tabs", onChange: O, activeKey: f, type: "card", items: D }) }),
                                        }),
                                    }),
                                ],
                            })
                          : Object(Ue.jsx)("div", { className: "loader connect", children: "Please connect wallet" }),
                  });
              });
          sa.propTypes = {
              setPools: bo.func.isRequired,
              setUserLiquidityInPools: bo.func.isRequired,
              lang: bo.string.isRequired,
              address: bo.string,
              assetBalance: bo.number,
              poolBalance: bo.number,
              isDarkMode: bo.bool.isRequired,
              balances: bo.arrayOf(bo.shape({ denom: bo.string.isRequired, amount: bo.string })),
              markets: bo.object,
              userLiquidityInPools: bo.object,
          };
          var ca = { setPools: ve, setUserLiquidityInPools: fe },
              ra = Object(o.b)(function (e) {
                  return {
                      lang: e.language,
                      assetBalance: e.account.balances.asset,
                      poolBalance: e.account.balances.pool,
                      isDarkMode: e.theme.theme.darkThemeEnabled,
                      address: e.account.address,
                      balances: e.account.balances.list,
                      markets: e.oracle.market.list,
                      userLiquidityInPools: e.liquidity.userLiquidityInPools,
                  };
              }, ca)(sa),
              da = t(819),
              ua = t(820),
              va = function (e) {
                  var n = e.isChecked,
                      t = e.onChange,
                      i = e.name;
                  return Object(Ue.jsxs)("div", {
                      className: "mb-2",
                      children: [Object(Ue.jsx)(ua.a, { title: "switch", checked: n, onChange: t }), "  ", i ? Object(Ue.jsx)("span", { className: "ml-2", children: "Limit Order" }) : null],
                  });
              },
              ma = { setComplete: Me },
              ba = Object(o.b)(function (e) {
                  return {
                      address: e.account.address,
                      demandCoin: e.swap.demandCoin,
                      offerCoin: e.swap.offerCoin,
                      slippageTolerance: e.swap.slippageTolerance,
                      refreshBalance: e.account.refreshBalance,
                      assetMap: e.asset.map,
                      baseCoinPoolPriceWithoutConversion: e.liquidity.baseCoinPoolPriceWithoutConversion,
                  };
              }, ma)(function (e) {
                  var n = e.offerCoin,
                      t = e.demandCoin,
                      i = e.address,
                      s = e.name,
                      c = e.isDisabled,
                      d = e.setComplete,
                      v = e.validationError,
                      m = e.lang,
                      b = e.refreshBalance,
                      j = e.pair,
                      p = e.orderDirection,
                      h = e.isLimitOrder,
                      f = e.limitPrice,
                      O = e.refreshDetails,
                      x = e.baseCoinPoolPrice,
                      g = e.slippageTolerance,
                      N = e.orderLifespan,
                      y = e.assetMap,
                      w = e.baseCoinPoolPriceWithoutConversion,
                      C = Object(l.useState)(!1),
                      _ = Object(r.a)(C, 2),
                      D = _[0],
                      S = _[1],
                      T = Object(o.c)(),
                      I = Number(w);
                  Object(l.useEffect)(function () {
                      d(!1);
                  }, []);
                  var k = function () {
                          var e,
                              i = h ? f : x + x * Number(g / 100),
                              o = Number(null === n || void 0 === n ? void 0 : n.amount) / i;
                          return Ft(o, null === (e = y[null === t || void 0 === t ? void 0 : t.denom]) || void 0 === e ? void 0 : e.decimals);
                      },
                      E = function (e) {
                          var o,
                              a,
                              l,
                              s,
                              c = Ut(1 === p ? I + I * Number(g / 100) : I - I * Number(g / 100));
                          return {
                              typeUrl: "/comdex.liquidity.v1beta1.MsgLimitOrder",
                              value: {
                                  orderer: i,
                                  orderLifespan: e ? { seconds: N, nanos: 0 } : "0",
                                  pairId: null === j || void 0 === j ? void 0 : j.id,
                                  appId: fn.a.fromNumber(G),
                                  direction: p,
                                  offerCoin: {
                                      denom: null === n || void 0 === n ? void 0 : n.denom,
                                      amount: Ft(
                                          Number(null === n || void 0 === n ? void 0 : n.amount) + Number(null === n || void 0 === n ? void 0 : n.fee),
                                          null === (o = y[null === n || void 0 === n ? void 0 : n.denom]) || void 0 === o ? void 0 : o.decimals
                                      ),
                                  },
                                  demandCoinDenom: null === t || void 0 === t ? void 0 : t.denom,
                                  price: e
                                      ? Ut(
                                            f *
                                                Math.pow(
                                                    10,
                                                    Math.abs(
                                                        Fn(null === (a = y[null === j || void 0 === j ? void 0 : j.baseCoinDenom]) || void 0 === a ? void 0 : a.decimals) -
                                                            Fn(null === (l = y[null === j || void 0 === j ? void 0 : j.quoteCoinDenom]) || void 0 === l ? void 0 : l.decimals)
                                                    )
                                                )
                                        )
                                      : Bt(Number(c).toFixed(0)).toString(),
                                  amount: 2 === p ? Ft(null === n || void 0 === n ? void 0 : n.amount, null === (s = y[null === n || void 0 === n ? void 0 : n.denom]) || void 0 === s ? void 0 : s.decimals) : k(),
                              },
                          };
                      },
                      A = function () {
                          S(!0),
                              it({ message: E(h), fee: { amount: [{ denom: "ucmdx", amount: Y.toString() }], gas: "500000" }, memo: "" }, i, function (e, n) {
                                  if ((S(!1), e)) a.a.error((null === e || void 0 === e ? void 0 : e.rawLog) || e);
                                  else {
                                      if (!h && null !== n && void 0 !== n && n.rawLog && (null === n || void 0 === n || !n.code)) {
                                          var t,
                                              i,
                                              o,
                                              l,
                                              s,
                                              c,
                                              r = null === (t = JSON.parse(null === n || void 0 === n ? void 0 : n.rawLog)) || void 0 === t ? void 0 : t[0],
                                              u =
                                                  null === r || void 0 === r || null === (i = r.events) || void 0 === i
                                                      ? void 0
                                                      : i.find(function (e) {
                                                            return "limit_order" === (null === e || void 0 === e ? void 0 : e.type);
                                                        }),
                                              v =
                                                  null === u ||
                                                  void 0 === u ||
                                                  null === (o = u.attributes) ||
                                                  void 0 === o ||
                                                  null ===
                                                      (l = o.find(function (e) {
                                                          return "order_id" === (null === e || void 0 === e ? void 0 : e.key);
                                                      })) ||
                                                  void 0 === l
                                                      ? void 0
                                                      : l.value,
                                              b =
                                                  null === u ||
                                                  void 0 === u ||
                                                  null === (s = u.attributes) ||
                                                  void 0 === s ||
                                                  null ===
                                                      (c = s.find(function (e) {
                                                          return "pair_id" === (null === e || void 0 === e ? void 0 : e.key);
                                                      })) ||
                                                  void 0 === c
                                                      ? void 0
                                                      : c.value;
                                          v &&
                                              b &&
                                              (function (e, n, t) {
                                                  Dt(function (i, o) {
                                                      i
                                                          ? t(i)
                                                          : o
                                                                .Order({ pairId: fn.a.fromNumber(n), id: fn.a.fromNumber(e), appId: fn.a.fromNumber(G) })
                                                                .then(function (e) {
                                                                    t(null, e);
                                                                })
                                                                .catch(function (e) {
                                                                    return t(null === e || void 0 === e ? void 0 : e.message);
                                                                });
                                                  });
                                              })(v, b, function (e, n) {
                                                  var t, i, o, l, s, c, r, d, u;
                                                  if (!e) {
                                                      var v = null === n || void 0 === n ? void 0 : n.order;
                                                      a.a.success(
                                                          "Received "
                                                              .concat(
                                                                  qt(
                                                                      null === v || void 0 === v || null === (t = v.receivedCoin) || void 0 === t ? void 0 : t.amount,
                                                                      null === (i = y[null === v || void 0 === v || null === (o = v.receivedCoin) || void 0 === o ? void 0 : o.denom]) || void 0 === i ? void 0 : i.decimals
                                                                  ),
                                                                  " "
                                                              )
                                                              .concat(Ht(null === v || void 0 === v || null === (l = v.receivedCoin) || void 0 === l ? void 0 : l.denom), " for ")
                                                              .concat(
                                                                  qt(
                                                                      Number(null === v || void 0 === v || null === (s = v.offerCoin) || void 0 === s ? void 0 : s.amount) -
                                                                          Number(null === v || void 0 === v || null === (c = v.remainingOfferCoin) || void 0 === c ? void 0 : c.amount),
                                                                      null === (r = y[null === v || void 0 === v || null === (d = v.offerCoin) || void 0 === d ? void 0 : d.denom]) || void 0 === r ? void 0 : r.decimals
                                                                  ),
                                                                  " "
                                                              )
                                                              .concat(Ht(null === v || void 0 === v || null === (u = v.offerCoin) || void 0 === u ? void 0 : u.denom))
                                                      );
                                                  }
                                              });
                                      }
                                      null !== n && void 0 !== n && n.code
                                          ? a.a.info(null === n || void 0 === n ? void 0 : n.rawLog)
                                          : (d(!0), P(), O(), a.a.success(Object(Ue.jsx)(Ai, { message: Wt[m].tx_success, hash: null === n || void 0 === n ? void 0 : n.transactionHash })));
                                  }
                              });
                      },
                      P = function () {
                          T({ type: "BALANCE_REFRESH_SET", value: b + 1 }), T({ type: "DEMAND_COIN_AMOUNT_SET", value: 0 }), T({ type: "OFFER_COIN_AMOUNT_SET", value: 0 });
                      };
                  return Object(Ue.jsx)("div", {
                      className: "assets-form-btn",
                      children: Object(Ue.jsx)(u.a, {
                          disabled: c || D || !(n && Number(n.amount)) || (null === v || void 0 === v ? void 0 : v.message),
                          type: "primary",
                          loading: D,
                          className: "btn-filled",
                          onClick: function () {
                              return A();
                          },
                          children: s,
                      }),
                  });
              }),
              ja = (t(1647), "TYPE_SET"),
              pa = "AMOUNT_SET",
              ha = "ORDER_LIST_SET",
              fa =
                  (t(1648),
                  function (e) {
                      var n = e.lang,
                          t = e.assetMap,
                          i = Object(o.d)(function (e) {
                              return e.account.address;
                          }),
                          s = Object(l.useState)([]),
                          c = Object(r.a)(s, 2),
                          d = c[0],
                          v = c[1],
                          m = Object(l.useState)(!1),
                          b = Object(r.a)(m, 2),
                          j = b[0],
                          p = b[1],
                          h = Object(l.useState)(),
                          f = Object(r.a)(h, 2),
                          O = f[0],
                          x = f[1];
                      Object(l.useEffect)(
                          function () {
                              g(i);
                              var e = setInterval(function () {
                                  return g(i);
                              }, 1e4);
                              return function () {
                                  return clearInterval(e);
                              };
                          },
                          [i]
                      );
                      var g = (function () {
                              var e = Object(xn.a)(
                                  Object(On.a)().mark(function e(n) {
                                      return Object(On.a)().wrap(function (e) {
                                          for (;;)
                                              switch ((e.prev = e.next)) {
                                                  case 0:
                                                      n &&
                                                          Tt(fn.a.fromNumber(0), n, function (e, n) {
                                                              e ? a.a.error(e) : (null === n || void 0 === n || n.orders, v(null === n || void 0 === n ? void 0 : n.orders));
                                                          });
                                                  case 1:
                                                  case "end":
                                                      return e.stop();
                                              }
                                      }, e);
                                  })
                              );
                              return function (n) {
                                  return e.apply(this, arguments);
                              };
                          })(),
                          N = [
                              { title: "Order ID", dataIndex: "id", key: "id" },
                              { title: "Expire Time", dataIndex: "expire_time" },
                              { title: "BUY/SELL", dataIndex: "buy_sell" },
                              { title: "Offered Coin", dataIndex: "offered_coin" },
                              { title: "Trade Amount", dataIndex: "trade_amount" },
                              { title: "Price", dataIndex: "price" },
                              { title: "Received", dataIndex: "received" },
                              { title: "Remaining", dataIndex: "remaining" },
                              { title: "Status", dataIndex: "status" },
                              {
                                  title: "Action",
                                  dataIndex: "action",
                                  key: "action",
                                  align: "right",
                                  render: function (e) {
                                      return Object(Ue.jsx)(u.a, {
                                          type: "primary",
                                          loading: (null === O || void 0 === O ? void 0 : O.id) === (null === e || void 0 === e ? void 0 : e.id) && j,
                                          onClick: function () {
                                              return (function (e) {
                                                  x(e),
                                                      p(!0),
                                                      it(
                                                          {
                                                              message: {
                                                                  typeUrl: "/comdex.liquidity.v1beta1.MsgCancelOrder",
                                                                  value: { orderer: i.toString(), appId: fn.a.fromNumber(G), pairId: null === e || void 0 === e ? void 0 : e.pairId, orderId: null === e || void 0 === e ? void 0 : e.id },
                                                              },
                                                              fee: qi(),
                                                              memo: "",
                                                          },
                                                          i,
                                                          function (e, t) {
                                                              p(!1),
                                                                  e
                                                                      ? a.a.error(e)
                                                                      : null !== t && void 0 !== t && t.code
                                                                      ? a.a.info(null === t || void 0 === t ? void 0 : t.rawLog)
                                                                      : (g(), x(), a.a.success(Object(Ue.jsx)(Ai, { message: Wt[n].tx_success, hash: null === t || void 0 === t ? void 0 : t.transactionHash })));
                                                          }
                                                      );
                                              })(e);
                                          },
                                          className: "btn-filled",
                                          size: "small",
                                          children: "Cancel",
                                      });
                                  },
                              },
                          ],
                          y =
                              d.length > 0 &&
                              d.map(function (e, n) {
                                  var i, o, a, l, s, c, r, d, u, v, m, b, j, p;
                                  return {
                                      key: n,
                                      id: null !== e && void 0 !== e && e.id ? (null === e || void 0 === e || null === (i = e.id) || void 0 === i ? void 0 : i.toNumber()) : "",
                                      expire_time: null !== e && void 0 !== e && e.expireAt ? qo()(e.expireAt).format("MMM DD, YYYY HH:mm") : "",
                                      buy_sell: 1 === (null === e || void 0 === e ? void 0 : e.direction) ? "BUY" : "SELL",
                                      offered_coin:
                                          null !== e && void 0 !== e && e.offerCoin
                                              ? ""
                                                    .concat(
                                                        qt(
                                                            null === e || void 0 === e || null === (o = e.offerCoin) || void 0 === o ? void 0 : o.amount,
                                                            null === (a = t[null === e || void 0 === e || null === (l = e.offerCoin) || void 0 === l ? void 0 : l.denom]) || void 0 === a ? void 0 : a.decimals
                                                        ),
                                                        " "
                                                    )
                                                    .concat(Ht(null === e || void 0 === e || null === (s = e.offerCoin) || void 0 === s ? void 0 : s.denom))
                                              : "",
                                      trade_amount: null !== e && void 0 !== e && e.amount ? qt(null === e || void 0 === e ? void 0 : e.amount) : 0,
                                      price: null !== e && void 0 !== e && e.price ? ((p = e.price), (Number(p) / Math.pow(10, 18)).toFixed(ln.coinDecimals).toString()) : 0,
                                      received:
                                          null !== e && void 0 !== e && e.receivedCoin
                                              ? ""
                                                    .concat(
                                                        qt(
                                                            null === e || void 0 === e || null === (c = e.receivedCoin) || void 0 === c ? void 0 : c.amount,
                                                            null === (r = t[null === e || void 0 === e || null === (d = e.receivedCoin) || void 0 === d ? void 0 : d.denom]) || void 0 === r ? void 0 : r.decimals
                                                        ),
                                                        " "
                                                    )
                                                    .concat(Ht(null === e || void 0 === e || null === (u = e.receivedCoin) || void 0 === u ? void 0 : u.denom))
                                              : "",
                                      remaining:
                                          null !== e && void 0 !== e && e.remainingOfferCoin
                                              ? ""
                                                    .concat(
                                                        qt(
                                                            null === e || void 0 === e || null === (v = e.remainingOfferCoin) || void 0 === v ? void 0 : v.amount,
                                                            null === (m = t[null === e || void 0 === e || null === (b = e.remainingOfferCoin) || void 0 === b ? void 0 : b.denom]) || void 0 === m ? void 0 : m.decimals
                                                        ),
                                                        " "
                                                    )
                                                    .concat(Ht(null === e || void 0 === e || null === (j = e.remainingOfferCoin) || void 0 === j ? void 0 : j.denom))
                                              : "",
                                      status: null !== e && void 0 !== e && e.status ? Bn(e.status) : "",
                                      action: e,
                                  };
                              }),
                          w = [
                              { label: "Active Orders", key: "1", children: Object(Ue.jsx)(Si.a, { showHeader: !0, columns: N, dataSource: y, pagination: !1, className: "custom-table ", locale: { emptyText: Object(Ue.jsx)(Ii, {}) } }) },
                          ];
                      return Object(Ue.jsx)(Ue.Fragment, {
                          children: Object(Ue.jsx)("div", {
                              className: "position_main_container mt-15px ",
                              children: Object(Ue.jsx)("div", { className: "position_container", children: Object(Ue.jsx)(vo.a, { defaultActiveKey: "1", className: "comdex-tabs", items: w }) }),
                          }),
                      });
                  }),
              Oa = function (e) {
                  var n,
                      t,
                      i,
                      o,
                      s = e.lang,
                      c = e.offerCoin,
                      d = e.demandCoin,
                      v = e.setReverse,
                      m = e.markets,
                      b = e.pools,
                      j = e.setPool,
                      p = e.setPoolBalance,
                      h = e.balances,
                      f = e.reverse,
                      O = e.setPools,
                      x = e.setDemandCoinDenom,
                      g = e.setOfferCoinDenom,
                      N = e.setOfferCoinAmount,
                      y = e.setDemandCoinAmount,
                      w = e.setSlippage,
                      C = e.slippage,
                      _ = e.setPair,
                      D = e.setPairs,
                      S = e.pairs,
                      T = e.pair,
                      I = e.pool,
                      k = e.poolBalance,
                      E = e.params,
                      A = e.isLimitOrder,
                      P = e.setLimitOrderToggle,
                      M = e.limitPrice,
                      F = e.setLimitPrice,
                      L = e.baseCoinPoolPrice,
                      R = e.setBaseCoinPoolPrice,
                      q = e.assetMap,
                      B = e.assetsInProgress,
                      U = Object(l.useState)(),
                      H = Object(r.a)(U, 2),
                      V = H[0],
                      W = H[1],
                      G = Object(l.useState)(),
                      K = Object(r.a)(G, 2),
                      Q = K[0],
                      X = K[1],
                      $ = Object(l.useState)(21600),
                      J = Object(r.a)($, 2),
                      Z = J[0],
                      ee = J[1],
                      ne = Object(l.useState)({}),
                      te = Object(r.a)(ne, 2),
                      ie = te[0],
                      oe = te[1],
                      ae = Object(l.useState)([]),
                      le = Object(r.a)(ae, 2),
                      se = le[0],
                      ce = le[1],
                      re = Object(l.useState)([]),
                      de = Object(r.a)(re, 2),
                      ue = de[0],
                      ve = de[1];
                  Object(l.useEffect)(
                      function () {
                          var e,
                              n = b[0],
                              t =
                                  null === S || void 0 === S || null === (e = S.list) || void 0 === e
                                      ? void 0
                                      : e.filter(function (e) {
                                            return e.id.toNumber === (null === n || void 0 === n ? void 0 : n.pairId.toNumber);
                                        })[0];
                          (null !== c && void 0 !== c && c.denom) || null === t || void 0 === t || !t.id || g(null === t || void 0 === t ? void 0 : t.baseCoinDenom),
                              (null !== d && void 0 !== d && d.denom) || null === t || void 0 === t || !t.id || x(null === t || void 0 === t ? void 0 : t.quoteCoinDenom),
                              null !== t && void 0 !== t && t.id && pe(null === t || void 0 === t ? void 0 : t.baseCoinDenom, null === t || void 0 === t ? void 0 : t.quoteCoinDenom),
                              v(!1),
                              je();
                      },
                      [b, S]
                  ),
                      Object(l.useEffect)(
                          function () {
                              var e;
                              null !== S &&
                                  void 0 !== S &&
                                  null !== (e = S.list) &&
                                  void 0 !== e &&
                                  e.length &&
                                  oe(
                                      (function (e) {
                                          var n = {};
                                          if (null !== e && void 0 !== e && e.length) {
                                              var t,
                                                  i = Object(_n.a)(e);
                                              try {
                                                  for (i.s(); !(t = i.n()).done; ) {
                                                      var o = t.value;
                                                      n[o.baseCoinDenom] || (n[o.baseCoinDenom] = []),
                                                          n[o.quoteCoinDenom] || (n[o.quoteCoinDenom] = []),
                                                          n[o.baseCoinDenom].push(o.quoteCoinDenom),
                                                          n[o.quoteCoinDenom].push(o.baseCoinDenom);
                                                  }
                                              } catch (a) {
                                                  i.e(a);
                                              } finally {
                                                  i.f();
                                              }
                                          }
                                          return n;
                                      })(null === S || void 0 === S ? void 0 : S.list)
                                  );
                          },
                          [S]
                      ),
                      Object(l.useEffect)(
                          function () {
                              var e,
                                  n =
                                      null === (e = ie[null === c || void 0 === c ? void 0 : c.denom]) || void 0 === e
                                          ? void 0
                                          : e.filter(function (e) {
                                                return e !== (null === cn || void 0 === cn ? void 0 : cn.coinMinimalDenom);
                                            });
                              ce(n);
                          },
                          [null === c || void 0 === c ? void 0 : c.denom, ie]
                      ),
                      Object(l.useEffect)(
                          function () {
                              var e,
                                  n =
                                      null === (e = Object.keys(ie)) || void 0 === e
                                          ? void 0
                                          : e.filter(function (e) {
                                                return e !== (null === cn || void 0 === cn ? void 0 : cn.coinMinimalDenom);
                                            });
                              ve(n);
                          },
                          [ie]
                      ),
                      Object(l.useEffect)(function () {
                          return (
                              me(0, z, !0, !1),
                              be(0, z, !0, !1),
                              function () {
                                  g(""), x("");
                              }
                          );
                      }, []),
                      Object(l.useEffect)(
                          function () {
                              null !== c && void 0 !== c && c.amount && fe(f ? 1 / L : L, null === c || void 0 === c ? void 0 : c.amount);
                          },
                          [L]
                      );
                  var me = function () {
                          St(function (e, n) {
                              e ? a.a.error(e) : D(n.pairs, n.pagination);
                          });
                      },
                      be = function (e, n, t, i) {
                          It(0, 0, 0, 0, function (e, n) {
                              e ? a.a.error(e) : O(n.pools);
                          });
                      },
                      je = function () {
                          N(0, 0), y(0), W(), F(0), w(0);
                      };
                  Object(l.useEffect)(
                      function () {
                          var e;
                          if ((null === I || void 0 === I || null === (e = I.balances) || void 0 === e ? void 0 : e.length) > 0) {
                              var n,
                                  t,
                                  i,
                                  o,
                                  a,
                                  l,
                                  s =
                                      null === I ||
                                      void 0 === I ||
                                      null === (n = I.balances) ||
                                      void 0 === n ||
                                      null ===
                                          (t = n.find(function (e) {
                                              return e.denom === (null === T || void 0 === T ? void 0 : T.baseCoinDenom);
                                          })) ||
                                      void 0 === t
                                          ? void 0
                                          : t.amount,
                                  c =
                                      null === I ||
                                      void 0 === I ||
                                      null === (i = I.balances) ||
                                      void 0 === i ||
                                      null ===
                                          (o = i.find(function (e) {
                                              return e.denom === (null === T || void 0 === T ? void 0 : T.quoteCoinDenom);
                                          })) ||
                                      void 0 === o
                                          ? void 0
                                          : o.amount,
                                  r =
                                      Number(qt(c, null === (a = q[null === T || void 0 === T ? void 0 : T.quoteCoinDenom]) || void 0 === a ? void 0 : a.decimals)) /
                                      Number(qt(s, null === (l = q[null === T || void 0 === T ? void 0 : T.baseCoinDenom]) || void 0 === l ? void 0 : l.decimals)),
                                  d = Number(c / s).toFixed(null === ln || void 0 === ln ? void 0 : ln.coinDecimals);
                              R(Number(r), Number(d));
                          }
                      },
                      [I]
                  );
                  var pe = (function () {
                          var e = Object(xn.a)(
                              Object(On.a)().mark(function e(n, t) {
                                  var i, o, a;
                                  return Object(On.a)().wrap(function (e) {
                                      for (;;)
                                          switch ((e.prev = e.next)) {
                                              case 0:
                                                  null !==
                                                      (o =
                                                          null === S || void 0 === S || null === (i = S.list) || void 0 === i
                                                              ? void 0
                                                              : i.filter(function (e) {
                                                                    return (e.baseCoinDenom === n && e.quoteCoinDenom === t) || (e.baseCoinDenom === t && e.quoteCoinDenom === n);
                                                                })[0]) &&
                                                  void 0 !== o &&
                                                  o.id
                                                      ? (_(o),
                                                        (a = b.filter(function (e) {
                                                            return e.pairId.toNumber() === (null === o || void 0 === o ? void 0 : o.id.toNumber());
                                                        })[0]),
                                                        (null === o || void 0 === o ? void 0 : o.baseCoinDenom) !== n ? v(!0) : v(!1),
                                                        j(a),
                                                        p(null === a || void 0 === a ? void 0 : a.balances))
                                                      : (_({}), j({}));
                                              case 2:
                                              case "end":
                                                  return e.stop();
                                          }
                                  }, e);
                              })
                          );
                          return function (n, t) {
                              return e.apply(this, arguments);
                          };
                      })(),
                      he = function (e) {
                          var n,
                              t,
                              i = k.filter(function (e) {
                                  return (null === e || void 0 === e ? void 0 : e.denom) === (null === c || void 0 === c ? void 0 : c.denom);
                              })[0],
                              o = i && i.amount && Number(i.amount);
                          w((Number(e) / (Number(qt(o, null === (n = q[null === i || void 0 === i ? void 0 : i.denom]) || void 0 === n ? void 0 : n.decimals)) + Number(e))) * 100);
                          var a = e * (Number(An(null === E || void 0 === E ? void 0 : E.swapFeeRate)) + 0.001);
                          if ((W(Fi(Number(Ft(e, null === (t = q[null === i || void 0 === i ? void 0 : i.denom]) || void 0 === t ? void 0 : t.decimals)), xe, "macro")), N(e, a), A && M)) return fe(M, e);
                          fe(f ? 1 / L : L, e);
                      },
                      fe = function (e, n) {
                          y((e * n).toFixed(6));
                      },
                      Oe = function (e) {
                          x(e), A && (F(0), X()), x(e), pe(null === c || void 0 === c ? void 0 : c.denom, e);
                      },
                      xe = Vt(h, null === c || void 0 === c ? void 0 : c.denom) || 0,
                      ge = function (e) {
                          var n, t, i;
                          (e = Hn(e).toString().trim()),
                              F(e),
                              null !== T && void 0 !== T && T.lastPrice
                                  ? X(
                                        ((n = Number(e)),
                                        (t = Number(An(null === T || void 0 === T ? void 0 : T.lastPrice))),
                                        (i = Number(An(null === E || void 0 === E ? void 0 : E.maxPriceLimitRatio))),
                                        n < 0
                                            ? new Error("Input must be positive number")
                                            : n < t - i * t || n > t + i * t
                                            ? new Error(
                                                  "Tolerance range "
                                                      .concat((t - i * t).toFixed(null === ln || void 0 === ln ? void 0 : ln.coinDecimals), " - ")
                                                      .concat((t + i * t).toFixed(null === ln || void 0 === ln ? void 0 : ln.coinDecimals))
                                              )
                                            : void 0)
                                    )
                                  : X(!1),
                              fe(e, null === c || void 0 === c ? void 0 : c.amount);
                      };
                  Object(l.useEffect)(
                      function () {
                          if (null !== I && void 0 !== I && I.id) {
                              var e = setInterval(function () {
                                  return ye();
                              }, 1e4);
                              return function () {
                                  return clearInterval(e);
                              };
                          }
                          if (A && null !== T && void 0 !== T && T.id) {
                              var n = setInterval(function () {
                                  return Ne();
                              }, 1e4);
                              return function () {
                                  return clearInterval(n);
                              };
                          }
                      },
                      [I]
                  );
                  var Ne = function () {
                          kt(null === T || void 0 === T ? void 0 : T.id, function (e, n) {
                              e ? a.a.error(e) : null !== n && void 0 !== n && n.pair && _(null === n || void 0 === n ? void 0 : n.pair);
                          });
                      },
                      ye = function () {
                          Pt(null === I || void 0 === I ? void 0 : I.id, function (e, n) {
                              e || j(null === n || void 0 === n ? void 0 : n.pool);
                          });
                      },
                      we = Object(Ue.jsxs)("div", {
                          className: "slippage-tolerance",
                          children: [
                              Object(Ue.jsxs)("div", { children: ["Limit order lifespan", " ", Object(Ue.jsx)(mo, { text: "Your transaction will revert if it is pending for more than this period of time." })] }),
                              Object(Ue.jsxs)("div", {
                                  className: "tolerance-bottom",
                                  children: [
                                      Object(Ue.jsxs)(Xo.a.Group, {
                                          onChange: function (e) {
                                              return ee(e.target.value);
                                          },
                                          defaultValue: "a",
                                          value: Z,
                                          children: [
                                              Object(Ue.jsx)(Xo.a.Button, { value: 0, children: "1Block" }),
                                              Object(Ue.jsx)(Xo.a.Button, { value: 21600, children: "6H" }),
                                              Object(Ue.jsx)(Xo.a.Button, { value: 43200, children: "12H" }),
                                              Object(Ue.jsx)(Xo.a.Button, { value: 86400, children: "24H" }),
                                          ],
                                      }),
                                      Object(Ue.jsxs)("div", {
                                          className: "input-section lifespan-setting",
                                          children: [
                                              Object(Ue.jsx)(Mi, {
                                                  className: "input-cmdx",
                                                  onChange: function (e) {
                                                      return (function (e) {
                                                          var n;
                                                          (e = e.toString().trim()) >= 0 && e <= (null === E || void 0 === E || null === (n = E.maxOrderLifespan) || void 0 === n ? void 0 : n.seconds.toNumber()) && ee(e);
                                                      })(e.target.value);
                                                  },
                                                  value: Z,
                                                  validationError: !1,
                                                  placeholder: "0",
                                              }),
                                              Object(Ue.jsx)("span", { className: "percent-text", children: "S" }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      });
                  return Object(Ue.jsxs)("div", {
                      className: "app-content-wrapper cswap-section",
                      children: [
                          Object(Ue.jsx)("div", {
                              className: "app-content-small",
                              children: Object(Ue.jsx)(Ze, {
                                  children: Object(Ue.jsx)(Ge, {
                                      children: Object(Ue.jsxs)("div", {
                                          className: A ? "cswap-content toggle_active" : "cswap-content ",
                                          children: [
                                              Object(Ue.jsx)(va, {
                                                  onChange: function (e) {
                                                      return (function (e) {
                                                          P(e), je();
                                                      })(e);
                                                  },
                                                  name: "Limit Order",
                                                  isChecked: A,
                                              }),
                                              A
                                                  ? Object(Ue.jsx)(da.a, {
                                                        className: "setting-popover",
                                                        content: we,
                                                        placement: "bottomRight",
                                                        overlayClassName: "cmdx-popver",
                                                        trigger: "click",
                                                        children: Object(Ue.jsx)(nn, { name: "setting", viewbox: "0 0 33 33" }),
                                                    })
                                                  : null,
                                              Object(Ue.jsxs)("div", {
                                                  className: "assets-select-card",
                                                  children: [
                                                      Object(Ue.jsxs)("div", {
                                                          className: "assets-left",
                                                          children: [
                                                              Object(Ue.jsx)("label", { className: "leftlabel", children: A ? "Sell" : Wt[s].from }),
                                                              Object(Ue.jsx)("div", {
                                                                  className: "assets-select-wrapper",
                                                                  children: Object(Ue.jsx)(ao, {
                                                                      loading: B,
                                                                      value: null !== c && void 0 !== c && c.denom && (null === se || void 0 === se ? void 0 : se.length) > 0 ? (null === c || void 0 === c ? void 0 : c.denom) : null,
                                                                      onChange: function (e) {
                                                                          var n, t;
                                                                          g(e), x(null === (n = ie[e]) || void 0 === n ? void 0 : n[0]), A && (F(0), X()), pe(e, null === (t = ie[e]) || void 0 === t ? void 0 : t[0]);
                                                                      },
                                                                      list: (null === ue || void 0 === ue ? void 0 : ue.length) > 0 ? ue : null,
                                                                  }),
                                                              }),
                                                          ],
                                                      }),
                                                      Object(Ue.jsxs)("div", {
                                                          className: "assets-right",
                                                          children: [
                                                              Object(Ue.jsxs)("div", {
                                                                  className: "label-right",
                                                                  children: [
                                                                      Wt[s].available,
                                                                      Object(Ue.jsxs)("span", {
                                                                          className: "ml-1",
                                                                          children: [
                                                                              Lt(xe, null === (n = q[null === c || void 0 === c ? void 0 : c.denom]) || void 0 === n ? void 0 : n.decimals),
                                                                              " ",
                                                                              Ht(null === c || void 0 === c ? void 0 : c.denom),
                                                                          ],
                                                                      }),
                                                                      " ",
                                                                      Object(Ue.jsxs)("div", {
                                                                          className: "maxhalf",
                                                                          children: [
                                                                              Object(Ue.jsx)(u.a, {
                                                                                  className: "active",
                                                                                  onClick: function () {
                                                                                      return (function () {
                                                                                          if ((null === c || void 0 === c ? void 0 : c.denom) === ln.coinMinimalDenom) {
                                                                                              var e,
                                                                                                  n = Number(xe) > Y ? xe - Y : 0,
                                                                                                  t = n * An(null === E || void 0 === E ? void 0 : E.swapFeeRate);
                                                                                              return Number(n) > t
                                                                                                  ? he(qt(n - t, null === (e = q[null === c || void 0 === c ? void 0 : c.denom]) || void 0 === e ? void 0 : e.decimals))
                                                                                                  : he();
                                                                                          }
                                                                                          var i,
                                                                                              o = Number(xe),
                                                                                              a = o * An(null === E || void 0 === E ? void 0 : E.swapFeeRate);
                                                                                          return Number(o) > a ? he(qt(o - a, null === (i = q[null === c || void 0 === c ? void 0 : c.denom]) || void 0 === i ? void 0 : i.decimals)) : he();
                                                                                      })();
                                                                                  },
                                                                                  children: Wt[s].max,
                                                                              }),
                                                                              " ",
                                                                              Object(Ue.jsx)(u.a, {
                                                                                  onClick: function () {
                                                                                      return (function () {
                                                                                          if ((null === c || void 0 === c ? void 0 : c.denom) === ln.coinMinimalDenom) {
                                                                                              var e,
                                                                                                  n = Number(xe / 2) > Y ? xe / 2 : 0,
                                                                                                  t = n * (An(null === E || void 0 === E ? void 0 : E.swapFeeRate) / 2);
                                                                                              return Number(n) > t ? he(qt(n, null === (e = q[null === c || void 0 === c ? void 0 : c.denom]) || void 0 === e ? void 0 : e.decimals)) : he();
                                                                                          }
                                                                                          var i,
                                                                                              o = Number(xe / 2),
                                                                                              a = o * (An(null === E || void 0 === E ? void 0 : E.swapFeeRate) / 2);
                                                                                          return Number(o) > a ? he(qt(o, null === (i = q[null === c || void 0 === c ? void 0 : c.denom]) || void 0 === i ? void 0 : i.decimals)) : he();
                                                                                      })();
                                                                                  },
                                                                                  children: Wt[s].half,
                                                                              }),
                                                                          ],
                                                                      }),
                                                                  ],
                                                              }),
                                                              Object(Ue.jsxs)("div", {
                                                                  className: "input-select",
                                                                  children: [
                                                                      Object(Ue.jsx)(Mi, {
                                                                          value: c && c.amount,
                                                                          className: "assets-select-input with-select",
                                                                          onChange: function (e) {
                                                                              return (function (e) {
                                                                                  var n;
                                                                                  (e = Hn(e, null === (n = q[null === c || void 0 === c ? void 0 : c.denom]) || void 0 === n ? void 0 : n.decimals)
                                                                                      .toString()
                                                                                      .trim()),
                                                                                      he(e);
                                                                              })(e.target.value);
                                                                          },
                                                                          validationError: V,
                                                                      }),
                                                                      Object(Ue.jsx)("small", {
                                                                          children:
                                                                              (null === I || void 0 === I ? void 0 : I.id) &&
                                                                              (function () {
                                                                                  var e = (f ? 1 / L : L) * Pn(m, null === d || void 0 === d ? void 0 : d.denom) * (null === c || void 0 === c ? void 0 : c.amount);
                                                                                  return "\u2248 $".concat(Number(e && isFinite(e) ? e : 0).toFixed(2));
                                                                              })(),
                                                                      }),
                                                                      Object(Ue.jsx)("small", {
                                                                          children:
                                                                              (null === I || void 0 === I ? void 0 : I.id) &&
                                                                              (function () {
                                                                                  var e = Ht(null === c || void 0 === c ? void 0 : c.denom),
                                                                                      n = Ht(null === d || void 0 === d ? void 0 : d.denom),
                                                                                      t = f ? 1 / L : L;
                                                                                  return "1 "
                                                                                      .concat(e || "", " = ")
                                                                                      .concat(Number(t && isFinite(t) ? t : 0).toFixed(6), " ")
                                                                                      .concat(n || "");
                                                                              })(),
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                              Object(Ue.jsx)("div", {
                                                  className: "buysell-arrow",
                                                  children: Object(Ue.jsx)(nn, {
                                                      onClick: function () {
                                                          g(null === d || void 0 === d ? void 0 : d.denom), x(null === c || void 0 === c ? void 0 : c.denom), N(0), y(0), F(0), v(!f);
                                                      },
                                                      name: "buy-sell-arrow",
                                                      viewbox: "0 0 30.937 32.344",
                                                  }),
                                              }),
                                              A
                                                  ? null
                                                  : Object(Ue.jsxs)("div", {
                                                        className: "assets-select-card",
                                                        children: [
                                                            Object(Ue.jsxs)("div", {
                                                                className: "assets-left",
                                                                children: [
                                                                    Object(Ue.jsx)("label", { className: "leftlabel", children: Wt[s].to }),
                                                                    Object(Ue.jsx)("div", {
                                                                        className: "assets-select-wrapper",
                                                                        children: Object(Ue.jsx)(ao, {
                                                                            loading: B,
                                                                            value: null !== d && void 0 !== d && d.denom && (null === se || void 0 === se ? void 0 : se.length) > 0 ? (null === d || void 0 === d ? void 0 : d.denom) : null,
                                                                            onChange: Oe,
                                                                            list: (null === se || void 0 === se ? void 0 : se.length) > 0 ? se : null,
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(Ue.jsx)("div", {
                                                                className: "assets-right swap-assets-right",
                                                                children: Object(Ue.jsxs)("div", {
                                                                    children: [
                                                                        Object(Ue.jsx)(Mi, { disabled: !0, className: "assets-select-input with-select", value: d && d.amount }),
                                                                        " ",
                                                                        Object(Ue.jsx)("small", {
                                                                            children:
                                                                                (null === I || void 0 === I ? void 0 : I.id) &&
                                                                                (function () {
                                                                                    var e = (f ? L : 1 / L) * Pn(m, null === c || void 0 === c ? void 0 : c.denom) * (null === d || void 0 === d ? void 0 : d.amount);
                                                                                    return "\u2248 $".concat(Number(e && isFinite(e) ? e : 0).toFixed(2));
                                                                                })(),
                                                                        }),
                                                                        Object(Ue.jsx)("small", {
                                                                            children:
                                                                                (null === I || void 0 === I ? void 0 : I.id) &&
                                                                                (function () {
                                                                                    var e = Ht(null === c || void 0 === c ? void 0 : c.denom),
                                                                                        n = Ht(null === d || void 0 === d ? void 0 : d.denom),
                                                                                        t = f ? L : 1 / L;
                                                                                    return "1 "
                                                                                        .concat(n || "", " = ")
                                                                                        .concat(Number(t && isFinite(t) ? t : 0).toFixed(6), " ")
                                                                                        .concat(e || "");
                                                                                })(),
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                              A
                                                  ? Object(Ue.jsxs)(Ue.Fragment, {
                                                        children: [
                                                            Object(Ue.jsxs)("div", {
                                                                className: "assets-select-card pool_price_section",
                                                                children: [
                                                                    Object(Ue.jsxs)("div", {
                                                                        className: "assets-left",
                                                                        children: [
                                                                            Object(Ue.jsx)("label", { className: "leftlabel", children: Wt[s].at_price }),
                                                                            Object(Ue.jsxs)("div", {
                                                                                className: "assets-select-wrapper",
                                                                                children: [Ht(null === T || void 0 === T ? void 0 : T.quoteCoinDenom), "/", Ht(null === T || void 0 === T ? void 0 : T.baseCoinDenom)],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    Object(Ue.jsxs)("div", {
                                                                        className: "assets-right swap-assets-right",
                                                                        children: [
                                                                            Object(Ue.jsxs)("div", {
                                                                                className: "label-right",
                                                                                children: [
                                                                                    Wt[s].pool_price,
                                                                                    ":",
                                                                                    Object(Ue.jsx)("span", {
                                                                                        className: "ml-1 cursor-pointer",
                                                                                        onClick: function () {
                                                                                            return ge(Number(L).toFixed(ln.coinDecimals));
                                                                                        },
                                                                                        children: (function () {
                                                                                            var e = Number(L && isFinite(L) ? L : 0);
                                                                                            return ((null !== I && void 0 !== I && I.id && e) || 0).toFixed(6);
                                                                                        })(),
                                                                                    }),
                                                                                    " ",
                                                                                ],
                                                                            }),
                                                                            Object(Ue.jsxs)("div", {
                                                                                children: [
                                                                                    Object(Ue.jsx)(Mi, {
                                                                                        onChange: function (e) {
                                                                                            return ge(e.target.value);
                                                                                        },
                                                                                        className: "assets-select-input with-select",
                                                                                        value: M,
                                                                                    }),
                                                                                    " ",
                                                                                ],
                                                                            }),
                                                                            Object(Ue.jsxs)("div", {
                                                                                className: "label-right",
                                                                                children: [
                                                                                    "Tolerance range:",
                                                                                    Object(Ue.jsx)("span", {
                                                                                        className: "ml-1 cursor-pointer",
                                                                                        children: (function (e, n, t) {
                                                                                            var i, o;
                                                                                            return ""
                                                                                                .concat(null === (i = (e - n * e) / t) || void 0 === i ? void 0 : i.toFixed(null === ln || void 0 === ln ? void 0 : ln.coinDecimals), " - ")
                                                                                                .concat(null === (o = (e + n * e) / t) || void 0 === o ? void 0 : o.toFixed(null === ln || void 0 === ln ? void 0 : ln.coinDecimals));
                                                                                        })(
                                                                                            Number(An(null === T || void 0 === T ? void 0 : T.lastPrice)),
                                                                                            Number(An(null === E || void 0 === E ? void 0 : E.maxPriceLimitRatio)),
                                                                                            Math.pow(
                                                                                                10,
                                                                                                Math.abs(
                                                                                                    Fn(null === (t = q[null === T || void 0 === T ? void 0 : T.baseCoinDenom]) || void 0 === t ? void 0 : t.decimals) -
                                                                                                        Fn(null === (i = q[null === T || void 0 === T ? void 0 : T.quoteCoinDenom]) || void 0 === i ? void 0 : i.decimals)
                                                                                                )
                                                                                            )
                                                                                        ),
                                                                                    }),
                                                                                    " ",
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(Ue.jsxs)("div", {
                                                                className: "assets-select-card mt-3",
                                                                children: [
                                                                    Object(Ue.jsxs)("div", {
                                                                        className: "assets-left",
                                                                        children: [
                                                                            Object(Ue.jsx)("label", { className: "leftlabel", children: Wt[s].you_get }),
                                                                            Object(Ue.jsx)("div", {
                                                                                className: "assets-select-wrapper mt-2",
                                                                                children: Object(Ue.jsx)(ao, {
                                                                                    value:
                                                                                        null !== d && void 0 !== d && d.denom && (null === se || void 0 === se ? void 0 : se.length) > 0
                                                                                            ? null === d || void 0 === d
                                                                                                ? void 0
                                                                                                : d.denom
                                                                                            : null,
                                                                                    onChange: Oe,
                                                                                    list: (null === se || void 0 === se ? void 0 : se.length) > 0 ? se : null,
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    Object(Ue.jsx)("div", {
                                                                        className: "assets-right swap-assets-right",
                                                                        children: Object(Ue.jsxs)("div", {
                                                                            children: [
                                                                                Object(Ue.jsx)(Mi, {
                                                                                    disabled: !0,
                                                                                    value: M
                                                                                        ? f
                                                                                            ? Number((null === c || void 0 === c ? void 0 : c.amount) / M).toFixed(ln.coinDecimals)
                                                                                            : null === d || void 0 === d
                                                                                            ? void 0
                                                                                            : d.amount
                                                                                        : 0,
                                                                                    className: "assets-select-input with-select",
                                                                                }),
                                                                                " ",
                                                                            ],
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    })
                                                  : null,
                                              Object(Ue.jsx)(Ze, {
                                                  children: Object(Ue.jsxs)(Ge, {
                                                      sm: "10",
                                                      className: "mt-3 mx-auto card-bottom-details",
                                                      children: [
                                                          A
                                                              ? null
                                                              : Object(Ue.jsxs)(Ze, {
                                                                    className: "mt-1",
                                                                    children: [
                                                                        Object(Ue.jsx)(Ge, { children: Object(Ue.jsx)("label", { children: Wt[s].estimated_slippage }) }),
                                                                        Object(Ue.jsxs)(Ge, {
                                                                            className: 3 < C ? "alert-label text-right" : "text-right",
                                                                            children: [null === (o = Number(C)) || void 0 === o ? void 0 : o.toFixed(ln.coinDecimals), "%"],
                                                                        }),
                                                                    ],
                                                                }),
                                                          Object(Ue.jsxs)(Ze, {
                                                              className: "mt-1",
                                                              children: [
                                                                  Object(Ue.jsx)(Ge, { children: Object(Ue.jsxs)("label", { children: [A ? "Trade Fee" : Wt[s].swap_fee, " ", Object(Ue.jsx)(mo, { text: Wt[s].tooltip_tx_fee })] }) }),
                                                                  Object(Ue.jsxs)(Ge, { className: "text-right", children: [100 * Number(An(null === E || void 0 === E ? void 0 : E.swapFeeRate) || 0), "%"] }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              A
                                                  ? null
                                                  : Object(Ue.jsx)(Ze, {
                                                        className: "mt-3",
                                                        children: Object(Ue.jsx)(Ge, {
                                                            className: "text-left note-text",
                                                            children: "Note: The requested swap could be completed fully, partially, or canceled due to price limiting and to maintain pool stability.",
                                                        }),
                                                    }),
                                              Object(Ue.jsx)("div", {
                                                  className: "assets-form-btn",
                                                  children: Object(Ue.jsx)(ba, {
                                                      isLimitOrder: A,
                                                      limitPrice: M,
                                                      lang: s,
                                                      pair: T,
                                                      orderLifespan: Z,
                                                      refreshDetails: function () {
                                                          F(0), Ne(), ye(), w(0);
                                                      },
                                                      orderDirection: f ? 1 : 2,
                                                      baseCoinPoolPrice: L,
                                                      validationError: V || (A && Q),
                                                      isDisabled:
                                                          !(null !== I && void 0 !== I && I.id) || !Number(null === d || void 0 === d ? void 0 : d.amount) || (!!A && (!Number(M) || (null === Q || void 0 === Q ? void 0 : Q.message))),
                                                      max: xe,
                                                      name: null !== I && void 0 !== I && I.id ? (3 < C && !A ? Wt[s].swap_anyway : Wt[s].swap) : "No pool exists",
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                          }),
                          Object(Ue.jsx)("div", { className: "order_table_section", children: A ? Object(Ue.jsx)(fa, { lang: s, assetMap: q }) : null }),
                      ],
                  });
              };
          Oa.propTypes = {
              setBaseCoinPoolPrice: bo.func.isRequired,
              setOfferCoinDenom: bo.func.isRequired,
              setOfferCoinAmount: bo.func.isRequired,
              setDemandCoinAmount: bo.func.isRequired,
              setLimitOrderToggle: bo.func.isRequired,
              setLimitPrice: bo.func.isRequired,
              setSlippage: bo.func.isRequired,
              setSlippageTolerance: bo.func.isRequired,
              setParams: bo.func.isRequired,
              setPair: bo.func.isRequired,
              setPairs: bo.func.isRequired,
              setPool: bo.func.isRequired,
              setPoolBalance: bo.func.isRequired,
              setPools: bo.func.isRequired,
              setReverse: bo.func.isRequired,
              assetMap: bo.object,
              assetDenomMap: bo.object,
              assetsInProgress: bo.bool,
              balances: bo.arrayOf(bo.shape({ denom: bo.string.isRequired, amount: bo.string })),
              baseCoinPoolPrice: bo.oneOfType([bo.string, bo.number]),
              demandCoin: bo.shape({ amount: bo.oneOfType([bo.string, bo.number]), denom: bo.string }),
              handleSet: bo.func,
              isLimitOrder: bo.bool,
              lang: bo.string,
              limitPrice: bo.oneOfType([bo.string, bo.number]),
              markets: bo.object,
              pair: bo.shape({ id: bo.shape({ high: bo.number, low: bo.number, unsigned: bo.bool }), baseCoinDenom: bo.string, quoteCoinDenom: bo.string, lastPrice: bo.string }),
              pairs: bo.shape({ list: bo.arrayOf(bo.shape({ denomIn: bo.string, denomOut: bo.string, liquidationRatio: bo.string, id: bo.shape({ high: bo.number, low: bo.number, unsigned: bo.bool }) })) }),
              params: bo.shape({ swapFeeRate: bo.string, maxPriceLimitRatio: bo.string }),
              pool: bo.shape({ id: bo.shape({ high: bo.number, low: bo.number, unsigned: bo.bool }), reserveAccountAddress: bo.string, poolCoinDenom: bo.string, reserveCoinDenoms: bo.array }),
              poolBalance: bo.arrayOf(bo.shape({ amount: bo.string, denom: bo.string })),
              pools: bo.arrayOf(bo.shape({ id: bo.shape({ high: bo.number, low: bo.number, unsigned: bo.bool }), reserveAccountAddress: bo.string, poolCoinDenom: bo.string, reserveCoinDenoms: bo.array })),
              reverse: bo.bool,
              slippageTolerance: bo.oneOfType([bo.string, bo.number]),
              slippage: bo.oneOfType([bo.string, bo.number]),
          };
          var xa = {
                  setDemandCoinDenom: function (e) {
                      return { type: Ne, value: e };
                  },
                  setPool: me,
                  setOfferCoinAmount: function (e, n) {
                      return { type: Ce, value: e, fee: n };
                  },
                  setOfferCoinDenom: function (e) {
                      return { type: we, value: e };
                  },
                  setDemandCoinAmount: function (e) {
                      return { type: ye, value: e };
                  },
                  setPoolBalance: be,
                  setReverse: Pe,
                  setPools: ve,
                  setSlippage: function (e) {
                      return { type: Se, value: e };
                  },
                  setPairs: function (e, n) {
                      return { type: E, list: e, pagination: n };
                  },
                  setPair: V,
                  setSlippageTolerance: function (e) {
                      return { type: Ie, value: e };
                  },
                  setLimitOrderToggle: function (e) {
                      return { type: ke, value: e };
                  },
                  setLimitPrice: function (e) {
                      return { type: Ee, value: e };
                  },
                  setBaseCoinPoolPrice: he,
                  setParams: Fe,
              },
              ga = Object(o.b)(function (e) {
                  return {
                      lang: e.language,
                      markets: e.oracle.market.list,
                      demandCoin: e.swap.demandCoin,
                      offerCoin: e.swap.offerCoin,
                      reverse: e.swap.reverse,
                      balances: e.account.balances.list,
                      pools: e.liquidity.pool.list,
                      slippage: e.swap.slippage,
                      pairs: e.asset.pairs,
                      pair: e.asset.pair,
                      pool: e.liquidity.pool._,
                      poolBalance: e.liquidity.poolBalance,
                      params: e.swap.params,
                      slippageTolerance: e.swap.slippageTolerance,
                      isLimitOrder: e.swap.isLimitOrder,
                      limitPrice: e.swap.limitPrice,
                      baseCoinPoolPrice: e.liquidity.baseCoinPoolPrice,
                      assetMap: e.asset.map,
                      assetDenomMap: e.asset._.assetDenomMap,
                      assetsInProgress: e.asset._.inProgress,
                  };
              }, xa)(Oa),
              Na = [
                  { path: "/trade", element: Object(Ue.jsx)(ga, {}) },
                  { path: "/assets", element: Object(Ue.jsx)(Yi, {}) },
                  { path: "/farm", element: Object(Ue.jsx)(uo, {}) },
                  { path: "/govern", element: Object(Ue.jsx)(Vo, {}) },
                  { path: "/govern/:id", element: Object(Ue.jsx)(Zo, {}) },
                  { path: "/portfolio", element: Object(Ue.jsx)(ra, {}) },
                  { path: "/farm/:id", element: Object(Ue.jsx)(To, {}) },
              ],
              ya = function () {
                  return Object(Ue.jsx)("div", {
                      className: "content scroll_bar",
                      children: Object(Ue.jsxs)(Oi.c, {
                          children: [
                              Na.map(function (e) {
                                  return Object(Ue.jsx)(Oi.a, { exact: !0, element: e.element, path: e.path }, e.path);
                              }),
                              Object(Ue.jsx)(Oi.a, { exact: !0, element: Object(Ue.jsx)(ga, {}), path: "*" }),
                          ],
                      }),
                  });
              },
              wa = t(813),
              Ca = t.n(wa),
              _a = function (e) {
                  var n = Object(l.useState)({}),
                      t = Object(r.a)(n, 2),
                      i = t[0],
                      o = t[1],
                      a = Object(l.useState)(!1),
                      s = Object(r.a)(a, 2),
                      c = s[0],
                      d = s[1],
                      u = Object(l.useState)(!1),
                      v = Object(r.a)(u, 2),
                      m = v[0],
                      b = v[1];
                  return (
                      Object(l.useEffect)(
                          function () {
                              var n,
                                  t = "1.3.5",
                                  i = "localStorage" in window && null !== window.localStorage;
                              i && localStorage.getItem("inlineSVGrev") === t
                                  ? ((n = localStorage.getItem("inlineSVGdata")), o(n), d(!0))
                                  : fetch(e.url)
                                        .then(function (e) {
                                            if (e.ok) return e.text();
                                            throw new Error("Network response was not ok.");
                                        })
                                        .then(function (e) {
                                            void 0 !== e && (i && (localStorage.setItem("inlineSVGdata", e), localStorage.setItem("inlineSVGrev", t)), o(e));
                                        })
                                        .catch(b)
                                        .then(function () {
                                            return d(!0);
                                        });
                          },
                          [e.url]
                      ),
                      Object(Ue.jsx)("div", { dangerouslySetInnerHTML: { __html: i }, className: "svgInline svgInline--".concat(c ? "loaded" : "loading", " ").concat(m ? "svgInline--errored" : "") })
                  );
              };
          a.a.config({ maxCount: 2 });
          var Da = function () {
                  return Object(Ue.jsxs)(Ue.Fragment, {
                      children: [
                          Object(Ue.jsx)(_a, { url: c }),
                          Object(Ue.jsxs)("div", {
                              className: "main_wrapper",
                              children: [
                                  Object(Ue.jsx)(Ca.a, { snowflakeCount: 70, style: { position: "fixed", width: "100vw", height: "100vh", zIndex: "999" } }),
                                  Object(Ue.jsx)(Di, {}),
                                  Object(Ue.jsxs)("div", { className: "main-container", children: [Object(Ue.jsx)(bi, {}), Object(Ue.jsx)(ya, {})] }),
                              ],
                          }),
                      ],
                  });
              },
              Sa = t(814),
              Ta = t(80),
              Ia = Object(Ta.combineReducers)({
                  address: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === j ? n.value : e;
                  },
                  showModal: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === p ? n.value : e;
                  },
                  vaults: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { list: [], pagination: {} },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === h ? Object(Le.a)(Object(Le.a)({}, e), {}, { list: n.list, pagination: n.pagination }) : e;
                  },
                  totalValue: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === f ? n.value : e;
                  },
                  history: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { list: [], count: 0 },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === O ? Object(Le.a)(Object(Le.a)({}, e), {}, { list: n.list, count: n.count }) : e;
                  },
                  showFormModal: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { show: !1, key: "" },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === x ? Object(Le.a)(Object(Le.a)({}, e), {}, { key: n.key, show: n.show }) : e;
                  },
                  vault: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === g ? n.value || {} : e;
                  },
                  balances: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { list: [], pagination: {}, asset: 0, pool: 0 },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      switch (n.type) {
                          case N:
                              return Object(Le.a)(Object(Le.a)({}, e), {}, { list: n.list, pagination: n.pagination });
                          case y:
                              return Object(Le.a)(Object(Le.a)({}, e), {}, { asset: n.value });
                          case w:
                              return Object(Le.a)(Object(Le.a)({}, e), {}, { pool: n.value });
                          default:
                              return e;
                      }
                  },
                  refreshBalance: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return (n.type === C && n.value) || e;
                  },
                  name: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === _ ? n.value : e;
                  },
              }),
              ka = Object(Ta.combineReducers)({
                  pairs: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { list: [], pagination: {} },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === E ? { list: n.list, pagination: n.pagination } : e;
                  },
                  pairId: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return (n.type === A && n.value) || e;
                  },
                  pair: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return (n.type === P && n.value) || e;
                  },
                  _: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { list: [], pagination: {}, inProgress: !1, assetDenomMap: {} },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      switch (n.type) {
                          case M:
                              return Object(Le.a)(Object(Le.a)({}, e), {}, { list: n.list, pagination: n.pagination, assetDenomMap: n.assetDenomMap });
                          case H:
                              return Object(Le.a)(Object(Le.a)({}, e), {}, { inProgress: null === n || void 0 === n ? void 0 : n.value });
                          default:
                              return e;
                      }
                  },
                  outAsset: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === L ? n.value || "" : e;
                  },
                  inAsset: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === R ? n.value || "" : e;
                  },
                  inAmount: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === B ? n.value || 0 : e;
                  },
                  outAmount: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === q ? n.value || 0 : e;
                  },
                  collateralRatio: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 150,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === U ? n.value || 0 : e;
                  },
                  map: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === M ? n.map : e;
                  },
                  appAssetMap: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === F ? (null === n || void 0 === n ? void 0 : n.map) || {} : e;
                  },
              }),
              Ea = Object(Ta.combineReducers)({
                  proposals: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === ko ? n.list || [] : e;
                  },
                  allProposals: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === Io ? n.list || [] : e;
                  },
                  proposalMap: function () {
                      var e,
                          n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          t = arguments.length > 1 ? arguments[1] : void 0;
                      return t.type === Eo ? Object(Le.a)(Object(Le.a)({}, n), {}, Object(Sn.a)({}, null === t || void 0 === t || null === (e = t.value) || void 0 === e ? void 0 : e.proposal_id, t.value || {})) : n;
                  },
                  proposerMap: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === Po ? Object(Le.a)(Object(Le.a)({}, e), {}, Object(Sn.a)({}, null === n || void 0 === n ? void 0 : n.proposalId, n.value || {})) : e;
                  },
                  proposalTallyMap: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === Ao ? Object(Le.a)(Object(Le.a)({}, e), {}, Object(Sn.a)({}, null === n || void 0 === n ? void 0 : n.proposalId, n.value || {})) : e;
                  },
              }),
              Aa = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en";
                  return e;
              },
              Pa = Object(Ta.combineReducers)({
                  ledgerModal: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                          n = arguments.length > 1 ? arguments[1] : void 0,
                          t = n.type;
                      switch (t) {
                          case Jt:
                              return !0;
                          case $t:
                              return !1;
                          default:
                              return e;
                      }
                  },
                  ledgerInfo: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { value: "", error: { message: "" } },
                          n = arguments.length > 1 ? arguments[1] : void 0,
                          t = n.type,
                          i = n.data;
                      switch (t) {
                          case Zt:
                              return Object(Le.a)(Object(Le.a)({}, e), {}, { value: i.value, error: Object(Le.a)(Object(Le.a)({}, e.error), {}, { message: i.error.message }) });
                          case $t:
                              return Object(Le.a)(Object(Le.a)({}, e), {}, { value: "", error: Object(Le.a)(Object(Le.a)({}, e.error), {}, { message: "" }) });
                          default:
                              return e;
                      }
                  },
                  accountIndex: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { value: "", error: { message: "" } },
                          n = arguments.length > 1 ? arguments[1] : void 0,
                          t = n.type,
                          i = n.data;
                      return t === ni ? Object(Le.a)(Object(Le.a)({}, e), {}, { value: i.value, error: Object(Le.a)(Object(Le.a)({}, e.error), {}, { message: i.error.message }) }) : e;
                  },
                  accountNumber: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { value: "", error: { message: "" } },
                          n = arguments.length > 1 ? arguments[1] : void 0,
                          t = n.type,
                          i = n.data;
                      return t === ei ? Object(Le.a)(Object(Le.a)({}, e), {}, { value: i.value, error: Object(Le.a)(Object(Le.a)({}, e.error), {}, { message: i.error.message }) }) : e;
                  },
              }),
              Ma = Object(Ta.combineReducers)({
                  pool: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { _: {}, list: [], pagination: {}, inProgress: !1 },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      switch (n.type) {
                          case Q:
                              return Object(Le.a)(Object(Le.a)({}, e), {}, { list: n.list, pagination: n.pagination });
                          case X:
                              return Object(Le.a)(Object(Le.a)({}, e), {}, { _: n.value });
                          default:
                              return e;
                      }
                  },
                  poolBalance: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === $ ? n.list || [] : e;
                  },
                  poolDeposit: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { list: [], pagination: {} },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === J ? { list: n.list, pagination: n.pagination } : e;
                  },
                  spotPrice: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === Z ? n.value : e;
                  },
                  inProgress: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === ee ? n.value : e;
                  },
                  firstReserveCoinDenom: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === ne ? n.value : e;
                  },
                  secondReserveCoinDenom: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === te ? n.value : e;
                  },
                  poolTokenSupply: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === ie ? n.value : e;
                  },
                  poolBalances: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      if (n.type === oe && n.value) {
                          var t = e;
                          return (t[n.index - 1] = n.value), t;
                      }
                      return e;
                  },
                  list: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      if (n.type === ae && n.value) {
                          var t = e;
                          return (t[n.index] = n.value), t;
                      }
                      return e;
                  },
                  baseCoinPoolPrice: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === le ? (null === n || void 0 === n ? void 0 : n.value) : e;
                  },
                  baseCoinPoolPriceWithoutConversion: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === le ? (null === n || void 0 === n ? void 0 : n.baseValue) || 0 : e;
                  },
                  userLiquidityInDollar: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === se ? n.value : e;
                  },
                  userLiquidityInPools: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === ce && null !== n && void 0 !== n && n.poolId ? Object(Le.a)(Object(Le.a)({}, e), {}, Object(Sn.a)({}, n.poolId, n.value || 0)) : e;
                  },
                  incentives: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === re ? n.value : e;
                  },
                  masterPoolMap: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === re ? (null === n || void 0 === n ? void 0 : n.masterPoolMap) : e;
                  },
                  rewardMap: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === re ? n.rewardMap : e;
                  },
                  incentivesMap: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === re ? (null === n || void 0 === n ? void 0 : n.incentivesMap) : e;
                  },
                  farmedTokensDollarValue: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === de ? Object(Le.a)(Object(Le.a)({}, e), {}, Object(Sn.a)({}, n.poolId, n.value)) : e;
                  },
                  rewardsMap: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === ue ? n.value : e;
                  },
              }),
              Fa = Object(Ta.combineReducers)({
                  market: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { list: {}, pagination: {} },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === Oe ? Object(Le.a)(Object(Le.a)({}, e), {}, { list: null === n || void 0 === n ? void 0 : n.list, pagination: null === n || void 0 === n ? void 0 : n.pagination }) : e;
                  },
              }),
              La = Object(Ta.combineReducers)({
                  type: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "limit",
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === ja ? n.value : e;
                  },
                  amount: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === pa ? n.value : e;
                  },
                  list: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === ha ? n.list : e;
                  },
              }),
              Ra = Object(Ta.combineReducers)({
                  cautionNotice: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { show: !1, isAccepted: !1 },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === ge ? { show: n.show, isAccepted: n.isAccepted } : e;
                  },
                  demandCoin: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { amount: 0, denom: "" },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      switch (n.type) {
                          case Ne:
                              return Object(Le.a)(Object(Le.a)({}, e), {}, { denom: n.value });
                          case ye:
                              return Object(Le.a)(Object(Le.a)({}, e), {}, { amount: n.value });
                          default:
                              return e;
                      }
                  },
                  offerCoin: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { amount: 0, denom: "", fee: 0 },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      switch (n.type) {
                          case we:
                              return Object(Le.a)(Object(Le.a)({}, e), {}, { denom: n.value });
                          case Ce:
                              return Object(Le.a)(Object(Le.a)({}, e), {}, { amount: n.value, fee: n.fee });
                          default:
                              return e;
                      }
                  },
                  reverse: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === _e ? n.value || !1 : e;
                  },
                  isComplete: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === De ? n.value || !1 : e;
                  },
                  slippage: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === Se ? n.value || 0 : e;
                  },
                  params: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === Te ? n.value : e;
                  },
                  slippageTolerance: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === Ie ? n.value : e;
                  },
                  isLimitOrder: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === ke ? n.value : e;
                  },
                  limitPrice: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === Ee ? n.value : e;
                  },
                  calculations: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { expectedAmount: 0, price: 0, amount: 0 },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === Ae
                          ? Object(Le.a)(
                                Object(Le.a)({}, e),
                                {},
                                { amount: null === n || void 0 === n ? void 0 : n.amount, expectedAmount: null === n || void 0 === n ? void 0 : n.expectedAmount, price: null === n || void 0 === n ? void 0 : n.price }
                            )
                          : e;
                  },
              }),
              qa = Object(Ta.combineReducers)({
                  theme: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { darkThemeEnabled: !0 },
                          n = arguments.length > 1 ? arguments[1] : void 0;
                      return n.type === ui ? Object(Le.a)(Object(Le.a)({}, e), {}, { darkThemeEnabled: n.value }) : e;
                  },
              }),
              Ba = Object(Ta.combineReducers)({ language: Aa, account: Ia, asset: ka, swap: Ra, liquidity: Ma, theme: qa, oracle: Fa, order: La, ledger: Pa, govern: Ea }),
              Ua = function (e, n) {
                  return "ACCOUNT_ADDRESS_SET" === n.type && "" === n.value && (e.account = void 0), Ba(e, n);
              },
              Ha = t(816),
              Va = t(815),
              Wa = Object(Ta.createStore)(Ua, Object(Va.composeWithDevTools)({ trace: !0 })(Object(Ta.applyMiddleware)(Ha.a))),
              za = Object(Ue.jsx)(o.a, { store: Wa, children: Object(Ue.jsxs)(i.a, { children: [Object(Ue.jsx)(an, {}), Object(Ue.jsx)(Da, {})] }) }),
              Ya = document.getElementById("root");
          Object(Sa.createRoot)(Ya).render(za),
              "serviceWorker" in navigator &&
                  navigator.serviceWorker.ready.then(function (e) {
                      e.unregister()
                          .then(function () {
                              console.log("Service worker registration success.");
                          })
                          .catch(function (e) {
                              console.error("Error during service worker registration:", e);
                          });
                  });
      },
      390: function (e) {
          e.exports = JSON.parse(
              '{"tokens":[{"chainId":"cosmoshub-4","chainName":"COSMOS","rpc":"https://cosmos-rpc.zenscape.one","rest":"https://cosmos-rest.zenscape.one","coinDenom":"ATOM","coinMinimalDenom":"uatom","coinDecimals":6,"coinType":118,"prefix":"cosmos","channel":"channel-400","comdexChannel":"channel-37","ibcDenomHash":"ibc/961FA3E54F5DCCA639F37A7C45F7BBE41815579EF1513B5AFBEFCFEB8F256352","logoURI":"https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/atom.svg","coinGeckoId":"cosmos","explorerUrlToTx":"https://www.mintscan.io/osmosis/txs/{txHash}"},{"chainId":"osmosis-1","chainName":"Osmosis","rpc":"https://osmosis-rpc.zenscape.one","rest":"https://osmosis-rest.zenscape.one","coinDenom":"OSMO","coinMinimalDenom":"uosmo","coinDecimals":6,"coinType":118,"prefix":"osmo","channel":"channel-87","comdexChannel":"channel-1","ibcDenomHash":"ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B","logoURI":"https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/osmo.svg","coinGeckoId":"osmosis","explorerUrlToTx":"https://www.mintscan.io/osmosis/txs/{txHash}"},{"chainId":"axelar-dojo-1","chainName":"Axelar","coinDenom":"USDC","coinMinimalDenom":"uusdc","coinDecimals":6,"coinType":118,"channel":"channel-31","comdexChannel":"channel-34","ibcDenomHash":"ibc/E1616E7C19EA474C565737709A628D6F8A23FF9D3E9A7A6871306CF5E0A5341E","depositUrlOverride":"https://satellite.money/?source=ethereum&destination=comdex&asset_denom=uausdc&destination_address=","withdrawUrlOverride":"https://satellite.money/?source=comdex&destination=ethereum&asset_denom=uausdc&destination_address="},{"chainId":"juno-1","chainName":"juno","rpc":"https://juno-rpc.polkachu.com","rest":"https://juno-api.polkachu.com","coinDenom":"juno","coinMinimalDenom":"ujuno","coinDecimals":6,"coinType":118,"prefix":"juno","channel":"channel-36","comdexChannel":"channel-18","ibcDenomHash":"ibc/167E3D88D71B7D2F6308D3EF93FC3DD51932B2D9672D72B71418F61CBC5F5717","logoURI":"https://raw.githubusercontent.com/cosmos/chain-registry/blob/master/juno/images/juno.svg","coinGeckoId":"juno-network","explorerUrlToTx":"https://www.mintscan.io/juno/txs/{txHash}"},{"chainId":"axelar-dojo-1","chainName":"Axelar","coinDenom":"weth","coinMinimalDenom":"weth-wei","coinDecimals":18,"coinType":118,"channel":"channel-31","comdexChannel":"channel-34","logoURI":"https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png","ibcDenomHash":"ibc/81C3A46287D7664A8FD19843AC8D0CFD6C284EF1F750C661C48B3544277B1B29","depositUrlOverride":"https://satellite.money/?destination_address=&asset_denom=weth-wei&source=ethereum&destination=comdex","withdrawUrlOverride":"https://satellite.money/?destination_address=&asset_denom=weth-wei&source=comdex&destination=ethereum"},{"chainId":"axelar-dojo-1","chainName":"Axelar","coinDenom":"wbtc","coinMinimalDenom":"wbtc-satoshi","coinDecimals":8,"coinType":118,"channel":"channel-31","comdexChannel":"channel-34","logoURI":"https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png","ibcDenomHash":"ibc/0A6F20FA34BEBB63568E44C81C6E154C63ED061BA45E7EBC144B24C0DBBD0A4F","depositUrlOverride":"https://satellite.money/?destination_address=&asset_denom=wbtc-satoshi&source=ethereum&destination=comdex","withdrawUrlOverride":"https://satellite.money/?destination_address=&asset_denom=wbtc-satoshi&source=comdex&destination=ethereum"},{"chainId":"stride-1","chainName":"stride","rpc":"https://stride-rpc.zenscape.one","rest":"https://stride-rest.zenscape.one","coinDenom":"statom","coinMinimalDenom":"stuatom","coinDecimals":6,"coinType":118,"prefix":"juno","channel":"channel-49","comdexChannel":"channel-45","ibcDenomHash":"ibc/21476176CD2CBF2F8017EFF231B1132DF23F350B0219AB47A6E087527ECADCC2","logoURI":"https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg","coinGeckoId":"stride-staked-atom","explorerUrlToTx":"https://www.mintscan.io/stride/txs/{txHash}"}]}'
          );
      },
      569: function (e, n) {},
      791: function (e, n, t) {},
      792: function (e, n, t) {},
      836: function (e, n, t) {},
      839: function (e, n, t) {},
      881: function (e, n) {},
      883: function (e, n) {},
      893: function (e, n) {},
      895: function (e, n) {},
      920: function (e, n) {},
      921: function (e, n) {},
      926: function (e, n) {},
      928: function (e, n) {},
      935: function (e, n) {},
      954: function (e, n) {},
      977: function (e, n) {},
      980: function (e, n) {},
  },
  [[1650, 1, 2]],
]);
