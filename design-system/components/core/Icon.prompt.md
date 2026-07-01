Lucide icon wrapper — use for every icon in the Kerthan system; never hand-draw SVG.

```jsx
<Icon name="heart-pulse" size={22} color="var(--color-cross)" />
```

The host page must load Lucide and call `lucide.createIcons()` after the icons mount (e.g. in a `useEffect`). Common clinic icons: `heart-pulse`, `stethoscope`, `microscope`, `scan`, `phone`, `map-pin`, `clock`, `shield-check`, `user-round`, `calendar-check`.
