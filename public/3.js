(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-helper-vue-jsx-merge-props/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-helper-vue-jsx-merge-props/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),

/***/ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js ***!
  \*********************************************************************/
/*! exports provided: ActivityIcon, AirplayIcon, AlertCircleIcon, AlertOctagonIcon, AlertTriangleIcon, AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon, AnchorIcon, ApertureIcon, ArchiveIcon, ArrowDownCircleIcon, ArrowDownLeftIcon, ArrowDownRightIcon, ArrowDownIcon, ArrowLeftCircleIcon, ArrowLeftIcon, ArrowRightCircleIcon, ArrowRightIcon, ArrowUpCircleIcon, ArrowUpLeftIcon, ArrowUpRightIcon, ArrowUpIcon, AtSignIcon, AwardIcon, BarChart2Icon, BarChartIcon, BatteryChargingIcon, BatteryIcon, BellOffIcon, BellIcon, BluetoothIcon, BoldIcon, BookOpenIcon, BookIcon, BookmarkIcon, BoxIcon, BriefcaseIcon, CalendarIcon, CameraOffIcon, CameraIcon, CastIcon, CheckCircleIcon, CheckSquareIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronsDownIcon, ChevronsLeftIcon, ChevronsRightIcon, ChevronsUpIcon, ChromeIcon, CircleIcon, ClipboardIcon, ClockIcon, CloudDrizzleIcon, CloudLightningIcon, CloudOffIcon, CloudRainIcon, CloudSnowIcon, CloudIcon, CodeIcon, CodepenIcon, CodesandboxIcon, CoffeeIcon, ColumnsIcon, CommandIcon, CompassIcon, CopyIcon, CornerDownLeftIcon, CornerDownRightIcon, CornerLeftDownIcon, CornerLeftUpIcon, CornerRightDownIcon, CornerRightUpIcon, CornerUpLeftIcon, CornerUpRightIcon, CpuIcon, CreditCardIcon, CropIcon, CrosshairIcon, DatabaseIcon, DeleteIcon, DiscIcon, DollarSignIcon, DownloadCloudIcon, DownloadIcon, DropletIcon, Edit2Icon, Edit3Icon, EditIcon, ExternalLinkIcon, EyeOffIcon, EyeIcon, FacebookIcon, FastForwardIcon, FeatherIcon, FigmaIcon, FileMinusIcon, FilePlusIcon, FileTextIcon, FileIcon, FilmIcon, FilterIcon, FlagIcon, FolderMinusIcon, FolderPlusIcon, FolderIcon, FramerIcon, FrownIcon, GiftIcon, GitBranchIcon, GitCommitIcon, GitMergeIcon, GitPullRequestIcon, GithubIcon, GitlabIcon, GlobeIcon, GridIcon, HardDriveIcon, HashIcon, HeadphonesIcon, HeartIcon, HelpCircleIcon, HexagonIcon, HomeIcon, ImageIcon, InboxIcon, InfoIcon, InstagramIcon, ItalicIcon, KeyIcon, LayersIcon, LayoutIcon, LifeBuoyIcon, Link2Icon, LinkIcon, LinkedinIcon, ListIcon, LoaderIcon, LockIcon, LogInIcon, LogOutIcon, MailIcon, MapPinIcon, MapIcon, Maximize2Icon, MaximizeIcon, MehIcon, MenuIcon, MessageCircleIcon, MessageSquareIcon, MicOffIcon, MicIcon, Minimize2Icon, MinimizeIcon, MinusCircleIcon, MinusSquareIcon, MinusIcon, MonitorIcon, MoonIcon, MoreHorizontalIcon, MoreVerticalIcon, MousePointerIcon, MoveIcon, MusicIcon, Navigation2Icon, NavigationIcon, OctagonIcon, PackageIcon, PaperclipIcon, PauseCircleIcon, PauseIcon, PenToolIcon, PercentIcon, PhoneCallIcon, PhoneForwardedIcon, PhoneIncomingIcon, PhoneMissedIcon, PhoneOffIcon, PhoneOutgoingIcon, PhoneIcon, PieChartIcon, PlayCircleIcon, PlayIcon, PlusCircleIcon, PlusSquareIcon, PlusIcon, PocketIcon, PowerIcon, PrinterIcon, RadioIcon, RefreshCcwIcon, RefreshCwIcon, RepeatIcon, RewindIcon, RotateCcwIcon, RotateCwIcon, RssIcon, SaveIcon, ScissorsIcon, SearchIcon, SendIcon, ServerIcon, SettingsIcon, Share2Icon, ShareIcon, ShieldOffIcon, ShieldIcon, ShoppingBagIcon, ShoppingCartIcon, ShuffleIcon, SidebarIcon, SkipBackIcon, SkipForwardIcon, SlackIcon, SlashIcon, SlidersIcon, SmartphoneIcon, SmileIcon, SpeakerIcon, SquareIcon, StarIcon, StopCircleIcon, SunIcon, SunriseIcon, SunsetIcon, TabletIcon, TagIcon, TargetIcon, TerminalIcon, ThermometerIcon, ThumbsDownIcon, ThumbsUpIcon, ToggleLeftIcon, ToggleRightIcon, Trash2Icon, TrashIcon, TrelloIcon, TrendingDownIcon, TrendingUpIcon, TriangleIcon, TruckIcon, TvIcon, TwitterIcon, TypeIcon, UmbrellaIcon, UnderlineIcon, UnlockIcon, UploadCloudIcon, UploadIcon, UserCheckIcon, UserMinusIcon, UserPlusIcon, UserXIcon, UserIcon, UsersIcon, VideoOffIcon, VideoIcon, VoicemailIcon, Volume1Icon, Volume2Icon, VolumeXIcon, VolumeIcon, WatchIcon, WifiOffIcon, WifiIcon, WindIcon, XCircleIcon, XOctagonIcon, XSquareIcon, XIcon, YoutubeIcon, ZapOffIcon, ZapIcon, ZoomInIcon, ZoomOutIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityIcon", function() { return ActivityIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirplayIcon", function() { return AirplayIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCircleIcon", function() { return AlertCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertOctagonIcon", function() { return AlertOctagonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertTriangleIcon", function() { return AlertTriangleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignCenterIcon", function() { return AlignCenterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignJustifyIcon", function() { return AlignJustifyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignLeftIcon", function() { return AlignLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignRightIcon", function() { return AlignRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorIcon", function() { return AnchorIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApertureIcon", function() { return ApertureIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveIcon", function() { return ArchiveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDownCircleIcon", function() { return ArrowDownCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDownLeftIcon", function() { return ArrowDownLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDownRightIcon", function() { return ArrowDownRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDownIcon", function() { return ArrowDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowLeftCircleIcon", function() { return ArrowLeftCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowLeftIcon", function() { return ArrowLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowRightCircleIcon", function() { return ArrowRightCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowRightIcon", function() { return ArrowRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUpCircleIcon", function() { return ArrowUpCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUpLeftIcon", function() { return ArrowUpLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUpRightIcon", function() { return ArrowUpRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUpIcon", function() { return ArrowUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtSignIcon", function() { return AtSignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardIcon", function() { return AwardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart2Icon", function() { return BarChart2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartIcon", function() { return BarChartIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteryChargingIcon", function() { return BatteryChargingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteryIcon", function() { return BatteryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BellOffIcon", function() { return BellOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BellIcon", function() { return BellIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothIcon", function() { return BluetoothIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoldIcon", function() { return BoldIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookOpenIcon", function() { return BookOpenIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookIcon", function() { return BookIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkIcon", function() { return BookmarkIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxIcon", function() { return BoxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BriefcaseIcon", function() { return BriefcaseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarIcon", function() { return CalendarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraOffIcon", function() { return CameraOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraIcon", function() { return CameraIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastIcon", function() { return CastIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckCircleIcon", function() { return CheckCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckSquareIcon", function() { return CheckSquareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckIcon", function() { return CheckIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronDownIcon", function() { return ChevronDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronLeftIcon", function() { return ChevronLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronRightIcon", function() { return ChevronRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronUpIcon", function() { return ChevronUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronsDownIcon", function() { return ChevronsDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronsLeftIcon", function() { return ChevronsLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronsRightIcon", function() { return ChevronsRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronsUpIcon", function() { return ChevronsUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeIcon", function() { return ChromeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleIcon", function() { return CircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardIcon", function() { return ClipboardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockIcon", function() { return ClockIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudDrizzleIcon", function() { return CloudDrizzleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudLightningIcon", function() { return CloudLightningIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudOffIcon", function() { return CloudOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudRainIcon", function() { return CloudRainIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudSnowIcon", function() { return CloudSnowIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudIcon", function() { return CloudIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeIcon", function() { return CodeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodepenIcon", function() { return CodepenIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodesandboxIcon", function() { return CodesandboxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoffeeIcon", function() { return CoffeeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnsIcon", function() { return ColumnsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandIcon", function() { return CommandIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompassIcon", function() { return CompassIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyIcon", function() { return CopyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerDownLeftIcon", function() { return CornerDownLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerDownRightIcon", function() { return CornerDownRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerLeftDownIcon", function() { return CornerLeftDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerLeftUpIcon", function() { return CornerLeftUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerRightDownIcon", function() { return CornerRightDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerRightUpIcon", function() { return CornerRightUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerUpLeftIcon", function() { return CornerUpLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerUpRightIcon", function() { return CornerUpRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpuIcon", function() { return CpuIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardIcon", function() { return CreditCardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropIcon", function() { return CropIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrosshairIcon", function() { return CrosshairIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseIcon", function() { return DatabaseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIcon", function() { return DeleteIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscIcon", function() { return DiscIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DollarSignIcon", function() { return DollarSignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCloudIcon", function() { return DownloadCloudIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadIcon", function() { return DownloadIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropletIcon", function() { return DropletIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit2Icon", function() { return Edit2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit3Icon", function() { return Edit3Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIcon", function() { return EditIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLinkIcon", function() { return ExternalLinkIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeOffIcon", function() { return EyeOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeIcon", function() { return EyeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookIcon", function() { return FacebookIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastForwardIcon", function() { return FastForwardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatherIcon", function() { return FeatherIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigmaIcon", function() { return FigmaIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileMinusIcon", function() { return FileMinusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePlusIcon", function() { return FilePlusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTextIcon", function() { return FileTextIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileIcon", function() { return FileIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmIcon", function() { return FilmIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterIcon", function() { return FilterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagIcon", function() { return FlagIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderMinusIcon", function() { return FolderMinusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPlusIcon", function() { return FolderPlusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderIcon", function() { return FolderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FramerIcon", function() { return FramerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrownIcon", function() { return FrownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftIcon", function() { return GiftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitBranchIcon", function() { return GitBranchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitCommitIcon", function() { return GitCommitIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitMergeIcon", function() { return GitMergeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitPullRequestIcon", function() { return GitPullRequestIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubIcon", function() { return GithubIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitlabIcon", function() { return GitlabIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobeIcon", function() { return GlobeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridIcon", function() { return GridIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardDriveIcon", function() { return HardDriveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashIcon", function() { return HashIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadphonesIcon", function() { return HeadphonesIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartIcon", function() { return HeartIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCircleIcon", function() { return HelpCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexagonIcon", function() { return HexagonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeIcon", function() { return HomeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageIcon", function() { return ImageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxIcon", function() { return InboxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoIcon", function() { return InfoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramIcon", function() { return InstagramIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItalicIcon", function() { return ItalicIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyIcon", function() { return KeyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayersIcon", function() { return LayersIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutIcon", function() { return LayoutIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeBuoyIcon", function() { return LifeBuoyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link2Icon", function() { return Link2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkIcon", function() { return LinkIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinIcon", function() { return LinkedinIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIcon", function() { return ListIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderIcon", function() { return LoaderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockIcon", function() { return LockIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInIcon", function() { return LogInIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOutIcon", function() { return LogOutIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailIcon", function() { return MailIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPinIcon", function() { return MapPinIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapIcon", function() { return MapIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Maximize2Icon", function() { return Maximize2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaximizeIcon", function() { return MaximizeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MehIcon", function() { return MehIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuIcon", function() { return MenuIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCircleIcon", function() { return MessageCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSquareIcon", function() { return MessageSquareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicOffIcon", function() { return MicOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicIcon", function() { return MicIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minimize2Icon", function() { return Minimize2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimizeIcon", function() { return MinimizeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinusCircleIcon", function() { return MinusCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinusSquareIcon", function() { return MinusSquareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinusIcon", function() { return MinusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorIcon", function() { return MonitorIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoonIcon", function() { return MoonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreHorizontalIcon", function() { return MoreHorizontalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreVerticalIcon", function() { return MoreVerticalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MousePointerIcon", function() { return MousePointerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveIcon", function() { return MoveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicIcon", function() { return MusicIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation2Icon", function() { return Navigation2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationIcon", function() { return NavigationIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OctagonIcon", function() { return OctagonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageIcon", function() { return PackageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperclipIcon", function() { return PaperclipIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauseCircleIcon", function() { return PauseCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauseIcon", function() { return PauseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenToolIcon", function() { return PenToolIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentIcon", function() { return PercentIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneCallIcon", function() { return PhoneCallIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneForwardedIcon", function() { return PhoneForwardedIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneIncomingIcon", function() { return PhoneIncomingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneMissedIcon", function() { return PhoneMissedIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneOffIcon", function() { return PhoneOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneOutgoingIcon", function() { return PhoneOutgoingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneIcon", function() { return PhoneIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartIcon", function() { return PieChartIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayCircleIcon", function() { return PlayCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayIcon", function() { return PlayIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusCircleIcon", function() { return PlusCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusSquareIcon", function() { return PlusSquareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusIcon", function() { return PlusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocketIcon", function() { return PocketIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerIcon", function() { return PowerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinterIcon", function() { return PrinterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioIcon", function() { return RadioIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshCcwIcon", function() { return RefreshCcwIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshCwIcon", function() { return RefreshCwIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatIcon", function() { return RepeatIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewindIcon", function() { return RewindIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateCcwIcon", function() { return RotateCcwIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateCwIcon", function() { return RotateCwIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssIcon", function() { return RssIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveIcon", function() { return SaveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScissorsIcon", function() { return ScissorsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return SearchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendIcon", function() { return SendIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerIcon", function() { return ServerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsIcon", function() { return SettingsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Share2Icon", function() { return Share2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareIcon", function() { return ShareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShieldOffIcon", function() { return ShieldOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShieldIcon", function() { return ShieldIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBagIcon", function() { return ShoppingBagIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartIcon", function() { return ShoppingCartIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShuffleIcon", function() { return ShuffleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarIcon", function() { return SidebarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipBackIcon", function() { return SkipBackIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipForwardIcon", function() { return SkipForwardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackIcon", function() { return SlackIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlashIcon", function() { return SlashIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidersIcon", function() { return SlidersIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartphoneIcon", function() { return SmartphoneIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmileIcon", function() { return SmileIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerIcon", function() { return SpeakerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareIcon", function() { return SquareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarIcon", function() { return StarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopCircleIcon", function() { return StopCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunIcon", function() { return SunIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunriseIcon", function() { return SunriseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunsetIcon", function() { return SunsetIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabletIcon", function() { return TabletIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagIcon", function() { return TagIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetIcon", function() { return TargetIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalIcon", function() { return TerminalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThermometerIcon", function() { return ThermometerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbsDownIcon", function() { return ThumbsDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbsUpIcon", function() { return ThumbsUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleLeftIcon", function() { return ToggleLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleRightIcon", function() { return ToggleRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trash2Icon", function() { return Trash2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashIcon", function() { return TrashIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrelloIcon", function() { return TrelloIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingDownIcon", function() { return TrendingDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingUpIcon", function() { return TrendingUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleIcon", function() { return TriangleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckIcon", function() { return TruckIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvIcon", function() { return TvIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterIcon", function() { return TwitterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeIcon", function() { return TypeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmbrellaIcon", function() { return UmbrellaIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderlineIcon", function() { return UnderlineIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnlockIcon", function() { return UnlockIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadCloudIcon", function() { return UploadCloudIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadIcon", function() { return UploadIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCheckIcon", function() { return UserCheckIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMinusIcon", function() { return UserMinusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPlusIcon", function() { return UserPlusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserXIcon", function() { return UserXIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIcon", function() { return UserIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersIcon", function() { return UsersIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoOffIcon", function() { return VideoOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoIcon", function() { return VideoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoicemailIcon", function() { return VoicemailIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Volume1Icon", function() { return Volume1Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Volume2Icon", function() { return Volume2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeXIcon", function() { return VolumeXIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeIcon", function() { return VolumeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchIcon", function() { return WatchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiOffIcon", function() { return WifiOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiIcon", function() { return WifiIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindIcon", function() { return WindIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XCircleIcon", function() { return XCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XOctagonIcon", function() { return XOctagonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSquareIcon", function() { return XSquareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XIcon", function() { return XIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeIcon", function() { return YoutubeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZapOffIcon", function() { return ZapOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZapIcon", function() { return ZapIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomInIcon", function() { return ZoomInIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomOutIcon", function() { return ZoomOutIcon; });
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js");
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);


var ActivityIcon = {
  name: 'ActivityIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-activity"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "22 12 18 12 15 21 9 3 6 12 2 12"
      }
    })]);
  }
};

var AirplayIcon = {
  name: 'AirplayIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-airplay"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
      }
    }), h("polygon", {
      attrs: {
        points: "12 15 17 21 7 21 12 15"
      }
    })]);
  }
};

var AlertCircleIcon = {
  name: 'AlertCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-alert-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "16"
      }
    })]);
  }
};

var AlertOctagonIcon = {
  name: 'AlertOctagonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-alert-octagon"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "16"
      }
    })]);
  }
};

var AlertTriangleIcon = {
  name: 'AlertTriangleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-alert-triangle"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "13"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "17",
        x2: "12",
        y2: "17"
      }
    })]);
  }
};

var AlignCenterIcon = {
  name: 'AlignCenterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-align-center"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "18",
        y1: "10",
        x2: "6",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "18",
        x2: "6",
        y2: "18"
      }
    })]);
  }
};

var AlignJustifyIcon = {
  name: 'AlignJustifyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-align-justify"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "21",
        y1: "10",
        x2: "3",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    })]);
  }
};

var AlignLeftIcon = {
  name: 'AlignLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-align-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "17",
        y1: "10",
        x2: "3",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    })]);
  }
};

var AlignRightIcon = {
  name: 'AlignRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-align-right"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "21",
        y1: "10",
        x2: "7",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "18",
        x2: "7",
        y2: "18"
      }
    })]);
  }
};

var AnchorIcon = {
  name: 'AnchorIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-anchor"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "5",
        r: "3"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "8"
      }
    }), h("path", {
      attrs: {
        d: "M5 12H2a10 10 0 0 0 20 0h-3"
      }
    })]);
  }
};

var ApertureIcon = {
  name: 'ApertureIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-aperture"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "14.31",
        y1: "8",
        x2: "20.05",
        y2: "17.94"
      }
    }), h("line", {
      attrs: {
        x1: "9.69",
        y1: "8",
        x2: "21.17",
        y2: "8"
      }
    }), h("line", {
      attrs: {
        x1: "7.38",
        y1: "12",
        x2: "13.12",
        y2: "2.06"
      }
    }), h("line", {
      attrs: {
        x1: "9.69",
        y1: "16",
        x2: "3.95",
        y2: "6.06"
      }
    }), h("line", {
      attrs: {
        x1: "14.31",
        y1: "16",
        x2: "2.83",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "16.62",
        y1: "12",
        x2: "10.88",
        y2: "21.94"
      }
    })]);
  }
};

var ArchiveIcon = {
  name: 'ArchiveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-archive"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "21 8 21 21 3 21 3 8"
      }
    }), h("rect", {
      attrs: {
        x: "1",
        y: "3",
        width: "22",
        height: "5"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "12",
        x2: "14",
        y2: "12"
      }
    })]);
  }
};

var ArrowDownCircleIcon = {
  name: 'ArrowDownCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "8 12 12 16 16 12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "16"
      }
    })]);
  }
};

var ArrowDownLeftIcon = {
  name: 'ArrowDownLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "17",
        y1: "7",
        x2: "7",
        y2: "17"
      }
    }), h("polyline", {
      attrs: {
        points: "17 17 7 17 7 7"
      }
    })]);
  }
};

var ArrowDownRightIcon = {
  name: 'ArrowDownRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down-right"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "7",
        y1: "7",
        x2: "17",
        y2: "17"
      }
    }), h("polyline", {
      attrs: {
        points: "17 7 17 17 7 17"
      }
    })]);
  }
};

var ArrowDownIcon = {
  name: 'ArrowDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "5",
        x2: "12",
        y2: "19"
      }
    }), h("polyline", {
      attrs: {
        points: "19 12 12 19 5 12"
      }
    })]);
  }
};

var ArrowLeftCircleIcon = {
  name: 'ArrowLeftCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-left-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "12 8 8 12 12 16"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "12",
        x2: "8",
        y2: "12"
      }
    })]);
  }
};

var ArrowLeftIcon = {
  name: 'ArrowLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "19",
        y1: "12",
        x2: "5",
        y2: "12"
      }
    }), h("polyline", {
      attrs: {
        points: "12 19 5 12 12 5"
      }
    })]);
  }
};

var ArrowRightCircleIcon = {
  name: 'ArrowRightCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-right-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "12 16 16 12 12 8"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var ArrowRightIcon = {
  name: 'ArrowRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-right"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }
    }), h("polyline", {
      attrs: {
        points: "12 5 19 12 12 19"
      }
    })]);
  }
};

var ArrowUpCircleIcon = {
  name: 'ArrowUpCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "16 12 12 8 8 12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "8"
      }
    })]);
  }
};

var ArrowUpLeftIcon = {
  name: 'ArrowUpLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "17",
        y1: "17",
        x2: "7",
        y2: "7"
      }
    }), h("polyline", {
      attrs: {
        points: "7 17 7 7 17 7"
      }
    })]);
  }
};

var ArrowUpRightIcon = {
  name: 'ArrowUpRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up-right"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "7",
        y1: "17",
        x2: "17",
        y2: "7"
      }
    }), h("polyline", {
      attrs: {
        points: "7 7 17 7 17 17"
      }
    })]);
  }
};

var ArrowUpIcon = {
  name: 'ArrowUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "5"
      }
    }), h("polyline", {
      attrs: {
        points: "5 12 12 5 19 12"
      }
    })]);
  }
};

var AtSignIcon = {
  name: 'AtSignIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-at-sign"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "4"
      }
    }), h("path", {
      attrs: {
        d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
      }
    })]);
  }
};

var AwardIcon = {
  name: 'AwardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-award"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "8",
        r: "7"
      }
    }), h("polyline", {
      attrs: {
        points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
      }
    })]);
  }
};

var BarChart2Icon = {
  name: 'BarChart2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bar-chart-2"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "18",
        y1: "20",
        x2: "18",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "20",
        x2: "12",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "20",
        x2: "6",
        y2: "14"
      }
    })]);
  }
};

var BarChartIcon = {
  name: 'BarChartIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bar-chart"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "20",
        x2: "12",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "20",
        x2: "18",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "20",
        x2: "6",
        y2: "16"
      }
    })]);
  }
};

var BatteryChargingIcon = {
  name: 'BatteryChargingIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-battery-charging"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "13",
        x2: "23",
        y2: "11"
      }
    }), h("polyline", {
      attrs: {
        points: "11 6 7 12 13 12 9 18"
      }
    })]);
  }
};

var BatteryIcon = {
  name: 'BatteryIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-battery"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "6",
        width: "18",
        height: "12",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "13",
        x2: "23",
        y2: "11"
      }
    })]);
  }
};

var BellOffIcon = {
  name: 'BellOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bell-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.73 21a2 2 0 0 1-3.46 0"
      }
    }), h("path", {
      attrs: {
        d: "M18.63 13A17.89 17.89 0 0 1 18 8"
      }
    }), h("path", {
      attrs: {
        d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"
      }
    }), h("path", {
      attrs: {
        d: "M18 8a6 6 0 0 0-9.33-5"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var BellIcon = {
  name: 'BellIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bell"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
      }
    }), h("path", {
      attrs: {
        d: "M13.73 21a2 2 0 0 1-3.46 0"
      }
    })]);
  }
};

var BluetoothIcon = {
  name: 'BluetoothIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bluetooth"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
      }
    })]);
  }
};

var BoldIcon = {
  name: 'BoldIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bold"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
      }
    }), h("path", {
      attrs: {
        d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
      }
    })]);
  }
};

var BookOpenIcon = {
  name: 'BookOpenIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-book-open"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
      }
    }), h("path", {
      attrs: {
        d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
      }
    })]);
  }
};

var BookIcon = {
  name: 'BookIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-book"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
      }
    }), h("path", {
      attrs: {
        d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
      }
    })]);
  }
};

var BookmarkIcon = {
  name: 'BookmarkIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bookmark"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
      }
    })]);
  }
};

var BoxIcon = {
  name: 'BoxIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-box"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    }), h("polyline", {
      attrs: {
        points: "3.27 6.96 12 12.01 20.73 6.96"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22.08",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var BriefcaseIcon = {
  name: 'BriefcaseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-briefcase"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "7",
        width: "20",
        height: "14",
        rx: "2",
        ry: "2"
      }
    }), h("path", {
      attrs: {
        d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
      }
    })]);
  }
};

var CalendarIcon = {
  name: 'CalendarIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-calendar"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "4",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "2",
        x2: "16",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "2",
        x2: "8",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "10",
        x2: "21",
        y2: "10"
      }
    })]);
  }
};

var CameraOffIcon = {
  name: 'CameraOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-camera-off"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
      }
    })]);
  }
};

var CameraIcon = {
  name: 'CameraIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-camera"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "13",
        r: "4"
      }
    })]);
  }
};

var CastIcon = {
  name: 'CastIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cast"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "20",
        x2: "2",
        y2: "20"
      }
    })]);
  }
};

var CheckCircleIcon = {
  name: 'CheckCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-check-circle"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
      }
    }), h("polyline", {
      attrs: {
        points: "22 4 12 14.01 9 11.01"
      }
    })]);
  }
};

var CheckSquareIcon = {
  name: 'CheckSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-check-square"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "9 11 12 14 22 4"
      }
    }), h("path", {
      attrs: {
        d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
      }
    })]);
  }
};

var CheckIcon = {
  name: 'CheckIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-check"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "20 6 9 17 4 12"
      }
    })]);
  }
};

var ChevronDownIcon = {
  name: 'ChevronDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevron-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "6 9 12 15 18 9"
      }
    })]);
  }
};

var ChevronLeftIcon = {
  name: 'ChevronLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevron-left"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "15 18 9 12 15 6"
      }
    })]);
  }
};

var ChevronRightIcon = {
  name: 'ChevronRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevron-right"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "9 18 15 12 9 6"
      }
    })]);
  }
};

var ChevronUpIcon = {
  name: 'ChevronUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevron-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "18 15 12 9 6 15"
      }
    })]);
  }
};

var ChevronsDownIcon = {
  name: 'ChevronsDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevrons-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "7 13 12 18 17 13"
      }
    }), h("polyline", {
      attrs: {
        points: "7 6 12 11 17 6"
      }
    })]);
  }
};

var ChevronsLeftIcon = {
  name: 'ChevronsLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevrons-left"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "11 17 6 12 11 7"
      }
    }), h("polyline", {
      attrs: {
        points: "18 17 13 12 18 7"
      }
    })]);
  }
};

var ChevronsRightIcon = {
  name: 'ChevronsRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevrons-right"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "13 17 18 12 13 7"
      }
    }), h("polyline", {
      attrs: {
        points: "6 17 11 12 6 7"
      }
    })]);
  }
};

var ChevronsUpIcon = {
  name: 'ChevronsUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevrons-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "17 11 12 6 7 11"
      }
    }), h("polyline", {
      attrs: {
        points: "17 18 12 13 7 18"
      }
    })]);
  }
};

var ChromeIcon = {
  name: 'ChromeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chrome"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "21.17",
        y1: "8",
        x2: "12",
        y2: "8"
      }
    }), h("line", {
      attrs: {
        x1: "3.95",
        y1: "6.06",
        x2: "8.54",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "10.88",
        y1: "21.94",
        x2: "15.46",
        y2: "14"
      }
    })]);
  }
};

var CircleIcon = {
  name: 'CircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    })]);
  }
};

var ClipboardIcon = {
  name: 'ClipboardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-clipboard"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
      }
    }), h("rect", {
      attrs: {
        x: "8",
        y: "2",
        width: "8",
        height: "4",
        rx: "1",
        ry: "1"
      }
    })]);
  }
};

var ClockIcon = {
  name: 'ClockIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-clock"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "12 6 12 12 16 14"
      }
    })]);
  }
};

var CloudDrizzleIcon = {
  name: 'CloudDrizzleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-drizzle"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "8",
        y1: "19",
        x2: "8",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "13",
        x2: "8",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "19",
        x2: "16",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "13",
        x2: "16",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "17"
      }
    }), h("path", {
      attrs: {
        d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
      }
    })]);
  }
};

var CloudLightningIcon = {
  name: 'CloudLightningIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-lightning"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"
      }
    }), h("polyline", {
      attrs: {
        points: "13 11 9 17 15 17 11 23"
      }
    })]);
  }
};

var CloudOffIcon = {
  name: 'CloudOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var CloudRainIcon = {
  name: 'CloudRainIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-rain"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "16",
        y1: "13",
        x2: "16",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "13",
        x2: "8",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
      }
    })]);
  }
};

var CloudSnowIcon = {
  name: 'CloudSnowIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-snow"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "16",
        x2: "8",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "20",
        x2: "8",
        y2: "20"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "16",
        x2: "16",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "20",
        x2: "16",
        y2: "20"
      }
    })]);
  }
};

var CloudIcon = {
  name: 'CloudIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
      }
    })]);
  }
};

var CodeIcon = {
  name: 'CodeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-code"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "16 18 22 12 16 6"
      }
    }), h("polyline", {
      attrs: {
        points: "8 6 2 12 8 18"
      }
    })]);
  }
};

var CodepenIcon = {
  name: 'CodepenIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-codepen"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "15.5"
      }
    }), h("polyline", {
      attrs: {
        points: "22 8.5 12 15.5 2 8.5"
      }
    }), h("polyline", {
      attrs: {
        points: "2 15.5 12 8.5 22 15.5"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "8.5"
      }
    })]);
  }
};

var CodesandboxIcon = {
  name: 'CodesandboxIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-codesandbox"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    }), h("polyline", {
      attrs: {
        points: "7.5 4.21 12 6.81 16.5 4.21"
      }
    }), h("polyline", {
      attrs: {
        points: "7.5 19.79 7.5 14.6 3 12"
      }
    }), h("polyline", {
      attrs: {
        points: "21 12 16.5 14.6 16.5 19.79"
      }
    }), h("polyline", {
      attrs: {
        points: "3.27 6.96 12 12.01 20.73 6.96"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22.08",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var CoffeeIcon = {
  name: 'CoffeeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-coffee"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 8h1a4 4 0 0 1 0 8h-1"
      }
    }), h("path", {
      attrs: {
        d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "1",
        x2: "6",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "1",
        x2: "10",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "1",
        x2: "14",
        y2: "4"
      }
    })]);
  }
};

var ColumnsIcon = {
  name: 'ColumnsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-columns"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
      }
    })]);
  }
};

var CommandIcon = {
  name: 'CommandIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-command"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
      }
    })]);
  }
};

var CompassIcon = {
  name: 'CompassIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-compass"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polygon", {
      attrs: {
        points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
      }
    })]);
  }
};

var CopyIcon = {
  name: 'CopyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-copy"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "9",
        y: "9",
        width: "13",
        height: "13",
        rx: "2",
        ry: "2"
      }
    }), h("path", {
      attrs: {
        d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
      }
    })]);
  }
};

var CornerDownLeftIcon = {
  name: 'CornerDownLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-down-left"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "9 10 4 15 9 20"
      }
    }), h("path", {
      attrs: {
        d: "M20 4v7a4 4 0 0 1-4 4H4"
      }
    })]);
  }
};

var CornerDownRightIcon = {
  name: 'CornerDownRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-down-right"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "15 10 20 15 15 20"
      }
    }), h("path", {
      attrs: {
        d: "M4 4v7a4 4 0 0 0 4 4h12"
      }
    })]);
  }
};

var CornerLeftDownIcon = {
  name: 'CornerLeftDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-left-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "14 15 9 20 4 15"
      }
    }), h("path", {
      attrs: {
        d: "M20 4h-7a4 4 0 0 0-4 4v12"
      }
    })]);
  }
};

var CornerLeftUpIcon = {
  name: 'CornerLeftUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-left-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "14 9 9 4 4 9"
      }
    }), h("path", {
      attrs: {
        d: "M20 20h-7a4 4 0 0 1-4-4V4"
      }
    })]);
  }
};

var CornerRightDownIcon = {
  name: 'CornerRightDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-right-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "10 15 15 20 20 15"
      }
    }), h("path", {
      attrs: {
        d: "M4 4h7a4 4 0 0 1 4 4v12"
      }
    })]);
  }
};

var CornerRightUpIcon = {
  name: 'CornerRightUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-right-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "10 9 15 4 20 9"
      }
    }), h("path", {
      attrs: {
        d: "M4 20h7a4 4 0 0 0 4-4V4"
      }
    })]);
  }
};

var CornerUpLeftIcon = {
  name: 'CornerUpLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-up-left"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "9 14 4 9 9 4"
      }
    }), h("path", {
      attrs: {
        d: "M20 20v-7a4 4 0 0 0-4-4H4"
      }
    })]);
  }
};

var CornerUpRightIcon = {
  name: 'CornerUpRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-up-right"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "15 14 20 9 15 4"
      }
    }), h("path", {
      attrs: {
        d: "M4 20v-7a4 4 0 0 1 4-4h12"
      }
    })]);
  }
};

var CpuIcon = {
  name: 'CpuIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cpu"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "2",
        ry: "2"
      }
    }), h("rect", {
      attrs: {
        x: "9",
        y: "9",
        width: "6",
        height: "6"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "1",
        x2: "9",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "1",
        x2: "15",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "20",
        x2: "9",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "20",
        x2: "15",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "9",
        x2: "23",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "14",
        x2: "23",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "9",
        x2: "4",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "14",
        x2: "4",
        y2: "14"
      }
    })]);
  }
};

var CreditCardIcon = {
  name: 'CreditCardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-credit-card"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "4",
        width: "22",
        height: "16",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "10",
        x2: "23",
        y2: "10"
      }
    })]);
  }
};

var CropIcon = {
  name: 'CropIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-crop"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6.13 1L6 16a2 2 0 0 0 2 2h15"
      }
    }), h("path", {
      attrs: {
        d: "M1 6.13L16 6a2 2 0 0 1 2 2v15"
      }
    })]);
  }
};

var CrosshairIcon = {
  name: 'CrosshairIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-crosshair"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "22",
        y1: "12",
        x2: "18",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "12",
        x2: "2",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "6",
        x2: "12",
        y2: "2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "18"
      }
    })]);
  }
};

var DatabaseIcon = {
  name: 'DatabaseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-database"
    }, ctx.data]), [h("ellipse", {
      attrs: {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3"
      }
    }), h("path", {
      attrs: {
        d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
      }
    }), h("path", {
      attrs: {
        d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
      }
    })]);
  }
};

var DeleteIcon = {
  name: 'DeleteIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-delete"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "9",
        x2: "12",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "9",
        x2: "18",
        y2: "15"
      }
    })]);
  }
};

var DiscIcon = {
  name: 'DiscIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-disc"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "3"
      }
    })]);
  }
};

var DollarSignIcon = {
  name: 'DollarSignIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-dollar-sign"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "1",
        x2: "12",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
      }
    })]);
  }
};

var DownloadCloudIcon = {
  name: 'DownloadCloudIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-download-cloud"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "8 17 12 21 16 17"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "12",
        x2: "12",
        y2: "21"
      }
    }), h("path", {
      attrs: {
        d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"
      }
    })]);
  }
};

var DownloadIcon = {
  name: 'DownloadIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-download"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    }), h("polyline", {
      attrs: {
        points: "7 10 12 15 17 10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "3"
      }
    })]);
  }
};

var DropletIcon = {
  name: 'DropletIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-droplet"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
      }
    })]);
  }
};

var Edit2Icon = {
  name: 'Edit2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-edit-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
      }
    })]);
  }
};

var Edit3Icon = {
  name: 'Edit3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-edit-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 20h9"
      }
    }), h("path", {
      attrs: {
        d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
      }
    })]);
  }
};

var EditIcon = {
  name: 'EditIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-edit"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
      }
    }), h("path", {
      attrs: {
        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
      }
    })]);
  }
};

var ExternalLinkIcon = {
  name: 'ExternalLinkIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-external-link"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      }
    }), h("polyline", {
      attrs: {
        points: "15 3 21 3 21 9"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
      }
    })]);
  }
};

var EyeOffIcon = {
  name: 'EyeOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-eye-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var EyeIcon = {
  name: 'EyeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-eye"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "3"
      }
    })]);
  }
};

var FacebookIcon = {
  name: 'FacebookIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-facebook"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      }
    })]);
  }
};

var FastForwardIcon = {
  name: 'FastForwardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-fast-forward"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "13 19 22 12 13 5 13 19"
      }
    }), h("polygon", {
      attrs: {
        points: "2 19 11 12 2 5 2 19"
      }
    })]);
  }
};

var FeatherIcon = {
  name: 'FeatherIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-feather"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "8",
        x2: "2",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "17.5",
        y1: "15",
        x2: "9",
        y2: "15"
      }
    })]);
  }
};

var FigmaIcon = {
  name: 'FigmaIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-figma"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
      }
    }), h("path", {
      attrs: {
        d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
      }
    }), h("path", {
      attrs: {
        d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
      }
    }), h("path", {
      attrs: {
        d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
      }
    }), h("path", {
      attrs: {
        d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
      }
    })]);
  }
};

var FileMinusIcon = {
  name: 'FileMinusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-file-minus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      }
    }), h("polyline", {
      attrs: {
        points: "14 2 14 8 20 8"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "15",
        x2: "15",
        y2: "15"
      }
    })]);
  }
};

var FilePlusIcon = {
  name: 'FilePlusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-file-plus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      }
    }), h("polyline", {
      attrs: {
        points: "14 2 14 8 20 8"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "15",
        x2: "15",
        y2: "15"
      }
    })]);
  }
};

var FileTextIcon = {
  name: 'FileTextIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-file-text"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      }
    }), h("polyline", {
      attrs: {
        points: "14 2 14 8 20 8"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "13",
        x2: "8",
        y2: "13"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "17",
        x2: "8",
        y2: "17"
      }
    }), h("polyline", {
      attrs: {
        points: "10 9 9 9 8 9"
      }
    })]);
  }
};

var FileIcon = {
  name: 'FileIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-file"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
      }
    }), h("polyline", {
      attrs: {
        points: "13 2 13 9 20 9"
      }
    })]);
  }
};

var FilmIcon = {
  name: 'FilmIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-film"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "2",
        width: "20",
        height: "20",
        rx: "2.18",
        ry: "2.18"
      }
    }), h("line", {
      attrs: {
        x1: "7",
        y1: "2",
        x2: "7",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "2",
        x2: "17",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "7",
        x2: "7",
        y2: "7"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "17",
        x2: "7",
        y2: "17"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "17",
        x2: "22",
        y2: "17"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "7",
        x2: "22",
        y2: "7"
      }
    })]);
  }
};

var FilterIcon = {
  name: 'FilterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-filter"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
      }
    })]);
  }
};

var FlagIcon = {
  name: 'FlagIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-flag"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "22",
        x2: "4",
        y2: "15"
      }
    })]);
  }
};

var FolderMinusIcon = {
  name: 'FolderMinusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-folder-minus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "14",
        x2: "15",
        y2: "14"
      }
    })]);
  }
};

var FolderPlusIcon = {
  name: 'FolderPlusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-folder-plus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "11",
        x2: "12",
        y2: "17"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "14",
        x2: "15",
        y2: "14"
      }
    })]);
  }
};

var FolderIcon = {
  name: 'FolderIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-folder"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      }
    })]);
  }
};

var FramerIcon = {
  name: 'FramerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-framer"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"
      }
    })]);
  }
};

var FrownIcon = {
  name: 'FrownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-frown"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("path", {
      attrs: {
        d: "M16 16s-1.5-2-4-2-4 2-4 2"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "9.01",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "15.01",
        y2: "9"
      }
    })]);
  }
};

var GiftIcon = {
  name: 'GiftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-gift"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "20 12 20 22 4 22 4 12"
      }
    }), h("rect", {
      attrs: {
        x: "2",
        y: "7",
        width: "20",
        height: "5"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "7"
      }
    }), h("path", {
      attrs: {
        d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
      }
    }), h("path", {
      attrs: {
        d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
      }
    })]);
  }
};

var GitBranchIcon = {
  name: 'GitBranchIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-git-branch"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "6",
        y1: "3",
        x2: "6",
        y2: "15"
      }
    }), h("circle", {
      attrs: {
        cx: "18",
        cy: "6",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "18",
        r: "3"
      }
    }), h("path", {
      attrs: {
        d: "M18 9a9 9 0 0 1-9 9"
      }
    })]);
  }
};

var GitCommitIcon = {
  name: 'GitCommitIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-git-commit"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "1.05",
        y1: "12",
        x2: "7",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "17.01",
        y1: "12",
        x2: "22.96",
        y2: "12"
      }
    })]);
  }
};

var GitMergeIcon = {
  name: 'GitMergeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-git-merge"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "18",
        cy: "18",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "6",
        r: "3"
      }
    }), h("path", {
      attrs: {
        d: "M6 21V9a9 9 0 0 0 9 9"
      }
    })]);
  }
};

var GitPullRequestIcon = {
  name: 'GitPullRequestIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-git-pull-request"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "18",
        cy: "18",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "6",
        r: "3"
      }
    }), h("path", {
      attrs: {
        d: "M13 6h3a2 2 0 0 1 2 2v7"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "9",
        x2: "6",
        y2: "21"
      }
    })]);
  }
};

var GithubIcon = {
  name: 'GithubIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-github"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      }
    })]);
  }
};

var GitlabIcon = {
  name: 'GitlabIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-gitlab"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
      }
    })]);
  }
};

var GlobeIcon = {
  name: 'GlobeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-globe"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }
    }), h("path", {
      attrs: {
        d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      }
    })]);
  }
};

var GridIcon = {
  name: 'GridIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-grid"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "7",
        height: "7"
      }
    }), h("rect", {
      attrs: {
        x: "14",
        y: "3",
        width: "7",
        height: "7"
      }
    }), h("rect", {
      attrs: {
        x: "14",
        y: "14",
        width: "7",
        height: "7"
      }
    }), h("rect", {
      attrs: {
        x: "3",
        y: "14",
        width: "7",
        height: "7"
      }
    })]);
  }
};

var HardDriveIcon = {
  name: 'HardDriveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hard-drive"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "22",
        y1: "12",
        x2: "2",
        y2: "12"
      }
    }), h("path", {
      attrs: {
        d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "16",
        x2: "6",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "16",
        x2: "10",
        y2: "16"
      }
    })]);
  }
};

var HashIcon = {
  name: 'HashIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hash"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "4",
        y1: "9",
        x2: "20",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "15",
        x2: "20",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "3",
        x2: "8",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "3",
        x2: "14",
        y2: "21"
      }
    })]);
  }
};

var HeadphonesIcon = {
  name: 'HeadphonesIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-headphones"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M3 18v-6a9 9 0 0 1 18 0v6"
      }
    }), h("path", {
      attrs: {
        d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
      }
    })]);
  }
};

var HeartIcon = {
  name: 'HeartIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-heart"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      }
    })]);
  }
};

var HelpCircleIcon = {
  name: 'HelpCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-help-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("path", {
      attrs: {
        d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "17",
        x2: "12",
        y2: "17"
      }
    })]);
  }
};

var HexagonIcon = {
  name: 'HexagonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hexagon"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    })]);
  }
};

var HomeIcon = {
  name: 'HomeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-home"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    }), h("polyline", {
      attrs: {
        points: "9 22 9 12 15 12 15 22"
      }
    })]);
  }
};

var ImageIcon = {
  name: 'ImageIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-image"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "8.5",
        r: "1.5"
      }
    }), h("polyline", {
      attrs: {
        points: "21 15 16 10 5 21"
      }
    })]);
  }
};

var InboxIcon = {
  name: 'InboxIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-inbox"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "22 12 16 12 14 15 10 15 8 12 2 12"
      }
    }), h("path", {
      attrs: {
        d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    })]);
  }
};

var InfoIcon = {
  name: 'InfoIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-info"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "8"
      }
    })]);
  }
};

var InstagramIcon = {
  name: 'InstagramIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-instagram"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "2",
        width: "20",
        height: "20",
        rx: "5",
        ry: "5"
      }
    }), h("path", {
      attrs: {
        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      }
    }), h("line", {
      attrs: {
        x1: "17.5",
        y1: "6.5",
        x2: "17.5",
        y2: "6.5"
      }
    })]);
  }
};

var ItalicIcon = {
  name: 'ItalicIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-italic"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "19",
        y1: "4",
        x2: "10",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "20",
        x2: "5",
        y2: "20"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "4",
        x2: "9",
        y2: "20"
      }
    })]);
  }
};

var KeyIcon = {
  name: 'KeyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-key"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
      }
    })]);
  }
};

var LayersIcon = {
  name: 'LayersIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-layers"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "12 2 2 7 12 12 22 7 12 2"
      }
    }), h("polyline", {
      attrs: {
        points: "2 17 12 22 22 17"
      }
    }), h("polyline", {
      attrs: {
        points: "2 12 12 17 22 12"
      }
    })]);
  }
};

var LayoutIcon = {
  name: 'LayoutIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-layout"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "9",
        x2: "21",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "21",
        x2: "9",
        y2: "9"
      }
    })]);
  }
};

var LifeBuoyIcon = {
  name: 'LifeBuoyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-life-buoy"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "4.93",
        x2: "9.17",
        y2: "9.17"
      }
    }), h("line", {
      attrs: {
        x1: "14.83",
        y1: "14.83",
        x2: "19.07",
        y2: "19.07"
      }
    }), h("line", {
      attrs: {
        x1: "14.83",
        y1: "9.17",
        x2: "19.07",
        y2: "4.93"
      }
    }), h("line", {
      attrs: {
        x1: "14.83",
        y1: "9.17",
        x2: "18.36",
        y2: "5.64"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "19.07",
        x2: "9.17",
        y2: "14.83"
      }
    })]);
  }
};

var Link2Icon = {
  name: 'Link2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-link-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var LinkIcon = {
  name: 'LinkIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-link"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      }
    }), h("path", {
      attrs: {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      }
    })]);
  }
};

var LinkedinIcon = {
  name: 'LinkedinIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-linkedin"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    }), h("rect", {
      attrs: {
        x: "2",
        y: "9",
        width: "4",
        height: "12"
      }
    }), h("circle", {
      attrs: {
        cx: "4",
        cy: "4",
        r: "2"
      }
    })]);
  }
};

var ListIcon = {
  name: 'ListIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-list"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "8",
        y1: "6",
        x2: "21",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "21",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "18",
        x2: "21",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "12",
        x2: "3",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    })]);
  }
};

var LoaderIcon = {
  name: 'LoaderIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-loader"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "4.93",
        x2: "7.76",
        y2: "7.76"
      }
    }), h("line", {
      attrs: {
        x1: "16.24",
        y1: "16.24",
        x2: "19.07",
        y2: "19.07"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "12",
        x2: "6",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "12",
        x2: "22",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "19.07",
        x2: "7.76",
        y2: "16.24"
      }
    }), h("line", {
      attrs: {
        x1: "16.24",
        y1: "7.76",
        x2: "19.07",
        y2: "4.93"
      }
    })]);
  }
};

var LockIcon = {
  name: 'LockIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-lock"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "11",
        width: "18",
        height: "11",
        rx: "2",
        ry: "2"
      }
    }), h("path", {
      attrs: {
        d: "M7 11V7a5 5 0 0 1 10 0v4"
      }
    })]);
  }
};

var LogInIcon = {
  name: 'LogInIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-log-in"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
      }
    }), h("polyline", {
      attrs: {
        points: "10 17 15 12 10 7"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "12",
        x2: "3",
        y2: "12"
      }
    })]);
  }
};

var LogOutIcon = {
  name: 'LogOutIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-log-out"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
      }
    }), h("polyline", {
      attrs: {
        points: "16 17 21 12 16 7"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "12",
        x2: "9",
        y2: "12"
      }
    })]);
  }
};

var MailIcon = {
  name: 'MailIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mail"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      }
    }), h("polyline", {
      attrs: {
        points: "22,6 12,13 2,6"
      }
    })]);
  }
};

var MapPinIcon = {
  name: 'MapPinIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-map-pin"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "10",
        r: "3"
      }
    })]);
  }
};

var MapIcon = {
  name: 'MapIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-map"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "2",
        x2: "8",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "6",
        x2: "16",
        y2: "22"
      }
    })]);
  }
};

var Maximize2Icon = {
  name: 'Maximize2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-maximize-2"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "15 3 21 3 21 9"
      }
    }), h("polyline", {
      attrs: {
        points: "9 21 3 21 3 15"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "3",
        x2: "14",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "21",
        x2: "10",
        y2: "14"
      }
    })]);
  }
};

var MaximizeIcon = {
  name: 'MaximizeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-maximize"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
      }
    })]);
  }
};

var MehIcon = {
  name: 'MehIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-meh"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "15",
        x2: "16",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "9.01",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "15.01",
        y2: "9"
      }
    })]);
  }
};

var MenuIcon = {
  name: 'MenuIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-menu"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "3",
        y1: "12",
        x2: "21",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "6",
        x2: "21",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "18",
        x2: "21",
        y2: "18"
      }
    })]);
  }
};

var MessageCircleIcon = {
  name: 'MessageCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-message-circle"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
      }
    })]);
  }
};

var MessageSquareIcon = {
  name: 'MessageSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-message-square"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      }
    })]);
  }
};

var MicOffIcon = {
  name: 'MicOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mic-off"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
      }
    }), h("path", {
      attrs: {
        d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "23",
        x2: "16",
        y2: "23"
      }
    })]);
  }
};

var MicIcon = {
  name: 'MicIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mic"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
      }
    }), h("path", {
      attrs: {
        d: "M19 10v2a7 7 0 0 1-14 0v-2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "23",
        x2: "16",
        y2: "23"
      }
    })]);
  }
};

var Minimize2Icon = {
  name: 'Minimize2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minimize-2"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "4 14 10 14 10 20"
      }
    }), h("polyline", {
      attrs: {
        points: "20 10 14 10 14 4"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "10",
        x2: "21",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "21",
        x2: "10",
        y2: "14"
      }
    })]);
  }
};

var MinimizeIcon = {
  name: 'MinimizeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minimize"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
      }
    })]);
  }
};

var MinusCircleIcon = {
  name: 'MinusCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minus-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var MinusSquareIcon = {
  name: 'MinusSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minus-square"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var MinusIcon = {
  name: 'MinusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minus"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }
    })]);
  }
};

var MonitorIcon = {
  name: 'MonitorIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-monitor"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "3",
        width: "20",
        height: "14",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "21",
        x2: "16",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "17",
        x2: "12",
        y2: "21"
      }
    })]);
  }
};

var MoonIcon = {
  name: 'MoonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-moon"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      }
    })]);
  }
};

var MoreHorizontalIcon = {
  name: 'MoreHorizontalIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-more-horizontal"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "19",
        cy: "12",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "5",
        cy: "12",
        r: "1"
      }
    })]);
  }
};

var MoreVerticalIcon = {
  name: 'MoreVerticalIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-more-vertical"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "5",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "19",
        r: "1"
      }
    })]);
  }
};

var MousePointerIcon = {
  name: 'MousePointerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mouse-pointer"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
      }
    }), h("path", {
      attrs: {
        d: "M13 13l6 6"
      }
    })]);
  }
};

var MoveIcon = {
  name: 'MoveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-move"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "5 9 2 12 5 15"
      }
    }), h("polyline", {
      attrs: {
        points: "9 5 12 2 15 5"
      }
    }), h("polyline", {
      attrs: {
        points: "15 19 12 22 9 19"
      }
    }), h("polyline", {
      attrs: {
        points: "19 9 22 12 19 15"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "22"
      }
    })]);
  }
};

var MusicIcon = {
  name: 'MusicIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-music"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9 18V5l12-2v13"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "18",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "18",
        cy: "16",
        r: "3"
      }
    })]);
  }
};

var Navigation2Icon = {
  name: 'Navigation2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-navigation-2"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "12 2 19 21 12 17 5 21 12 2"
      }
    })]);
  }
};

var NavigationIcon = {
  name: 'NavigationIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-navigation"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "3 11 22 2 13 21 11 13 3 11"
      }
    })]);
  }
};

var OctagonIcon = {
  name: 'OctagonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-octagon"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
      }
    })]);
  }
};

var PackageIcon = {
  name: 'PackageIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-package"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "16.5",
        y1: "9.4",
        x2: "7.5",
        y2: "4.21"
      }
    }), h("path", {
      attrs: {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    }), h("polyline", {
      attrs: {
        points: "3.27 6.96 12 12.01 20.73 6.96"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22.08",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var PaperclipIcon = {
  name: 'PaperclipIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-paperclip"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
      }
    })]);
  }
};

var PauseCircleIcon = {
  name: 'PauseCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pause-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "15",
        x2: "10",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "15",
        x2: "14",
        y2: "9"
      }
    })]);
  }
};

var PauseIcon = {
  name: 'PauseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pause"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "6",
        y: "4",
        width: "4",
        height: "16"
      }
    }), h("rect", {
      attrs: {
        x: "14",
        y: "4",
        width: "4",
        height: "16"
      }
    })]);
  }
};

var PenToolIcon = {
  name: 'PenToolIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pen-tool"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 19l7-7 3 3-7 7-3-3z"
      }
    }), h("path", {
      attrs: {
        d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
      }
    }), h("path", {
      attrs: {
        d: "M2 2l7.586 7.586"
      }
    }), h("circle", {
      attrs: {
        cx: "11",
        cy: "11",
        r: "2"
      }
    })]);
  }
};

var PercentIcon = {
  name: 'PercentIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-percent"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "19",
        y1: "5",
        x2: "5",
        y2: "19"
      }
    }), h("circle", {
      attrs: {
        cx: "6.5",
        cy: "6.5",
        r: "2.5"
      }
    }), h("circle", {
      attrs: {
        cx: "17.5",
        cy: "17.5",
        r: "2.5"
      }
    })]);
  }
};

var PhoneCallIcon = {
  name: 'PhoneCallIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-call"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneForwardedIcon = {
  name: 'PhoneForwardedIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-forwarded"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "19 1 23 5 19 9"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "5",
        x2: "23",
        y2: "5"
      }
    }), h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneIncomingIcon = {
  name: 'PhoneIncomingIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-incoming"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "16 2 16 8 22 8"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "1",
        x2: "16",
        y2: "8"
      }
    }), h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneMissedIcon = {
  name: 'PhoneMissedIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-missed"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "23",
        y1: "1",
        x2: "17",
        y2: "7"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "1",
        x2: "23",
        y2: "7"
      }
    }), h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneOffIcon = {
  name: 'PhoneOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "1",
        x2: "1",
        y2: "23"
      }
    })]);
  }
};

var PhoneOutgoingIcon = {
  name: 'PhoneOutgoingIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-outgoing"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 7 23 1 17 1"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "8",
        x2: "23",
        y2: "1"
      }
    }), h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneIcon = {
  name: 'PhoneIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PieChartIcon = {
  name: 'PieChartIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pie-chart"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21.21 15.89A10 10 0 1 1 8 2.83"
      }
    }), h("path", {
      attrs: {
        d: "M22 12A10 10 0 0 0 12 2v10z"
      }
    })]);
  }
};

var PlayCircleIcon = {
  name: 'PlayCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-play-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polygon", {
      attrs: {
        points: "10 8 16 12 10 16 10 8"
      }
    })]);
  }
};

var PlayIcon = {
  name: 'PlayIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-play"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "5 3 19 12 5 21 5 3"
      }
    })]);
  }
};

var PlusCircleIcon = {
  name: 'PlusCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-plus-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var PlusSquareIcon = {
  name: 'PlusSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-plus-square"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var PlusIcon = {
  name: 'PlusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-plus"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "5",
        x2: "12",
        y2: "19"
      }
    }), h("line", {
      attrs: {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }
    })]);
  }
};

var PocketIcon = {
  name: 'PocketIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pocket"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
      }
    }), h("polyline", {
      attrs: {
        points: "8 10 12 14 16 10"
      }
    })]);
  }
};

var PowerIcon = {
  name: 'PowerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-power"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18.36 6.64a9 9 0 1 1-12.73 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var PrinterIcon = {
  name: 'PrinterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-printer"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "6 9 6 2 18 2 18 9"
      }
    }), h("path", {
      attrs: {
        d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
      }
    }), h("rect", {
      attrs: {
        x: "6",
        y: "14",
        width: "12",
        height: "8"
      }
    })]);
  }
};

var RadioIcon = {
  name: 'RadioIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-radio"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "2"
      }
    }), h("path", {
      attrs: {
        d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      }
    })]);
  }
};

var RefreshCcwIcon = {
  name: 'RefreshCcwIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-refresh-ccw"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "1 4 1 10 7 10"
      }
    }), h("polyline", {
      attrs: {
        points: "23 20 23 14 17 14"
      }
    }), h("path", {
      attrs: {
        d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
      }
    })]);
  }
};

var RefreshCwIcon = {
  name: 'RefreshCwIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-refresh-cw"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 4 23 10 17 10"
      }
    }), h("polyline", {
      attrs: {
        points: "1 20 1 14 7 14"
      }
    }), h("path", {
      attrs: {
        d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
      }
    })]);
  }
};

var RepeatIcon = {
  name: 'RepeatIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-repeat"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "17 1 21 5 17 9"
      }
    }), h("path", {
      attrs: {
        d: "M3 11V9a4 4 0 0 1 4-4h14"
      }
    }), h("polyline", {
      attrs: {
        points: "7 23 3 19 7 15"
      }
    }), h("path", {
      attrs: {
        d: "M21 13v2a4 4 0 0 1-4 4H3"
      }
    })]);
  }
};

var RewindIcon = {
  name: 'RewindIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-rewind"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 19 2 12 11 5 11 19"
      }
    }), h("polygon", {
      attrs: {
        points: "22 19 13 12 22 5 22 19"
      }
    })]);
  }
};

var RotateCcwIcon = {
  name: 'RotateCcwIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-rotate-ccw"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "1 4 1 10 7 10"
      }
    }), h("path", {
      attrs: {
        d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
      }
    })]);
  }
};

var RotateCwIcon = {
  name: 'RotateCwIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-rotate-cw"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 4 23 10 17 10"
      }
    }), h("path", {
      attrs: {
        d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
      }
    })]);
  }
};

var RssIcon = {
  name: 'RssIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-rss"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 11a9 9 0 0 1 9 9"
      }
    }), h("path", {
      attrs: {
        d: "M4 4a16 16 0 0 1 16 16"
      }
    }), h("circle", {
      attrs: {
        cx: "5",
        cy: "19",
        r: "1"
      }
    })]);
  }
};

var SaveIcon = {
  name: 'SaveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-save"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
      }
    }), h("polyline", {
      attrs: {
        points: "17 21 17 13 7 13 7 21"
      }
    }), h("polyline", {
      attrs: {
        points: "7 3 7 8 15 8"
      }
    })]);
  }
};

var ScissorsIcon = {
  name: 'ScissorsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-scissors"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "6",
        cy: "6",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "18",
        r: "3"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "4",
        x2: "8.12",
        y2: "15.88"
      }
    }), h("line", {
      attrs: {
        x1: "14.47",
        y1: "14.48",
        x2: "20",
        y2: "20"
      }
    }), h("line", {
      attrs: {
        x1: "8.12",
        y1: "8.12",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var SearchIcon = {
  name: 'SearchIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-search"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "11",
        cy: "11",
        r: "8"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "21",
        x2: "16.65",
        y2: "16.65"
      }
    })]);
  }
};

var SendIcon = {
  name: 'SendIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-send"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "22",
        y1: "2",
        x2: "11",
        y2: "13"
      }
    }), h("polygon", {
      attrs: {
        points: "22 2 15 22 11 13 2 9 22 2"
      }
    })]);
  }
};

var ServerIcon = {
  name: 'ServerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-server"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "2",
        width: "20",
        height: "8",
        rx: "2",
        ry: "2"
      }
    }), h("rect", {
      attrs: {
        x: "2",
        y: "14",
        width: "20",
        height: "8",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "6",
        x2: "6",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "18",
        x2: "6",
        y2: "18"
      }
    })]);
  }
};

var SettingsIcon = {
  name: 'SettingsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-settings"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "3"
      }
    }), h("path", {
      attrs: {
        d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      }
    })]);
  }
};

var Share2Icon = {
  name: 'Share2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-share-2"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "18",
        cy: "5",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "12",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "18",
        cy: "19",
        r: "3"
      }
    }), h("line", {
      attrs: {
        x1: "8.59",
        y1: "13.51",
        x2: "15.42",
        y2: "17.49"
      }
    }), h("line", {
      attrs: {
        x1: "15.41",
        y1: "6.51",
        x2: "8.59",
        y2: "10.49"
      }
    })]);
  }
};

var ShareIcon = {
  name: 'ShareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-share"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
      }
    }), h("polyline", {
      attrs: {
        points: "16 6 12 2 8 6"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "15"
      }
    })]);
  }
};

var ShieldOffIcon = {
  name: 'ShieldOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shield-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"
      }
    }), h("path", {
      attrs: {
        d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var ShieldIcon = {
  name: 'ShieldIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shield"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      }
    })]);
  }
};

var ShoppingBagIcon = {
  name: 'ShoppingBagIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shopping-bag"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "6",
        x2: "21",
        y2: "6"
      }
    }), h("path", {
      attrs: {
        d: "M16 10a4 4 0 0 1-8 0"
      }
    })]);
  }
};

var ShoppingCartIcon = {
  name: 'ShoppingCartIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shopping-cart"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "9",
        cy: "21",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "20",
        cy: "21",
        r: "1"
      }
    }), h("path", {
      attrs: {
        d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      }
    })]);
  }
};

var ShuffleIcon = {
  name: 'ShuffleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shuffle"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "16 3 21 3 21 8"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "20",
        x2: "21",
        y2: "3"
      }
    }), h("polyline", {
      attrs: {
        points: "21 16 21 21 16 21"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "15",
        x2: "21",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "4",
        x2: "9",
        y2: "9"
      }
    })]);
  }
};

var SidebarIcon = {
  name: 'SidebarIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sidebar"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "3",
        x2: "9",
        y2: "21"
      }
    })]);
  }
};

var SkipBackIcon = {
  name: 'SkipBackIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-skip-back"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "19 20 9 12 19 4 19 20"
      }
    }), h("line", {
      attrs: {
        x1: "5",
        y1: "19",
        x2: "5",
        y2: "5"
      }
    })]);
  }
};

var SkipForwardIcon = {
  name: 'SkipForwardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-skip-forward"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "5 4 15 12 5 20 5 4"
      }
    }), h("line", {
      attrs: {
        x1: "19",
        y1: "5",
        x2: "19",
        y2: "19"
      }
    })]);
  }
};

var SlackIcon = {
  name: 'SlackIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-slack"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
      }
    }), h("path", {
      attrs: {
        d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
      }
    })]);
  }
};

var SlashIcon = {
  name: 'SlashIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-slash"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "4.93",
        x2: "19.07",
        y2: "19.07"
      }
    })]);
  }
};

var SlidersIcon = {
  name: 'SlidersIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sliders"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "4",
        y1: "21",
        x2: "4",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "10",
        x2: "4",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "21",
        x2: "20",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "12",
        x2: "20",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "14",
        x2: "7",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "8",
        x2: "15",
        y2: "8"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "16",
        x2: "23",
        y2: "16"
      }
    })]);
  }
};

var SmartphoneIcon = {
  name: 'SmartphoneIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-smartphone"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "5",
        y: "2",
        width: "14",
        height: "20",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "18"
      }
    })]);
  }
};

var SmileIcon = {
  name: 'SmileIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-smile"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("path", {
      attrs: {
        d: "M8 14s1.5 2 4 2 4-2 4-2"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "9.01",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "15.01",
        y2: "9"
      }
    })]);
  }
};

var SpeakerIcon = {
  name: 'SpeakerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-speaker"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "4",
        y: "2",
        width: "16",
        height: "20",
        rx: "2",
        ry: "2"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "14",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "6",
        x2: "12",
        y2: "6"
      }
    })]);
  }
};

var SquareIcon = {
  name: 'SquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-square"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    })]);
  }
};

var StarIcon = {
  name: 'StarIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-star"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    })]);
  }
};

var StopCircleIcon = {
  name: 'StopCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-stop-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("rect", {
      attrs: {
        x: "9",
        y: "9",
        width: "6",
        height: "6"
      }
    })]);
  }
};

var SunIcon = {
  name: 'SunIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sun"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "5"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "1",
        x2: "12",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "4.22",
        y1: "4.22",
        x2: "5.64",
        y2: "5.64"
      }
    }), h("line", {
      attrs: {
        x1: "18.36",
        y1: "18.36",
        x2: "19.78",
        y2: "19.78"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "12",
        x2: "3",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "12",
        x2: "23",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "4.22",
        y1: "19.78",
        x2: "5.64",
        y2: "18.36"
      }
    }), h("line", {
      attrs: {
        x1: "18.36",
        y1: "5.64",
        x2: "19.78",
        y2: "4.22"
      }
    })]);
  }
};

var SunriseIcon = {
  name: 'SunriseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sunrise"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17 18a5 5 0 0 0-10 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "4.22",
        y1: "10.22",
        x2: "5.64",
        y2: "11.64"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "18",
        x2: "23",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "18.36",
        y1: "11.64",
        x2: "19.78",
        y2: "10.22"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "22",
        x2: "1",
        y2: "22"
      }
    }), h("polyline", {
      attrs: {
        points: "8 6 12 2 16 6"
      }
    })]);
  }
};

var SunsetIcon = {
  name: 'SunsetIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sunset"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17 18a5 5 0 0 0-10 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "2"
      }
    }), h("line", {
      attrs: {
        x1: "4.22",
        y1: "10.22",
        x2: "5.64",
        y2: "11.64"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "18",
        x2: "23",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "18.36",
        y1: "11.64",
        x2: "19.78",
        y2: "10.22"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "22",
        x2: "1",
        y2: "22"
      }
    }), h("polyline", {
      attrs: {
        points: "16 5 12 9 8 5"
      }
    })]);
  }
};

var TabletIcon = {
  name: 'TabletIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tablet"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "4",
        y: "2",
        width: "16",
        height: "20",
        rx: "2",
        ry: "2",
        transform: "rotate(180 12 12)"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "18"
      }
    })]);
  }
};

var TagIcon = {
  name: 'TagIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tag"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
      }
    }), h("line", {
      attrs: {
        x1: "7",
        y1: "7",
        x2: "7",
        y2: "7"
      }
    })]);
  }
};

var TargetIcon = {
  name: 'TargetIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-target"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "6"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "2"
      }
    })]);
  }
};

var TerminalIcon = {
  name: 'TerminalIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-terminal"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "4 17 10 11 4 5"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "20",
        y2: "19"
      }
    })]);
  }
};

var ThermometerIcon = {
  name: 'ThermometerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-thermometer"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
      }
    })]);
  }
};

var ThumbsDownIcon = {
  name: 'ThumbsDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-thumbs-down"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
      }
    })]);
  }
};

var ThumbsUpIcon = {
  name: 'ThumbsUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-thumbs-up"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
      }
    })]);
  }
};

var ToggleLeftIcon = {
  name: 'ToggleLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-toggle-left"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "5",
        width: "22",
        height: "14",
        rx: "7",
        ry: "7"
      }
    }), h("circle", {
      attrs: {
        cx: "8",
        cy: "12",
        r: "3"
      }
    })]);
  }
};

var ToggleRightIcon = {
  name: 'ToggleRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-toggle-right"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "5",
        width: "22",
        height: "14",
        rx: "7",
        ry: "7"
      }
    }), h("circle", {
      attrs: {
        cx: "16",
        cy: "12",
        r: "3"
      }
    })]);
  }
};

var Trash2Icon = {
  name: 'Trash2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trash-2"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "3 6 5 6 21 6"
      }
    }), h("path", {
      attrs: {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "11",
        x2: "10",
        y2: "17"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "11",
        x2: "14",
        y2: "17"
      }
    })]);
  }
};

var TrashIcon = {
  name: 'TrashIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trash"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "3 6 5 6 21 6"
      }
    }), h("path", {
      attrs: {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      }
    })]);
  }
};

var TrelloIcon = {
  name: 'TrelloIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trello"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("rect", {
      attrs: {
        x: "7",
        y: "7",
        width: "3",
        height: "9"
      }
    }), h("rect", {
      attrs: {
        x: "14",
        y: "7",
        width: "3",
        height: "5"
      }
    })]);
  }
};

var TrendingDownIcon = {
  name: 'TrendingDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trending-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 18 13.5 8.5 8.5 13.5 1 6"
      }
    }), h("polyline", {
      attrs: {
        points: "17 18 23 18 23 12"
      }
    })]);
  }
};

var TrendingUpIcon = {
  name: 'TrendingUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trending-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 6 13.5 15.5 8.5 10.5 1 18"
      }
    }), h("polyline", {
      attrs: {
        points: "17 6 23 6 23 12"
      }
    })]);
  }
};

var TriangleIcon = {
  name: 'TriangleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-triangle"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      }
    })]);
  }
};

var TruckIcon = {
  name: 'TruckIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-truck"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "3",
        width: "15",
        height: "13"
      }
    }), h("polygon", {
      attrs: {
        points: "16 8 20 8 23 11 23 16 16 16 16 8"
      }
    }), h("circle", {
      attrs: {
        cx: "5.5",
        cy: "18.5",
        r: "2.5"
      }
    }), h("circle", {
      attrs: {
        cx: "18.5",
        cy: "18.5",
        r: "2.5"
      }
    })]);
  }
};

var TvIcon = {
  name: 'TvIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tv"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "7",
        width: "20",
        height: "15",
        rx: "2",
        ry: "2"
      }
    }), h("polyline", {
      attrs: {
        points: "17 2 12 7 7 2"
      }
    })]);
  }
};

var TwitterIcon = {
  name: 'TwitterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-twitter"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
      }
    })]);
  }
};

var TypeIcon = {
  name: 'TypeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-type"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "4 7 4 4 20 4 20 7"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "20",
        x2: "15",
        y2: "20"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "4",
        x2: "12",
        y2: "20"
      }
    })]);
  }
};

var UmbrellaIcon = {
  name: 'UmbrellaIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-umbrella"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"
      }
    })]);
  }
};

var UnderlineIcon = {
  name: 'UnderlineIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-underline"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "21",
        x2: "20",
        y2: "21"
      }
    })]);
  }
};

var UnlockIcon = {
  name: 'UnlockIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-unlock"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "11",
        width: "18",
        height: "11",
        rx: "2",
        ry: "2"
      }
    }), h("path", {
      attrs: {
        d: "M7 11V7a5 5 0 0 1 9.9-1"
      }
    })]);
  }
};

var UploadCloudIcon = {
  name: 'UploadCloudIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-upload-cloud"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "16 16 12 12 8 16"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "12",
        x2: "12",
        y2: "21"
      }
    }), h("path", {
      attrs: {
        d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
      }
    }), h("polyline", {
      attrs: {
        points: "16 16 12 12 8 16"
      }
    })]);
  }
};

var UploadIcon = {
  name: 'UploadIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-upload"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    }), h("polyline", {
      attrs: {
        points: "17 8 12 3 7 8"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "3",
        x2: "12",
        y2: "15"
      }
    })]);
  }
};

var UserCheckIcon = {
  name: 'UserCheckIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-check"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "7",
        r: "4"
      }
    }), h("polyline", {
      attrs: {
        points: "17 11 19 13 23 9"
      }
    })]);
  }
};

var UserMinusIcon = {
  name: 'UserMinusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-minus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "7",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "11",
        x2: "17",
        y2: "11"
      }
    })]);
  }
};

var UserPlusIcon = {
  name: 'UserPlusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-plus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "7",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "8",
        x2: "20",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "11",
        x2: "17",
        y2: "11"
      }
    })]);
  }
};

var UserXIcon = {
  name: 'UserXIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-x"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "7",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "8",
        x2: "23",
        y2: "13"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "8",
        x2: "18",
        y2: "13"
      }
    })]);
  }
};

var UserIcon = {
  name: 'UserIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "7",
        r: "4"
      }
    })]);
  }
};

var UsersIcon = {
  name: 'UsersIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-users"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "9",
        cy: "7",
        r: "4"
      }
    }), h("path", {
      attrs: {
        d: "M23 21v-2a4 4 0 0 0-3-3.87"
      }
    }), h("path", {
      attrs: {
        d: "M16 3.13a4 4 0 0 1 0 7.75"
      }
    })]);
  }
};

var VideoOffIcon = {
  name: 'VideoOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-video-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var VideoIcon = {
  name: 'VideoIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-video"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "23 7 16 12 23 17 23 7"
      }
    }), h("rect", {
      attrs: {
        x: "1",
        y: "5",
        width: "15",
        height: "14",
        rx: "2",
        ry: "2"
      }
    })]);
  }
};

var VoicemailIcon = {
  name: 'VoicemailIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-voicemail"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "5.5",
        cy: "11.5",
        r: "4.5"
      }
    }), h("circle", {
      attrs: {
        cx: "18.5",
        cy: "11.5",
        r: "4.5"
      }
    }), h("line", {
      attrs: {
        x1: "5.5",
        y1: "16",
        x2: "18.5",
        y2: "16"
      }
    })]);
  }
};

var Volume1Icon = {
  name: 'Volume1Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-volume-1"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }
    }), h("path", {
      attrs: {
        d: "M15.54 8.46a5 5 0 0 1 0 7.07"
      }
    })]);
  }
};

var Volume2Icon = {
  name: 'Volume2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-volume-2"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }
    }), h("path", {
      attrs: {
        d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
      }
    })]);
  }
};

var VolumeXIcon = {
  name: 'VolumeXIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-volume-x"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "9",
        x2: "17",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "9",
        x2: "23",
        y2: "15"
      }
    })]);
  }
};

var VolumeIcon = {
  name: 'VolumeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-volume"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }
    })]);
  }
};

var WatchIcon = {
  name: 'WatchIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-watch"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "7"
      }
    }), h("polyline", {
      attrs: {
        points: "12 9 12 12 13.5 13.5"
      }
    }), h("path", {
      attrs: {
        d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
      }
    })]);
  }
};

var WifiOffIcon = {
  name: 'WifiOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-wifi-off"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"
      }
    }), h("path", {
      attrs: {
        d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"
      }
    }), h("path", {
      attrs: {
        d: "M10.71 5.05A16 16 0 0 1 22.58 9"
      }
    }), h("path", {
      attrs: {
        d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"
      }
    }), h("path", {
      attrs: {
        d: "M8.53 16.11a6 6 0 0 1 6.95 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "20",
        x2: "12",
        y2: "20"
      }
    })]);
  }
};

var WifiIcon = {
  name: 'WifiIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-wifi"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 12.55a11 11 0 0 1 14.08 0"
      }
    }), h("path", {
      attrs: {
        d: "M1.42 9a16 16 0 0 1 21.16 0"
      }
    }), h("path", {
      attrs: {
        d: "M8.53 16.11a6 6 0 0 1 6.95 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "20",
        x2: "12",
        y2: "20"
      }
    })]);
  }
};

var WindIcon = {
  name: 'WindIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-wind"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
      }
    })]);
  }
};

var XCircleIcon = {
  name: 'XCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
      }
    })]);
  }
};

var XOctagonIcon = {
  name: 'XOctagonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x-octagon"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
      }
    })]);
  }
};

var XSquareIcon = {
  name: 'XSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x-square"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
      }
    })]);
  }
};

var XIcon = {
  name: 'XIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
      }
    })]);
  }
};

var YoutubeIcon = {
  name: 'YoutubeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-youtube"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
      }
    }), h("polygon", {
      attrs: {
        points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
      }
    })]);
  }
};

var ZapOffIcon = {
  name: 'ZapOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-zap-off"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "12.41 6.75 13 2 10.57 4.92"
      }
    }), h("polyline", {
      attrs: {
        points: "18.57 12.91 21 10 15.66 10"
      }
    }), h("polyline", {
      attrs: {
        points: "8 8 3 14 12 14 11 22 16 16"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var ZapIcon = {
  name: 'ZapIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-zap"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
      }
    })]);
  }
};

var ZoomInIcon = {
  name: 'ZoomInIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-zoom-in"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "11",
        cy: "11",
        r: "8"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "21",
        x2: "16.65",
        y2: "16.65"
      }
    }), h("line", {
      attrs: {
        x1: "11",
        y1: "8",
        x2: "11",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "11",
        x2: "14",
        y2: "11"
      }
    })]);
  }
};

var ZoomOutIcon = {
  name: 'ZoomOutIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-zoom-out"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "11",
        cy: "11",
        r: "8"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "21",
        x2: "16.65",
        y2: "16.65"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "11",
        x2: "14",
        y2: "11"
      }
    })]);
  }
};




/***/ })

}]);