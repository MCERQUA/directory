# FontAwesome Icons Compatibility Guide

## Issue Overview
During the contractor directory setup, we encountered missing FontAwesome 6 icon exports that caused runtime errors.

## Fixed Icons
- `FaHardHat` → `FaHouse` (FaHardHat doesn't exist in FA6)
- `FaTools` → `FaScrewdriverWrench` (FaTools was renamed in FA6)

## Best Practices

### Before Adding New Icons
1. **Verify icon exists**: Check [FontAwesome 6 documentation](https://fontawesome.com/icons) 
2. **Test imports**: Use TypeScript build to catch missing exports early
3. **Use correct package**: Import from `react-icons/fa6` for FontAwesome 6 icons

### Common FA6 Icon Name Changes
- `FaTools` → `FaScrewdriverWrench`
- `FaHardHat` → Use `FaHouse` or `FaHelmetSafety` 
- `FaCog` → `FaGear`
- `FaUser` → `FaUser` (unchanged)

### Testing Icon Imports
```bash
# Run build to check for missing icons
npm run build

# Look for errors like:
# "does not provide an export named 'IconName'"
```

### Quick Fix Process
1. Identify missing icon in console error
2. Find correct FA6 icon name from documentation
3. Update import in `src/data/data.ts`
4. Replace all occurrences with `replace_all: true`
5. Test with `npm run build`

## Prevention
- Always run `npm run build` after adding new icons
- Use TypeScript strict mode to catch import errors early
- Keep this guide updated when new icon issues are discovered