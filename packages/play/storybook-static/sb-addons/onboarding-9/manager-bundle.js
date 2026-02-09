try {
  (() => {
    var so = Object.defineProperty;
    var ce = (e, t) => () => (e && (t = e((e = 0))), t);
    var lo = (e, t) => {
      for (var n in t) so(e, n, { get: t[n], enumerable: !0 });
    };
    var X = ce(() => {});
    var Q = ce(() => {});
    var Z = ce(() => {});
    var y,
      _Ns,
      Le,
      _ks,
      _Ls,
      _Ms,
      _js,
      rn,
      _Ds,
      _Fs,
      _Bs,
      q,
      _Ws,
      _Us,
      on,
      an,
      sn,
      _Hs,
      _Gs,
      _zs,
      Je,
      _Ys,
      _qs,
      _$s,
      ae,
      _Vs,
      _Ks,
      _Js,
      _Xs,
      _Qs,
      _Zs,
      At,
      ue,
      _el,
      _tl,
      _nl,
      ht = ce(() => {
        X();
        Q();
        Z();
        (y = __REACT__),
          ({
            Children: _Ns,
            Component: Le,
            Fragment: _ks,
            Profiler: _Ls,
            PureComponent: _Ms,
            StrictMode: _js,
            Suspense: rn,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: _Ds,
            cloneElement: _Fs,
            createContext: _Bs,
            createElement: q,
            createFactory: _Ws,
            createRef: _Us,
            forwardRef: on,
            isValidElement: an,
            lazy: sn,
            memo: _Hs,
            startTransition: _Gs,
            unstable_act: _zs,
            useCallback: Je,
            useContext: _Ys,
            useDebugValue: _qs,
            useDeferredValue: _$s,
            useEffect: ae,
            useId: _Vs,
            useImperativeHandle: _Ks,
            useInsertionEffect: _Js,
            useLayoutEffect: _Xs,
            useMemo: _Qs,
            useReducer: _Zs,
            useRef: At,
            useState: ue,
            useSyncExternalStore: _el,
            useTransition: _tl,
            version: _nl,
          } = __REACT__);
      });
    var Me,
      _al,
      mt,
      _sl,
      _ll,
      _cl,
      _ul,
      _pl,
      _dl,
      ln,
      _fl,
      cn,
      _hl,
      yt = ce(() => {
        X();
        Q();
        Z();
        (Me = __REACT_DOM__),
          ({
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: _al,
            createPortal: mt,
            createRoot: _sl,
            findDOMNode: _ll,
            flushSync: _cl,
            hydrate: _ul,
            hydrateRoot: _pl,
            render: _dl,
            unmountComponentAtNode: ln,
            unstable_batchedUpdates: _fl,
            unstable_renderSubtreeIntoContainer: cn,
            version: _hl,
          } = __REACT_DOM__);
      });
    var _bl,
      _vl,
      _El,
      _Sl,
      _Ol,
      _wl,
      _Tl,
      _Il,
      _Rl,
      _Cl,
      _Pl,
      _l,
      _xl,
      _Al,
      _Nl,
      _kl,
      _Ll,
      _Ml,
      _jl,
      _Dl,
      _Fl,
      _Bl,
      _Wl,
      _Ul,
      _Hl,
      _Gl,
      un,
      _zl,
      _Yl,
      _ql,
      _$l,
      _Vl,
      _Kl,
      _Jl,
      _Xl,
      _Ql,
      _Zl,
      _ec,
      _tc,
      _nc,
      _rc,
      _oc,
      _ic,
      _ac,
      _sc,
      _lc,
      _cc,
      _uc,
      pn,
      _pc,
      _dc,
      _fc,
      _hc,
      _mc,
      _yc,
      _gc,
      _bc,
      _vc,
      _Ec,
      _Sc,
      _Oc,
      _wc,
      _Tc,
      _Ic,
      _Rc,
      dn = ce(() => {
        X();
        Q();
        Z();
        (_bl = __STORYBOOK_CORE_EVENTS__),
          ({
            ARGTYPES_INFO_REQUEST: _vl,
            ARGTYPES_INFO_RESPONSE: _El,
            CHANNEL_CREATED: _Sl,
            CHANNEL_WS_DISCONNECT: _Ol,
            CONFIG_ERROR: _wl,
            CREATE_NEW_STORYFILE_REQUEST: _Tl,
            CREATE_NEW_STORYFILE_RESPONSE: _Il,
            CURRENT_STORY_WAS_SET: _Rl,
            DOCS_PREPARED: _Cl,
            DOCS_RENDERED: _Pl,
            FILE_COMPONENT_SEARCH_REQUEST: _l,
            FILE_COMPONENT_SEARCH_RESPONSE: _xl,
            FORCE_REMOUNT: _Al,
            FORCE_RE_RENDER: _Nl,
            GLOBALS_UPDATED: _kl,
            NAVIGATE_URL: _Ll,
            PLAY_FUNCTION_THREW_EXCEPTION: _Ml,
            PRELOAD_ENTRIES: _jl,
            PREVIEW_BUILDER_PROGRESS: _Dl,
            PREVIEW_KEYDOWN: _Fl,
            REGISTER_SUBSCRIPTION: _Bl,
            REQUEST_WHATS_NEW_DATA: _Wl,
            RESET_STORY_ARGS: _Ul,
            RESULT_WHATS_NEW_DATA: _Hl,
            SAVE_STORY_REQUEST: _Gl,
            SAVE_STORY_RESPONSE: un,
            SELECT_STORY: _zl,
            SET_CONFIG: _Yl,
            SET_CURRENT_STORY: _ql,
            SET_FILTER: _$l,
            SET_GLOBALS: _Vl,
            SET_INDEX: _Kl,
            SET_STORIES: _Jl,
            SET_WHATS_NEW_CACHE: _Xl,
            SHARED_STATE_CHANGED: _Ql,
            SHARED_STATE_SET: _Zl,
            STORIES_COLLAPSE_ALL: _ec,
            STORIES_EXPAND_ALL: _tc,
            STORY_ARGS_UPDATED: _nc,
            STORY_CHANGED: _rc,
            STORY_ERRORED: _oc,
            STORY_FINISHED: _ic,
            STORY_INDEX_INVALIDATED: _ac,
            STORY_MISSING: _sc,
            STORY_PREPARED: _lc,
            STORY_RENDERED: _cc,
            STORY_RENDER_PHASE_CHANGED: _uc,
            STORY_SPECIFIED: pn,
            STORY_THREW_EXCEPTION: _pc,
            STORY_UNCHANGED: _dc,
            TELEMETRY_ERROR: _fc,
            TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: _hc,
            TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: _mc,
            TESTING_MODULE_CONFIG_CHANGE: _yc,
            TESTING_MODULE_CRASH_REPORT: _gc,
            TESTING_MODULE_PROGRESS_REPORT: _bc,
            TESTING_MODULE_RUN_ALL_REQUEST: _vc,
            TESTING_MODULE_RUN_REQUEST: _Ec,
            TESTING_MODULE_WATCH_MODE_REQUEST: _Sc,
            TOGGLE_WHATS_NEW_NOTIFICATIONS: _Oc,
            UNHANDLED_ERRORS_WHILE_PLAYING: _wc,
            UPDATE_GLOBALS: _Tc,
            UPDATE_QUERY_PARAMS: _Ic,
            UPDATE_STORY_ARGS: _Rc,
          } = __STORYBOOK_CORE_EVENTS__);
      });
    var Nt = ce(() => {
      X();
      Q();
      Z();
      dn();
    });
    var _bu,
      _vu,
      _Eu,
      _Su,
      _Ou,
      _wu,
      _Tu,
      _Iu,
      _Ru,
      _Cu,
      _Pu,
      _u,
      _xu,
      _Au,
      _Nu,
      _ku,
      _Lu,
      _Mu,
      _ju,
      _Du,
      _Fu,
      _Bu,
      _Wu,
      _Uu,
      hn,
      _Hu,
      _Gu,
      _zu,
      _Yu,
      _qu,
      _$u,
      _Vu,
      _Ku,
      _Ju,
      _Xu,
      _Qu,
      _Zu,
      _ep,
      _tp,
      _np,
      _rp,
      _op,
      _ip,
      _ap,
      _sp,
      _lp,
      mn,
      _cp,
      _up,
      _pp,
      _dp,
      _fp,
      _hp,
      _mp,
      _yp,
      _gp,
      _bp,
      _vp,
      _Ep,
      _Sp,
      _Op,
      _wp,
      _Tp,
      _Ip,
      _Rp,
      _Cp,
      _Pp,
      _p,
      _xp,
      _Ap,
      yn = ce(() => {
        X();
        Q();
        Z();
        (_bu = __STORYBOOK_COMPONENTS__),
          ({
            A: _vu,
            ActionBar: _Eu,
            AddonPanel: _Su,
            Badge: _Ou,
            Bar: _wu,
            Blockquote: _Tu,
            Button: _Iu,
            ClipboardCode: _Ru,
            Code: _Cu,
            DL: _Pu,
            Div: _u,
            DocumentWrapper: _xu,
            EmptyTabContent: _Au,
            ErrorFormatter: _Nu,
            FlexBar: _ku,
            Form: _Lu,
            H1: _Mu,
            H2: _ju,
            H3: _Du,
            H4: _Fu,
            H5: _Bu,
            H6: _Wu,
            HR: _Uu,
            IconButton: hn,
            IconButtonSkeleton: _Hu,
            Icons: _Gu,
            Img: _zu,
            LI: _Yu,
            Link: _qu,
            ListItem: _$u,
            Loader: _Vu,
            Modal: _Ku,
            OL: _Ju,
            P: _Xu,
            Placeholder: _Qu,
            Pre: _Zu,
            ProgressSpinner: _ep,
            ResetWrapper: _tp,
            ScrollArea: _np,
            Separator: _rp,
            Spaced: _op,
            Span: _ip,
            StorybookIcon: _ap,
            StorybookLogo: _sp,
            Symbols: _lp,
            SyntaxHighlighter: mn,
            TT: _cp,
            TabBar: _up,
            TabButton: _pp,
            TabWrapper: _dp,
            Table: _fp,
            Tabs: _hp,
            TabsState: _mp,
            TooltipLinkList: _yp,
            TooltipMessage: _gp,
            TooltipNote: _bp,
            UL: _vp,
            WithTooltip: _Ep,
            WithTooltipPure: _Sp,
            Zoom: _Op,
            codeCommon: _wp,
            components: _Tp,
            createCopyToClipboardFunction: _Ip,
            getStoryHref: _Rp,
            icons: _Cp,
            interleaveSeparators: _Pp,
            nameSpaceClassNames: _p,
            resetComponents: _xp,
            withReset: _Ap,
          } = __STORYBOOK_COMPONENTS__);
      });
    var _jp,
      _Dp,
      _Fp,
      _Bp,
      kt,
      _Wp,
      gt,
      Lt,
      _Up,
      _Hp,
      _Gp,
      _zp,
      _Yp,
      _qp,
      _$p,
      _Vp,
      _Kp,
      _Jp,
      Xe,
      _Xp,
      ee,
      gn,
      _Qp,
      bn,
      _Zp,
      vn = ce(() => {
        X();
        Q();
        Z();
        (_jp = __STORYBOOK_THEMING__),
          ({
            CacheProvider: _Dp,
            ClassNames: _Fp,
            Global: _Bp,
            ThemeProvider: kt,
            background: _Wp,
            color: gt,
            convert: Lt,
            create: _Up,
            createCache: _Hp,
            createGlobal: _Gp,
            createReset: _zp,
            css: _Yp,
            darken: _qp,
            ensure: _$p,
            ignoreSsrWarning: _Vp,
            isPropValid: _Kp,
            jsx: _Jp,
            keyframes: Xe,
            lighten: _Xp,
            styled: ee,
            themes: gn,
            typography: _Qp,
            useTheme: bn,
            withTheme: _Zp,
          } = __STORYBOOK_THEMING__);
      });
    var _od,
      _id,
      _ad,
      _sd,
      _ld,
      _cd,
      _ud,
      _pd,
      _dd,
      _fd,
      _hd,
      _md,
      _yd,
      _gd,
      En,
      _bd,
      _vd,
      _Ed,
      _Sd,
      _Od,
      _wd,
      _Td,
      _Id,
      _Rd,
      _Cd,
      _Pd,
      _d,
      _xd,
      _Ad,
      _Nd,
      _kd,
      _Ld,
      _Md,
      _jd,
      _Dd,
      _Fd,
      _Bd,
      _Wd,
      _Ud,
      _Hd,
      _Gd,
      _zd,
      _Yd,
      _qd,
      _$d,
      _Vd,
      _Kd,
      _Jd,
      _Xd,
      _Qd,
      _Zd,
      _ef,
      _tf,
      _nf,
      _rf,
      _of,
      _af,
      _sf,
      _lf,
      _cf,
      _uf,
      Sn,
      _pf,
      _df,
      _ff,
      _hf,
      _mf,
      _yf,
      _gf,
      _bf,
      _vf,
      _Ef,
      _Sf,
      _Of,
      _wf,
      _Tf,
      _If,
      _Rf,
      _Cf,
      _Pf,
      _f,
      _xf,
      _Af,
      _Nf,
      _kf,
      _Lf,
      _Mf,
      _jf,
      _Df,
      _Ff,
      _Bf,
      _Wf,
      _Uf,
      _Hf,
      _Gf,
      _zf,
      _Yf,
      _qf,
      _$f,
      _Vf,
      _Kf,
      _Jf,
      _Xf,
      _Qf,
      _Zf,
      _eh,
      _th,
      _nh,
      _rh,
      _oh,
      _ih,
      _ah,
      _sh,
      _lh,
      _ch,
      _uh,
      _ph,
      _dh,
      _fh,
      _hh,
      _mh,
      _yh,
      _gh,
      _bh,
      _vh,
      _Eh,
      _Sh,
      _Oh,
      _wh,
      _Th,
      _Ih,
      _Rh,
      _Ch,
      _Ph,
      _h,
      _xh,
      _Ah,
      _Nh,
      _kh,
      _Lh,
      _Mh,
      _jh,
      _Dh,
      _Fh,
      _Bh,
      _Wh,
      _Uh,
      _Hh,
      _Gh,
      _zh,
      _Yh,
      _qh,
      _$h,
      _Vh,
      _Kh,
      _Jh,
      _Xh,
      _Qh,
      _Zh,
      _em,
      _tm,
      _nm,
      _rm,
      _om,
      _im,
      _am,
      _sm,
      _lm,
      _cm,
      _um,
      _pm,
      _dm,
      _fm,
      _hm,
      _mm,
      _ym,
      _gm,
      _bm,
      _vm,
      _Em,
      _Sm,
      _Om,
      _wm,
      _Tm,
      _Im,
      _Rm,
      _Cm,
      _Pm,
      _m,
      _xm,
      _Am,
      _Nm,
      _km,
      _Lm,
      _Mm,
      _jm,
      _Dm,
      _Fm,
      _Bm,
      _Wm,
      _Um,
      _Hm,
      _Gm,
      _zm,
      _Ym,
      _qm,
      _$m,
      _Vm,
      _Km,
      _Jm,
      _Xm,
      _Qm,
      _Zm,
      _ey,
      _ty,
      _ny,
      _ry,
      _oy,
      _iy,
      _ay,
      _sy,
      _ly,
      _cy,
      _uy,
      _py,
      _dy,
      _fy,
      _hy,
      _my,
      _yy,
      _gy,
      _by,
      _vy,
      _Ey,
      _Sy,
      _Oy,
      _wy,
      _Ty,
      _Iy,
      _Ry,
      _Cy,
      On = ce(() => {
        X();
        Q();
        Z();
        (_od = __STORYBOOK_ICONS__),
          ({
            AccessibilityAltIcon: _id,
            AccessibilityIcon: _ad,
            AddIcon: _sd,
            AdminIcon: _ld,
            AlertAltIcon: _cd,
            AlertIcon: _ud,
            AlignLeftIcon: _pd,
            AlignRightIcon: _dd,
            AppleIcon: _fd,
            ArrowBottomLeftIcon: _hd,
            ArrowBottomRightIcon: _md,
            ArrowDownIcon: _yd,
            ArrowLeftIcon: _gd,
            ArrowRightIcon: En,
            ArrowSolidDownIcon: _bd,
            ArrowSolidLeftIcon: _vd,
            ArrowSolidRightIcon: _Ed,
            ArrowSolidUpIcon: _Sd,
            ArrowTopLeftIcon: _Od,
            ArrowTopRightIcon: _wd,
            ArrowUpIcon: _Td,
            AzureDevOpsIcon: _Id,
            BackIcon: _Rd,
            BasketIcon: _Cd,
            BatchAcceptIcon: _Pd,
            BatchDenyIcon: _d,
            BeakerIcon: _xd,
            BellIcon: _Ad,
            BitbucketIcon: _Nd,
            BoldIcon: _kd,
            BookIcon: _Ld,
            BookmarkHollowIcon: _Md,
            BookmarkIcon: _jd,
            BottomBarIcon: _Dd,
            BottomBarToggleIcon: _Fd,
            BoxIcon: _Bd,
            BranchIcon: _Wd,
            BrowserIcon: _Ud,
            ButtonIcon: _Hd,
            CPUIcon: _Gd,
            CalendarIcon: _zd,
            CameraIcon: _Yd,
            CategoryIcon: _qd,
            CertificateIcon: _$d,
            ChangedIcon: _Vd,
            ChatIcon: _Kd,
            CheckIcon: _Jd,
            ChevronDownIcon: _Xd,
            ChevronLeftIcon: _Qd,
            ChevronRightIcon: _Zd,
            ChevronSmallDownIcon: _ef,
            ChevronSmallLeftIcon: _tf,
            ChevronSmallRightIcon: _nf,
            ChevronSmallUpIcon: _rf,
            ChevronUpIcon: _of,
            ChromaticIcon: _af,
            ChromeIcon: _sf,
            CircleHollowIcon: _lf,
            CircleIcon: _cf,
            ClearIcon: _uf,
            CloseAltIcon: Sn,
            CloseIcon: _pf,
            CloudHollowIcon: _df,
            CloudIcon: _ff,
            CogIcon: _hf,
            CollapseIcon: _mf,
            CommandIcon: _yf,
            CommentAddIcon: _gf,
            CommentIcon: _bf,
            CommentsIcon: _vf,
            CommitIcon: _Ef,
            CompassIcon: _Sf,
            ComponentDrivenIcon: _Of,
            ComponentIcon: _wf,
            ContrastIcon: _Tf,
            ControlsIcon: _If,
            CopyIcon: _Rf,
            CreditIcon: _Cf,
            CrossIcon: _Pf,
            DashboardIcon: _f,
            DatabaseIcon: _xf,
            DeleteIcon: _Af,
            DiamondIcon: _Nf,
            DirectionIcon: _kf,
            DiscordIcon: _Lf,
            DocChartIcon: _Mf,
            DocListIcon: _jf,
            DocumentIcon: _Df,
            DownloadIcon: _Ff,
            DragIcon: _Bf,
            EditIcon: _Wf,
            EllipsisIcon: _Uf,
            EmailIcon: _Hf,
            ExpandAltIcon: _Gf,
            ExpandIcon: _zf,
            EyeCloseIcon: _Yf,
            EyeIcon: _qf,
            FaceHappyIcon: _$f,
            FaceNeutralIcon: _Vf,
            FaceSadIcon: _Kf,
            FacebookIcon: _Jf,
            FailedIcon: _Xf,
            FastForwardIcon: _Qf,
            FigmaIcon: _Zf,
            FilterIcon: _eh,
            FlagIcon: _th,
            FolderIcon: _nh,
            FormIcon: _rh,
            GDriveIcon: _oh,
            GithubIcon: _ih,
            GitlabIcon: _ah,
            GlobeIcon: _sh,
            GoogleIcon: _lh,
            GraphBarIcon: _ch,
            GraphLineIcon: _uh,
            GraphqlIcon: _ph,
            GridAltIcon: _dh,
            GridIcon: _fh,
            GrowIcon: _hh,
            HeartHollowIcon: _mh,
            HeartIcon: _yh,
            HomeIcon: _gh,
            HourglassIcon: _bh,
            InfoIcon: _vh,
            ItalicIcon: _Eh,
            JumpToIcon: _Sh,
            KeyIcon: _Oh,
            LightningIcon: _wh,
            LightningOffIcon: _Th,
            LinkBrokenIcon: _Ih,
            LinkIcon: _Rh,
            LinkedinIcon: _Ch,
            LinuxIcon: _Ph,
            ListOrderedIcon: _h,
            ListUnorderedIcon: _xh,
            LocationIcon: _Ah,
            LockIcon: _Nh,
            MarkdownIcon: _kh,
            MarkupIcon: _Lh,
            MediumIcon: _Mh,
            MemoryIcon: _jh,
            MenuIcon: _Dh,
            MergeIcon: _Fh,
            MirrorIcon: _Bh,
            MobileIcon: _Wh,
            MoonIcon: _Uh,
            NutIcon: _Hh,
            OutboxIcon: _Gh,
            OutlineIcon: _zh,
            PaintBrushIcon: _Yh,
            PaperClipIcon: _qh,
            ParagraphIcon: _$h,
            PassedIcon: _Vh,
            PhoneIcon: _Kh,
            PhotoDragIcon: _Jh,
            PhotoIcon: _Xh,
            PinAltIcon: _Qh,
            PinIcon: _Zh,
            PlayAllHollowIcon: _em,
            PlayBackIcon: _tm,
            PlayHollowIcon: _nm,
            PlayIcon: _rm,
            PlayNextIcon: _om,
            PlusIcon: _im,
            PointerDefaultIcon: _am,
            PointerHandIcon: _sm,
            PowerIcon: _lm,
            PrintIcon: _cm,
            ProceedIcon: _um,
            ProfileIcon: _pm,
            PullRequestIcon: _dm,
            QuestionIcon: _fm,
            RSSIcon: _hm,
            RedirectIcon: _mm,
            ReduxIcon: _ym,
            RefreshIcon: _gm,
            ReplyIcon: _bm,
            RepoIcon: _vm,
            RequestChangeIcon: _Em,
            RewindIcon: _Sm,
            RulerIcon: _Om,
            SaveIcon: _wm,
            SearchIcon: _Tm,
            ShareAltIcon: _Im,
            ShareIcon: _Rm,
            ShieldIcon: _Cm,
            SideBySideIcon: _Pm,
            SidebarAltIcon: _m,
            SidebarAltToggleIcon: _xm,
            SidebarIcon: _Am,
            SidebarToggleIcon: _Nm,
            SpeakerIcon: _km,
            StackedIcon: _Lm,
            StarHollowIcon: _Mm,
            StarIcon: _jm,
            StatusFailIcon: _Dm,
            StatusPassIcon: _Fm,
            StatusWarnIcon: _Bm,
            StickerIcon: _Wm,
            StopAltHollowIcon: _Um,
            StopAltIcon: _Hm,
            StopIcon: _Gm,
            StorybookIcon: _zm,
            StructureIcon: _Ym,
            SubtractIcon: _qm,
            SunIcon: _$m,
            SupportIcon: _Vm,
            SwitchAltIcon: _Km,
            SyncIcon: _Jm,
            TabletIcon: _Xm,
            ThumbsUpIcon: _Qm,
            TimeIcon: _Zm,
            TimerIcon: _ey,
            TransferIcon: _ty,
            TrashIcon: _ny,
            TwitterIcon: _ry,
            TypeIcon: _oy,
            UbuntuIcon: _iy,
            UndoIcon: _ay,
            UnfoldIcon: _sy,
            UnlockIcon: _ly,
            UnpinIcon: _cy,
            UploadIcon: _uy,
            UserAddIcon: _py,
            UserAltIcon: _dy,
            UserIcon: _fy,
            UsersIcon: _hy,
            VSCodeIcon: _my,
            VerifiedIcon: _yy,
            VideoIcon: _gy,
            WandIcon: _by,
            WatchIcon: _vy,
            WindowsIcon: _Ey,
            WrenchIcon: _Sy,
            XIcon: _Oy,
            YoutubeIcon: _wy,
            ZoomIcon: _Ty,
            ZoomOutIcon: _Iy,
            ZoomResetIcon: _Ry,
            iconList: _Cy,
          } = __STORYBOOK_ICONS__);
      });
    var io = {};
    lo(io, { default: () => ws });
    function Co(e, t = {}) {
      let {
        colors: n = Tn,
        duration: r = In,
        force: o = Rn,
        particleCount: i = Cn,
        particleShape: a = Pn,
        particleSize: s = _n,
        particleClass: c = xn,
        destroyAfterDone: l = An,
        stageHeight: p = Nn,
        stageWidth: u = kn,
      } = t;
      ((m) => {
        if (document.querySelector('style[data-neoconfetti]')) return;
        const g = Mt('style');
        (g.dataset.neoconfetti = ''), (g.textContent = m), jt(document.head, g);
      })(Io),
        e.classList.add(Ro),
        e.style.setProperty('--sh', `${p}px`);
      let d = [],
        f = [],
        h = () => rt(be() * (No - 1)),
        b = (m, g) => a !== 'rectangles' && (m === 'circles' || ko(g));
      function N(m, g) {
        const O = h(),
          B = b(a, O),
          P = (te, Ne) => m.style.setProperty(te, `${Ne}`);
        P('--xlp', `${Dt(bt(Dn(g, 90) - 180), 0, 180, -u / 2, u / 2)}px`),
          P('--dc', `${r - rt(1e3 * be())}ms`);
        const V = be() < _o ? We(be() * xo, 2) : 0;
        P('--x1', V),
          P('--x2', -1 * V),
          P('--x3', V),
          P('--x4', We(bt(Dt(bt(Dn(g, 90) - 180), 0, 180, -1, 1)), 4)),
          P('--y1', We(be() * Mn, 4)),
          P('--y2', We(be() * o * (Or() ? 1 : -1), 4)),
          P('--y3', Mn),
          P('--y4', We(Ao(Dt(bt(g - 180), 0, 180, o, -o), 0), 4)),
          P('--w', `${B ? s : rt(4 * be()) + s / 2}px`),
          P('--h', `${B ? s : rt(2 * be()) + s}px`);
        const H = O.toString(2).padStart(3, '0').split('');
        P('--hr', H.map((te) => `${+te / 2}`).join(' ')),
          P('--r', H.join(' ')),
          P('--rd', `${We(be() * (Po - Ln) + Ln)}ms`),
          P('--br', B ? '50%' : 0);
      }
      let v;
      function T() {
        (e.innerHTML = ''),
          clearTimeout(v),
          (d = jn(i, n)),
          (f = ((m, g = [], O) => {
            const B = [];
            for (const { color: P } of g) {
              const V = Mt('div');
              (V.className = `${wn} ${O}`), V.style.setProperty('--bgc', P);
              const H = Mt('div');
              jt(V, H), jt(m, V), B.push(V);
            }
            return B;
          })(e, d, c));
        for (const [m, g] of Fn(f)) N(g, d[+m].degree);
        v = setTimeout(() => {
          l && (e.innerHTML = '');
        }, r);
      }
      return (
        T(),
        {
          update(m) {
            const g = m.particleCount ?? Cn,
              O = m.particleShape ?? Pn,
              B = m.particleSize ?? _n,
              P = m.particleClass ?? xn,
              V = m.colors ?? Tn,
              H = m.stageHeight ?? Nn,
              te = m.duration ?? In,
              Ne = m.force ?? Rn,
              Ve = m.stageWidth ?? kn,
              ke = m.destroyAfterDone ?? An;
            d = jn(g, V);
            let Be = !1;
            if (g === i) {
              f = Array.from(e.querySelectorAll(`.${wn}`));
              for (const [Ke, { color: Te }] of Fn(d)) {
                const Ie = f[+Ke];
                JSON.stringify(n) !== JSON.stringify(V) && Ie.style.setProperty('--bgc', Te),
                  O !== a && Ie.style.setProperty('--br', b(O, h()) ? '50%' : '0'),
                  P !== c && (c && Ie.classList.remove(c), P && Ie.classList.add(P));
              }
            } else Be = !0;
            l && !ke && clearTimeout(v),
              e.style.setProperty('--sh', `${H}px`),
              (r = te),
              (n = V),
              (o = Ne),
              (i = g),
              (a = O),
              (s = B),
              (c = P),
              (l = ke),
              (p = H),
              (u = Ve),
              Be && T();
          },
          destroy() {
            (e.innerHTML = ''), clearTimeout(v);
          },
        }
      );
    }
    function Lo({ class: e, ...t }) {
      const n = At(null),
        r = At();
      return (
        ae(() => {
          if (typeof window < 'u' && n.current) {
            if (r.current) return r.current.update(t), r.current.destroy;
            r.current = Co(n.current, t);
          }
        }, [t]),
        q('div', { ref: n, className: e })
      );
    }
    function Bn({ targetSelector: e, pulsating: t = !1 }) {
      return (
        ae(() => {
          const n = document.querySelector(e);
          if (n)
            if (t) {
              (n.style.animation = 'pulsate 3s infinite'),
                (n.style.transformOrigin = 'center'),
                (n.style.animationTimingFunction = 'ease-in-out');
              const r = `
        @keyframes pulsate {
          0% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 0 rgba(2, 156, 253, 0.7), 0 0 0 0 rgba(2, 156, 253, 0.4);
          }
          50% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 20px rgba(2, 156, 253, 0), 0 0 0 40px rgba(2, 156, 253, 0);
          }
          100% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 0 rgba(2, 156, 253, 0), 0 0 0 0 rgba(2, 156, 253, 0);
          }
        }
      `,
                o = document.createElement('style');
              (o.id = 'sb-onboarding-pulsating-effect'),
                (o.innerHTML = r),
                document.head.appendChild(o);
            } else n.style.boxShadow = 'rgba(2,156,253,1) 0 0 2px 1px';
          return () => {
            const r = document.querySelector('#sb-onboarding-pulsating-effect');
            r?.remove(), n && ((n.style.animation = ''), (n.style.boxShadow = ''));
          };
        }, [e, t]),
        null
      );
    }
    function wr(e) {
      return (t) => typeof t === e;
    }
    function Wo(e, t) {
      const { length: n } = e;
      if (n !== t.length) return !1;
      for (let r = n; r-- !== 0; ) if (!oe(e[r], t[r])) return !1;
      return !0;
    }
    function Uo(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      let n = new DataView(e.buffer),
        r = new DataView(t.buffer),
        o = e.byteLength;
      for (; o--; ) if (n.getUint8(o) !== r.getUint8(o)) return !1;
      return !0;
    }
    function Ho(e, t) {
      if (e.size !== t.size) return !1;
      for (const n of e.entries()) if (!t.has(n[0])) return !1;
      for (const n of e.entries()) if (!oe(n[1], t.get(n[0]))) return !1;
      return !0;
    }
    function Go(e, t) {
      if (e.size !== t.size) return !1;
      for (const n of e.entries()) if (!t.has(n[0])) return !1;
      return !0;
    }
    function oe(e, t) {
      if (e === t) return !0;
      if (e && Hn(e) && t && Hn(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return Wo(e, t);
        if (e instanceof Map && t instanceof Map) return Ho(e, t);
        if (e instanceof Set && t instanceof Set) return Go(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return Uo(e, t);
        if (Un(e) && Un(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        const n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let o = n.length; o-- !== 0; ) if (!Object.hasOwn(t, n[o])) return !1;
        for (let o = n.length; o-- !== 0; ) {
          const i = n[o];
          if (!(i === '_owner' && e.$$typeof) && !oe(e[i], t[i])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    function Rt(e) {
      const t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return 'HTMLElement';
      if (qo(t)) return t;
    }
    function de(e) {
      return (t) => Rt(t) === e;
    }
    function qo(e) {
      return zo.includes(e);
    }
    function Ye(e) {
      return (t) => typeof t === e;
    }
    function $o(e) {
      return Yo.includes(e);
    }
    function I(e) {
      if (e === null) return 'null';
      switch (typeof e) {
        case 'bigint':
          return 'bigint';
        case 'boolean':
          return 'boolean';
        case 'number':
          return 'number';
        case 'string':
          return 'string';
        case 'symbol':
          return 'symbol';
        case 'undefined':
          return 'undefined';
      }
      return I.array(e) ? 'Array' : I.plainFunction(e) ? 'Function' : Rt(e) || 'Object';
    }
    function Ko(...e) {
      return e.every((t) => C.string(t) || C.array(t) || C.plainObject(t));
    }
    function Jo(e, t, n) {
      return Tr(e, t)
        ? [e, t].every(C.array)
          ? !e.some($n(n)) && t.some($n(n))
          : [e, t].every(C.plainObject)
            ? !Object.entries(e).some(qn(n)) && Object.entries(t).some(qn(n))
            : t === n
        : !1;
    }
    function Gn(e, t, n) {
      let { actual: r, key: o, previous: i, type: a } = n,
        s = Ee(e, o),
        c = Ee(t, o),
        l = [s, c].every(C.number) && (a === 'increased' ? s < c : s > c);
      return C.undefined(r) || (l = l && c === r), C.undefined(i) || (l = l && s === i), l;
    }
    function zn(e, t, n) {
      const { key: r, type: o, value: i } = n,
        a = Ee(e, r),
        s = Ee(t, r),
        c = o === 'added' ? a : s,
        l = o === 'added' ? s : a;
      if (!C.nullOrUndefined(i)) {
        if (C.defined(c)) {
          if (C.array(c) || C.plainObject(c)) return Jo(c, l, i);
        } else return oe(l, i);
        return !1;
      }
      return [a, s].every(C.array)
        ? !l.every(Vt(c))
        : [a, s].every(C.plainObject)
          ? Xo(Object.keys(c), Object.keys(l))
          : ![a, s].every((p) => C.primitive(p) && C.defined(p)) &&
            (o === 'added' ? !C.defined(a) && C.defined(s) : C.defined(a) && !C.defined(s));
    }
    function Yn(e, t, { key: n } = {}) {
      let r = Ee(e, n),
        o = Ee(t, n);
      if (!Tr(r, o)) throw new TypeError('Inputs have different types');
      if (!Ko(r, o)) throw new TypeError("Inputs don't have length");
      return [r, o].every(C.plainObject) && ((r = Object.keys(r)), (o = Object.keys(o))), [r, o];
    }
    function qn(e) {
      return ([t, n]) =>
        C.array(e)
          ? oe(e, n) || e.some((r) => oe(r, n) || (C.array(n) && Vt(n)(r)))
          : C.plainObject(e) && e[t]
            ? !!e[t] && oe(e[t], n)
            : oe(e, n);
    }
    function Xo(e, t) {
      return t.some((n) => !e.includes(n));
    }
    function $n(e) {
      return (t) => (C.array(e) ? e.some((n) => oe(n, t) || (C.array(t) && Vt(t)(n))) : oe(e, t));
    }
    function Qe(e, t) {
      return C.array(e) ? e.some((n) => oe(n, t)) : oe(e, t);
    }
    function Vt(e) {
      return (t) => e.some((n) => oe(n, t));
    }
    function Tr(...e) {
      return e.every(C.array) || e.every(C.number) || e.every(C.plainObject) || e.every(C.string);
    }
    function Ee(e, t) {
      return C.plainObject(e) || C.array(e)
        ? C.string(t)
          ? t.split('.').reduce((n, r) => n?.[r], e)
          : C.number(t)
            ? e[t]
            : e
        : e;
    }
    function Ot(e, t) {
      if ([e, t].some(C.nullOrUndefined)) throw new Error('Missing required parameters');
      if (![e, t].every((n) => C.plainObject(n) || C.array(n)))
        throw new Error('Expected plain objects or array');
      return {
        added: (n, r) => {
          try {
            return zn(e, t, { key: n, type: 'added', value: r });
          } catch {
            return !1;
          }
        },
        changed: (n, r, o) => {
          try {
            const i = Ee(e, n),
              a = Ee(t, n),
              s = C.defined(r),
              c = C.defined(o);
            if (s || c) {
              const l = c ? Qe(o, i) : !Qe(r, i),
                p = Qe(r, a);
              return l && p;
            }
            return [i, a].every(C.array) || [i, a].every(C.plainObject) ? !oe(i, a) : i !== a;
          } catch {
            return !1;
          }
        },
        changedFrom: (n, r, o) => {
          if (!C.defined(n)) return !1;
          try {
            const i = Ee(e, n),
              a = Ee(t, n),
              s = C.defined(o);
            return Qe(r, i) && (s ? Qe(o, a) : !s);
          } catch {
            return !1;
          }
        },
        decreased: (n, r, o) => {
          if (!C.defined(n)) return !1;
          try {
            return Gn(e, t, { key: n, actual: r, previous: o, type: 'decreased' });
          } catch {
            return !1;
          }
        },
        emptied: (n) => {
          try {
            const [r, o] = Yn(e, t, { key: n });
            return !!r.length && !o.length;
          } catch {
            return !1;
          }
        },
        filled: (n) => {
          try {
            const [r, o] = Yn(e, t, { key: n });
            return !r.length && !!o.length;
          } catch {
            return !1;
          }
        },
        increased: (n, r, o) => {
          if (!C.defined(n)) return !1;
          try {
            return Gn(e, t, { key: n, actual: r, previous: o, type: 'increased' });
          } catch {
            return !1;
          }
        },
        removed: (n, r) => {
          try {
            return zn(e, t, { key: n, type: 'removed', value: r });
          } catch {
            return !1;
          }
        },
      };
    }
    function ei(e) {
      var t = !1;
      return () => {
        t ||
          ((t = !0),
          window.Promise.resolve().then(() => {
            (t = !1), e();
          }));
      };
    }
    function ti(e) {
      var t = !1;
      return () => {
        t ||
          ((t = !0),
          setTimeout(() => {
            (t = !1), e();
          }, Zo));
      };
    }
    function Rr(e) {
      var t = {};
      return e && t.toString.call(e) === '[object Function]';
    }
    function Fe(e, t) {
      if (e.nodeType !== 1) return [];
      var n = e.ownerDocument.defaultView,
        r = n.getComputedStyle(e, null);
      return t ? r[t] : r;
    }
    function Kt(e) {
      return e.nodeName === 'HTML' ? e : e.parentNode || e.host;
    }
    function at(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
          return e.ownerDocument.body;
        case '#document':
          return e.body;
      }
      var t = Fe(e),
        n = t.overflow,
        r = t.overflowX,
        o = t.overflowY;
      return /(auto|scroll|overlay)/.test(n + o + r) ? e : at(Kt(e));
    }
    function Cr(e) {
      return e?.referenceNode ? e.referenceNode : e;
    }
    function qe(e) {
      return e === 11 ? Vn : e === 10 ? Kn : Vn || Kn;
    }
    function He(e) {
      if (!e) return document.documentElement;
      for (
        var t = qe(10) ? document.body : null, n = e.offsetParent || null;
        n === t && e.nextElementSibling;
      )
        n = (e = e.nextElementSibling).offsetParent;
      var r = n?.nodeName;
      return !r || r === 'BODY' || r === 'HTML'
        ? e
          ? e.ownerDocument.documentElement
          : document.documentElement
        : ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) !== -1 && Fe(n, 'position') === 'static'
          ? He(n)
          : n;
    }
    function oi(e) {
      var t = e.nodeName;
      return t === 'BODY' ? !1 : t === 'HTML' || He(e.firstElementChild) === e;
    }
    function Ut(e) {
      return e.parentNode !== null ? Ut(e.parentNode) : e;
    }
    function wt(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        r = n ? e : t,
        o = n ? t : e,
        i = document.createRange();
      i.setStart(r, 0), i.setEnd(o, 0);
      var a = i.commonAncestorContainer;
      if ((e !== a && t !== a) || r.contains(o)) return oi(a) ? a : He(a);
      var s = Ut(e);
      return s.host ? wt(s.host, t) : wt(e, Ut(t).host);
    }
    function Ge(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'top',
        n = t === 'top' ? 'scrollTop' : 'scrollLeft',
        r = e.nodeName;
      if (r === 'BODY' || r === 'HTML') {
        var o = e.ownerDocument.documentElement,
          i = e.ownerDocument.scrollingElement || o;
        return i[n];
      }
      return e[n];
    }
    function ii(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = Ge(t, 'top'),
        o = Ge(t, 'left'),
        i = n ? -1 : 1;
      return (e.top += r * i), (e.bottom += r * i), (e.left += o * i), (e.right += o * i), e;
    }
    function Jn(e, t) {
      var n = t === 'x' ? 'Left' : 'Top',
        r = n === 'Left' ? 'Right' : 'Bottom';
      return parseFloat(e[`border${n}Width`]) + parseFloat(e[`border${r}Width`]);
    }
    function Xn(e, t, n, r) {
      return Math.max(
        t[`offset${e}`],
        t[`scroll${e}`],
        n[`client${e}`],
        n[`offset${e}`],
        n[`scroll${e}`],
        qe(10)
          ? parseInt(n[`offset${e}`], 10) +
              parseInt(r[`margin${e === 'Height' ? 'Top' : 'Left'}`], 10) +
              parseInt(r[`margin${e === 'Height' ? 'Bottom' : 'Right'}`], 10)
          : 0,
      );
    }
    function Pr(e) {
      var t = e.body,
        n = e.documentElement,
        r = qe(10) && getComputedStyle(n);
      return { height: Xn('Height', t, n, r), width: Xn('Width', t, n, r) };
    }
    function xe(e) {
      return se({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function Ht(e) {
      var t = {};
      try {
        if (qe(10)) {
          t = e.getBoundingClientRect();
          var n = Ge(e, 'top'),
            r = Ge(e, 'left');
          (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
        } else t = e.getBoundingClientRect();
      } catch {}
      var o = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
        i = e.nodeName === 'HTML' ? Pr(e.ownerDocument) : {},
        a = i.width || e.clientWidth || o.width,
        s = i.height || e.clientHeight || o.height,
        c = e.offsetWidth - a,
        l = e.offsetHeight - s;
      if (c || l) {
        var p = Fe(e);
        (c -= Jn(p, 'x')), (l -= Jn(p, 'y')), (o.width -= c), (o.height -= l);
      }
      return xe(o);
    }
    function Jt(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = qe(10),
        o = t.nodeName === 'HTML',
        i = Ht(e),
        a = Ht(t),
        s = at(e),
        c = Fe(t),
        l = parseFloat(c.borderTopWidth),
        p = parseFloat(c.borderLeftWidth);
      n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
      var u = xe({
        top: i.top - a.top - l,
        left: i.left - a.left - p,
        width: i.width,
        height: i.height,
      });
      if (((u.marginTop = 0), (u.marginLeft = 0), !r && o)) {
        var d = parseFloat(c.marginTop),
          f = parseFloat(c.marginLeft);
        (u.top -= l - d),
          (u.bottom -= l - d),
          (u.left -= p - f),
          (u.right -= p - f),
          (u.marginTop = d),
          (u.marginLeft = f);
      }
      return (r && !n ? t.contains(s) : t === s && s.nodeName !== 'BODY') && (u = ii(u, t)), u;
    }
    function li(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = e.ownerDocument.documentElement,
        r = Jt(e, n),
        o = Math.max(n.clientWidth, window.innerWidth || 0),
        i = Math.max(n.clientHeight, window.innerHeight || 0),
        a = t ? 0 : Ge(n),
        s = t ? 0 : Ge(n, 'left'),
        c = { top: a - r.top + r.marginTop, left: s - r.left + r.marginLeft, width: o, height: i };
      return xe(c);
    }
    function _r(e) {
      var t = e.nodeName;
      if (t === 'BODY' || t === 'HTML') return !1;
      if (Fe(e, 'position') === 'fixed') return !0;
      var n = Kt(e);
      return n ? _r(n) : !1;
    }
    function xr(e) {
      if (!e || !e.parentElement || qe()) return document.documentElement;
      for (var t = e.parentElement; t && Fe(t, 'transform') === 'none'; ) t = t.parentElement;
      return t || document.documentElement;
    }
    function Xt(e, t, n, r) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        i = { top: 0, left: 0 },
        a = o ? xr(e) : wt(e, Cr(t));
      if (r === 'viewport') i = li(a, o);
      else {
        var s = void 0;
        r === 'scrollParent'
          ? ((s = at(Kt(t))), s.nodeName === 'BODY' && (s = e.ownerDocument.documentElement))
          : r === 'window'
            ? (s = e.ownerDocument.documentElement)
            : (s = r);
        var c = Jt(s, a, o);
        if (s.nodeName === 'HTML' && !_r(a)) {
          var l = Pr(e.ownerDocument),
            p = l.height,
            u = l.width;
          (i.top += c.top - c.marginTop),
            (i.bottom = p + c.top),
            (i.left += c.left - c.marginLeft),
            (i.right = u + c.left);
        } else i = c;
      }
      n = n || 0;
      var d = typeof n === 'number';
      return (
        (i.left += d ? n : n.left || 0),
        (i.top += d ? n : n.top || 0),
        (i.right -= d ? n : n.right || 0),
        (i.bottom -= d ? n : n.bottom || 0),
        i
      );
    }
    function ci(e) {
      var t = e.width,
        n = e.height;
      return t * n;
    }
    function Ar(e, t, n, r, o) {
      var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
      if (e.indexOf('auto') === -1) return e;
      var a = Xt(n, r, i, o),
        s = {
          top: { width: a.width, height: t.top - a.top },
          right: { width: a.right - t.right, height: a.height },
          bottom: { width: a.width, height: a.bottom - t.bottom },
          left: { width: t.left - a.left, height: a.height },
        },
        c = Object.keys(s)
          .map((d) => se({ key: d }, s[d], { area: ci(s[d]) }))
          .sort((d, f) => f.area - d.area),
        l = c.filter((d) => {
          var f = d.width,
            h = d.height;
          return f >= n.clientWidth && h >= n.clientHeight;
        }),
        p = l.length > 0 ? l[0].key : c[0].key,
        u = e.split('-')[1];
      return p + (u ? `-${u}` : '');
    }
    function Nr(_e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
        o = r ? xr(t) : wt(t, Cr(n));
      return Jt(n, o, r);
    }
    function kr(e) {
      var t = e.ownerDocument.defaultView,
        n = t.getComputedStyle(e),
        r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
        o = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
        i = { width: e.offsetWidth + o, height: e.offsetHeight + r };
      return i;
    }
    function Tt(e) {
      var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return e.replace(/left|right|bottom|top/g, (n) => t[n]);
    }
    function Lr(e, t, n) {
      n = n.split('-')[0];
      var r = kr(e),
        o = { width: r.width, height: r.height },
        i = ['right', 'left'].indexOf(n) !== -1,
        a = i ? 'top' : 'left',
        s = i ? 'left' : 'top',
        c = i ? 'height' : 'width',
        l = i ? 'width' : 'height';
      return (
        (o[a] = t[a] + t[c] / 2 - r[c] / 2), n === s ? (o[s] = t[s] - r[l]) : (o[s] = t[Tt(s)]), o
      );
    }
    function st(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function ui(e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex((o) => o[t] === n);
      var r = st(e, (o) => o[t] === n);
      return e.indexOf(r);
    }
    function Mr(e, t, n) {
      var r = n === void 0 ? e : e.slice(0, ui(e, 'name', n));
      return (
        r.forEach((o) => {
          o.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
          var i = o.function || o.fn;
          o.enabled &&
            Rr(i) &&
            ((t.offsets.popper = xe(t.offsets.popper)),
            (t.offsets.reference = xe(t.offsets.reference)),
            (t = i(t, o)));
        }),
        t
      );
    }
    function pi() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        };
        (e.offsets.reference = Nr(
          this.state,
          this.popper,
          this.reference,
          this.options.positionFixed,
        )),
          (e.placement = Ar(
            this.options.placement,
            e.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding,
          )),
          (e.originalPlacement = e.placement),
          (e.positionFixed = this.options.positionFixed),
          (e.offsets.popper = Lr(this.popper, e.offsets.reference, e.placement)),
          (e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'),
          (e = Mr(this.modifiers, e)),
          this.state.isCreated
            ? this.options.onUpdate(e)
            : ((this.state.isCreated = !0), this.options.onCreate(e));
      }
    }
    function jr(e, t) {
      return e.some((n) => {
        var r = n.name,
          o = n.enabled;
        return o && r === t;
      });
    }
    function Qt(e) {
      for (
        var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0;
        r < t.length;
        r++
      ) {
        var o = t[r],
          i = o ? `${o}${n}` : e;
        if (typeof document.body.style[i] < 'u') return i;
      }
      return null;
    }
    function di() {
      return (
        (this.state.isDestroyed = !0),
        jr(this.modifiers, 'applyStyle') &&
          (this.popper.removeAttribute('x-placement'),
          (this.popper.style.position = ''),
          (this.popper.style.top = ''),
          (this.popper.style.left = ''),
          (this.popper.style.right = ''),
          (this.popper.style.bottom = ''),
          (this.popper.style.willChange = ''),
          (this.popper.style[Qt('transform')] = '')),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function Dr(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    function Fr(e, t, n, r) {
      var o = e.nodeName === 'BODY',
        i = o ? e.ownerDocument.defaultView : e;
      i.addEventListener(t, n, { passive: !0 }), o || Fr(at(i.parentNode), t, n, r), r.push(i);
    }
    function fi(e, _t, n, r) {
      (n.updateBound = r), Dr(e).addEventListener('resize', n.updateBound, { passive: !0 });
      var o = at(e);
      return (
        Fr(o, 'scroll', n.updateBound, n.scrollParents),
        (n.scrollElement = o),
        (n.eventsEnabled = !0),
        n
      );
    }
    function hi() {
      this.state.eventsEnabled ||
        (this.state = fi(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function mi(e, t) {
      return (
        Dr(e).removeEventListener('resize', t.updateBound),
        t.scrollParents.forEach((n) => {
          n.removeEventListener('scroll', t.updateBound);
        }),
        (t.updateBound = null),
        (t.scrollParents = []),
        (t.scrollElement = null),
        (t.eventsEnabled = !1),
        t
      );
    }
    function yi() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate), (this.state = mi(this.reference, this.state)));
    }
    function Zt(e) {
      return e !== '' && !Number.isNaN(parseFloat(e)) && Number.isFinite(e);
    }
    function Gt(e, t) {
      Object.keys(t).forEach((n) => {
        var r = '';
        ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) !== -1 &&
          Zt(t[n]) &&
          (r = 'px'),
          (e.style[n] = t[n] + r);
      });
    }
    function gi(e, t) {
      Object.keys(t).forEach((n) => {
        var r = t[n];
        r !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
      });
    }
    function bi(e) {
      return (
        Gt(e.instance.popper, e.styles),
        gi(e.instance.popper, e.attributes),
        e.arrowElement && Object.keys(e.arrowStyles).length && Gt(e.arrowElement, e.arrowStyles),
        e
      );
    }
    function vi(e, t, n, _r, o) {
      var i = Nr(o, t, e, n.positionFixed),
        a = Ar(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
      return (
        t.setAttribute('x-placement', a),
        Gt(t, { position: n.positionFixed ? 'fixed' : 'absolute' }),
        n
      );
    }
    function Ei(e, t) {
      var n = e.offsets,
        r = n.popper,
        o = n.reference,
        i = Math.round,
        a = Math.floor,
        s = (N) => N,
        c = i(o.width),
        l = i(r.width),
        p = ['left', 'right'].indexOf(e.placement) !== -1,
        u = e.placement.indexOf('-') !== -1,
        d = c % 2 === l % 2,
        f = c % 2 === 1 && l % 2 === 1,
        h = t ? (p || u || d ? i : a) : s,
        b = t ? i : s;
      return {
        left: h(f && !u && t ? r.left - 1 : r.left),
        top: b(r.top),
        bottom: b(r.bottom),
        right: h(r.right),
      };
    }
    function Oi(e, t) {
      var n = t.x,
        r = t.y,
        o = e.offsets.popper,
        i = st(e.instance.modifiers, (m) => m.name === 'applyStyle').gpuAcceleration;
      i !== void 0 &&
        console.warn(
          'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!',
        );
      var a = i !== void 0 ? i : t.gpuAcceleration,
        s = He(e.instance.popper),
        c = Ht(s),
        l = { position: o.position },
        p = Ei(e, window.devicePixelRatio < 2 || !Si),
        u = n === 'bottom' ? 'top' : 'bottom',
        d = r === 'right' ? 'left' : 'right',
        f = Qt('transform'),
        h = void 0,
        b = void 0;
      if (
        (u === 'bottom'
          ? s.nodeName === 'HTML'
            ? (b = -s.clientHeight + p.bottom)
            : (b = -c.height + p.bottom)
          : (b = p.top),
        d === 'right'
          ? s.nodeName === 'HTML'
            ? (h = -s.clientWidth + p.right)
            : (h = -c.width + p.right)
          : (h = p.left),
        a && f)
      )
        (l[f] = `translate3d(${h}px, ${b}px, 0)`),
          (l[u] = 0),
          (l[d] = 0),
          (l.willChange = 'transform');
      else {
        var N = u === 'bottom' ? -1 : 1,
          v = d === 'right' ? -1 : 1;
        (l[u] = b * N), (l[d] = h * v), (l.willChange = `${u}, ${d}`);
      }
      var T = { 'x-placement': e.placement };
      return (
        (e.attributes = se({}, T, e.attributes)),
        (e.styles = se({}, l, e.styles)),
        (e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles)),
        e
      );
    }
    function Br(e, t, n) {
      var r = st(e, (s) => {
          var c = s.name;
          return c === t;
        }),
        o = !!r && e.some((s) => s.name === n && s.enabled && s.order < r.order);
      if (!o) {
        var i = `\`${t}\``,
          a = `\`${n}\``;
        console.warn(
          a +
            ' modifier is required by ' +
            i +
            ' modifier in order to work, be sure to include it before ' +
            i +
            '!',
        );
      }
      return o;
    }
    function wi(e, t) {
      var n;
      if (!Br(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
      var r = t.element;
      if (typeof r === 'string') {
        if (((r = e.instance.popper.querySelector(r)), !r)) return e;
      } else if (!e.instance.popper.contains(r))
        return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
      var o = e.placement.split('-')[0],
        i = e.offsets,
        a = i.popper,
        s = i.reference,
        c = ['left', 'right'].indexOf(o) !== -1,
        l = c ? 'height' : 'width',
        p = c ? 'Top' : 'Left',
        u = p.toLowerCase(),
        d = c ? 'left' : 'top',
        f = c ? 'bottom' : 'right',
        h = kr(r)[l];
      s[f] - h < a[u] && (e.offsets.popper[u] -= a[u] - (s[f] - h)),
        s[u] + h > a[f] && (e.offsets.popper[u] += s[u] + h - a[f]),
        (e.offsets.popper = xe(e.offsets.popper));
      var b = s[u] + s[l] / 2 - h / 2,
        N = Fe(e.instance.popper),
        v = parseFloat(N[`margin${p}`]),
        T = parseFloat(N[`border${p}Width`]),
        m = b - e.offsets.popper[u] - v - T;
      return (
        (m = Math.max(Math.min(a[l] - h, m), 0)),
        (e.arrowElement = r),
        (e.offsets.arrow = ((n = {}), ze(n, u, Math.round(m)), ze(n, d, ''), n)),
        e
      );
    }
    function Ti(e) {
      return e === 'end' ? 'start' : e === 'start' ? 'end' : e;
    }
    function Qn(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = Ft.indexOf(e),
        r = Ft.slice(n + 1).concat(Ft.slice(0, n));
      return t ? r.reverse() : r;
    }
    function Ii(e, t) {
      if (jr(e.instance.modifiers, 'inner') || (e.flipped && e.placement === e.originalPlacement))
        return e;
      var n = Xt(
          e.instance.popper,
          e.instance.reference,
          t.padding,
          t.boundariesElement,
          e.positionFixed,
        ),
        r = e.placement.split('-')[0],
        o = Tt(r),
        i = e.placement.split('-')[1] || '',
        a = [];
      switch (t.behavior) {
        case Bt.FLIP:
          a = [r, o];
          break;
        case Bt.CLOCKWISE:
          a = Qn(r);
          break;
        case Bt.COUNTERCLOCKWISE:
          a = Qn(r, !0);
          break;
        default:
          a = t.behavior;
      }
      return (
        a.forEach((s, c) => {
          if (r !== s || a.length === c + 1) return e;
          (r = e.placement.split('-')[0]), (o = Tt(r));
          var l = e.offsets.popper,
            p = e.offsets.reference,
            u = Math.floor,
            d =
              (r === 'left' && u(l.right) > u(p.left)) ||
              (r === 'right' && u(l.left) < u(p.right)) ||
              (r === 'top' && u(l.bottom) > u(p.top)) ||
              (r === 'bottom' && u(l.top) < u(p.bottom)),
            f = u(l.left) < u(n.left),
            h = u(l.right) > u(n.right),
            b = u(l.top) < u(n.top),
            N = u(l.bottom) > u(n.bottom),
            v =
              (r === 'left' && f) ||
              (r === 'right' && h) ||
              (r === 'top' && b) ||
              (r === 'bottom' && N),
            T = ['top', 'bottom'].indexOf(r) !== -1,
            m =
              !!t.flipVariations &&
              ((T && i === 'start' && f) ||
                (T && i === 'end' && h) ||
                (!T && i === 'start' && b) ||
                (!T && i === 'end' && N)),
            g =
              !!t.flipVariationsByContent &&
              ((T && i === 'start' && h) ||
                (T && i === 'end' && f) ||
                (!T && i === 'start' && N) ||
                (!T && i === 'end' && b)),
            O = m || g;
          (d || v || O) &&
            ((e.flipped = !0),
            (d || v) && (r = a[c + 1]),
            O && (i = Ti(i)),
            (e.placement = r + (i ? `-${i}` : '')),
            (e.offsets.popper = se(
              {},
              e.offsets.popper,
              Lr(e.instance.popper, e.offsets.reference, e.placement),
            )),
            (e = Mr(e.instance.modifiers, e, 'flip')));
        }),
        e
      );
    }
    function Ri(e) {
      var t = e.offsets,
        n = t.popper,
        r = t.reference,
        o = e.placement.split('-')[0],
        i = Math.floor,
        a = ['top', 'bottom'].indexOf(o) !== -1,
        s = a ? 'right' : 'bottom',
        c = a ? 'left' : 'top',
        l = a ? 'width' : 'height';
      return (
        n[s] < i(r[c]) && (e.offsets.popper[c] = i(r[c]) - n[l]),
        n[c] > i(r[s]) && (e.offsets.popper[c] = i(r[s])),
        e
      );
    }
    function Ci(e, t, n, r) {
      var o = e.match(/((?:-|\+)?\d*\.?\d*)(.*)/),
        i = +o[1],
        a = o[2];
      if (!i) return e;
      if (a.indexOf('%') === 0) {
        var s = void 0;
        switch (a) {
          case '%p':
            s = n;
            break;
          default:
            s = r;
        }
        var c = xe(s);
        return (c[t] / 100) * i;
      } else if (a === 'vh' || a === 'vw') {
        var l = void 0;
        return (
          a === 'vh'
            ? (l = Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
            : (l = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)),
          (l / 100) * i
        );
      } else return i;
    }
    function Pi(e, t, n, r) {
      var o = [0, 0],
        i = ['right', 'left'].indexOf(r) !== -1,
        a = e.split(/(\+|-)/).map((p) => p.trim()),
        s = a.indexOf(st(a, (p) => p.search(/,|\s/) !== -1));
      a[s] &&
        a[s].indexOf(',') === -1 &&
        console.warn(
          'Offsets separated by white space(s) are deprecated, use a comma (,) instead.',
        );
      var c = /\s*,\s*|\s+/,
        l =
          s !== -1
            ? [a.slice(0, s).concat([a[s].split(c)[0]]), [a[s].split(c)[1]].concat(a.slice(s + 1))]
            : [a];
      return (
        (l = l.map((p, u) => {
          var d = (u === 1 ? !i : i) ? 'height' : 'width',
            f = !1;
          return p
            .reduce(
              (h, b) =>
                h[h.length - 1] === '' && ['+', '-'].indexOf(b) !== -1
                  ? ((h[h.length - 1] = b), (f = !0), h)
                  : f
                    ? ((h[h.length - 1] += b), (f = !1), h)
                    : h.concat(b),
              [],
            )
            .map((h) => Ci(h, d, t, n));
        })),
        l.forEach((p, u) => {
          p.forEach((d, f) => {
            Zt(d) && (o[u] += d * (p[f - 1] === '-' ? -1 : 1));
          });
        }),
        o
      );
    }
    function _i(e, t) {
      var n = t.offset,
        r = e.placement,
        o = e.offsets,
        i = o.popper,
        a = o.reference,
        s = r.split('-')[0],
        c = void 0;
      return (
        Zt(+n) ? (c = [+n, 0]) : (c = Pi(n, i, a, s)),
        s === 'left'
          ? ((i.top += c[0]), (i.left -= c[1]))
          : s === 'right'
            ? ((i.top += c[0]), (i.left += c[1]))
            : s === 'top'
              ? ((i.left += c[0]), (i.top -= c[1]))
              : s === 'bottom' && ((i.left += c[0]), (i.top += c[1])),
        (e.popper = i),
        e
      );
    }
    function xi(e, t) {
      var n = t.boundariesElement || He(e.instance.popper);
      e.instance.reference === n && (n = He(n));
      var r = Qt('transform'),
        o = e.instance.popper.style,
        i = o.top,
        a = o.left,
        s = o[r];
      (o.top = ''), (o.left = ''), (o[r] = '');
      var c = Xt(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
      (o.top = i), (o.left = a), (o[r] = s), (t.boundaries = c);
      var l = t.priority,
        p = e.offsets.popper,
        u = {
          primary: (d) => {
            var f = p[d];
            return (
              p[d] < c[d] && !t.escapeWithReference && (f = Math.max(p[d], c[d])), ze({}, d, f)
            );
          },
          secondary: (d) => {
            var f = d === 'right' ? 'left' : 'top',
              h = p[f];
            return (
              p[d] > c[d] &&
                !t.escapeWithReference &&
                (h = Math.min(p[f], c[d] - (d === 'right' ? p.width : p.height))),
              ze({}, f, h)
            );
          },
        };
      return (
        l.forEach((d) => {
          var f = ['left', 'top'].indexOf(d) !== -1 ? 'primary' : 'secondary';
          p = se({}, p, u[f](d));
        }),
        (e.offsets.popper = p),
        e
      );
    }
    function Ai(e) {
      var t = e.placement,
        n = t.split('-')[0],
        r = t.split('-')[1];
      if (r) {
        var o = e.offsets,
          i = o.reference,
          a = o.popper,
          s = ['bottom', 'top'].indexOf(n) !== -1,
          c = s ? 'left' : 'top',
          l = s ? 'width' : 'height',
          p = { start: ze({}, c, i[c]), end: ze({}, c, i[c] + i[l] - a[l]) };
        e.offsets.popper = se({}, a, p[r]);
      }
      return e;
    }
    function Ni(e) {
      if (!Br(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
      var t = e.offsets.reference,
        n = st(e.instance.modifiers, (r) => r.name === 'preventOverflow').boundaries;
      if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
        if (e.hide === !0) return e;
        (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
      } else {
        if (e.hide === !1) return e;
        (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
      }
      return e;
    }
    function ki(e) {
      var t = e.placement,
        n = t.split('-')[0],
        r = e.offsets,
        o = r.popper,
        i = r.reference,
        a = ['left', 'right'].indexOf(n) !== -1,
        s = ['top', 'left'].indexOf(n) === -1;
      return (
        (o[a ? 'left' : 'top'] = i[n] - (s ? o[a ? 'width' : 'height'] : 0)),
        (e.placement = Tt(t)),
        (e.offsets.popper = xe(o)),
        e
      );
    }
    function Pt(e) {
      var t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return 'HTMLElement';
      if (Bi(t)) return t;
    }
    function fe(e) {
      return (t) => Pt(t) === e;
    }
    function Bi(e) {
      return Di.includes(e);
    }
    function $e(e) {
      return (t) => typeof t === e;
    }
    function Wi(e) {
      return Fi.includes(e);
    }
    function R(e) {
      if (e === null) return 'null';
      switch (typeof e) {
        case 'bigint':
          return 'bigint';
        case 'boolean':
          return 'boolean';
        case 'number':
          return 'number';
        case 'string':
          return 'string';
        case 'symbol':
          return 'symbol';
        case 'undefined':
          return 'undefined';
      }
      if (R.array(e)) return 'Array';
      if (R.plainFunction(e)) return 'Function';
      var t = Pt(e);
      return t || 'Object';
    }
    function Ur(e) {
      return (t) => typeof t === e;
    }
    function zi(e, t) {
      var n = e.length;
      if (n !== t.length) return !1;
      for (var r = n; r-- !== 0; ) if (!ie(e[r], t[r])) return !1;
      return !0;
    }
    function Yi(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      for (var n = new DataView(e.buffer), r = new DataView(t.buffer), o = e.byteLength; o--; )
        if (n.getUint8(o) !== r.getUint8(o)) return !1;
      return !0;
    }
    function qi(e, t) {
      var n, r, o, i;
      if (e.size !== t.size) return !1;
      try {
        for (var a = Yt(e.entries()), s = a.next(); !s.done; s = a.next()) {
          var c = s.value;
          if (!t.has(c[0])) return !1;
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          s && !s.done && (r = a.return) && r.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var l = Yt(e.entries()), p = l.next(); !p.done; p = l.next()) {
          var c = p.value;
          if (!ie(c[1], t.get(c[0]))) return !1;
        }
      } catch (u) {
        o = { error: u };
      } finally {
        try {
          p && !p.done && (i = l.return) && i.call(l);
        } finally {
          if (o) throw o.error;
        }
      }
      return !0;
    }
    function $i(e, t) {
      var n, r;
      if (e.size !== t.size) return !1;
      try {
        for (var o = Yt(e.entries()), i = o.next(); !i.done; i = o.next()) {
          var a = i.value;
          if (!t.has(a[0])) return !1;
        }
      } catch (s) {
        n = { error: s };
      } finally {
        try {
          i && !i.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      return !0;
    }
    function ie(e, t) {
      if (e === t) return !0;
      if (e && tr(e) && t && tr(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return zi(e, t);
        if (e instanceof Map && t instanceof Map) return qi(e, t);
        if (e instanceof Set && t instanceof Set) return $i(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return Yi(e, t);
        if (er(e) && er(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var o = n.length; o-- !== 0; ) if (!Object.hasOwn(t, n[o])) return !1;
        for (var o = n.length; o-- !== 0; ) {
          var i = n[o];
          if (!(i === '_owner' && e.$$typeof) && !ie(e[i], t[i])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    function Vi() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.every((n) => A.string(n) || A.array(n) || A.plainObject(n));
    }
    function Ki(e, t, n) {
      return Hr(e, t)
        ? [e, t].every(A.array)
          ? !e.some(ar(n)) && t.some(ar(n))
          : [e, t].every(A.plainObject)
            ? !Object.entries(e).some(ir(n)) && Object.entries(t).some(ir(n))
            : t === n
        : !1;
    }
    function nr(e, t, n) {
      var r = n.actual,
        o = n.key,
        i = n.previous,
        a = n.type,
        s = Se(e, o),
        c = Se(t, o),
        l = [s, c].every(A.number) && (a === 'increased' ? s < c : s > c);
      return A.undefined(r) || (l = l && c === r), A.undefined(i) || (l = l && s === i), l;
    }
    function rr(e, t, n) {
      var r = n.key,
        o = n.type,
        i = n.value,
        a = Se(e, r),
        s = Se(t, r),
        c = o === 'added' ? a : s,
        l = o === 'added' ? s : a;
      if (!A.nullOrUndefined(i)) {
        if (A.defined(c)) {
          if (A.array(c) || A.plainObject(c)) return Ki(c, l, i);
        } else return ie(l, i);
        return !1;
      }
      return [a, s].every(A.array)
        ? !l.every(en(c))
        : [a, s].every(A.plainObject)
          ? Ji(Object.keys(c), Object.keys(l))
          : ![a, s].every((p) => A.primitive(p) && A.defined(p)) &&
            (o === 'added' ? !A.defined(a) && A.defined(s) : A.defined(a) && !A.defined(s));
    }
    function or(e, t, n) {
      var r = n === void 0 ? {} : n,
        o = r.key,
        i = Se(e, o),
        a = Se(t, o);
      if (!Hr(i, a)) throw new TypeError('Inputs have different types');
      if (!Vi(i, a)) throw new TypeError("Inputs don't have length");
      return [i, a].every(A.plainObject) && ((i = Object.keys(i)), (a = Object.keys(a))), [i, a];
    }
    function ir(e) {
      return (t) => {
        var n = t[0],
          r = t[1];
        return A.array(e)
          ? ie(e, r) || e.some((o) => ie(o, r) || (A.array(r) && en(r)(o)))
          : A.plainObject(e) && e[n]
            ? !!e[n] && ie(e[n], r)
            : ie(e, r);
      };
    }
    function Ji(e, t) {
      return t.some((n) => !e.includes(n));
    }
    function ar(e) {
      return (t) => (A.array(e) ? e.some((n) => ie(n, t) || (A.array(t) && en(t)(n))) : ie(e, t));
    }
    function Ze(e, t) {
      return A.array(e) ? e.some((n) => ie(n, t)) : ie(e, t);
    }
    function en(e) {
      return (t) => e.some((n) => ie(n, t));
    }
    function Hr() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.every(A.array) || e.every(A.number) || e.every(A.plainObject) || e.every(A.string);
    }
    function Se(e, t) {
      if (A.plainObject(e) || A.array(e)) {
        if (A.string(t)) {
          var n = t.split('.');
          return n.reduce((r, o) => r?.[o], e);
        }
        return A.number(t) ? e[t] : e;
      }
      return e;
    }
    function Xi(e, t) {
      if ([e, t].some(A.nullOrUndefined)) throw new Error('Missing required parameters');
      if (![e, t].every((u) => A.plainObject(u) || A.array(u)))
        throw new Error('Expected plain objects or array');
      var n = (u, d) => {
          try {
            return rr(e, t, { key: u, type: 'added', value: d });
          } catch {
            return !1;
          }
        },
        r = (u, d, f) => {
          try {
            var h = Se(e, u),
              b = Se(t, u),
              N = A.defined(d),
              v = A.defined(f);
            if (N || v) {
              var T = v ? Ze(f, h) : !Ze(d, h),
                m = Ze(d, b);
              return T && m;
            }
            return [h, b].every(A.array) || [h, b].every(A.plainObject) ? !ie(h, b) : h !== b;
          } catch {
            return !1;
          }
        },
        o = (u, d, f) => {
          if (!A.defined(u)) return !1;
          try {
            var h = Se(e, u),
              b = Se(t, u),
              N = A.defined(f);
            return Ze(d, h) && (N ? Ze(f, b) : !N);
          } catch {
            return !1;
          }
        },
        i = (u, d) =>
          A.defined(u)
            ? (console.warn('`changedTo` is deprecated! Replace it with `change`'), r(u, d))
            : !1,
        a = (u, d, f) => {
          if (!A.defined(u)) return !1;
          try {
            return nr(e, t, { key: u, actual: d, previous: f, type: 'decreased' });
          } catch {
            return !1;
          }
        },
        s = (u) => {
          try {
            var d = or(e, t, { key: u }),
              f = d[0],
              h = d[1];
            return !!f.length && !h.length;
          } catch {
            return !1;
          }
        },
        c = (u) => {
          try {
            var d = or(e, t, { key: u }),
              f = d[0],
              h = d[1];
            return !f.length && !!h.length;
          } catch {
            return !1;
          }
        },
        l = (u, d, f) => {
          if (!A.defined(u)) return !1;
          try {
            return nr(e, t, { key: u, actual: d, previous: f, type: 'increased' });
          } catch {
            return !1;
          }
        },
        p = (u, d) => {
          try {
            return rr(e, t, { key: u, type: 'removed', value: d });
          } catch {
            return !1;
          }
        };
      return {
        added: n,
        changed: r,
        changedFrom: o,
        changedTo: i,
        decreased: a,
        emptied: s,
        filled: c,
        increased: l,
        removed: p,
      };
    }
    function sr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((o) => Object.getOwnPropertyDescriptor(e, o).enumerable)),
          n.push.apply(n, r);
      }
      return n;
    }
    function J(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? sr(Object(n), !0).forEach((r) => {
              re(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : sr(Object(n)).forEach((r) => {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
              });
      }
      return e;
    }
    function lt(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function lr(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, zr(r.key), r);
      }
    }
    function ct(e, t, n) {
      return (
        t && lr(e.prototype, t),
        n && lr(e, n),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
      );
    }
    function re(e, t, n) {
      return (
        (t = zr(t)),
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function ut(e, t) {
      if (typeof t !== 'function' && t !== null)
        throw new TypeError('Super expression must either be null or a function');
      (e.prototype = Object.create(t?.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && qt(e, t);
    }
    function It(e) {
      return (
        (It = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : (t) => t.__proto__ || Object.getPrototypeOf(t)),
        It(e)
      );
    }
    function qt(e, t) {
      return (
        (qt = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : (n, r) => ((n.__proto__ = r), n)),
        qt(e, t)
      );
    }
    function Qi() {
      if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy === 'function') return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
      } catch {
        return !1;
      }
    }
    function Zi(e, t) {
      if (e == null) return {};
      var n = {},
        r = Object.keys(e),
        o,
        i;
      for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
      return n;
    }
    function Gr(e, t) {
      if (e == null) return {};
      var n = Zi(e, t),
        r,
        o;
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++)
          (r = i[o]),
            !(t.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(e, r) &&
              (n[r] = e[r]);
      }
      return n;
    }
    function we(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function ea(e, t) {
      if (t && (typeof t === 'object' || typeof t === 'function')) return t;
      if (t !== void 0)
        throw new TypeError('Derived constructors may only return object or undefined');
      return we(e);
    }
    function pt(e) {
      var t = Qi();
      return function () {
        var n = It(e),
          r;
        if (t) {
          var o = It(this).constructor;
          r = Reflect.construct(n, arguments, o);
        } else r = n.apply(this, arguments);
        return ea(this, r);
      };
    }
    function ta(e, t) {
      if (typeof e !== 'object' || e === null) return e;
      var n = e[Symbol.toPrimitive];
      if (n !== void 0) {
        var r = n.call(e, t || 'default');
        if (typeof r !== 'object') return r;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (t === 'string' ? String : Number)(e);
    }
    function zr(e) {
      var t = ta(e, 'string');
      return typeof t === 'symbol' ? t : String(t);
    }
    function ia(e, t, n, r) {
      return typeof e === 'boolean' ? e : typeof e === 'function' ? e(t, n, r) : e ? !!e : !1;
    }
    function aa(e, t) {
      return Object.hasOwn(e, t);
    }
    function sa(e, t, n, r) {
      return r
        ? new Error(r)
        : new Error(
            'Required '.concat(e[t], ' `').concat(t, '` was not specified in `').concat(n, '`.'),
          );
    }
    function la(e, t) {
      if (typeof e !== 'function') throw new TypeError(ra);
      if (t && typeof t !== 'string') throw new TypeError(oa);
    }
    function cr(e, t, n) {
      return (
        la(e, n),
        function (r, o, i) {
          for (var a = arguments.length, s = new Array(a > 3 ? a - 3 : 0), c = 3; c < a; c++)
            s[c - 3] = arguments[c];
          return ia(t, r, o, i)
            ? aa(r, o)
              ? e.apply(void 0, [r, o, i].concat(s))
              : sa(r, o, i, n)
            : e.apply(void 0, [r, o, i].concat(s));
        }
      );
    }
    function ve() {
      return !!(typeof window < 'u' && window.document && window.document.createElement);
    }
    function Wt() {
      return 'ontouchstart' in window && /Mobi/.test(navigator.userAgent);
    }
    function St(e) {
      var t = e.title,
        n = e.data,
        r = e.warn,
        o = r === void 0 ? !1 : r,
        i = e.debug,
        a = i === void 0 ? !1 : i,
        s = o ? console.warn || console.error : console.log;
      a &&
        t &&
        n &&
        (console.groupCollapsed(
          '%creact-floater: '.concat(t),
          'color: #9b00ff; font-weight: bold; font-size: 12px;',
        ),
        Array.isArray(n)
          ? n.forEach((c) => {
              A.plainObject(c) && c.key
                ? s.apply(console, [c.key, c.value])
                : s.apply(console, [c]);
            })
          : s.apply(console, [n]),
        console.groupEnd());
    }
    function ca(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.addEventListener(t, n, r);
    }
    function ua(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.removeEventListener(t, n, r);
    }
    function pa(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
        o;
      (o = (i) => {
        n(i), ua(e, t, o);
      }),
        ca(e, t, o, r);
    }
    function ur() {}
    function $r(e) {
      var t = e.handleClick,
        n = e.styles,
        r = n.color,
        o = n.height,
        i = n.width,
        a = Gr(n, da);
      return y.createElement(
        'button',
        { 'aria-label': 'close', onClick: t, style: a, type: 'button' },
        y.createElement(
          'svg',
          {
            width: ''.concat(i, 'px'),
            height: ''.concat(o, 'px'),
            viewBox: '0 0 18 18',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            preserveAspectRatio: 'xMidYMid',
          },
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
              fill: r,
            }),
          ),
        ),
      );
    }
    function Vr(e) {
      var t = e.content,
        n = e.footer,
        r = e.handleClick,
        o = e.open,
        i = e.positionWrapper,
        a = e.showCloseButton,
        s = e.title,
        c = e.styles,
        l = {
          content: y.isValidElement(t)
            ? t
            : y.createElement('div', { className: '__floater__content', style: c.content }, t),
        };
      return (
        s &&
          (l.title = y.isValidElement(s)
            ? s
            : y.createElement('div', { className: '__floater__title', style: c.title }, s)),
        n &&
          (l.footer = y.isValidElement(n)
            ? n
            : y.createElement('div', { className: '__floater__footer', style: c.footer }, n)),
        (a || i) &&
          !A.boolean(o) &&
          (l.close = y.createElement($r, { styles: c.close, handleClick: r })),
        y.createElement(
          'div',
          { className: '__floater__container', style: c.container },
          l.close,
          l.title,
          l.content,
          l.footer,
        )
      );
    }
    function ha(e) {
      var t = (0, zt.default)(fa, e.options || {});
      return {
        wrapper: {
          cursor: 'help',
          display: 'inline-flex',
          flexDirection: 'column',
          zIndex: t.zIndex,
        },
        wrapperPosition: { left: -1e3, position: 'absolute', top: -1e3, visibility: 'hidden' },
        floater: {
          display: 'inline-block',
          filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))',
          maxWidth: 300,
          opacity: 0,
          position: 'relative',
          transition: 'opacity 0.3s',
          visibility: 'hidden',
          zIndex: t.zIndex,
        },
        floaterOpening: { opacity: 1, visibility: 'visible' },
        floaterWithAnimation: {
          opacity: 1,
          transition: 'opacity 0.3s, transform 0.2s',
          visibility: 'visible',
        },
        floaterWithComponent: { maxWidth: '100%' },
        floaterClosing: { opacity: 0, visibility: 'visible' },
        floaterCentered: {
          left: '50%',
          position: 'fixed',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        },
        container: {
          backgroundColor: '#fff',
          color: '#666',
          minHeight: 60,
          minWidth: 200,
          padding: 20,
          position: 'relative',
          zIndex: 10,
        },
        title: {
          borderBottom: '1px solid #555',
          color: '#555',
          fontSize: 18,
          marginBottom: 5,
          paddingBottom: 6,
          paddingRight: 18,
        },
        content: { fontSize: 15 },
        close: {
          backgroundColor: 'transparent',
          border: 0,
          borderRadius: 0,
          color: '#555',
          fontSize: 0,
          height: 15,
          outline: 'none',
          padding: 10,
          position: 'absolute',
          right: 0,
          top: 0,
          width: 15,
          WebkitAppearance: 'none',
        },
        footer: { borderTop: '1px solid #ccc', fontSize: 13, marginTop: 10, paddingTop: 5 },
        arrow: {
          color: '#fff',
          display: 'inline-flex',
          length: 16,
          margin: 8,
          position: 'absolute',
          spread: 32,
        },
        options: t,
      };
    }
    function Ce() {
      return !!(typeof window < 'u' && window.document && window.document.createElement);
    }
    function Xr(e) {
      return e ? e.getBoundingClientRect() : null;
    }
    function Ea(e = !0) {
      const { body: t, documentElement: n } = document;
      if (!t || !n) return 0;
      if (e) {
        const r = [
            t.scrollHeight,
            t.offsetHeight,
            n.clientHeight,
            n.scrollHeight,
            n.offsetHeight,
          ].sort((i, a) => i - a),
          o = Math.floor(r.length / 2);
        return r.length % 2 === 0 ? (r[o - 1] + r[o]) / 2 : r[o];
      }
      return Math.max(
        t.scrollHeight,
        t.offsetHeight,
        n.clientHeight,
        n.scrollHeight,
        n.offsetHeight,
      );
    }
    function _e(e) {
      return typeof e === 'string' ? document.querySelector(e) : e;
    }
    function Sa(e) {
      return !e || e.nodeType !== 1 ? null : getComputedStyle(e);
    }
    function _t(e, t, n) {
      if (!e) return je();
      const r = (0, Ir.default)(e);
      if (r) {
        if (r.isSameNode(je())) return n ? document : je();
        if (!(r.scrollHeight > r.offsetHeight) && !t) return (r.style.overflow = 'initial'), je();
      }
      return r;
    }
    function dt(e, t) {
      if (!e) return !1;
      const n = _t(e, t);
      return n ? !n.isSameNode(je()) : !1;
    }
    function Oa(e) {
      return e.offsetParent !== document.body;
    }
    function ot(e, t = 'fixed') {
      if (!e || !(e instanceof HTMLElement)) return !1;
      const { nodeName: n } = e,
        r = Sa(e);
      return n === 'BODY' || n === 'HTML'
        ? !1
        : r && r.position === t
          ? !0
          : e.parentNode
            ? ot(e.parentNode, t)
            : !1;
    }
    function wa(e) {
      var t;
      if (!e) return !1;
      let n = e;
      for (; n && n !== document.body; ) {
        if (n instanceof HTMLElement) {
          const { display: r, visibility: o } = getComputedStyle(n);
          if (r === 'none' || o === 'hidden') return !1;
        }
        n = (t = n.parentElement) != null ? t : null;
      }
      return !0;
    }
    function Ta(e, t, n) {
      var r;
      let o = Xr(e),
        i = _t(e, n),
        a = dt(e, n),
        s = 0,
        c = (r = o?.top) != null ? r : 0;
      return (
        i instanceof HTMLElement &&
          ((s = i.scrollTop),
          !a && !ot(e) && (c += s),
          i.isSameNode(je()) || (c += je().scrollTop)),
        Math.floor(c - t)
      );
    }
    function Ia(e, t, n) {
      var r;
      if (!e) return 0;
      let { offsetTop: o = 0, scrollTop: i = 0 } = (r = (0, Ir.default)(e)) != null ? r : {},
        a = e.getBoundingClientRect().top + i;
      o && (dt(e, n) || Oa(e)) && (a -= o);
      const s = Math.floor(a - t);
      return s < 0 ? 0 : s;
    }
    function je() {
      var e;
      return (e = document.scrollingElement) != null ? e : document.documentElement;
    }
    function Ra(e, t) {
      const { duration: n, element: r } = t;
      return new Promise((o, i) => {
        const { scrollTop: a } = r,
          s = e > a ? e - a : a - e;
        Qo.default.top(r, e, { duration: s < 100 ? 50 : n }, (c) =>
          c && c.message !== 'Element already at target scroll position' ? i(c) : o(),
        );
      });
    }
    function Qr(e = navigator.userAgent) {
      let t = e;
      return (
        typeof window > 'u'
          ? (t = 'node')
          : document.documentMode
            ? (t = 'ie')
            : /Edge/.test(e)
              ? (t = 'edge')
              : window.opera || e.includes(' OPR/')
                ? (t = 'opera')
                : typeof window.InstallTrigger < 'u'
                  ? (t = 'firefox')
                  : window.chrome
                    ? (t = 'chrome')
                    : /(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(e) &&
                      (t = 'safari'),
        t
      );
    }
    function Pe(e) {
      const t = [],
        n = (r) => {
          if (typeof r === 'string' || typeof r === 'number') t.push(r);
          else if (Array.isArray(r)) r.forEach((o) => n(o));
          else if (an(r)) {
            const { children: o } = r.props;
            Array.isArray(o) ? o.forEach((i) => n(i)) : n(o);
          }
        };
      return n(e), t.join(' ').trim();
    }
    function Ca(e, t) {
      return !C.plainObject(e) || !C.array(t) ? !1 : Object.keys(e).every((n) => t.includes(n));
    }
    function Pa(e) {
      const t = /^#?([\da-f])([\da-f])([\da-f])$/i,
        n = e.replace(t, (_o, i, a, s) => i + i + a + a + s + s),
        r = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(n);
      return r ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)] : [];
    }
    function pr(e) {
      return e.disableBeacon || e.placement === 'center';
    }
    function dr() {
      return !['chrome', 'safari', 'firefox', 'opera'].includes(Qr());
    }
    function Ae({ data: e, debug: t = !1, title: n, warn: r = !1 }) {
      const o = r ? console.warn || console.error : console.log;
      t &&
        (n && e
          ? (console.groupCollapsed(
              `%creact-joyride: ${n}`,
              'color: #ff0044; font-weight: bold; font-size: 12px;',
            ),
            Array.isArray(e)
              ? e.forEach((i) => {
                  C.plainObject(i) && i.key
                    ? o.apply(console, [i.key, i.value])
                    : o.apply(console, [i]);
                })
              : o.apply(console, [e]),
            console.groupEnd())
          : console.error('Missing title or data props'));
    }
    function _a(e) {
      return Object.keys(e);
    }
    function Zr(e, ...t) {
      if (!C.plainObject(e)) throw new TypeError('Expected an object');
      const n = {};
      for (const r in e) Object.hasOwn(e, r) && (t.includes(r) || (n[r] = e[r]));
      return n;
    }
    function xa(e, ...t) {
      if (!C.plainObject(e)) throw new TypeError('Expected an object');
      if (!t.length) return e;
      const n = {};
      for (const r in e) Object.hasOwn(e, r) && t.includes(r) && (n[r] = e[r]);
      return n;
    }
    function Aa(e) {
      const {
        isFirstStep: t,
        lifecycle: n,
        previousLifecycle: r,
        scrollToFirstStep: o,
        step: i,
        target: a,
      } = e;
      return (
        !i.disableScrolling &&
        (!t || o || n === k.TOOLTIP) &&
        i.placement !== 'center' &&
        (!i.isFixed || !ot(a)) &&
        r !== n &&
        [k.BEACON, k.TOOLTIP].includes(n)
      );
    }
    function ja(e, t) {
      var n, r, o, i, a;
      let { floaterProps: s, styles: c } = e,
        l = (0, Et.default)((n = t.floaterProps) != null ? n : {}, s ?? {}),
        p = (0, Et.default)(c ?? {}, (r = t.styles) != null ? r : {}),
        u = (0, Et.default)(Ma, p.options || {}),
        d = t.placement === 'center' || t.disableBeacon,
        { width: f } = u;
      window.innerWidth > 480 && (f = 380),
        'width' in u &&
          (f =
            typeof u.width === 'number' && window.innerWidth < u.width
              ? window.innerWidth - 30
              : u.width);
      const h = {
          bottom: 0,
          left: 0,
          overflow: 'hidden',
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: u.zIndex,
        },
        b = {
          beacon: {
            ...nt,
            display: d ? 'none' : 'inline-block',
            height: u.beaconSize,
            position: 'relative',
            width: u.beaconSize,
            zIndex: u.zIndex,
          },
          beaconInner: {
            animation: 'joyride-beacon-inner 1.2s infinite ease-in-out',
            backgroundColor: u.primaryColor,
            borderRadius: '50%',
            display: 'block',
            height: '50%',
            left: '50%',
            opacity: 0.7,
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
          },
          beaconOuter: {
            animation: 'joyride-beacon-outer 1.2s infinite ease-in-out',
            backgroundColor: `rgba(${Pa(u.primaryColor).join(',')}, 0.2)`,
            border: `2px solid ${u.primaryColor}`,
            borderRadius: '50%',
            boxSizing: 'border-box',
            display: 'block',
            height: '100%',
            left: 0,
            opacity: 0.9,
            position: 'absolute',
            top: 0,
            transformOrigin: 'center',
            width: '100%',
          },
          tooltip: {
            backgroundColor: u.backgroundColor,
            borderRadius: 5,
            boxSizing: 'border-box',
            color: u.textColor,
            fontSize: 16,
            maxWidth: '100%',
            padding: 15,
            position: 'relative',
            width: f,
          },
          tooltipContainer: { lineHeight: 1.4, textAlign: 'center' },
          tooltipTitle: { fontSize: 18, margin: 0 },
          tooltipContent: { padding: '20px 10px' },
          tooltipFooter: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 15,
          },
          tooltipFooterSpacer: { flex: 1 },
          buttonNext: { ...nt, backgroundColor: u.primaryColor, borderRadius: 4, color: '#fff' },
          buttonBack: { ...nt, color: u.primaryColor, marginLeft: 'auto', marginRight: 5 },
          buttonClose: {
            ...nt,
            color: u.textColor,
            height: 14,
            padding: 15,
            position: 'absolute',
            right: 0,
            top: 0,
            width: 14,
          },
          buttonSkip: { ...nt, color: u.textColor, fontSize: 14 },
          overlay: { ...h, backgroundColor: u.overlayColor, mixBlendMode: 'hard-light' },
          overlayLegacy: { ...h },
          overlayLegacyCenter: { ...h, backgroundColor: u.overlayColor },
          spotlight: { ...fr, backgroundColor: 'gray' },
          spotlightLegacy: {
            ...fr,
            boxShadow: `0 0 0 9999px ${u.overlayColor}, ${u.spotlightShadow}`,
          },
          floaterStyles: {
            arrow: {
              color:
                (a = (i = (o = l?.styles) == null ? void 0 : o.arrow) == null ? void 0 : i.color) !=
                null
                  ? a
                  : u.arrowColor,
            },
            options: { zIndex: u.zIndex + 100 },
          },
          options: u,
        };
      return (0, Et.default)(b, p);
    }
    function Da(e) {
      return xa(
        e,
        'beaconComponent',
        'disableCloseOnEsc',
        'disableOverlay',
        'disableOverlayClose',
        'disableScrolling',
        'disableScrollParentFix',
        'floaterProps',
        'hideBackButton',
        'hideCloseButton',
        'locale',
        'showProgress',
        'showSkipButton',
        'spotlightClicks',
        'spotlightPadding',
        'styles',
        'tooltipComponent',
      );
    }
    function Ue(e, t) {
      var n, r, o, i, a, s;
      const c = t ?? {},
        l = vt.default.all([ka, Da(e), c], { isMergeableObject: C.plainObject }),
        p = ja(e, l),
        u = dt(_e(l.target), l.disableScrollParentFix),
        d = vt.default.all([
          Na,
          (n = e.floaterProps) != null ? n : {},
          (r = l.floaterProps) != null ? r : {},
        ]);
      return (
        (d.offset = l.offset),
        (d.styles = (0, vt.default)((o = d.styles) != null ? o : {}, p.floaterStyles)),
        (d.offset +=
          (a = (i = e.spotlightPadding) != null ? i : l.spotlightPadding) != null ? a : 0),
        l.placementBeacon && d.wrapperOptions && (d.wrapperOptions.placement = l.placementBeacon),
        u && d.options.preventOverflow && (d.options.preventOverflow.boundariesElement = 'window'),
        {
          ...l,
          locale: vt.default.all([eo, (s = e.locale) != null ? s : {}, l.locale || {}]),
          floaterProps: d,
          styles: Zr(p, 'floaterStyles'),
        }
      );
    }
    function to(e, t = !1) {
      return C.plainObject(e)
        ? e.target
          ? !0
          : (Ae({
              title: 'validateStep',
              data: 'target is missing from the step',
              warn: !0,
              debug: t,
            }),
            !1)
        : (Ae({ title: 'validateStep', data: 'step must be an object', warn: !0, debug: t }), !1);
    }
    function hr(e, t = !1) {
      return C.array(e)
        ? e.every((n) => to(n, t))
        : (Ae({ title: 'validateSteps', data: 'steps must be an array', warn: !0, debug: t }), !1);
    }
    function Ba(e) {
      return new Fa(e);
    }
    function Wa({ styles: e }) {
      return q('div', {
        key: 'JoyrideSpotlight',
        className: 'react-joyride__spotlight',
        'data-test-id': 'spotlight',
        style: e,
      });
    }
    function qa({ styles: e, ...t }) {
      const { color: n, height: r, width: o, ...i } = e;
      return y.createElement(
        'button',
        { style: i, type: 'button', ...t },
        y.createElement(
          'svg',
          {
            height: typeof r === 'number' ? `${r}px` : r,
            preserveAspectRatio: 'xMidYMid',
            version: '1.1',
            viewBox: '0 0 18 18',
            width: typeof o === 'number' ? `${o}px` : o,
            xmlns: 'http://www.w3.org/2000/svg',
          },
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
              fill: n,
            }),
          ),
        ),
      );
    }
    function Va(e) {
      const {
          backProps: t,
          closeProps: n,
          continuous: r,
          index: o,
          isLastStep: i,
          primaryProps: a,
          size: s,
          skipProps: c,
          step: l,
          tooltipProps: p,
        } = e,
        {
          content: u,
          hideBackButton: d,
          hideCloseButton: f,
          hideFooter: h,
          locale: b,
          showProgress: N,
          showSkipButton: v,
          styles: T,
          title: m,
        } = l,
        { back: g, close: O, last: B, next: P, skip: V } = b,
        H = { primary: O };
      return (
        r &&
          ((H.primary = i ? B : P),
          N && (H.primary = q('span', null, H.primary, ' (', o + 1, '/', s, ')'))),
        H.primary &&
          (H.primary = q(
            'button',
            { 'data-test-id': 'button-primary', style: T.buttonNext, type: 'button', ...a },
            H.primary,
          )),
        v &&
          !i &&
          (H.skip = q(
            'button',
            {
              'aria-live': 'off',
              'data-test-id': 'button-skip',
              style: T.buttonSkip,
              type: 'button',
              ...c,
            },
            V,
          )),
        !d &&
          o > 0 &&
          (H.back = q(
            'button',
            { 'data-test-id': 'button-back', style: T.buttonBack, type: 'button', ...t },
            g,
          )),
        (H.close = !f && q($a, { 'data-test-id': 'button-close', styles: T.buttonClose, ...n })),
        q(
          'div',
          {
            key: 'JoyrideTooltip',
            'aria-label': Pe(m) || Pe(u),
            className: 'react-joyride__tooltip',
            style: T.tooltip,
            ...p,
          },
          q(
            'div',
            { style: T.tooltipContainer },
            m && q('h1', { 'aria-label': Pe(m), style: T.tooltipTitle }, m),
            q('div', { style: T.tooltipContent }, u),
          ),
          !h &&
            q(
              'div',
              { style: T.tooltipFooter },
              q('div', { style: T.tooltipFooterSpacer }, H.skip),
              H.back,
              H.primary,
            ),
          H.close,
        )
      );
    }
    function cs({ step: e, steps: t, onClose: n, onComplete: r }) {
      const [o, i] = ue(null),
        a = bn();
      return (
        ae(() => {
          let s;
          return (
            i((c) => {
              const l = t.findIndex(({ key: p }) => p === e);
              return l === -1 ? null : l === c ? c : ((s = setTimeout(i, 500, l)), null);
            }),
            () => clearTimeout(s)
          );
        }, [e, t]),
        o === null
          ? null
          : y.createElement(Qa, {
              continuous: !0,
              steps: t,
              stepIndex: o,
              spotlightPadding: 0,
              disableCloseOnEsc: !0,
              disableOverlayClose: !0,
              disableScrolling: !0,
              callback: (s) => {
                s.action === $.CLOSE && n(), s.action === $.NEXT && s.index === s.size - 1 && r();
              },
              floaterProps: {
                disableAnimation: !0,
                styles: {
                  arrow: { length: 20, spread: 2 },
                  floater: {
                    filter:
                      a.base === 'light'
                        ? 'drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))'
                        : 'drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)',
                  },
                },
              },
              tooltipComponent: ls,
              styles: {
                overlay: {
                  mixBlendMode: 'unset',
                  backgroundColor: t[o]?.target === 'body' ? 'rgba(27, 28, 29, 0.2)' : 'none',
                },
                spotlight: {
                  backgroundColor: 'none',
                  border: `solid 2px ${a.color.secondary}`,
                  boxShadow: '0px 0px 0px 9999px rgba(27, 28, 29, 0.2)',
                },
                tooltip: { width: 280, color: a.color.lightest, background: a.color.secondary },
                options: {
                  zIndex: 9998,
                  primaryColor: a.color.secondary,
                  arrowColor: a.color.secondary,
                },
              },
            })
      );
    }
    function ws({ api: e }) {
      const [t, n] = ue(!0),
        [r, o] = ue(!1),
        [i, a] = ue('1:Intro'),
        [s, c] = ue(),
        [l, p] = ue(),
        [u, d] = ue(),
        [f, h] = ue(),
        b = Je(
          (P) => {
            try {
              const { id: V, refId: H } = e.getCurrentStoryData() || {};
              (V !== P || H !== void 0) && e.selectStory(P);
            } catch {}
          },
          [e],
        ),
        N = Je(() => {
          const P = new URL(window.location.href),
            V = decodeURIComponent(P.searchParams.get('path'));
          (P.search = `?path=${V}&onboarding=false`),
            history.replaceState({}, '', P.href),
            e.setQueryParams({ onboarding: 'false' }),
            n(!1);
        }, [e, n]),
        v = Je(() => {
          e.emit(Wn, { step: '6:FinishedOnboarding', type: 'telemetry' }),
            b('configure-your-project--docs'),
            N();
        }, [e, b, N]);
      if (
        (ae(() => {
          e.setQueryParams({ onboarding: 'true' }),
            b('example-button--primary'),
            e.togglePanel(!0),
            e.togglePanelPosition('bottom'),
            e.setSelectedPanel('addon-controls');
        }, [e, b]),
        ae(() => {
          const P = new MutationObserver(() => {
            c(document.getElementById('control-primary')),
              p(document.getElementById('save-from-controls')),
              d(document.getElementById('create-new-story-form'));
          });
          return P.observe(document.body, { childList: !0, subtree: !0 }), () => P.disconnect();
        }, []),
        ae(() => {
          a((P) =>
            ['1:Intro', '5:StoryCreated', '6:FinishedOnboarding'].includes(P)
              ? P
              : u
                ? '4:CreateStory'
                : l
                  ? '3:SaveFromControls'
                  : s
                    ? '2:Controls'
                    : '1:Intro',
          );
        }, [u, s, l]),
        ae(
          () =>
            e.on(un, ({ payload: P, success: V }) => {
              !V ||
                !P?.newStoryName ||
                (h(P),
                o(!0),
                a('5:StoryCreated'),
                setTimeout(() => e.clearNotification('save-story-success')));
            }),
          [e],
        ),
        ae(() => e.emit(Wn, { step: i, type: 'telemetry' }), [e, i]),
        !t)
      )
        return null;
      const T = f?.sourceFileContent,
        m = T?.lastIndexOf(`export const ${f?.newStoryExportName}`),
        g = T?.slice(m).trim(),
        O = T?.slice(0, m).split(`
`).length,
        B = [
          {
            key: '2:Controls',
            target: '#control-primary',
            title: 'Interactive story playground',
            content: y.createElement(
              y.Fragment,
              null,
              'See how a story renders with different data and state without touching code. Try it out by toggling this button.',
              y.createElement(Bn, { targetSelector: '#control-primary', pulsating: !0 }),
            ),
            offset: 20,
            placement: 'right',
            disableBeacon: !0,
            disableOverlay: !0,
            spotlightClicks: !0,
            onNextButtonClick: () => {
              document.querySelector('#control-primary').click();
            },
          },
          {
            key: '3:SaveFromControls',
            target: 'button[aria-label="Create new story with these settings"]',
            title: 'Save your changes as a new story',
            content: y.createElement(
              y.Fragment,
              null,
              'Great! Storybook stories represent the key states of each of your components. After modifying a story, you can save your changes from here or reset it.',
              y.createElement(Bn, {
                targetSelector: "button[aria-label='Create new story with these settings']",
              }),
            ),
            offset: 6,
            placement: 'top',
            disableBeacon: !0,
            disableOverlay: !0,
            spotlightClicks: !0,
            onNextButtonClick: () => {
              document
                .querySelector('button[aria-label="Create new story with these settings"]')
                .click();
            },
            styles: { tooltip: { width: 400 } },
          },
          {
            key: '5:StoryCreated',
            target: '#storybook-explorer-tree [data-selected="true"]',
            title: 'You just added your first story!',
            content: y.createElement(
              y.Fragment,
              null,
              'Well done! You just created your first story from the Storybook manager. This automatically added a few lines of code in',
              ' ',
              y.createElement(Es, null, f?.sourceFileName),
              '.',
              g &&
                y.createElement(
                  kt,
                  { theme: Lt(gn.dark) },
                  y.createElement(
                    Ss,
                    null,
                    y.createElement(
                      mn,
                      { language: 'jsx', showLineNumbers: !0, startingLineNumber: O },
                      g,
                    ),
                  ),
                ),
            ),
            offset: 12,
            placement: 'right',
            disableBeacon: !0,
            disableOverlay: !0,
            styles: { tooltip: { width: 400 } },
          },
        ];
      return y.createElement(
        kt,
        { theme: Os },
        r && y.createElement(jo, null),
        i === '1:Intro'
          ? y.createElement(vs, { onDismiss: () => a('2:Controls') })
          : y.createElement(cs, { step: i, steps: B, onClose: N, onComplete: v }),
      );
    }
    var po,
      gr,
      fo,
      br,
      ho,
      mo,
      le,
      yo,
      De,
      go,
      bo,
      $t,
      vo,
      vr,
      Eo,
      Er,
      Sr,
      So,
      Oo,
      wo,
      To,
      Io,
      wn,
      Ro,
      Tn,
      In,
      Rn,
      Cn,
      Pn,
      _n,
      xn,
      An,
      Nn,
      kn,
      Ln,
      Po,
      _o,
      xo,
      Mn,
      bt,
      be,
      rt,
      Ao,
      Mt,
      jt,
      jn,
      We,
      Dt,
      Dn,
      Or,
      Fn,
      No,
      ko,
      Mo,
      jo,
      Wn,
      Do,
      Fo,
      Un,
      Hn,
      Bo,
      zo,
      Yo,
      Vo,
      C,
      Qo,
      Ir,
      vt,
      Et,
      S,
      it,
      Zo,
      ni,
      ri,
      Vn,
      Kn,
      ai,
      si,
      ze,
      se,
      Si,
      Wr,
      Ft,
      Bt,
      Li,
      Mi,
      Ct,
      Zn,
      zt,
      ji,
      Di,
      Fi,
      A,
      Ui,
      Hi,
      er,
      tr,
      Gi,
      Yt,
      na,
      ra,
      oa,
      U,
      et,
      Yr,
      qr,
      da,
      Kr,
      Jr,
      fa,
      ma,
      ya,
      tn,
      ga,
      ba,
      va,
      _,
      $,
      pe,
      k,
      j,
      tt,
      Na,
      eo,
      ka,
      La,
      Ma,
      nt,
      fr,
      no,
      mr,
      Fa,
      Ua,
      Ha,
      Ga,
      za,
      Ya,
      $a,
      Ka,
      Ja,
      Xa,
      ro,
      Qa,
      Za,
      es,
      ts,
      ns,
      rs,
      os,
      is,
      as,
      ss,
      ls,
      us,
      oo,
      ps,
      ds,
      fs,
      hs,
      ms,
      ys,
      gs,
      bs,
      yr,
      vs,
      Es,
      Ss,
      Os,
      ao = ce(() => {
        X();
        Q();
        Z();
        ht();
        ht();
        yn();
        Nt();
        vn();
        yt();
        yt();
        On();
        (po = Object.create),
          (gr = Object.defineProperty),
          (fo = Object.getOwnPropertyDescriptor),
          (br = Object.getOwnPropertyNames),
          (ho = Object.getPrototypeOf),
          (mo = Object.prototype.hasOwnProperty),
          (le = (e, t) => () => (
            t || (0, e[br(e)[0]])((t = { exports: {} }).exports, t), t.exports
          )),
          (yo = (e, t, n, r) => {
            if ((t && typeof t === 'object') || typeof t === 'function')
              for (const o of br(t))
                !mo.call(e, o) &&
                  o !== n &&
                  gr(e, o, { get: () => t[o], enumerable: !(r = fo(t, o)) || r.enumerable });
            return e;
          }),
          (De = (e, t, n) => (
            (n = e != null ? po(ho(e)) : {}),
            yo(t || !e || !e.__esModule ? gr(n, 'default', { value: e, enumerable: !0 }) : n, e)
          )),
          (go = le({
            '../../node_modules/scroll/index.js'(_e, t) {
              var n = new Error('Element already at target scroll position'),
                r = new Error('Scroll cancelled'),
                o = Math.min,
                i = Date.now;
              t.exports = { left: a('scrollLeft'), top: a('scrollTop') };
              function a(l) {
                return (p, u, d, f) => {
                  (d = d || {}),
                    typeof d === 'function' && ((f = d), (d = {})),
                    typeof f !== 'function' && (f = c);
                  var h = i(),
                    b = p[l],
                    N = d.ease || s,
                    v = Number.isNaN(d.duration) ? 350 : +d.duration,
                    T = !1;
                  return b === u ? f(n, p[l]) : requestAnimationFrame(g), m;
                  function m() {
                    T = !0;
                  }
                  function g(_O) {
                    if (T) return f(r, p[l]);
                    var B = i(),
                      P = o(1, (B - h) / v),
                      V = N(P);
                    (p[l] = V * (u - b) + b),
                      P < 1
                        ? requestAnimationFrame(g)
                        : requestAnimationFrame(() => {
                            f(null, p[l]);
                          });
                  }
                };
              }
              function s(l) {
                return 0.5 * (1 - Math.cos(Math.PI * l));
              }
              function _c() {}
            },
          })),
          (bo = le({
            '../../node_modules/scrollparent/scrollparent.js'(e, t) {
              ((n, r) => {
                typeof define === 'function' && define.amd
                  ? define([], r)
                  : typeof t === 'object' && t.exports
                    ? (t.exports = r())
                    : (n.Scrollparent = r());
              })(e, () => {
                function n(o) {
                  var i = getComputedStyle(o, null).getPropertyValue('overflow');
                  return i.indexOf('scroll') > -1 || i.indexOf('auto') > -1;
                }
                function r(o) {
                  if (o instanceof HTMLElement || o instanceof SVGElement) {
                    for (var i = o.parentNode; i.parentNode; ) {
                      if (n(i)) return i;
                      i = i.parentNode;
                    }
                    return document.scrollingElement || document.documentElement;
                  }
                }
                return r;
              });
            },
          })),
          ($t = le({
            '../../node_modules/deepmerge/dist/cjs.js'(_e, t) {
              var n = (m) => r(m) && !o(m);
              function r(m) {
                return !!m && typeof m === 'object';
              }
              function _o(m) {
                var g = Object.prototype.toString.call(m);
                return g === '[object RegExp]' || g === '[object Date]' || s(m);
              }
              var i = typeof Symbol === 'function' && Symbol.for,
                a = i ? Symbol.for('react.element') : 60103;
              function s(m) {
                return m.$$typeof === a;
              }
              function c(m) {
                return Array.isArray(m) ? [] : {};
              }
              function l(m, g) {
                return g.clone !== !1 && g.isMergeableObject(m) ? v(c(m), m, g) : m;
              }
              function p(m, g, O) {
                return m.concat(g).map((B) => l(B, O));
              }
              function u(m, g) {
                if (!g.customMerge) return v;
                var O = g.customMerge(m);
                return typeof O === 'function' ? O : v;
              }
              function d(m) {
                return Object.getOwnPropertySymbols
                  ? Object.getOwnPropertySymbols(m).filter((g) =>
                      Object.propertyIsEnumerable.call(m, g),
                    )
                  : [];
              }
              function f(m) {
                return Object.keys(m).concat(d(m));
              }
              function h(m, g) {
                try {
                  return g in m;
                } catch {
                  return !1;
                }
              }
              function b(m, g) {
                return h(m, g) && !(Object.hasOwn(m, g) && Object.propertyIsEnumerable.call(m, g));
              }
              function N(m, g, O) {
                var B = {};
                return (
                  O.isMergeableObject(m) &&
                    f(m).forEach((P) => {
                      B[P] = l(m[P], O);
                    }),
                  f(g).forEach((P) => {
                    b(m, P) ||
                      (h(m, P) && O.isMergeableObject(g[P])
                        ? (B[P] = u(P, O)(m[P], g[P], O))
                        : (B[P] = l(g[P], O)));
                  }),
                  B
                );
              }
              function v(m, g, O) {
                (O = O || {}),
                  (O.arrayMerge = O.arrayMerge || p),
                  (O.isMergeableObject = O.isMergeableObject || n),
                  (O.cloneUnlessOtherwiseSpecified = l);
                var B = Array.isArray(g),
                  P = Array.isArray(m),
                  V = B === P;
                return V ? (B ? O.arrayMerge(m, g, O) : N(m, g, O)) : l(g, O);
              }
              v.all = (m, g) => {
                if (!Array.isArray(m)) throw new Error('first argument should be an array');
                return m.reduce((O, B) => v(O, B, g), {});
              };
              var T = v;
              t.exports = T;
            },
          })),
          (vo = le({
            '../../node_modules/react-is/cjs/react-is.development.js'(e) {
              (() => {
                var t = typeof Symbol === 'function' && Symbol.for,
                  n = t ? Symbol.for('react.element') : 60103,
                  r = t ? Symbol.for('react.portal') : 60106,
                  o = t ? Symbol.for('react.fragment') : 60107,
                  i = t ? Symbol.for('react.strict_mode') : 60108,
                  a = t ? Symbol.for('react.profiler') : 60114,
                  s = t ? Symbol.for('react.provider') : 60109,
                  c = t ? Symbol.for('react.context') : 60110,
                  l = t ? Symbol.for('react.async_mode') : 60111,
                  p = t ? Symbol.for('react.concurrent_mode') : 60111,
                  u = t ? Symbol.for('react.forward_ref') : 60112,
                  d = t ? Symbol.for('react.suspense') : 60113,
                  f = t ? Symbol.for('react.suspense_list') : 60120,
                  h = t ? Symbol.for('react.memo') : 60115,
                  b = t ? Symbol.for('react.lazy') : 60116,
                  N = t ? Symbol.for('react.block') : 60121,
                  v = t ? Symbol.for('react.fundamental') : 60117,
                  T = t ? Symbol.for('react.responder') : 60118,
                  m = t ? Symbol.for('react.scope') : 60119;
                function g(w) {
                  return (
                    typeof w === 'string' ||
                    typeof w === 'function' ||
                    w === o ||
                    w === p ||
                    w === a ||
                    w === i ||
                    w === d ||
                    w === f ||
                    (typeof w === 'object' &&
                      w !== null &&
                      (w.$$typeof === b ||
                        w.$$typeof === h ||
                        w.$$typeof === s ||
                        w.$$typeof === c ||
                        w.$$typeof === u ||
                        w.$$typeof === v ||
                        w.$$typeof === T ||
                        w.$$typeof === m ||
                        w.$$typeof === N))
                  );
                }
                function O(w) {
                  if (typeof w === 'object' && w !== null) {
                    var ne = w.$$typeof;
                    switch (ne) {
                      case n: {
                        var Oe = w.type;
                        switch (Oe) {
                          case l:
                          case p:
                          case o:
                          case a:
                          case i:
                          case d:
                            return Oe;
                          default: {
                            var nn = Oe?.$$typeof;
                            switch (nn) {
                              case c:
                              case u:
                              case b:
                              case h:
                              case s:
                                return nn;
                              default:
                                return ne;
                            }
                          }
                        }
                      }
                      case r:
                        return ne;
                    }
                  }
                }
                var B = l,
                  P = p,
                  V = c,
                  H = s,
                  te = n,
                  Ne = u,
                  Ve = o,
                  ke = b,
                  Be = h,
                  Ke = r,
                  Te = a,
                  Ie = i,
                  he = d,
                  Re = !1;
                function xt(w) {
                  return (
                    Re ||
                      ((Re = !0),
                      console.warn(
                        'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.',
                      )),
                    ft(w) || O(w) === l
                  );
                }
                function ft(w) {
                  return O(w) === p;
                }
                function E(w) {
                  return O(w) === c;
                }
                function x(w) {
                  return O(w) === s;
                }
                function W(w) {
                  return typeof w === 'object' && w !== null && w.$$typeof === n;
                }
                function D(w) {
                  return O(w) === u;
                }
                function L(w) {
                  return O(w) === o;
                }
                function G(w) {
                  return O(w) === b;
                }
                function M(w) {
                  return O(w) === h;
                }
                function F(w) {
                  return O(w) === r;
                }
                function z(w) {
                  return O(w) === a;
                }
                function K(w) {
                  return O(w) === i;
                }
                function Y(w) {
                  return O(w) === d;
                }
                (e.AsyncMode = B),
                  (e.ConcurrentMode = P),
                  (e.ContextConsumer = V),
                  (e.ContextProvider = H),
                  (e.Element = te),
                  (e.ForwardRef = Ne),
                  (e.Fragment = Ve),
                  (e.Lazy = ke),
                  (e.Memo = Be),
                  (e.Portal = Ke),
                  (e.Profiler = Te),
                  (e.StrictMode = Ie),
                  (e.Suspense = he),
                  (e.isAsyncMode = xt),
                  (e.isConcurrentMode = ft),
                  (e.isContextConsumer = E),
                  (e.isContextProvider = x),
                  (e.isElement = W),
                  (e.isForwardRef = D),
                  (e.isFragment = L),
                  (e.isLazy = G),
                  (e.isMemo = M),
                  (e.isPortal = F),
                  (e.isProfiler = z),
                  (e.isStrictMode = K),
                  (e.isSuspense = Y),
                  (e.isValidElementType = g),
                  (e.typeOf = O);
              })();
            },
          })),
          (vr = le({
            '../../node_modules/react-is/index.js'(_e, t) {
              t.exports = vo();
            },
          })),
          (Eo = le({
            '../../node_modules/object-assign/index.js'(_e, t) {
              var n = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable;
              function i(s) {
                if (s == null)
                  throw new TypeError('Object.assign cannot be called with null or undefined');
                return Object(s);
              }
              function a() {
                try {
                  if (!Object.assign) return !1;
                  var s = new String('abc');
                  if (((s[5] = 'de'), Object.getOwnPropertyNames(s)[0] === '5')) return !1;
                  for (var c = {}, l = 0; l < 10; l++) c[`_${String.fromCharCode(l)}`] = l;
                  var p = Object.getOwnPropertyNames(c).map((d) => c[d]);
                  if (p.join('') !== '0123456789') return !1;
                  var u = {};
                  return (
                    'abcdefghijklmnopqrst'.split('').forEach((d) => {
                      u[d] = d;
                    }),
                    Object.keys(Object.assign({}, u)).join('') === 'abcdefghijklmnopqrst'
                  );
                } catch {
                  return !1;
                }
              }
              t.exports = a()
                ? Object.assign
                : function (s, _c) {
                    for (var l, p = i(s), u, d = 1; d < arguments.length; d++) {
                      l = Object(arguments[d]);
                      for (var f in l) r.call(l, f) && (p[f] = l[f]);
                      if (n) {
                        u = n(l);
                        for (var h = 0; h < u.length; h++) o.call(l, u[h]) && (p[u[h]] = l[u[h]]);
                      }
                    }
                    return p;
                  };
            },
          })),
          (Er = le({
            '../../node_modules/prop-types/lib/ReactPropTypesSecret.js'(_e, t) {
              var n = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
              t.exports = n;
            },
          })),
          (Sr = le({
            '../../node_modules/prop-types/lib/has.js'(_e, t) {
              t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
            },
          })),
          (So = le({
            '../../node_modules/prop-types/checkPropTypes.js'(_e, t) {
              var n = () => {};
              (r = Er()),
                (o = {}),
                (i = Sr()),
                (n = (s) => {
                  var c = `Warning: ${s}`;
                  typeof console < 'u' && console.error(c);
                  try {
                    throw new Error(c);
                  } catch {}
                });
              var r, o, i;
              function a(s, c, l, p, u) {
                for (var d in s)
                  if (i(s, d)) {
                    var f;
                    try {
                      if (typeof s[d] !== 'function') {
                        var h = Error(
                          (p || 'React class') +
                            ': ' +
                            l +
                            ' type `' +
                            d +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof s[d] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                        );
                        throw ((h.name = 'Invariant Violation'), h);
                      }
                      f = s[d](c, d, p, l, null, r);
                    } catch (N) {
                      f = N;
                    }
                    if (
                      (f &&
                        !(f instanceof Error) &&
                        n(
                          (p || 'React class') +
                            ': type specification of ' +
                            l +
                            ' `' +
                            d +
                            '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                            typeof f +
                            '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        ),
                      f instanceof Error && !(f.message in o))
                    ) {
                      o[f.message] = !0;
                      var b = u ? u() : '';
                      n(`Failed ${l} type: ${f.message}${b ?? ''}`);
                    }
                  }
              }
              (a.resetWarningCache = () => {
                o = {};
              }),
                (t.exports = a);
            },
          })),
          (Oo = le({
            '../../node_modules/prop-types/factoryWithTypeCheckers.js'(_e, t) {
              var n = vr(),
                r = Eo(),
                o = Er(),
                i = Sr(),
                a = So(),
                s = () => {};
              s = (l) => {
                var p = `Warning: ${l}`;
                typeof console < 'u' && console.error(p);
                try {
                  throw new Error(p);
                } catch {}
              };
              function c() {
                return null;
              }
              t.exports = (l, p) => {
                var u = typeof Symbol === 'function' && Symbol.iterator,
                  d = '@@iterator';
                function f(E) {
                  var x = E && ((u && E[u]) || E[d]);
                  if (typeof x === 'function') return x;
                }
                var h = '<<anonymous>>',
                  b = {
                    array: m('array'),
                    bigint: m('bigint'),
                    bool: m('boolean'),
                    func: m('function'),
                    number: m('number'),
                    object: m('object'),
                    string: m('string'),
                    symbol: m('symbol'),
                    any: g(),
                    arrayOf: O,
                    element: B(),
                    elementType: P(),
                    instanceOf: V,
                    node: Ve(),
                    objectOf: te,
                    oneOf: H,
                    oneOfType: Ne,
                    shape: Be,
                    exact: Ke,
                  };
                function N(E, x) {
                  return E === x ? E !== 0 || 1 / E === 1 / x : E !== E && x !== x;
                }
                function v(E, x) {
                  (this.message = E),
                    (this.data = x && typeof x === 'object' ? x : {}),
                    (this.stack = '');
                }
                v.prototype = Error.prototype;
                function T(E) {
                  var x = {},
                    W = 0;
                  function D(G, M, F, z, K, Y, w) {
                    if (((z = z || h), (Y = Y || F), w !== o)) {
                      if (p) {
                        var ne = new Error(
                          'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types',
                        );
                        throw ((ne.name = 'Invariant Violation'), ne);
                      } else if (typeof console < 'u') {
                        var Oe = `${z}:${F}`;
                        !x[Oe] &&
                          W < 3 &&
                          (s(
                            'You are manually calling a React.PropTypes validation function for the `' +
                              Y +
                              '` prop on `' +
                              z +
                              '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                          ),
                          (x[Oe] = !0),
                          W++);
                      }
                    }
                    return M[F] == null
                      ? G
                        ? M[F] === null
                          ? new v(
                              'The ' +
                                K +
                                ' `' +
                                Y +
                                '` is marked as required ' +
                                ('in `' + z + '`, but its value is `null`.'),
                            )
                          : new v(
                              'The ' +
                                K +
                                ' `' +
                                Y +
                                '` is marked as required in ' +
                                ('`' + z + '`, but its value is `undefined`.'),
                            )
                        : null
                      : E(M, F, z, K, Y);
                  }
                  var L = D.bind(null, !1);
                  return (L.isRequired = D.bind(null, !0)), L;
                }
                function m(E) {
                  function x(W, D, L, G, M, _F) {
                    var z = W[D],
                      K = he(z);
                    if (K !== E) {
                      var Y = Re(z);
                      return new v(
                        'Invalid ' +
                          G +
                          ' `' +
                          M +
                          '` of type ' +
                          ('`' + Y + '` supplied to `' + L + '`, expected ') +
                          ('`' + E + '`.'),
                        { expectedType: E },
                      );
                    }
                    return null;
                  }
                  return T(x);
                }
                function g() {
                  return T(c);
                }
                function O(E) {
                  function x(W, D, L, G, M) {
                    if (typeof E !== 'function')
                      return new v(
                        'Property `' +
                          M +
                          '` of component `' +
                          L +
                          '` has invalid PropType notation inside arrayOf.',
                      );
                    var F = W[D];
                    if (!Array.isArray(F)) {
                      var z = he(F);
                      return new v(
                        'Invalid ' +
                          G +
                          ' `' +
                          M +
                          '` of type ' +
                          ('`' + z + '` supplied to `' + L + '`, expected an array.'),
                      );
                    }
                    for (var K = 0; K < F.length; K++) {
                      var Y = E(F, K, L, G, `${M}[${K}]`, o);
                      if (Y instanceof Error) return Y;
                    }
                    return null;
                  }
                  return T(x);
                }
                function B() {
                  function E(x, W, D, L, G) {
                    var M = x[W];
                    if (!l(M)) {
                      var F = he(M);
                      return new v(
                        'Invalid ' +
                          L +
                          ' `' +
                          G +
                          '` of type ' +
                          ('`' + F + '` supplied to `' + D + '`, expected a single ReactElement.'),
                      );
                    }
                    return null;
                  }
                  return T(E);
                }
                function P() {
                  function E(x, W, D, L, G) {
                    var M = x[W];
                    if (!n.isValidElementType(M)) {
                      var F = he(M);
                      return new v(
                        'Invalid ' +
                          L +
                          ' `' +
                          G +
                          '` of type ' +
                          ('`' +
                            F +
                            '` supplied to `' +
                            D +
                            '`, expected a single ReactElement type.'),
                      );
                    }
                    return null;
                  }
                  return T(E);
                }
                function V(E) {
                  function x(W, D, L, G, M) {
                    if (!(W[D] instanceof E)) {
                      var F = E.name || h,
                        z = ft(W[D]);
                      return new v(
                        'Invalid ' +
                          G +
                          ' `' +
                          M +
                          '` of type ' +
                          ('`' + z + '` supplied to `' + L + '`, expected ') +
                          ('instance of `' + F + '`.'),
                      );
                    }
                    return null;
                  }
                  return T(x);
                }
                function H(E) {
                  if (!Array.isArray(E))
                    return (
                      arguments.length > 1
                        ? s(
                            'Invalid arguments supplied to oneOf, expected an array, got ' +
                              arguments.length +
                              ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).',
                          )
                        : s('Invalid argument supplied to oneOf, expected an array.'),
                      c
                    );
                  function x(W, D, L, G, M) {
                    for (var F = W[D], z = 0; z < E.length; z++) if (N(F, E[z])) return null;
                    var K = JSON.stringify(E, (_Y, w) => {
                      var ne = Re(w);
                      return ne === 'symbol' ? String(w) : w;
                    });
                    return new v(
                      'Invalid ' +
                        G +
                        ' `' +
                        M +
                        '` of value `' +
                        String(F) +
                        '` ' +
                        ('supplied to `' + L + '`, expected one of ' + K + '.'),
                    );
                  }
                  return T(x);
                }
                function te(E) {
                  function x(W, D, L, G, M) {
                    if (typeof E !== 'function')
                      return new v(
                        'Property `' +
                          M +
                          '` of component `' +
                          L +
                          '` has invalid PropType notation inside objectOf.',
                      );
                    var F = W[D],
                      z = he(F);
                    if (z !== 'object')
                      return new v(
                        'Invalid ' +
                          G +
                          ' `' +
                          M +
                          '` of type ' +
                          ('`' + z + '` supplied to `' + L + '`, expected an object.'),
                      );
                    for (var K in F)
                      if (i(F, K)) {
                        var Y = E(F, K, L, G, `${M}.${K}`, o);
                        if (Y instanceof Error) return Y;
                      }
                    return null;
                  }
                  return T(x);
                }
                function Ne(E) {
                  if (!Array.isArray(E))
                    return (
                      s('Invalid argument supplied to oneOfType, expected an instance of array.'), c
                    );
                  for (var x = 0; x < E.length; x++) {
                    var W = E[x];
                    if (typeof W !== 'function')
                      return (
                        s(
                          'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                            xt(W) +
                            ' at index ' +
                            x +
                            '.',
                        ),
                        c
                      );
                  }
                  function D(L, G, M, F, z) {
                    for (var K = [], Y = 0; Y < E.length; Y++) {
                      var w = E[Y],
                        ne = w(L, G, M, F, z, o);
                      if (ne == null) return null;
                      ne.data && i(ne.data, 'expectedType') && K.push(ne.data.expectedType);
                    }
                    var Oe = K.length > 0 ? `, expected one of type [${K.join(', ')}]` : '';
                    return new v(`Invalid ${F} \`${z}\` supplied to \`${M}\`${Oe}.`);
                  }
                  return T(D);
                }
                function Ve() {
                  function E(x, W, D, L, G) {
                    return Te(x[W])
                      ? null
                      : new v(
                          'Invalid ' +
                            L +
                            ' `' +
                            G +
                            '` supplied to ' +
                            ('`' + D + '`, expected a ReactNode.'),
                        );
                  }
                  return T(E);
                }
                function ke(E, x, W, D, L) {
                  return new v(
                    (E || 'React class') +
                      ': ' +
                      x +
                      ' type `' +
                      W +
                      '.' +
                      D +
                      '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                      L +
                      '`.',
                  );
                }
                function Be(E) {
                  function x(W, D, L, G, M) {
                    var F = W[D],
                      z = he(F);
                    if (z !== 'object')
                      return new v(
                        'Invalid ' +
                          G +
                          ' `' +
                          M +
                          '` of type `' +
                          z +
                          '` ' +
                          ('supplied to `' + L + '`, expected `object`.'),
                      );
                    for (var K in E) {
                      var Y = E[K];
                      if (typeof Y !== 'function') return ke(L, G, M, K, Re(Y));
                      var w = Y(F, K, L, G, `${M}.${K}`, o);
                      if (w) return w;
                    }
                    return null;
                  }
                  return T(x);
                }
                function Ke(E) {
                  function x(W, D, L, G, M) {
                    var F = W[D],
                      z = he(F);
                    if (z !== 'object')
                      return new v(
                        'Invalid ' +
                          G +
                          ' `' +
                          M +
                          '` of type `' +
                          z +
                          '` ' +
                          ('supplied to `' + L + '`, expected `object`.'),
                      );
                    var K = r({}, W[D], E);
                    for (var Y in K) {
                      var w = E[Y];
                      if (i(E, Y) && typeof w !== 'function') return ke(L, G, M, Y, Re(w));
                      if (!w)
                        return new v(
                          'Invalid ' +
                            G +
                            ' `' +
                            M +
                            '` key `' +
                            Y +
                            '` supplied to `' +
                            L +
                            '`.\nBad object: ' +
                            JSON.stringify(W[D], null, '  ') +
                            `
Valid keys: ` +
                            JSON.stringify(Object.keys(E), null, '  '),
                        );
                      var ne = w(F, Y, L, G, `${M}.${Y}`, o);
                      if (ne) return ne;
                    }
                    return null;
                  }
                  return T(x);
                }
                function Te(E) {
                  switch (typeof E) {
                    case 'number':
                    case 'string':
                    case 'undefined':
                      return !0;
                    case 'boolean':
                      return !E;
                    case 'object': {
                      if (Array.isArray(E)) return E.every(Te);
                      if (E === null || l(E)) return !0;
                      var x = f(E);
                      if (x) {
                        var W = x.call(E),
                          D;
                        if (x !== E.entries) {
                          for (; !(D = W.next()).done; ) if (!Te(D.value)) return !1;
                        } else
                          for (; !(D = W.next()).done; ) {
                            var L = D.value;
                            if (L && !Te(L[1])) return !1;
                          }
                      } else return !1;
                      return !0;
                    }
                    default:
                      return !1;
                  }
                }
                function Ie(E, x) {
                  return E === 'symbol'
                    ? !0
                    : x
                      ? x['@@toStringTag'] === 'Symbol' ||
                        (typeof Symbol === 'function' && x instanceof Symbol)
                      : !1;
                }
                function he(E) {
                  var x = typeof E;
                  return Array.isArray(E)
                    ? 'array'
                    : E instanceof RegExp
                      ? 'object'
                      : Ie(x, E)
                        ? 'symbol'
                        : x;
                }
                function Re(E) {
                  if (typeof E > 'u' || E === null) return `${E}`;
                  var x = he(E);
                  if (x === 'object') {
                    if (E instanceof Date) return 'date';
                    if (E instanceof RegExp) return 'regexp';
                  }
                  return x;
                }
                function xt(E) {
                  var x = Re(E);
                  switch (x) {
                    case 'array':
                    case 'object':
                      return `an ${x}`;
                    case 'boolean':
                    case 'date':
                    case 'regexp':
                      return `a ${x}`;
                    default:
                      return x;
                  }
                }
                function ft(E) {
                  return !E.constructor || !E.constructor.name ? h : E.constructor.name;
                }
                return (
                  (b.checkPropTypes = a),
                  (b.resetWarningCache = a.resetWarningCache),
                  (b.PropTypes = b),
                  b
                );
              };
            },
          })),
          (wo = le({
            '../../node_modules/prop-types/index.js'(_e, t) {
              (n = vr()), (r = !0), (t.exports = Oo()(n.isElement, r));
              var n, r;
            },
          })),
          (To = le({
            '../../node_modules/react-innertext/index.js'(_e, t) {
              var n = (i) => Object.hasOwn(i, 'props'),
                r = (i, a) => i + o(a),
                o = (i) =>
                  i === null || typeof i === 'boolean' || typeof i > 'u'
                    ? ''
                    : typeof i === 'number'
                      ? i.toString()
                      : typeof i === 'string'
                        ? i
                        : Array.isArray(i)
                          ? i.reduce(r, '')
                          : n(i) && Object.hasOwn(i.props, 'children')
                            ? o(i.props.children)
                            : '';
              (o.default = o), (t.exports = o);
            },
          })),
          (Io =
            '@keyframes Bc2PgW_ya{to{translate:0 var(--sh)}}@keyframes Bc2PgW_xa{to{translate:var(--xlp)0}}@keyframes Bc2PgW_r{50%{rotate:var(--hr)180deg}to{rotate:var(--r)360deg}}.Bc2PgW_c{z-index:1200;width:0;height:0;position:relative;overflow:visible}.Bc2PgW_p{animation:xa var(--dc)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:Bc2PgW_xa}.Bc2PgW_p>div{animation:ya var(--dc)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--w);height:var(--h);animation-name:Bc2PgW_ya;position:absolute;top:0;left:0}.Bc2PgW_p>div:before{content:"";background-color:var(--bgc);animation:r var(--rd)infinite linear;border-radius:var(--br);width:100%;height:100%;animation-name:Bc2PgW_r;display:block}'),
          (wn = 'Bc2PgW_p'),
          (Ro = 'Bc2PgW_c'),
          (Tn = ['#FFC700', '#FF0000', '#2E3191', '#41BBC7']),
          (In = 3500),
          (Rn = 0.5),
          (Cn = 150),
          (Pn = 'mix'),
          (_n = 12),
          (xn = ''),
          (An = !0),
          (Nn = 800),
          (kn = 1600);
        (Ln = 200),
          (Po = 800),
          (_o = 0.1),
          (xo = 0.3),
          (Mn = 0.5),
          (bt = Math.abs),
          (be = Math.random),
          (rt = Math.round),
          (Ao = Math.max),
          (Mt = (e) => document.createElement(e)),
          (jt = (e, t) => e.appendChild(t)),
          (jn = (e, t) =>
            Array.from({ length: e }, (_n, r) => ({
              color: t[r % t.length],
              degree: (360 * r) / e,
            }))),
          (We = (e, t = 2) => rt((e + Number.EPSILON) * 10 ** t) / 10 ** t),
          (Dt = (e, t, n, r, o) => ((e - t) * (o - r)) / (n - t) + r),
          (Dn = (e, t) => (e + t > 360 ? e + t - 360 : e + t)),
          (Or = () => be() > 0.5),
          (Fn = Object.entries),
          (No = 6),
          (ko = (e) => e !== 1 && Or());
        (Mo = ee.div({
          zIndex: 9999,
          position: 'fixed',
          top: 0,
          left: '50%',
          width: '50%',
          height: '100%',
        })),
          (jo = y.memo(
            ({
              timeToFade: e = 5e3,
              colors: t = ['#CA90FF', '#FC521F', '#66BF3C', '#FF4785', '#FFAE00', '#1EA7FD'],
              ...n
            }) =>
              y.createElement(
                Mo,
                null,
                y.createElement(Lo, {
                  colors: t,
                  particleCount: 200,
                  duration: 5e3,
                  stageHeight: window.innerHeight,
                  stageWidth: window.innerWidth,
                  destroyAfterDone: !0,
                  ...n,
                }),
              ),
          ));
        Wn = 'STORYBOOK_ADDON_ONBOARDING_CHANNEL';
        (Do = wr('function')),
          (Fo = (e) => e === null),
          (Un = (e) => Object.prototype.toString.call(e).slice(8, -1) === 'RegExp'),
          (Hn = (e) => !Bo(e) && !Fo(e) && (Do(e) || typeof e === 'object')),
          (Bo = wr('undefined'));
        (zo = [
          'Array',
          'ArrayBuffer',
          'AsyncFunction',
          'AsyncGenerator',
          'AsyncGeneratorFunction',
          'Date',
          'Error',
          'Function',
          'Generator',
          'GeneratorFunction',
          'HTMLElement',
          'Map',
          'Object',
          'Promise',
          'RegExp',
          'Set',
          'WeakMap',
          'WeakSet',
        ]),
          (Yo = ['bigint', 'boolean', 'null', 'number', 'string', 'symbol', 'undefined']);
        Vo = ['innerHTML', 'ownerDocument', 'style', 'attributes', 'nodeValue'];
        I.array = Array.isArray;
        I.arrayOf = (e, t) => (!I.array(e) && !I.function(t) ? !1 : e.every((n) => t(n)));
        I.asyncGeneratorFunction = (e) => Rt(e) === 'AsyncGeneratorFunction';
        I.asyncFunction = de('AsyncFunction');
        I.bigint = Ye('bigint');
        I.boolean = (e) => e === !0 || e === !1;
        I.date = de('Date');
        I.defined = (e) => !I.undefined(e);
        I.domElement = (e) =>
          I.object(e) &&
          !I.plainObject(e) &&
          e.nodeType === 1 &&
          I.string(e.nodeName) &&
          Vo.every((t) => t in e);
        I.empty = (e) =>
          (I.string(e) && e.length === 0) ||
          (I.array(e) && e.length === 0) ||
          (I.object(e) && !I.map(e) && !I.set(e) && Object.keys(e).length === 0) ||
          (I.set(e) && e.size === 0) ||
          (I.map(e) && e.size === 0);
        I.error = de('Error');
        I.function = Ye('function');
        I.generator = (e) => I.iterable(e) && I.function(e.next) && I.function(e.throw);
        I.generatorFunction = de('GeneratorFunction');
        I.instanceOf = (e, t) => (!e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype);
        I.iterable = (e) => !I.nullOrUndefined(e) && I.function(e[Symbol.iterator]);
        I.map = de('Map');
        I.nan = (e) => Number.isNaN(e);
        I.null = (e) => e === null;
        I.nullOrUndefined = (e) => I.null(e) || I.undefined(e);
        I.number = (e) => Ye('number')(e) && !I.nan(e);
        I.numericString = (e) => I.string(e) && e.length > 0 && !Number.isNaN(Number(e));
        I.object = (e) => !I.nullOrUndefined(e) && (I.function(e) || typeof e === 'object');
        I.oneOf = (e, t) => (I.array(e) ? e.indexOf(t) > -1 : !1);
        I.plainFunction = de('Function');
        I.plainObject = (e) => {
          if (Rt(e) !== 'Object') return !1;
          const t = Object.getPrototypeOf(e);
          return t === null || t === Object.getPrototypeOf({});
        };
        I.primitive = (e) => I.null(e) || $o(typeof e);
        I.promise = de('Promise');
        I.propertyOf = (e, t, n) => {
          if (!I.object(e) || !t) return !1;
          const r = e[t];
          return I.function(n) ? n(r) : I.defined(r);
        };
        I.regexp = de('RegExp');
        I.set = de('Set');
        I.string = Ye('string');
        I.symbol = Ye('symbol');
        I.undefined = Ye('undefined');
        I.weakMap = de('WeakMap');
        I.weakSet = de('WeakSet');
        C = I;
        (Qo = De(go(), 1)),
          (Ir = De(bo(), 1)),
          (vt = De($t(), 1)),
          (Et = De($t(), 1)),
          (S = De(wo())),
          (it = typeof window < 'u' && typeof document < 'u' && typeof navigator < 'u'),
          (Zo = (() => {
            for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1)
              if (it && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
            return 0;
          })());
        (ni = it && window.Promise), (ri = ni ? ei : ti);
        (Vn = it && !!(window.MSInputMethodContext && document.documentMode)),
          (Kn = it && /MSIE 10/.test(navigator.userAgent));
        (ai = (e, t) => {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }),
          (si = (() => {
            function e(t, n) {
              for (var r = 0; r < n.length; r++) {
                var o = n[r];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  'value' in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o);
              }
            }
            return (t, n, r) => (n && e(t.prototype, n), r && e(t, r), t);
          })()),
          (ze = (e, t, n) => (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )),
          (se =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.hasOwn(n, r) && (e[r] = n[r]);
              }
              return e;
            });
        Si = it && /Firefox/i.test(navigator.userAgent);
        (Wr = [
          'auto-start',
          'auto',
          'auto-end',
          'top-start',
          'top',
          'top-end',
          'right-start',
          'right',
          'right-end',
          'bottom-end',
          'bottom',
          'bottom-start',
          'left-end',
          'left',
          'left-start',
        ]),
          (Ft = Wr.slice(3));
        Bt = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' };
        (Li = {
          shift: { order: 100, enabled: !0, fn: Ai },
          offset: { order: 200, enabled: !0, fn: _i, offset: 0 },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: xi,
            priority: ['left', 'right', 'top', 'bottom'],
            padding: 5,
            boundariesElement: 'scrollParent',
          },
          keepTogether: { order: 400, enabled: !0, fn: Ri },
          arrow: { order: 500, enabled: !0, fn: wi, element: '[x-arrow]' },
          flip: {
            order: 600,
            enabled: !0,
            fn: Ii,
            behavior: 'flip',
            padding: 5,
            boundariesElement: 'viewport',
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: { order: 700, enabled: !1, fn: ki },
          hide: { order: 800, enabled: !0, fn: Ni },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: Oi,
            gpuAcceleration: !0,
            x: 'bottom',
            y: 'right',
          },
          applyStyle: { order: 900, enabled: !0, fn: bi, onLoad: vi, gpuAcceleration: void 0 },
        }),
          (Mi = {
            placement: 'bottom',
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: () => {},
            onUpdate: () => {},
            modifiers: Li,
          }),
          (Ct = (() => {
            function e(t, n) {
              var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              ai(this, e),
                (this.scheduleUpdate = () => requestAnimationFrame(this.update)),
                (this.update = ri(this.update.bind(this))),
                (this.options = se({}, e.Defaults, o)),
                (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                (this.reference = t?.jquery ? t[0] : t),
                (this.popper = n?.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(se({}, e.Defaults.modifiers, o.modifiers)).forEach((a) => {
                  this.options.modifiers[a] = se(
                    {},
                    e.Defaults.modifiers[a] || {},
                    o.modifiers ? o.modifiers[a] : {},
                  );
                }),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map((a) => se({ name: a }, this.options.modifiers[a]))
                  .sort((a, s) => a.order - s.order)),
                this.modifiers.forEach((a) => {
                  a.enabled &&
                    Rr(a.onLoad) &&
                    a.onLoad(this.reference, this.popper, this.options, a, this.state);
                }),
                this.update();
              var i = this.options.eventsEnabled;
              i && this.enableEventListeners(), (this.state.eventsEnabled = i);
            }
            return (
              si(e, [
                {
                  key: 'update',
                  value: function () {
                    return pi.call(this);
                  },
                },
                {
                  key: 'destroy',
                  value: function () {
                    return di.call(this);
                  },
                },
                {
                  key: 'enableEventListeners',
                  value: function () {
                    return hi.call(this);
                  },
                },
                {
                  key: 'disableEventListeners',
                  value: function () {
                    return yi.call(this);
                  },
                },
              ]),
              e
            );
          })());
        Ct.Utils = window.PopperUtils;
        Ct.placements = Wr;
        Ct.Defaults = Mi;
        (Zn = Ct),
          (zt = De($t())),
          (ji = ['innerHTML', 'ownerDocument', 'style', 'attributes', 'nodeValue']),
          (Di = [
            'Array',
            'ArrayBuffer',
            'AsyncFunction',
            'AsyncGenerator',
            'AsyncGeneratorFunction',
            'Date',
            'Error',
            'Function',
            'Generator',
            'GeneratorFunction',
            'HTMLElement',
            'Map',
            'Object',
            'Promise',
            'RegExp',
            'Set',
            'WeakMap',
            'WeakSet',
          ]),
          (Fi = ['bigint', 'boolean', 'null', 'number', 'string', 'symbol', 'undefined']);
        R.array = Array.isArray;
        R.arrayOf = (e, t) => (!R.array(e) && !R.function(t) ? !1 : e.every((n) => t(n)));
        R.asyncGeneratorFunction = (e) => Pt(e) === 'AsyncGeneratorFunction';
        R.asyncFunction = fe('AsyncFunction');
        R.bigint = $e('bigint');
        R.boolean = (e) => e === !0 || e === !1;
        R.date = fe('Date');
        R.defined = (e) => !R.undefined(e);
        R.domElement = (e) =>
          R.object(e) &&
          !R.plainObject(e) &&
          e.nodeType === 1 &&
          R.string(e.nodeName) &&
          ji.every((t) => t in e);
        R.empty = (e) =>
          (R.string(e) && e.length === 0) ||
          (R.array(e) && e.length === 0) ||
          (R.object(e) && !R.map(e) && !R.set(e) && Object.keys(e).length === 0) ||
          (R.set(e) && e.size === 0) ||
          (R.map(e) && e.size === 0);
        R.error = fe('Error');
        R.function = $e('function');
        R.generator = (e) => R.iterable(e) && R.function(e.next) && R.function(e.throw);
        R.generatorFunction = fe('GeneratorFunction');
        R.instanceOf = (e, t) => (!e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype);
        R.iterable = (e) => !R.nullOrUndefined(e) && R.function(e[Symbol.iterator]);
        R.map = fe('Map');
        R.nan = (e) => Number.isNaN(e);
        R.null = (e) => e === null;
        R.nullOrUndefined = (e) => R.null(e) || R.undefined(e);
        R.number = (e) => $e('number')(e) && !R.nan(e);
        R.numericString = (e) => R.string(e) && e.length > 0 && !Number.isNaN(Number(e));
        R.object = (e) => !R.nullOrUndefined(e) && (R.function(e) || typeof e === 'object');
        R.oneOf = (e, t) => (R.array(e) ? e.indexOf(t) > -1 : !1);
        R.plainFunction = fe('Function');
        R.plainObject = (e) => {
          if (Pt(e) !== 'Object') return !1;
          var t = Object.getPrototypeOf(e);
          return t === null || t === Object.getPrototypeOf({});
        };
        R.primitive = (e) => R.null(e) || Wi(typeof e);
        R.promise = fe('Promise');
        R.propertyOf = (e, t, n) => {
          if (!R.object(e) || !t) return !1;
          var r = e[t];
          return R.function(n) ? n(r) : R.defined(r);
        };
        R.regexp = fe('RegExp');
        R.set = fe('Set');
        R.string = $e('string');
        R.symbol = $e('symbol');
        R.undefined = $e('undefined');
        R.weakMap = fe('WeakMap');
        R.weakSet = fe('WeakSet');
        A = R;
        (Ui = Ur('function')),
          (Hi = (e) => e === null),
          (er = (e) => Object.prototype.toString.call(e).slice(8, -1) === 'RegExp'),
          (tr = (e) => !Gi(e) && !Hi(e) && (Ui(e) || typeof e === 'object')),
          (Gi = Ur('undefined')),
          (Yt = (e) => {
            var t = typeof Symbol === 'function' && Symbol.iterator,
              n = t && e[t],
              r = 0;
            if (n) return n.call(e);
            if (e && typeof e.length === 'number')
              return {
                next: () => (e && r >= e.length && (e = void 0), { value: e?.[r++], done: !e }),
              };
            throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
          });
        (na = { flip: { padding: 20 }, preventOverflow: { padding: 10 } }),
          (ra =
            'The typeValidator argument must be a function with the signature function(props, propName, componentName).'),
          (oa = 'The error message is optional, but must be a string if provided.');
        (U = {
          INIT: 'init',
          IDLE: 'idle',
          OPENING: 'opening',
          OPEN: 'open',
          CLOSING: 'closing',
          ERROR: 'error',
        }),
          (et = Me.createPortal !== void 0);
        Yr = ((e) => {
          ut(n, e);
          var t = pt(n);
          function n() {
            return lt(this, n), t.apply(this, arguments);
          }
          return (
            ct(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ve() && (this.node || this.appendNode(), et || this.renderPortal());
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  ve() && (et || this.renderPortal());
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  !ve() ||
                    !this.node ||
                    (et || Me.unmountComponentAtNode(this.node),
                    this.node &&
                      this.node.parentNode === document.body &&
                      (document.body.removeChild(this.node), (this.node = void 0)));
                },
              },
              {
                key: 'appendNode',
                value: function () {
                  var r = this.props,
                    o = r.id,
                    i = r.zIndex;
                  this.node ||
                    ((this.node = document.createElement('div')),
                    o && (this.node.id = o),
                    i && (this.node.style.zIndex = i),
                    document.body.appendChild(this.node));
                },
              },
              {
                key: 'renderPortal',
                value: function () {
                  if (!ve()) return null;
                  var r = this.props,
                    o = r.children,
                    i = r.setRef;
                  if ((this.node || this.appendNode(), et)) return Me.createPortal(o, this.node);
                  var a = Me.unstable_renderSubtreeIntoContainer(
                    this,
                    o.length > 1 ? y.createElement('div', null, o) : o[0],
                    this.node,
                  );
                  return i(a), null;
                },
              },
              {
                key: 'renderReact16',
                value: function () {
                  var r = this.props,
                    o = r.hasChildren,
                    i = r.placement,
                    a = r.target;
                  return o ? this.renderPortal() : a || i === 'center' ? this.renderPortal() : null;
                },
              },
              {
                key: 'render',
                value: function () {
                  return et ? this.renderReact16() : null;
                },
              },
            ]),
            n
          );
        })(y.Component);
        re(Yr, 'propTypes', {
          children: S.default.oneOfType([S.default.element, S.default.array]),
          hasChildren: S.default.bool,
          id: S.default.oneOfType([S.default.string, S.default.number]),
          placement: S.default.string,
          setRef: S.default.func.isRequired,
          target: S.default.oneOfType([S.default.object, S.default.string]),
          zIndex: S.default.number,
        });
        qr = ((e) => {
          ut(n, e);
          var t = pt(n);
          function n() {
            return lt(this, n), t.apply(this, arguments);
          }
          return (
            ct(n, [
              {
                key: 'parentStyle',
                get: function () {
                  var r = this.props,
                    o = r.placement,
                    i = r.styles,
                    a = i.arrow.length,
                    s = { pointerEvents: 'none', position: 'absolute', width: '100%' };
                  return (
                    o.startsWith('top')
                      ? ((s.bottom = 0), (s.left = 0), (s.right = 0), (s.height = a))
                      : o.startsWith('bottom')
                        ? ((s.left = 0), (s.right = 0), (s.top = 0), (s.height = a))
                        : o.startsWith('left')
                          ? ((s.right = 0), (s.top = 0), (s.bottom = 0))
                          : o.startsWith('right') && ((s.left = 0), (s.top = 0)),
                    s
                  );
                },
              },
              {
                key: 'render',
                value: function () {
                  var r = this.props,
                    o = r.placement,
                    i = r.setArrowRef,
                    a = r.styles,
                    s = a.arrow,
                    c = s.color,
                    l = s.display,
                    p = s.length,
                    u = s.margin,
                    d = s.position,
                    f = s.spread,
                    h = { display: l, position: d },
                    b,
                    N = f,
                    v = p;
                  return (
                    o.startsWith('top')
                      ? ((b = '0,0 '
                          .concat(N / 2, ',')
                          .concat(v, ' ')
                          .concat(N, ',0')),
                        (h.bottom = 0),
                        (h.marginLeft = u),
                        (h.marginRight = u))
                      : o.startsWith('bottom')
                        ? ((b = ''
                            .concat(N, ',')
                            .concat(v, ' ')
                            .concat(N / 2, ',0 0,')
                            .concat(v)),
                          (h.top = 0),
                          (h.marginLeft = u),
                          (h.marginRight = u))
                        : o.startsWith('left')
                          ? ((v = f),
                            (N = p),
                            (b = '0,0 '
                              .concat(N, ',')
                              .concat(v / 2, ' 0,')
                              .concat(v)),
                            (h.right = 0),
                            (h.marginTop = u),
                            (h.marginBottom = u))
                          : o.startsWith('right') &&
                            ((v = f),
                            (N = p),
                            (b = ''
                              .concat(N, ',')
                              .concat(v, ' ')
                              .concat(N, ',0 0,')
                              .concat(v / 2)),
                            (h.left = 0),
                            (h.marginTop = u),
                            (h.marginBottom = u)),
                    y.createElement(
                      'div',
                      { className: '__floater__arrow', style: this.parentStyle },
                      y.createElement(
                        'span',
                        { ref: i, style: h },
                        y.createElement(
                          'svg',
                          {
                            width: N,
                            height: v,
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                          },
                          y.createElement('polygon', { points: b, fill: c }),
                        ),
                      ),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(y.Component);
        re(qr, 'propTypes', {
          placement: S.default.string.isRequired,
          setArrowRef: S.default.func.isRequired,
          styles: S.default.object.isRequired,
        });
        da = ['color', 'height', 'width'];
        $r.propTypes = {
          handleClick: S.default.func.isRequired,
          styles: S.default.object.isRequired,
        };
        Vr.propTypes = {
          content: S.default.node.isRequired,
          footer: S.default.node,
          handleClick: S.default.func.isRequired,
          open: S.default.bool,
          positionWrapper: S.default.bool.isRequired,
          showCloseButton: S.default.bool.isRequired,
          styles: S.default.object.isRequired,
          title: S.default.node,
        };
        Kr = ((e) => {
          ut(n, e);
          var t = pt(n);
          function n() {
            return lt(this, n), t.apply(this, arguments);
          }
          return (
            ct(n, [
              {
                key: 'style',
                get: function () {
                  var r = this.props,
                    o = r.disableAnimation,
                    i = r.component,
                    a = r.placement,
                    s = r.hideArrow,
                    c = r.status,
                    l = r.styles,
                    p = l.arrow.length,
                    u = l.floater,
                    d = l.floaterCentered,
                    f = l.floaterClosing,
                    h = l.floaterOpening,
                    b = l.floaterWithAnimation,
                    N = l.floaterWithComponent,
                    v = {};
                  return (
                    s ||
                      (a.startsWith('top')
                        ? (v.padding = '0 0 '.concat(p, 'px'))
                        : a.startsWith('bottom')
                          ? (v.padding = ''.concat(p, 'px 0 0'))
                          : a.startsWith('left')
                            ? (v.padding = '0 '.concat(p, 'px 0 0'))
                            : a.startsWith('right') && (v.padding = '0 0 0 '.concat(p, 'px'))),
                    [U.OPENING, U.OPEN].indexOf(c) !== -1 && (v = J(J({}, v), h)),
                    c === U.CLOSING && (v = J(J({}, v), f)),
                    c === U.OPEN && !o && (v = J(J({}, v), b)),
                    a === 'center' && (v = J(J({}, v), d)),
                    i && (v = J(J({}, v), N)),
                    J(J({}, u), v)
                  );
                },
              },
              {
                key: 'render',
                value: function () {
                  var r = this.props,
                    o = r.component,
                    i = r.handleClick,
                    a = r.hideArrow,
                    s = r.setFloaterRef,
                    c = r.status,
                    l = {},
                    p = ['__floater'];
                  return (
                    o
                      ? y.isValidElement(o)
                        ? (l.content = y.cloneElement(o, { closeFn: i }))
                        : (l.content = o({ closeFn: i }))
                      : (l.content = y.createElement(Vr, this.props)),
                    c === U.OPEN && p.push('__floater__open'),
                    a || (l.arrow = y.createElement(qr, this.props)),
                    y.createElement(
                      'div',
                      { ref: s, className: p.join(' '), style: this.style },
                      y.createElement('div', { className: '__floater__body' }, l.content, l.arrow),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(y.Component);
        re(Kr, 'propTypes', {
          component: S.default.oneOfType([S.default.func, S.default.element]),
          content: S.default.node,
          disableAnimation: S.default.bool.isRequired,
          footer: S.default.node,
          handleClick: S.default.func.isRequired,
          hideArrow: S.default.bool.isRequired,
          open: S.default.bool,
          placement: S.default.string.isRequired,
          positionWrapper: S.default.bool.isRequired,
          setArrowRef: S.default.func.isRequired,
          setFloaterRef: S.default.func.isRequired,
          showCloseButton: S.default.bool,
          status: S.default.string.isRequired,
          styles: S.default.object.isRequired,
          title: S.default.node,
        });
        Jr = ((e) => {
          ut(n, e);
          var t = pt(n);
          function n() {
            return lt(this, n), t.apply(this, arguments);
          }
          return (
            ct(n, [
              {
                key: 'render',
                value: function () {
                  var r = this.props,
                    o = r.children,
                    i = r.handleClick,
                    a = r.handleMouseEnter,
                    s = r.handleMouseLeave,
                    c = r.setChildRef,
                    l = r.setWrapperRef,
                    p = r.style,
                    u = r.styles,
                    d;
                  if (o)
                    if (y.Children.count(o) === 1)
                      if (!y.isValidElement(o)) d = y.createElement('span', null, o);
                      else {
                        var f = A.function(o.type) ? 'innerRef' : 'ref';
                        d = y.cloneElement(y.Children.only(o), re({}, f, c));
                      }
                    else d = o;
                  return d
                    ? y.createElement(
                        'span',
                        {
                          ref: l,
                          style: J(J({}, u), p),
                          onClick: i,
                          onMouseEnter: a,
                          onMouseLeave: s,
                        },
                        d,
                      )
                    : null;
                },
              },
            ]),
            n
          );
        })(y.Component);
        re(Jr, 'propTypes', {
          children: S.default.node,
          handleClick: S.default.func.isRequired,
          handleMouseEnter: S.default.func.isRequired,
          handleMouseLeave: S.default.func.isRequired,
          setChildRef: S.default.func.isRequired,
          setWrapperRef: S.default.func.isRequired,
          style: S.default.object,
          styles: S.default.object.isRequired,
        });
        fa = { zIndex: 100 };
        (ma = ['arrow', 'flip', 'offset']),
          (ya = ['position', 'top', 'right', 'bottom', 'left']),
          (tn = ((e) => {
            ut(n, e);
            var t = pt(n);
            function n(r) {
              var o;
              return (
                lt(this, n),
                (o = t.call(this, r)),
                re(we(o), 'setArrowRef', (i) => {
                  o.arrowRef = i;
                }),
                re(we(o), 'setChildRef', (i) => {
                  o.childRef = i;
                }),
                re(we(o), 'setFloaterRef', (i) => {
                  o.floaterRef = i;
                }),
                re(we(o), 'setWrapperRef', (i) => {
                  o.wrapperRef = i;
                }),
                re(we(o), 'handleTransitionEnd', () => {
                  var i = o.state.status,
                    a = o.props.callback;
                  o.wrapperPopper?.instance.update(),
                    o.setState({ status: i === U.OPENING ? U.OPEN : U.IDLE }, () => {
                      var s = o.state.status;
                      a(s === U.OPEN ? 'open' : 'close', o.props);
                    });
                }),
                re(we(o), 'handleClick', () => {
                  var i = o.props,
                    a = i.event,
                    s = i.open;
                  if (!A.boolean(s)) {
                    var c = o.state,
                      l = c.positionWrapper,
                      p = c.status;
                    (o.event === 'click' || (o.event === 'hover' && l)) &&
                      (St({
                        title: 'click',
                        data: [{ event: a, status: p === U.OPEN ? 'closing' : 'opening' }],
                        debug: o.debug,
                      }),
                      o.toggle());
                  }
                }),
                re(we(o), 'handleMouseEnter', () => {
                  var i = o.props,
                    a = i.event,
                    s = i.open;
                  if (!(A.boolean(s) || Wt())) {
                    var c = o.state.status;
                    o.event === 'hover' &&
                      c === U.IDLE &&
                      (St({
                        title: 'mouseEnter',
                        data: [{ key: 'originalEvent', value: a }],
                        debug: o.debug,
                      }),
                      clearTimeout(o.eventDelayTimeout),
                      o.toggle());
                  }
                }),
                re(we(o), 'handleMouseLeave', () => {
                  var i = o.props,
                    a = i.event,
                    s = i.eventDelay,
                    c = i.open;
                  if (!(A.boolean(c) || Wt())) {
                    var l = o.state,
                      p = l.status,
                      u = l.positionWrapper;
                    o.event === 'hover' &&
                      (St({
                        title: 'mouseLeave',
                        data: [{ key: 'originalEvent', value: a }],
                        debug: o.debug,
                      }),
                      s
                        ? [U.OPENING, U.OPEN].indexOf(p) !== -1 &&
                          !u &&
                          !o.eventDelayTimeout &&
                          (o.eventDelayTimeout = setTimeout(() => {
                            delete o.eventDelayTimeout, o.toggle();
                          }, s * 1e3))
                        : o.toggle(U.IDLE));
                  }
                }),
                (o.state = {
                  currentPlacement: r.placement,
                  needsUpdate: !1,
                  positionWrapper: r.wrapperOptions.position && !!r.target,
                  status: U.INIT,
                  statusWrapper: U.INIT,
                }),
                (o._isMounted = !1),
                (o.hasMounted = !1),
                ve() &&
                  window.addEventListener('load', () => {
                    o.popper?.instance.update(), o.wrapperPopper?.instance.update();
                  }),
                o
              );
            }
            return (
              ct(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    if (ve()) {
                      var r = this.state.positionWrapper,
                        o = this.props,
                        i = o.children,
                        a = o.open,
                        s = o.target;
                      (this._isMounted = !0),
                        St({
                          title: 'init',
                          data: {
                            hasChildren: !!i,
                            hasTarget: !!s,
                            isControlled: A.boolean(a),
                            positionWrapper: r,
                            target: this.target,
                            floater: this.floaterRef,
                          },
                          debug: this.debug,
                        }),
                        this.hasMounted || (this.initPopper(), (this.hasMounted = !0)),
                        !i && s && A.boolean(a);
                    }
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (r, o) {
                    if (ve()) {
                      var i = this.props,
                        a = i.autoOpen,
                        s = i.open,
                        c = i.target,
                        l = i.wrapperOptions,
                        p = Xi(o, this.state),
                        u = p.changedFrom,
                        d = p.changed;
                      if (r.open !== s) {
                        var f;
                        A.boolean(s) && (f = s ? U.OPENING : U.CLOSING), this.toggle(f);
                      }
                      (r.wrapperOptions.position !== l.position || r.target !== c) &&
                        this.changeWrapperPosition(this.props),
                        d('status', U.IDLE) && s
                          ? this.toggle(U.OPEN)
                          : u('status', U.INIT, U.IDLE) && a && this.toggle(U.OPEN),
                        this.popper && d('status', U.OPENING) && this.popper.instance.update(),
                        this.floaterRef &&
                          (d('status', U.OPENING) || d('status', U.CLOSING)) &&
                          pa(this.floaterRef, 'transitionend', this.handleTransitionEnd),
                        d('needsUpdate', !0) && this.rebuildPopper();
                    }
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    ve() &&
                      ((this._isMounted = !1),
                      this.popper?.instance.destroy(),
                      this.wrapperPopper?.instance.destroy());
                  },
                },
                {
                  key: 'initPopper',
                  value: function () {
                    var o =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : this.target,
                      i = this.state.positionWrapper,
                      a = this.props,
                      s = a.disableFlip,
                      c = a.getPopper,
                      l = a.hideArrow,
                      p = a.offset,
                      u = a.placement,
                      d = a.wrapperOptions,
                      f =
                        u === 'top' || u === 'bottom'
                          ? 'flip'
                          : ['right', 'bottom-end', 'top-end', 'left', 'top-start', 'bottom-start'];
                    if (u === 'center') this.setState({ status: U.IDLE });
                    else if (o && this.floaterRef) {
                      var h = this.options,
                        b = h.arrow,
                        N = h.flip,
                        v = h.offset,
                        T = Gr(h, ma);
                      new Zn(o, this.floaterRef, {
                        placement: u,
                        modifiers: J(
                          {
                            arrow: J({ enabled: !l, element: this.arrowRef }, b),
                            flip: J({ enabled: !s, behavior: f }, N),
                            offset: J({ offset: '0, '.concat(p, 'px') }, v),
                          },
                          T,
                        ),
                        onCreate: (g) => {
                          var O;
                          if (
                            ((this.popper = g),
                            !((O = this.floaterRef) !== null && O !== void 0 && O.isConnected))
                          ) {
                            this.setState({ needsUpdate: !0 });
                            return;
                          }
                          c(g, 'floater'),
                            this._isMounted &&
                              this.setState({ currentPlacement: g.placement, status: U.IDLE }),
                            u !== g.placement &&
                              setTimeout(() => {
                                g.instance.update();
                              }, 1);
                        },
                        onUpdate: (g) => {
                          this.popper = g;
                          var O = this.state.currentPlacement;
                          this._isMounted &&
                            g.placement !== O &&
                            this.setState({ currentPlacement: g.placement });
                        },
                      });
                    }
                    if (i) {
                      var m = A.undefined(d.offset) ? 0 : d.offset;
                      new Zn(this.target, this.wrapperRef, {
                        placement: d.placement || u,
                        modifiers: {
                          arrow: { enabled: !1 },
                          offset: { offset: '0, '.concat(m, 'px') },
                          flip: { enabled: !1 },
                        },
                        onCreate: (g) => {
                          (this.wrapperPopper = g),
                            this._isMounted && this.setState({ statusWrapper: U.IDLE }),
                            c(g, 'wrapper'),
                            u !== g.placement &&
                              setTimeout(() => {
                                g.instance.update();
                              }, 1);
                        },
                      });
                    }
                  },
                },
                {
                  key: 'rebuildPopper',
                  value: function () {
                    this.floaterRefInterval = setInterval(() => {
                      var o;
                      (o = this.floaterRef) !== null &&
                        o !== void 0 &&
                        o.isConnected &&
                        (clearInterval(this.floaterRefInterval),
                        this.setState({ needsUpdate: !1 }),
                        this.initPopper());
                    }, 50);
                  },
                },
                {
                  key: 'changeWrapperPosition',
                  value: function (r) {
                    var o = r.target,
                      i = r.wrapperOptions;
                    this.setState({ positionWrapper: i.position && !!o });
                  },
                },
                {
                  key: 'toggle',
                  value: function (r) {
                    var o = this.state.status,
                      i = o === U.OPEN ? U.CLOSING : U.OPENING;
                    A.undefined(r) || (i = r), this.setState({ status: i });
                  },
                },
                {
                  key: 'debug',
                  get: function () {
                    var r = this.props.debug;
                    return (
                      r || (ve() && 'ReactFloaterDebug' in window && !!window.ReactFloaterDebug)
                    );
                  },
                },
                {
                  key: 'event',
                  get: function () {
                    var r = this.props,
                      o = r.disableHoverToClick,
                      i = r.event;
                    return i === 'hover' && Wt() && !o ? 'click' : i;
                  },
                },
                {
                  key: 'options',
                  get: function () {
                    var r = this.props.options;
                    return (0, zt.default)(na, r || {});
                  },
                },
                {
                  key: 'styles',
                  get: function () {
                    var o = this.state,
                      i = o.status,
                      a = o.positionWrapper,
                      s = o.statusWrapper,
                      c = this.props.styles,
                      l = (0, zt.default)(ha(c), c);
                    if (a) {
                      var p;
                      [U.IDLE].indexOf(i) === -1 || [U.IDLE].indexOf(s) === -1
                        ? (p = l.wrapperPosition)
                        : (p = this.wrapperPopper.styles),
                        (l.wrapper = J(J({}, l.wrapper), p));
                    }
                    if (this.target) {
                      var u = window.getComputedStyle(this.target);
                      this.wrapperStyles
                        ? (l.wrapper = J(J({}, l.wrapper), this.wrapperStyles))
                        : ['relative', 'static'].indexOf(u.position) === -1 &&
                          ((this.wrapperStyles = {}),
                          a ||
                            (ya.forEach((d) => {
                              this.wrapperStyles[d] = u[d];
                            }),
                            (l.wrapper = J(J({}, l.wrapper), this.wrapperStyles)),
                            (this.target.style.position = 'relative'),
                            (this.target.style.top = 'auto'),
                            (this.target.style.right = 'auto'),
                            (this.target.style.bottom = 'auto'),
                            (this.target.style.left = 'auto')));
                    }
                    return l;
                  },
                },
                {
                  key: 'target',
                  get: function () {
                    if (!ve()) return null;
                    var r = this.props.target;
                    return r
                      ? A.domElement(r)
                        ? r
                        : document.querySelector(r)
                      : this.childRef || this.wrapperRef;
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var r = this.state,
                      o = r.currentPlacement,
                      i = r.positionWrapper,
                      a = r.status,
                      s = this.props,
                      c = s.children,
                      l = s.component,
                      p = s.content,
                      u = s.disableAnimation,
                      d = s.footer,
                      f = s.hideArrow,
                      h = s.id,
                      b = s.open,
                      N = s.showCloseButton,
                      v = s.style,
                      T = s.target,
                      m = s.title,
                      g = y.createElement(
                        Jr,
                        {
                          handleClick: this.handleClick,
                          handleMouseEnter: this.handleMouseEnter,
                          handleMouseLeave: this.handleMouseLeave,
                          setChildRef: this.setChildRef,
                          setWrapperRef: this.setWrapperRef,
                          style: v,
                          styles: this.styles.wrapper,
                        },
                        c,
                      ),
                      O = {};
                    return (
                      i ? (O.wrapperInPortal = g) : (O.wrapperAsChildren = g),
                      y.createElement(
                        'span',
                        null,
                        y.createElement(
                          Yr,
                          {
                            hasChildren: !!c,
                            id: h,
                            placement: o,
                            setRef: this.setFloaterRef,
                            target: T,
                            zIndex: this.styles.options.zIndex,
                          },
                          y.createElement(Kr, {
                            component: l,
                            content: p,
                            disableAnimation: u,
                            footer: d,
                            handleClick: this.handleClick,
                            hideArrow: f || o === 'center',
                            open: b,
                            placement: o,
                            positionWrapper: i,
                            setArrowRef: this.setArrowRef,
                            setFloaterRef: this.setFloaterRef,
                            showCloseButton: N,
                            status: a,
                            styles: this.styles,
                            title: m,
                          }),
                          O.wrapperInPortal,
                        ),
                        O.wrapperAsChildren,
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(y.Component));
        re(tn, 'propTypes', {
          autoOpen: S.default.bool,
          callback: S.default.func,
          children: S.default.node,
          component: cr(
            S.default.oneOfType([S.default.func, S.default.element]),
            (e) => !e.content,
          ),
          content: cr(S.default.node, (e) => !e.component),
          debug: S.default.bool,
          disableAnimation: S.default.bool,
          disableFlip: S.default.bool,
          disableHoverToClick: S.default.bool,
          event: S.default.oneOf(['hover', 'click']),
          eventDelay: S.default.number,
          footer: S.default.node,
          getPopper: S.default.func,
          hideArrow: S.default.bool,
          id: S.default.oneOfType([S.default.string, S.default.number]),
          offset: S.default.number,
          open: S.default.bool,
          options: S.default.object,
          placement: S.default.oneOf([
            'top',
            'top-start',
            'top-end',
            'bottom',
            'bottom-start',
            'bottom-end',
            'left',
            'left-start',
            'left-end',
            'right',
            'right-start',
            'right-end',
            'auto',
            'center',
          ]),
          showCloseButton: S.default.bool,
          style: S.default.object,
          styles: S.default.object,
          target: S.default.oneOfType([S.default.object, S.default.string]),
          title: S.default.node,
          wrapperOptions: S.default.shape({
            offset: S.default.number,
            placement: S.default.oneOf([
              'top',
              'top-start',
              'top-end',
              'bottom',
              'bottom-start',
              'bottom-end',
              'left',
              'left-start',
              'left-end',
              'right',
              'right-start',
              'right-end',
              'auto',
            ]),
            position: S.default.bool,
          }),
        });
        re(tn, 'defaultProps', {
          autoOpen: !1,
          callback: ur,
          debug: !1,
          disableAnimation: !1,
          disableFlip: !1,
          disableHoverToClick: !1,
          event: 'click',
          eventDelay: 0.4,
          getPopper: ur,
          hideArrow: !1,
          offset: 15,
          placement: 'bottom',
          showCloseButton: !1,
          styles: {},
          target: null,
          wrapperOptions: { position: !1 },
        });
        (ga = De(To(), 1)),
          (ba = Object.defineProperty),
          (va = (e, t, n) =>
            t in e
              ? ba(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
              : (e[t] = n)),
          (_ = (e, t, n) => (va(e, typeof t !== 'symbol' ? `${t}` : t, n), n)),
          ($ = {
            INIT: 'init',
            START: 'start',
            STOP: 'stop',
            RESET: 'reset',
            PREV: 'prev',
            NEXT: 'next',
            GO: 'go',
            CLOSE: 'close',
            SKIP: 'skip',
            UPDATE: 'update',
          }),
          (pe = {
            TOUR_START: 'tour:start',
            STEP_BEFORE: 'step:before',
            BEACON: 'beacon',
            TOOLTIP: 'tooltip',
            STEP_AFTER: 'step:after',
            TOUR_END: 'tour:end',
            TOUR_STATUS: 'tour:status',
            TARGET_NOT_FOUND: 'error:target_not_found',
            ERROR: 'error',
          }),
          (k = {
            INIT: 'init',
            READY: 'ready',
            BEACON: 'beacon',
            TOOLTIP: 'tooltip',
            COMPLETE: 'complete',
            ERROR: 'error',
          }),
          (j = {
            IDLE: 'idle',
            READY: 'ready',
            WAITING: 'waiting',
            RUNNING: 'running',
            PAUSED: 'paused',
            SKIPPED: 'skipped',
            FINISHED: 'finished',
            ERROR: 'error',
          });
        tt = mt !== void 0;
        (Na = {
          options: { preventOverflow: { boundariesElement: 'scrollParent' } },
          wrapperOptions: { offset: -18, position: !0 },
        }),
          (eo = {
            back: 'Back',
            close: 'Close',
            last: 'Last',
            next: 'Next',
            open: 'Open the dialog',
            skip: 'Skip',
          }),
          (ka = {
            event: 'click',
            placement: 'bottom',
            offset: 10,
            disableBeacon: !1,
            disableCloseOnEsc: !1,
            disableOverlay: !1,
            disableOverlayClose: !1,
            disableScrollParentFix: !1,
            disableScrolling: !1,
            hideBackButton: !1,
            hideCloseButton: !1,
            hideFooter: !1,
            isFixed: !1,
            locale: eo,
            showProgress: !1,
            showSkipButton: !1,
            spotlightClicks: !1,
            spotlightPadding: 10,
          }),
          (La = {
            continuous: !1,
            debug: !1,
            disableCloseOnEsc: !1,
            disableOverlay: !1,
            disableOverlayClose: !1,
            disableScrolling: !1,
            disableScrollParentFix: !1,
            getHelpers: void 0,
            hideBackButton: !1,
            run: !0,
            scrollOffset: 20,
            scrollDuration: 300,
            scrollToFirstStep: !1,
            showSkipButton: !1,
            showProgress: !1,
            spotlightClicks: !1,
            spotlightPadding: 10,
            steps: [],
          }),
          (Ma = {
            arrowColor: '#fff',
            backgroundColor: '#fff',
            beaconSize: 36,
            overlayColor: 'rgba(0, 0, 0, 0.5)',
            primaryColor: '#f04',
            spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
            textColor: '#333',
            width: 380,
            zIndex: 100,
          }),
          (nt = {
            backgroundColor: 'transparent',
            border: 0,
            borderRadius: 0,
            color: '#555',
            cursor: 'pointer',
            fontSize: 16,
            lineHeight: 1,
            padding: 8,
            WebkitAppearance: 'none',
          }),
          (fr = { borderRadius: 4, position: 'absolute' });
        (no = {
          action: 'init',
          controlled: !1,
          index: 0,
          lifecycle: k.INIT,
          origin: null,
          size: 0,
          status: j.IDLE,
        }),
          (mr = _a(Zr(no, 'controlled', 'size'))),
          (Fa = class {
            constructor(e) {
              _(this, 'beaconPopper'),
                _(this, 'tooltipPopper'),
                _(this, 'data', new Map()),
                _(this, 'listener'),
                _(this, 'store', new Map()),
                _(this, 'addListener', (o) => {
                  this.listener = o;
                }),
                _(this, 'setSteps', (o) => {
                  const { size: i, status: a } = this.getState(),
                    s = { size: o.length, status: a };
                  this.data.set('steps', o),
                    a === j.WAITING && !i && o.length && (s.status = j.RUNNING),
                    this.setState(s);
                }),
                _(this, 'getPopper', (o) =>
                  o === 'beacon' ? this.beaconPopper : this.tooltipPopper,
                ),
                _(this, 'setPopper', (o, i) => {
                  o === 'beacon' ? (this.beaconPopper = i) : (this.tooltipPopper = i);
                }),
                _(this, 'cleanupPoppers', () => {
                  (this.beaconPopper = null), (this.tooltipPopper = null);
                }),
                _(this, 'close', (o = null) => {
                  const { index: i, status: a } = this.getState();
                  a === j.RUNNING &&
                    this.setState({
                      ...this.getNextState({ action: $.CLOSE, index: i + 1, origin: o }),
                    });
                }),
                _(this, 'go', (o) => {
                  const { controlled: i, status: a } = this.getState();
                  if (i || a !== j.RUNNING) return;
                  const s = this.getSteps()[o];
                  this.setState({
                    ...this.getNextState({ action: $.GO, index: o }),
                    status: s ? a : j.FINISHED,
                  });
                }),
                _(this, 'info', () => this.getState()),
                _(this, 'next', () => {
                  const { index: o, status: i } = this.getState();
                  i === j.RUNNING &&
                    this.setState(this.getNextState({ action: $.NEXT, index: o + 1 }));
                }),
                _(this, 'open', () => {
                  const { status: o } = this.getState();
                  o === j.RUNNING &&
                    this.setState({
                      ...this.getNextState({ action: $.UPDATE, lifecycle: k.TOOLTIP }),
                    });
                }),
                _(this, 'prev', () => {
                  const { index: o, status: i } = this.getState();
                  i === j.RUNNING &&
                    this.setState({ ...this.getNextState({ action: $.PREV, index: o - 1 }) });
                }),
                _(this, 'reset', (o = !1) => {
                  const { controlled: i } = this.getState();
                  i ||
                    this.setState({
                      ...this.getNextState({ action: $.RESET, index: 0 }),
                      status: o ? j.RUNNING : j.READY,
                    });
                }),
                _(this, 'skip', () => {
                  const { status: o } = this.getState();
                  o === j.RUNNING &&
                    this.setState({ action: $.SKIP, lifecycle: k.INIT, status: j.SKIPPED });
                }),
                _(this, 'start', (o) => {
                  const { index: i, size: a } = this.getState();
                  this.setState({
                    ...this.getNextState({ action: $.START, index: C.number(o) ? o : i }, !0),
                    status: a ? j.RUNNING : j.WAITING,
                  });
                }),
                _(this, 'stop', (o = !1) => {
                  const { index: i, status: a } = this.getState();
                  [j.FINISHED, j.SKIPPED].includes(a) ||
                    this.setState({
                      ...this.getNextState({ action: $.STOP, index: i + (o ? 1 : 0) }),
                      status: j.PAUSED,
                    });
                }),
                _(this, 'update', (o) => {
                  var i, a;
                  if (!Ca(o, mr))
                    throw new Error(`State is not valid. Valid keys: ${mr.join(', ')}`);
                  this.setState({
                    ...this.getNextState(
                      {
                        ...this.getState(),
                        ...o,
                        action: (i = o.action) != null ? i : $.UPDATE,
                        origin: (a = o.origin) != null ? a : null,
                      },
                      !0,
                    ),
                  });
                });
              const { continuous: t = !1, stepIndex: n, steps: r = [] } = e ?? {};
              this.setState(
                {
                  action: $.INIT,
                  controlled: C.number(n),
                  continuous: t,
                  index: C.number(n) ? n : 0,
                  lifecycle: k.INIT,
                  origin: null,
                  status: r.length ? j.READY : j.IDLE,
                },
                !0,
              ),
                (this.beaconPopper = null),
                (this.tooltipPopper = null),
                (this.listener = null),
                this.setSteps(r);
            }
            getState() {
              return this.store.size
                ? {
                    action: this.store.get('action') || '',
                    controlled: this.store.get('controlled') || !1,
                    index: parseInt(this.store.get('index'), 10),
                    lifecycle: this.store.get('lifecycle') || '',
                    origin: this.store.get('origin') || null,
                    size: this.store.get('size') || 0,
                    status: this.store.get('status') || '',
                  }
                : { ...no };
            }
            getNextState(e, t = !1) {
              var n, r, o, i, a;
              const { action: s, controlled: c, index: l, size: p, status: u } = this.getState(),
                d = C.number(e.index) ? e.index : l,
                f = c && !t ? l : Math.min(Math.max(d, 0), p);
              return {
                action: (n = e.action) != null ? n : s,
                controlled: c,
                index: f,
                lifecycle: (r = e.lifecycle) != null ? r : k.INIT,
                origin: (o = e.origin) != null ? o : null,
                size: (i = e.size) != null ? i : p,
                status: f === p ? j.FINISHED : (a = e.status) != null ? a : u,
              };
            }
            getSteps() {
              const e = this.data.get('steps');
              return Array.isArray(e) ? e : [];
            }
            hasUpdatedState(e) {
              const t = JSON.stringify(e),
                n = JSON.stringify(this.getState());
              return t !== n;
            }
            setState(e, t = !1) {
              const n = this.getState(),
                {
                  action: r,
                  index: o,
                  lifecycle: i,
                  origin: a = null,
                  size: s,
                  status: c,
                } = { ...n, ...e };
              this.store.set('action', r),
                this.store.set('index', o),
                this.store.set('lifecycle', i),
                this.store.set('origin', a),
                this.store.set('size', s),
                this.store.set('status', c),
                t &&
                  (this.store.set('controlled', e.controlled),
                  this.store.set('continuous', e.continuous)),
                this.listener && this.hasUpdatedState(n) && this.listener(this.getState());
            }
            getHelpers() {
              return {
                close: this.close,
                go: this.go,
                info: this.info,
                next: this.next,
                open: this.open,
                prev: this.prev,
                reset: this.reset,
                skip: this.skip,
              };
            }
          });
        (Ua = Wa),
          (Ha = class extends Le {
            constructor() {
              super(...arguments),
                _(this, 'isActive', !1),
                _(this, 'resizeTimeout'),
                _(this, 'scrollTimeout'),
                _(this, 'scrollParent'),
                _(this, 'state', { isScrolling: !1, mouseOverSpotlight: !1, showSpotlight: !0 }),
                _(this, 'hideSpotlight', () => {
                  const { continuous: e, disableOverlay: t, lifecycle: n } = this.props,
                    r = [k.BEACON, k.COMPLETE, k.ERROR];
                  return t || (e ? r.includes(n) : n !== k.TOOLTIP);
                }),
                _(this, 'handleMouseMove', (e) => {
                  const { mouseOverSpotlight: t } = this.state,
                    { height: n, left: r, position: o, top: i, width: a } = this.spotlightStyles,
                    s = o === 'fixed' ? e.clientY : e.pageY,
                    c = o === 'fixed' ? e.clientX : e.pageX,
                    l = s >= i && s <= i + n,
                    p = c >= r && c <= r + a && l;
                  p !== t && this.updateState({ mouseOverSpotlight: p });
                }),
                _(this, 'handleScroll', () => {
                  const { target: e } = this.props,
                    t = _e(e);
                  if (this.scrollParent !== document) {
                    const { isScrolling: n } = this.state;
                    n || this.updateState({ isScrolling: !0, showSpotlight: !1 }),
                      clearTimeout(this.scrollTimeout),
                      (this.scrollTimeout = window.setTimeout(() => {
                        this.updateState({ isScrolling: !1, showSpotlight: !0 });
                      }, 50));
                  } else ot(t, 'sticky') && this.updateState({});
                }),
                _(this, 'handleResize', () => {
                  clearTimeout(this.resizeTimeout),
                    (this.resizeTimeout = window.setTimeout(() => {
                      this.isActive && this.forceUpdate();
                    }, 100));
                });
            }
            componentDidMount() {
              const {
                  debug: e,
                  disableScrolling: t,
                  disableScrollParentFix: n = !1,
                  target: r,
                } = this.props,
                o = _e(r);
              (this.scrollParent = _t(o ?? document.body, n, !0)),
                (this.isActive = !0),
                !t &&
                  dt(o, !0) &&
                  Ae({
                    title: 'step has a custom scroll parent and can cause trouble with scrolling',
                    data: [{ key: 'parent', value: this.scrollParent }],
                    debug: e,
                  }),
                window.addEventListener('resize', this.handleResize);
            }
            componentDidUpdate(e) {
              var t;
              const { lifecycle: n, spotlightClicks: r } = this.props,
                { changed: o } = Ot(e, this.props);
              o('lifecycle', k.TOOLTIP) &&
                ((t = this.scrollParent) == null ||
                  t.addEventListener('scroll', this.handleScroll, { passive: !0 }),
                setTimeout(() => {
                  const { isScrolling: i } = this.state;
                  i || this.updateState({ showSpotlight: !0 });
                }, 100)),
                (o('spotlightClicks') || o('disableOverlay') || o('lifecycle')) &&
                  (r && n === k.TOOLTIP
                    ? window.addEventListener('mousemove', this.handleMouseMove, !1)
                    : n !== k.TOOLTIP &&
                      window.removeEventListener('mousemove', this.handleMouseMove));
            }
            componentWillUnmount() {
              var e;
              (this.isActive = !1),
                window.removeEventListener('mousemove', this.handleMouseMove),
                window.removeEventListener('resize', this.handleResize),
                clearTimeout(this.resizeTimeout),
                clearTimeout(this.scrollTimeout),
                (e = this.scrollParent) == null ||
                  e.removeEventListener('scroll', this.handleScroll);
            }
            get overlayStyles() {
              let { mouseOverSpotlight: e } = this.state,
                { disableOverlayClose: t, placement: n, styles: r } = this.props,
                o = r.overlay;
              return (
                dr() && (o = n === 'center' ? r.overlayLegacyCenter : r.overlayLegacy),
                {
                  cursor: t ? 'default' : 'pointer',
                  height: Ea(),
                  pointerEvents: e ? 'none' : 'auto',
                  ...o,
                }
              );
            }
            get spotlightStyles() {
              var e, t, n;
              const { showSpotlight: r } = this.state,
                {
                  disableScrollParentFix: o = !1,
                  spotlightClicks: i,
                  spotlightPadding: a = 0,
                  styles: s,
                  target: c,
                } = this.props,
                l = _e(c),
                p = Xr(l),
                u = ot(l),
                d = Ta(l, a, o);
              return {
                ...(dr() ? s.spotlightLegacy : s.spotlight),
                height: Math.round(((e = p?.height) != null ? e : 0) + a * 2),
                left: Math.round(((t = p?.left) != null ? t : 0) - a),
                opacity: r ? 1 : 0,
                pointerEvents: i ? 'none' : 'auto',
                position: u ? 'fixed' : 'absolute',
                top: d,
                transition: 'opacity 0.2s',
                width: Math.round(((n = p?.width) != null ? n : 0) + a * 2),
              };
            }
            updateState(e) {
              this.isActive && this.setState((t) => ({ ...t, ...e }));
            }
            render() {
              const { showSpotlight: e } = this.state,
                { onClickOverlay: t, placement: n } = this.props,
                { hideSpotlight: r, overlayStyles: o, spotlightStyles: i } = this;
              if (r()) return null;
              let a = n !== 'center' && e && q(Ua, { styles: i });
              if (Qr() === 'safari') {
                const { mixBlendMode: s, zIndex: c, ...l } = o;
                (a = q('div', { style: { ...l } }, a)), delete o.backgroundColor;
              }
              return q(
                'div',
                {
                  className: 'react-joyride__overlay',
                  'data-test-id': 'overlay',
                  onClick: t,
                  role: 'presentation',
                  style: o,
                },
                a,
              );
            }
          }),
          (Ga = class extends Le {
            constructor() {
              super(...arguments), _(this, 'node', null);
            }
            componentDidMount() {
              const { id: e } = this.props;
              Ce() &&
                ((this.node = document.createElement('div')),
                (this.node.id = e),
                document.body.appendChild(this.node),
                tt || this.renderReact15());
            }
            componentDidUpdate() {
              Ce() && (tt || this.renderReact15());
            }
            componentWillUnmount() {
              !Ce() ||
                !this.node ||
                (tt || ln(this.node),
                this.node.parentNode === document.body &&
                  (document.body.removeChild(this.node), (this.node = null)));
            }
            renderReact15() {
              if (!Ce()) return;
              const { children: e } = this.props;
              this.node && cn(this, e, this.node);
            }
            renderReact16() {
              if (!Ce() || !tt) return null;
              const { children: e } = this.props;
              return this.node ? mt(e, this.node) : null;
            }
            render() {
              return tt ? this.renderReact16() : null;
            }
          }),
          (za = class {
            constructor(e, t) {
              if (
                (_(this, 'element'),
                _(this, 'options'),
                _(this, 'canBeTabbed', (n) => {
                  const { tabIndex: r } = n;
                  return r === null || r < 0 ? !1 : this.canHaveFocus(n);
                }),
                _(this, 'canHaveFocus', (n) => {
                  const r = /input|select|textarea|button|object/,
                    o = n.nodeName.toLowerCase();
                  return (
                    ((r.test(o) && !n.getAttribute('disabled')) ||
                      (o === 'a' && !!n.getAttribute('href'))) &&
                    this.isVisible(n)
                  );
                }),
                _(this, 'findValidTabElements', () =>
                  [].slice.call(this.element.querySelectorAll('*'), 0).filter(this.canBeTabbed),
                ),
                _(this, 'handleKeyDown', (n) => {
                  const { code: r = 'Tab' } = this.options;
                  n.code === r && this.interceptTab(n);
                }),
                _(this, 'interceptTab', (n) => {
                  n.preventDefault();
                  const r = this.findValidTabElements(),
                    { shiftKey: o } = n;
                  if (!r.length) return;
                  let i = document.activeElement ? r.indexOf(document.activeElement) : 0;
                  i === -1 || (!o && i + 1 === r.length)
                    ? (i = 0)
                    : o && i === 0
                      ? (i = r.length - 1)
                      : (i += o ? -1 : 1),
                    r[i].focus();
                }),
                _(this, 'isHidden', (n) => {
                  const r = n.offsetWidth <= 0 && n.offsetHeight <= 0,
                    o = window.getComputedStyle(n);
                  return r && !n.innerHTML
                    ? !0
                    : (r && o.getPropertyValue('overflow') !== 'visible') ||
                        o.getPropertyValue('display') === 'none';
                }),
                _(this, 'isVisible', (n) => {
                  let r = n;
                  for (; r; )
                    if (r instanceof HTMLElement) {
                      if (r === document.body) break;
                      if (this.isHidden(r)) return !1;
                      r = r.parentNode;
                    }
                  return !0;
                }),
                _(this, 'removeScope', () => {
                  window.removeEventListener('keydown', this.handleKeyDown);
                }),
                _(this, 'checkFocus', (n) => {
                  document.activeElement !== n &&
                    (n.focus(), window.requestAnimationFrame(() => this.checkFocus(n)));
                }),
                _(this, 'setFocus', () => {
                  const { selector: n } = this.options;
                  if (!n) return;
                  const r = this.element.querySelector(n);
                  r && window.requestAnimationFrame(() => this.checkFocus(r));
                }),
                !(e instanceof HTMLElement))
              )
                throw new TypeError('Invalid parameter: element must be an HTMLElement');
              (this.element = e),
                (this.options = t),
                window.addEventListener('keydown', this.handleKeyDown, !1),
                this.setFocus();
            }
          }),
          (Ya = class extends Le {
            constructor(e) {
              if (
                (super(e),
                _(this, 'beacon', null),
                _(this, 'setBeaconRef', (r) => {
                  this.beacon = r;
                }),
                e.beaconComponent)
              )
                return;
              const t = document.head || document.getElementsByTagName('head')[0],
                n = document.createElement('style');
              (n.id = 'joyride-beacon-animation'),
                e.nonce && n.setAttribute('nonce', e.nonce),
                n.appendChild(
                  document.createTextNode(`
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `),
                ),
                t.appendChild(n);
            }
            componentDidMount() {
              const { shouldFocus: e } = this.props;
              C.domElement(this.beacon) || console.warn('beacon is not a valid DOM element'),
                setTimeout(() => {
                  C.domElement(this.beacon) && e && this.beacon.focus();
                }, 0);
            }
            componentWillUnmount() {
              const e = document.getElementById('joyride-beacon-animation');
              e?.parentNode?.removeChild(e);
            }
            render() {
              let {
                  beaconComponent: e,
                  continuous: t,
                  index: n,
                  isLastStep: r,
                  locale: o,
                  onClickOrHover: i,
                  size: a,
                  step: s,
                  styles: c,
                } = this.props,
                l = C.string(o.open) ? o.open : (0, ga.default)(o.open),
                p = {
                  'aria-label': l,
                  onClick: i,
                  onMouseEnter: i,
                  ref: this.setBeaconRef,
                  title: l,
                },
                u;
              return (
                e
                  ? (u = q(e, { continuous: t, index: n, isLastStep: r, size: a, step: s, ...p }))
                  : (u = q(
                      'button',
                      {
                        key: 'JoyrideBeacon',
                        className: 'react-joyride__beacon',
                        'data-test-id': 'button-beacon',
                        style: c.beacon,
                        type: 'button',
                        ...p,
                      },
                      q('span', { style: c.beaconInner }),
                      q('span', { style: c.beaconOuter }),
                    )),
                u
              );
            }
          });
        $a = qa;
        (Ka = Va),
          (Ja = class extends Le {
            constructor() {
              super(...arguments),
                _(this, 'handleClickBack', (e) => {
                  e.preventDefault();
                  const { helpers: t } = this.props;
                  t.prev();
                }),
                _(this, 'handleClickClose', (e) => {
                  e.preventDefault();
                  const { helpers: t } = this.props;
                  t.close('button_close');
                }),
                _(this, 'handleClickPrimary', (e) => {
                  e.preventDefault();
                  const { continuous: t, helpers: n } = this.props;
                  if (!t) {
                    n.close('button_primary');
                    return;
                  }
                  n.next();
                }),
                _(this, 'handleClickSkip', (e) => {
                  e.preventDefault();
                  const { helpers: t } = this.props;
                  t.skip();
                }),
                _(this, 'getElementsProps', () => {
                  let { continuous: e, isLastStep: t, setTooltipRef: n, step: r } = this.props,
                    o = Pe(r.locale.back),
                    i = Pe(r.locale.close),
                    a = Pe(r.locale.last),
                    s = Pe(r.locale.next),
                    c = Pe(r.locale.skip),
                    l = e ? s : i;
                  return (
                    t && (l = a),
                    {
                      backProps: {
                        'aria-label': o,
                        'data-action': 'back',
                        onClick: this.handleClickBack,
                        role: 'button',
                        title: o,
                      },
                      closeProps: {
                        'aria-label': i,
                        'data-action': 'close',
                        onClick: this.handleClickClose,
                        role: 'button',
                        title: i,
                      },
                      primaryProps: {
                        'aria-label': l,
                        'data-action': 'primary',
                        onClick: this.handleClickPrimary,
                        role: 'button',
                        title: l,
                      },
                      skipProps: {
                        'aria-label': c,
                        'data-action': 'skip',
                        onClick: this.handleClickSkip,
                        role: 'button',
                        title: c,
                      },
                      tooltipProps: { 'aria-modal': !0, ref: n, role: 'alertdialog' },
                    }
                  );
                });
            }
            render() {
              let {
                  continuous: e,
                  index: t,
                  isLastStep: n,
                  setTooltipRef: r,
                  size: o,
                  step: i,
                } = this.props,
                { beaconComponent: a, tooltipComponent: s, ...c } = i,
                l;
              if (s) {
                const p = {
                  ...this.getElementsProps(),
                  continuous: e,
                  index: t,
                  isLastStep: n,
                  size: o,
                  step: c,
                  setTooltipRef: r,
                };
                l = q(s, { ...p });
              } else
                l = q(Ka, {
                  ...this.getElementsProps(),
                  continuous: e,
                  index: t,
                  isLastStep: n,
                  size: o,
                  step: i,
                });
              return l;
            }
          }),
          (Xa = class extends Le {
            constructor() {
              super(...arguments),
                _(this, 'scope', null),
                _(this, 'tooltip', null),
                _(this, 'handleClickHoverBeacon', (e) => {
                  const { step: t, store: n } = this.props;
                  (e.type === 'mouseenter' && t.event !== 'hover') ||
                    n.update({ lifecycle: k.TOOLTIP });
                }),
                _(this, 'setTooltipRef', (e) => {
                  this.tooltip = e;
                }),
                _(this, 'setPopper', (e, t) => {
                  var n;
                  const { action: r, lifecycle: o, step: i, store: a } = this.props;
                  t === 'wrapper' ? a.setPopper('beacon', e) : a.setPopper('tooltip', e),
                    a.getPopper('beacon') &&
                      a.getPopper('tooltip') &&
                      o === k.INIT &&
                      a.update({ action: r, lifecycle: k.READY }),
                    (n = i.floaterProps) != null && n.getPopper && i.floaterProps.getPopper(e, t);
                }),
                _(this, 'renderTooltip', (e) => {
                  const { continuous: t, helpers: n, index: r, size: o, step: i } = this.props;
                  return q(Ja, {
                    continuous: t,
                    helpers: n,
                    index: r,
                    isLastStep: r + 1 === o,
                    setTooltipRef: this.setTooltipRef,
                    size: o,
                    step: i,
                    ...e,
                  });
                });
            }
            componentDidMount() {
              const { debug: e, index: t } = this.props;
              Ae({ title: `step:${t}`, data: [{ key: 'props', value: this.props }], debug: e });
            }
            componentDidUpdate(e) {
              var t;
              const {
                  action: n,
                  callback: r,
                  continuous: o,
                  controlled: i,
                  debug: a,
                  helpers: s,
                  index: c,
                  lifecycle: l,
                  status: p,
                  step: u,
                  store: d,
                } = this.props,
                { changed: f, changedFrom: h } = Ot(e, this.props),
                b = s.info(),
                N = o && n !== $.CLOSE && (c > 0 || n === $.PREV),
                v = f('action') || f('index') || f('lifecycle') || f('status'),
                T = h('lifecycle', [k.TOOLTIP, k.INIT], k.INIT),
                m = f('action', [$.NEXT, $.PREV, $.SKIP, $.CLOSE]),
                g = i && c === e.index;
              if (
                (m &&
                  (T || g) &&
                  r({
                    ...b,
                    index: e.index,
                    lifecycle: k.COMPLETE,
                    step: e.step,
                    type: pe.STEP_AFTER,
                  }),
                u.placement === 'center' &&
                  p === j.RUNNING &&
                  f('index') &&
                  n !== $.START &&
                  l === k.INIT &&
                  d.update({ lifecycle: k.READY }),
                v)
              ) {
                const O = _e(u.target),
                  B = !!O;
                B && wa(O)
                  ? (h('status', j.READY, j.RUNNING) || h('lifecycle', k.INIT, k.READY)) &&
                    r({ ...b, step: u, type: pe.STEP_BEFORE })
                  : (console.warn(B ? 'Target not visible' : 'Target not mounted', u),
                    r({ ...b, type: pe.TARGET_NOT_FOUND, step: u }),
                    i || d.update({ index: c + (n === $.PREV ? -1 : 1) }));
              }
              h('lifecycle', k.INIT, k.READY) &&
                d.update({ lifecycle: pr(u) || N ? k.TOOLTIP : k.BEACON }),
                f('index') &&
                  Ae({ title: `step:${l}`, data: [{ key: 'props', value: this.props }], debug: a }),
                f('lifecycle', k.BEACON) && r({ ...b, step: u, type: pe.BEACON }),
                f('lifecycle', k.TOOLTIP) &&
                  (r({ ...b, step: u, type: pe.TOOLTIP }),
                  this.tooltip &&
                    ((this.scope = new za(this.tooltip, { selector: '[data-action=primary]' })),
                    this.scope.setFocus())),
                h('lifecycle', [k.TOOLTIP, k.INIT], k.INIT) &&
                  ((t = this.scope) == null || t.removeScope(), d.cleanupPoppers());
            }
            componentWillUnmount() {
              var e;
              (e = this.scope) == null || e.removeScope();
            }
            get open() {
              const { lifecycle: e, step: t } = this.props;
              return pr(t) || e === k.TOOLTIP;
            }
            render() {
              const {
                  continuous: e,
                  debug: t,
                  index: n,
                  nonce: r,
                  shouldScroll: o,
                  size: i,
                  step: a,
                } = this.props,
                s = _e(a.target);
              return !to(a) || !C.domElement(s)
                ? null
                : q(
                    'div',
                    { key: `JoyrideStep-${n}`, className: 'react-joyride__step' },
                    q(
                      tn,
                      {
                        ...a.floaterProps,
                        component: this.renderTooltip,
                        debug: t,
                        getPopper: this.setPopper,
                        id: `react-joyride-step-${n}`,
                        open: this.open,
                        placement: a.placement,
                        target: a.target,
                      },
                      q(Ya, {
                        beaconComponent: a.beaconComponent,
                        continuous: e,
                        index: n,
                        isLastStep: n + 1 === i,
                        locale: a.locale,
                        nonce: r,
                        onClickOrHover: this.handleClickHoverBeacon,
                        shouldFocus: o,
                        size: i,
                        step: a,
                        styles: a.styles,
                      }),
                    ),
                  );
            }
          }),
          (ro = class extends Le {
            constructor(e) {
              super(e),
                _(this, 'helpers'),
                _(this, 'store'),
                _(this, 'callback', (a) => {
                  const { callback: s } = this.props;
                  C.function(s) && s(a);
                }),
                _(this, 'handleKeyboard', (a) => {
                  const { index: s, lifecycle: c } = this.state,
                    { steps: l } = this.props,
                    p = l[s];
                  c === k.TOOLTIP &&
                    a.code === 'Escape' &&
                    p &&
                    !p.disableCloseOnEsc &&
                    this.store.close('keyboard');
                }),
                _(this, 'handleClickOverlay', () => {
                  const { index: a } = this.state,
                    { steps: s } = this.props;
                  Ue(this.props, s[a]).disableOverlayClose || this.helpers.close('overlay');
                }),
                _(this, 'syncState', (a) => {
                  this.setState(a);
                });
              const { debug: t, getHelpers: n, run: r, stepIndex: o } = e;
              (this.store = Ba({ ...e, controlled: r && C.number(o) })),
                (this.helpers = this.store.getHelpers());
              const { addListener: i } = this.store;
              Ae({
                title: 'init',
                data: [
                  { key: 'props', value: this.props },
                  { key: 'state', value: this.state },
                ],
                debug: t,
              }),
                i(this.syncState),
                n?.(this.helpers),
                (this.state = this.store.getState());
            }
            componentDidMount() {
              if (!Ce()) return;
              const { debug: e, disableCloseOnEsc: t, run: n, steps: r } = this.props,
                { start: o } = this.store;
              hr(r, e) && n && o(),
                t ||
                  document.body.addEventListener('keydown', this.handleKeyboard, { passive: !0 });
            }
            componentDidUpdate(e, t) {
              if (!Ce()) return;
              const { action: n, controlled: r, index: o, lifecycle: i, status: a } = this.state,
                { debug: s, run: c, stepIndex: l, steps: p } = this.props,
                { stepIndex: u, steps: d } = e,
                { reset: f, setSteps: h, start: b, stop: N, update: v } = this.store,
                { changed: T } = Ot(e, this.props),
                { changed: m, changedFrom: g } = Ot(t, this.state),
                O = Ue(this.props, p[o]),
                B = !oe(d, p),
                P = C.number(l) && T('stepIndex'),
                V = _e(O.target);
              if (
                (B && (hr(p, s) ? h(p) : console.warn('Steps are not valid', p)),
                T('run') && (c ? b(l) : N()),
                P)
              ) {
                let te = C.number(u) && u < l ? $.NEXT : $.PREV;
                n === $.STOP && (te = $.START),
                  [j.FINISHED, j.SKIPPED].includes(a) ||
                    v({ action: n === $.CLOSE ? $.CLOSE : te, index: l, lifecycle: k.INIT });
              }
              !r &&
                a === j.RUNNING &&
                o === 0 &&
                !V &&
                (this.store.update({ index: o + 1 }),
                this.callback({ ...this.state, type: pe.TARGET_NOT_FOUND, step: O }));
              const H = { ...this.state, index: o, step: O };
              if (m('action', [$.NEXT, $.PREV, $.SKIP, $.CLOSE]) && m('status', j.PAUSED)) {
                const te = Ue(this.props, p[t.index]);
                this.callback({
                  ...H,
                  index: t.index,
                  lifecycle: k.COMPLETE,
                  step: te,
                  type: pe.STEP_AFTER,
                });
              }
              if (m('status', [j.FINISHED, j.SKIPPED])) {
                const te = Ue(this.props, p[t.index]);
                r ||
                  this.callback({
                    ...H,
                    index: t.index,
                    lifecycle: k.COMPLETE,
                    step: te,
                    type: pe.STEP_AFTER,
                  }),
                  this.callback({ ...H, type: pe.TOUR_END, step: te, index: t.index }),
                  f();
              } else
                g('status', [j.IDLE, j.READY], j.RUNNING)
                  ? this.callback({ ...H, type: pe.TOUR_START })
                  : (m('status') || m('action', $.RESET)) &&
                    this.callback({ ...H, type: pe.TOUR_STATUS });
              this.scrollToStep(t),
                O.placement === 'center' &&
                  a === j.RUNNING &&
                  i === k.INIT &&
                  this.store.update({ lifecycle: k.READY });
            }
            componentWillUnmount() {
              const { disableCloseOnEsc: e } = this.props;
              e || document.body.removeEventListener('keydown', this.handleKeyboard);
            }
            scrollToStep(e) {
              const { index: t, lifecycle: n, status: r } = this.state,
                {
                  debug: o,
                  disableScrollParentFix: i = !1,
                  scrollDuration: a,
                  scrollOffset: s = 20,
                  scrollToFirstStep: c = !1,
                  steps: l,
                } = this.props,
                p = Ue(this.props, l[t]),
                u = _e(p.target),
                d = Aa({
                  isFirstStep: t === 0,
                  lifecycle: n,
                  previousLifecycle: e.lifecycle,
                  scrollToFirstStep: c,
                  step: p,
                  target: u,
                });
              if (r === j.RUNNING && d) {
                let f = dt(u, i),
                  h = _t(u, i),
                  b = Math.floor(Ia(u, s, i)) || 0;
                Ae({
                  title: 'scrollToStep',
                  data: [
                    { key: 'index', value: t },
                    { key: 'lifecycle', value: n },
                    { key: 'status', value: r },
                  ],
                  debug: o,
                });
                const N = this.store.getPopper('beacon'),
                  v = this.store.getPopper('tooltip');
                if (n === k.BEACON && N) {
                  const { offsets: T, placement: m } = N;
                  !['bottom'].includes(m) && !f && (b = Math.floor(T.popper.top - s));
                } else if (n === k.TOOLTIP && v) {
                  const { flipped: T, offsets: m, placement: g } = v;
                  ['top', 'right', 'left'].includes(g) && !T && !f
                    ? (b = Math.floor(m.popper.top - s))
                    : (b -= p.spotlightPadding);
                }
                (b = b >= 0 ? b : 0),
                  r === j.RUNNING &&
                    Ra(b, { element: h, duration: a }).then(() => {
                      setTimeout(() => {
                        var T;
                        (T = this.store.getPopper('tooltip')) == null || T.instance.update();
                      }, 10);
                    });
              }
            }
            render() {
              if (!Ce()) return null;
              const { index: e, lifecycle: t, status: n } = this.state,
                {
                  continuous: r = !1,
                  debug: o = !1,
                  nonce: i,
                  scrollToFirstStep: a = !1,
                  steps: s,
                } = this.props,
                c = n === j.RUNNING,
                l = {};
              if (c && s[e]) {
                const p = Ue(this.props, s[e]);
                (l.step = q(Xa, {
                  ...this.state,
                  callback: this.callback,
                  continuous: r,
                  debug: o,
                  helpers: this.helpers,
                  nonce: i,
                  shouldScroll: !p.disableScrolling && (e !== 0 || a),
                  step: p,
                  store: this.store,
                })),
                  (l.overlay = q(
                    Ga,
                    { id: 'react-joyride-portal' },
                    q(Ha, {
                      ...p,
                      continuous: r,
                      debug: o,
                      lifecycle: t,
                      onClickOverlay: this.handleClickOverlay,
                    }),
                  ));
              }
              return q('div', { className: 'react-joyride' }, l.step, l.overlay);
            }
          });
        _(ro, 'defaultProps', La);
        (Qa = ro),
          (Za = ee.button`
  all: unset;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  background: ${({ theme: e, variant: t }) => (t === 'primary' ? e.color.secondary : t === 'secondary' ? e.color.lighter : t === 'outline' ? 'transparent' : t === 'white' ? e.color.lightest : e.color.secondary)};
  color: ${({ theme: e, variant: t }) => (t === 'primary' ? e.color.lightest : t === 'secondary' || t === 'outline' ? e.darkest : t === 'white' ? e.color.secondary : e.color.lightest)};
  box-shadow: ${({ variant: e }) => (e === 'secondary' || e === 'outline' ? '#D9E8F2 0 0 0 1px inset' : 'none')};
  height: 32px;
  font-size: 0.8125rem;
  font-weight: 700;
  font-family: ${({ theme: e }) => e.typography.fonts.base};
  transition: background-color, box-shadow, color, opacity;
  transition-duration: 0.16s;
  transition-timing-function: ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme: e, variant: t }) => (t === 'primary' ? '#0b94eb' : t === 'secondary' ? '#eef4f9' : t === 'outline' ? 'transparent' : t === 'white' ? e.color.lightest : '#0b94eb')};
    color: ${({ theme: e, variant: t }) => (t === 'primary' ? e.color.lightest : t === 'secondary' || t === 'outline' ? e.darkest : t === 'white' ? e.color.darkest : e.color.lightest)};
  }

  &:focus {
    box-shadow: ${({ variant: e }) => (e === 'primary' ? 'inset 0 0 0 1px rgba(0, 0, 0, 0.2)' : e === 'secondary' || e === 'outline' ? 'inset 0 0 0 1px #0b94eb' : e === 'white' ? 'none' : 'inset 0 0 0 2px rgba(0, 0, 0, 0.1)')};
  }
`),
          (es = on(({ children: e, onClick: t, variant: n = 'primary', ...r }, o) =>
            y.createElement(Za, { ref: o, onClick: t, variant: n, ...r }, e),
          )),
          (ts = ee.div`
  padding: 15px;
  border-radius: 5px;
`),
          (ns = ee.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`),
          (rs = ee.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  margin: -5px -5px 5px 0;
`),
          (os = ee.div`
  line-height: 18px;
  font-weight: 700;
  font-size: 14px;
  margin: 5px 5px 5px 0;
`),
          (is = ee.p`
  font-size: 14px;
  line-height: 18px;
  text-align: start;
  text-wrap: balance;
  margin: 0;
  margin-top: 5px;
`),
          (as = ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`),
          (ss = ee.span`
  font-size: 13px;
`),
          (ls = ({
            index: e,
            size: t,
            step: n,
            closeProps: r,
            primaryProps: o,
            tooltipProps: i,
          }) => (
            ae(() => {
              const a = document.createElement('style');
              return (
                (a.id = '#sb-onboarding-arrow-style'),
                (a.innerHTML = `
      .__floater__arrow { container-type: size; }
      .__floater__arrow span { background: ${gt.secondary}; }
      .__floater__arrow span::before, .__floater__arrow span::after {
        content: '';
        display: block;
        width: 2px;
        height: 2px;
        background: ${gt.secondary};
        box-shadow: 0 0 0 2px ${gt.secondary};
        border-radius: 3px;
        flex: 0 0 2px;
      }
      @container (min-height: 1px) {
        .__floater__arrow span { flex-direction: column; }
      }
    `),
                document.head.appendChild(a),
                () => {
                  const s = document.querySelector('#sb-onboarding-arrow-style');
                  s?.remove();
                }
              );
            }, []),
            y.createElement(
              ts,
              { ...i, style: n.styles?.tooltip },
              y.createElement(
                ns,
                null,
                y.createElement(
                  rs,
                  null,
                  n.title && y.createElement(os, null, n.title),
                  y.createElement(
                    hn,
                    { ...r, onClick: r.onClick, variant: 'solid' },
                    y.createElement(Sn, null),
                  ),
                ),
                y.createElement(is, null, n.content),
              ),
              y.createElement(
                as,
                { id: 'buttonNext' },
                y.createElement(ss, null, e + 1, ' of ', t),
                !n.hideNextButton &&
                  y.createElement(
                    es,
                    { ...o, onClick: n.onNextButtonClick || o.onClick, variant: 'white' },
                    e + 1 === t ? 'Done' : 'Next',
                  ),
              ),
            )
          ));
        (us = Xe({ from: { opacity: 0 }, to: { opacity: 1 } })),
          (oo = Xe({
            from: { transform: 'translate(0, 20px)', opacity: 0 },
            to: { transform: 'translate(0, 0)', opacity: 1 },
          })),
          (ps = Xe({
            from: { opacity: 0, transform: 'scale(0.8)' },
            to: { opacity: 1, transform: 'scale(1)' },
          })),
          (ds = Xe({
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          })),
          (fs = ee.div(({ visible: e }) => ({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            opacity: e ? 1 : 0,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1e3,
            transition: 'opacity 1s 0.5s',
          }))),
          (hs = ee.div({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            animation: `${us} 2s`,
            background: `
    radial-gradient(90% 90%, #ff4785 0%, #db5698 30%, #1ea7fdcc 100%),
    radial-gradient(circle, #ff4785 0%, transparent 80%),
    radial-gradient(circle at 30% 40%, #fc521f99 0%, #fc521f66 20%, transparent 40%),
    radial-gradient(circle at 75% 75%, #fc521f99 0%, #fc521f77 18%, transparent 30%)`,
            '&::before': {
              opacity: 0.5,
              background: `
      radial-gradient(circle at 30% 40%, #fc521f99 0%, #fc521f66 10%, transparent 20%),
      radial-gradient(circle at 75% 75%, #fc521f99 0%, #fc521f77 8%, transparent 20%)`,
              content: '""',
              position: 'absolute',
              top: '-50vw',
              left: '-50vh',
              transform: 'translate(-50%, -50%)',
              width: 'calc(100vw + 100vh)',
              height: 'calc(100vw + 100vh)',
              animation: `${ds} 12s linear infinite`,
            },
          })),
          (ms = ee.div(({ visible: e }) => ({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            width: '90vw',
            minWidth: 290,
            maxWidth: 410,
            opacity: e ? 1 : 0,
            transition: 'opacity 0.5s',
            h1: { fontSize: 45, fontWeight: 'bold', animation: `${oo} 1.5s 1s backwards` },
          }))),
          (ys = ee.div({
            display: 'flex',
            marginTop: 40,
            div: {
              display: 'flex',
              flexBasis: '33.33%',
              flexDirection: 'column',
              alignItems: 'center',
              animation: `${oo} 1s backwards`,
              '&:nth-child(1)': { animationDelay: '2s' },
              '&:nth-child(2)': { animationDelay: '2.5s' },
              '&:nth-child(3)': { animationDelay: '3s' },
            },
            svg: { marginBottom: 10 },
          })),
          (gs = ee.button({
            display: 'inline-flex',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            width: 48,
            height: 48,
            padding: 0,
            borderRadius: '50%',
            border: 0,
            outline: 'none',
            background: 'rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
            transition: 'background 0.2s',
            animation: `${ps} 1.5s 4s backwards`,
            '&:hover, &:focus': { background: 'rgba(255, 255, 255, 0.4)' },
          })),
          (bs = ee(En)({ width: 30, color: 'white' })),
          (yr = ee.svg(({ progress: e }) => ({
            position: 'absolute',
            top: -1,
            left: -1,
            width: '50px!important',
            height: '50px!important',
            transform: 'rotate(-90deg)',
            color: 'white',
            circle: {
              r: '24',
              cx: '25',
              cy: '25',
              fill: 'transparent',
              stroke: e ? 'currentColor' : 'transparent',
              strokeWidth: '1',
              strokeLinecap: 'round',
              strokeDasharray: Math.PI * 48,
            },
          }))),
          (vs = ({ onDismiss: e, duration: t = 6e3 }) => {
            const [n, r] = ue(-4e5 / t),
              [o, i] = ue(!0),
              a = n >= 100,
              s = Je(() => {
                i(!1);
                const c = setTimeout(e, 1500);
                return () => clearTimeout(c);
              }, [e]);
            return (
              ae(() => {
                if (!t) return;
                const c = 1e3 / 50,
                  l = 100 / (t / c),
                  p = setInterval(() => r((u) => u + l), c);
                return () => clearInterval(p);
              }, [t]),
              ae(() => {
                a && s();
              }, [a, s]),
              y.createElement(
                fs,
                { visible: o },
                y.createElement(hs, null),
                y.createElement(
                  ms,
                  { visible: o },
                  y.createElement('h1', null, 'Meet your new frontend workshop'),
                  y.createElement(
                    ys,
                    null,
                    y.createElement(
                      'div',
                      null,
                      y.createElement(
                        'svg',
                        { xmlns: 'http://www.w3.org/2000/svg', width: '33', height: '32' },
                        y.createElement('path', {
                          d: 'M4.06 0H32.5v28.44h-3.56V32H.5V3.56h3.56V0Zm21.33 7.11H4.06v21.33h21.33V7.11Z',
                          fill: 'currentColor',
                        }),
                      ),
                      'Development',
                    ),
                    y.createElement(
                      'div',
                      null,
                      y.createElement(
                        'svg',
                        { xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32' },
                        y.createElement('path', {
                          d: 'M15.95 32c-1.85 0-3.1-1.55-3.1-3.54 0-1.1.45-2.78 1.35-5.03.9-2.3 1.35-4.51 1.35-6.81a22.21 22.21 0 0 0-5.1 3.67c-2.5 2.47-4.95 4.9-7.55 4.9-1.6 0-2.9-1.1-2.9-2.43 0-1.46 1.35-2.91 4.3-3.62 1.45-.36 3.1-.75 4.95-1.06 1.8-.31 3.8-1.02 5.9-2.08a23.77 23.77 0 0 0-6.1-2.12C5.3 13.18 2.3 12.6 1 11.28.35 10.6 0 9.9 0 9.14 0 7.82 1.2 6.8 2.95 6.8c2.65 0 5.75 3.1 7.95 5.3 1.1 1.1 2.65 2.21 4.65 3.27v-.57c0-1.77-.15-3.23-.55-4.3-.8-2.11-2.05-5.43-2.05-6.97 0-2.04 1.3-3.54 3.1-3.54 1.75 0 3.1 1.41 3.1 3.54 0 1.06-.45 2.78-1.35 5.12-.9 2.35-1.35 4.6-1.35 6.72 2.85-1.59 2.5-1.41 4.95-3.5 2.35-2.29 4-3.7 4.9-4.23.95-.58 1.9-.84 2.9-.84 1.6 0 2.8.97 2.8 2.34 0 1.5-1.25 2.78-4.15 3.62-1.4.4-3.05.75-4.9 1.1-1.9.36-3.9 1.07-6.1 2.13a23.3 23.3 0 0 0 5.95 2.08c3.65.7 6.75 1.32 8.15 2.6.7.67 1.05 1.33 1.05 2.08 0 1.33-1.2 2.43-2.95 2.43-2.95 0-6.75-4.15-8.2-5.61-.7-.7-2.2-1.72-4.4-2.96v.57c0 1.9.45 4.03 1.3 6.32.85 2.3 1.3 3.94 1.3 4.95 0 2.08-1.35 3.54-3.1 3.54Z',
                          fill: 'currentColor',
                        }),
                      ),
                      'Testing',
                    ),
                    y.createElement(
                      'div',
                      null,
                      y.createElement(
                        'svg',
                        { xmlns: 'http://www.w3.org/2000/svg', width: '33', height: '32' },
                        y.createElement('path', {
                          d: 'M.5 16a16 16 0 1 1 32 0 16 16 0 0 1-32 0Zm16 12.44A12.44 12.44 0 0 1 4.3 13.53a8 8 0 1 0 9.73-9.73 12.44 12.44 0 1 1 2.47 24.64ZM12.06 16a4.44 4.44 0 1 1 0-8.89 4.44 4.44 0 0 1 0 8.89Z',
                          fill: 'currentColor',
                          fillRule: 'evenodd',
                        }),
                      ),
                      'Documentation',
                    ),
                  ),
                  y.createElement(
                    gs,
                    { onClick: s },
                    y.createElement(bs, null),
                    y.createElement(
                      yr,
                      { xmlns: 'http://www.w3.org/2000/svg' },
                      y.createElement('circle', null),
                    ),
                    y.createElement(
                      yr,
                      { xmlns: 'http://www.w3.org/2000/svg', progress: !0 },
                      y.createElement('circle', {
                        strokeDashoffset: Math.PI * 48 * (1 - Math.max(0, Math.min(n, 100)) / 100),
                      }),
                    ),
                  ),
                ),
              )
            );
          }),
          (Es = ee.span(({ theme: e }) => ({
            display: 'inline-flex',
            borderRadius: 3,
            padding: '0 5px',
            marginBottom: -2,
            opacity: 0.8,
            fontFamily: e.typography.fonts.mono,
            fontSize: 11,
            border: e.base === 'dark' ? e.color.darkest : e.color.lightest,
            color: e.base === 'dark' ? e.color.lightest : e.color.darkest,
            backgroundColor: e.base === 'dark' ? 'black' : e.color.light,
            boxSizing: 'border-box',
            lineHeight: '17px',
          }))),
          (Ss = ee.div(({ theme: e }) => ({
            background: e.background.content,
            borderRadius: 3,
            marginTop: 15,
            padding: 10,
            fontSize: e.typography.size.s1,
            '.linenumber': { opacity: 0.5 },
          }))),
          (Os = Lt());
      });
    X();
    Q();
    Z();
    X();
    Q();
    Z();
    ht();
    yt();
    Nt();
    X();
    Q();
    Z();
    var _jc = __STORYBOOK_API__,
      {
        ActiveTabs: Dc,
        Consumer: Fc,
        ManagerContext: Bc,
        Provider: Wc,
        RequestResponseError: Uc,
        addons: fn,
        combineParameters: Hc,
        controlOrMetaKey: Gc,
        controlOrMetaSymbol: zc,
        eventMatchesShortcut: Yc,
        eventToShortcut: qc,
        experimental_requestResponse: $c,
        isMacLike: Vc,
        isShortcutTaken: Kc,
        keyToSymbol: Jc,
        merge: Xc,
        mockChannel: Qc,
        optionOrAltSymbol: Zc,
        shortcutMatchesShortcut: eu,
        shortcutToHumanString: tu,
        types: nu,
        useAddonState: ru,
        useArgTypes: ou,
        useArgs: iu,
        useChannel: au,
        useGlobalTypes: su,
        useGlobals: lu,
        useParameter: cu,
        useSharedState: uu,
        useStoryPrepared: pu,
        useStorybookApi: du,
        useStorybookState: fu,
      } = __STORYBOOK_API__;
    var Ts = sn(() => Promise.resolve().then(() => (ao(), io)));
    fn.register('@storybook/addon-onboarding', async (e) => {
      const t = e.getUrlState(),
        n = t.path === '/onboarding' || t.queryParams.onboarding === 'true';
      e.once(pn, () => {
        if (
          !(
            e.getData('example-button--primary') ||
            document.getElementById('example-button--primary')
          )
        ) {
          console.warn(
            '[@storybook/addon-onboarding] It seems like you have finished the onboarding experience in Storybook! Therefore this addon is not necessary anymore and will not be loaded. You are free to remove it from your project. More info: https://github.com/storybookjs/storybook/tree/next/code/addons/onboarding#uninstalling',
          );
          return;
        }
        if (!n || window.innerWidth < 730) return;
        e.togglePanel(!0), e.togglePanelPosition('bottom'), e.setSelectedPanel('addon-controls');
        const r = document.createElement('div');
        (r.id = 'storybook-addon-onboarding'),
          document.body.appendChild(r),
          Me.render(
            y.createElement(
              rn,
              { fallback: y.createElement('div', null) },
              y.createElement(Ts, { api: e }),
            ),
            r,
          );
      });
    });
  })();
} catch (e) {
  console.error(`[Storybook] One of your manager-entries failed: ${import.meta.url}`, e);
}
