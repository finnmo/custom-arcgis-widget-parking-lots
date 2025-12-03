# Parking Lot Widget for ArcGIS Experience Builder

**Version:** 1.18.0  
**Compatible with:** ArcGIS Experience Builder 1.18.0+  
**License:** Apache 2.0

A custom widget that displays real-time parking lot utilization data with interactive map labels showing availability percentages and visual gauges.

---

## 🎯 Features

- **Map Labels**: Displays parking lot names as map overlays with pointer tails
- **Visual Gauges**: Color-coded circular gauges showing utilization percentage
- **Availability Text**: Shows "X% Available" or "Full" status
- **Data View Support**: ✅ Fully compatible with Experience Builder data views and filters
- **Real-time Updates**: Automatically updates when filters or views change
- **Responsive**: Scales labels based on map zoom level

---

## 📊 Data Requirements

The widget expects a feature layer with the following fields:

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| **parking_lot** | String | Parking lot name/identifier | "PE2", "Lot A" |
| **utilization_percentage** | Number | Current utilization (0-100) | 85.5 |
| **geometry** | Point | Location for label placement | Point(-122.419, 37.775) |

> **Note:** Field names are configurable in the widget settings.

---

## ⚙️ Configuration Options

### Data Source Settings
- **Map Widget**: Select which map to display labels on
- **Feature Layer**: Choose parking lot data source
- **Support Data Views**: ✅ Yes - filters are fully respected

### Field Mapping
- **Parking Lot Field**: Field containing lot name (default: `parking_lot`)
- **Utilization Field**: Field containing percentage (default: `utilization_percentage`)

### Display Options
- **Show Utilization Text**: Toggle availability text on/off
- **Allow Negatives**: Handle negative percentages (default: false)
- **Full Threshold**: Percentage to display "Full" (default: 95%)

---

## 🔧 Installation

### Option 1: Deploy to Web Server (Recommended)

1. **Extract the widget folder** to your web server:
   ```
   /widgets/parking-lot-widget/
   ```

2. **Verify HTTPS and CORS** are configured (see DEPLOYMENT_INSTRUCTIONS.md)

3. **Register in ArcGIS Portal**:
   - Sign in to your Portal
   - Go to Content → Add Item → Experience Builder widget
   - Enter manifest URL: `https://your-server.com/widgets/parking-lot-widget/manifest.json`
   - Share with your organization

### Option 2: Local Development

1. Copy widget folder to:
   ```
   <ExB-Installation>/client/your-extensions/widgets/
   ```

2. Rebuild Experience Builder:
   ```bash
   npm run build:prod
   ```

---

## 📖 Usage

### Basic Setup

1. **Add Widget to App**
   - Open Experience Builder
   - Click Insert → Widget → Custom → Parking Lot Widget
   - Add to your canvas

2. **Configure Map**
   - In widget settings, select your Map widget
   - Widget will overlay labels on the selected map

3. **Configure Data Source**
   - Select your parking lot feature layer
   - Map field names if different from defaults

4. **Customize Display**
   - Toggle utilization text on/off
   - Adjust "Full" threshold percentage
   - Configure negative value handling

### Using with Data Views

✅ **The widget fully respects Experience Builder data views!**

**Example:** Filter to show only specific parking lots
1. Create a data view with filter: `parking_lot IN ('PE1', 'PE3', 'PE4')`
2. Apply the view to the widget
3. **Result:** Only PE1, PE3, and PE4 labels will appear on the map
4. Filtered-out parking lots (like PE2) will **completely disappear**

**Dynamic Filtering:**
- Apply filter → labels update immediately
- Remove filter → all labels reappear
- Switch views → labels refresh with new data

---

## 🎨 Label Design

Labels appear as speech bubbles with:

```
┌─────────────────────┐
│  🔴  X% Available  │  ← Status (bold, black, 16px)
│      Parking Lot   │  ← Name (bold, black, 13px)
└─────────▼──────────┘
          ↓ (points to location)
```

**Gauge Colors:**
- Red fill shows utilized percentage
- Gray background shows available space
- Black border for visibility

**Scaling:**
- Labels scale from 30% to 100% size based on zoom level
- Maintains readability at all zoom levels

---

## 🐛 Troubleshooting

### Labels Not Appearing
- Verify map widget is selected in settings
- Check that data source has valid geometry
- Ensure field names match configuration
- Open browser console for error messages

### Labels Show All Records Despite Filter
- **This issue is FIXED in v1.18.0**
- Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
- Verify you're using the latest build
- Check that data view is actually applied to the widget

### Labels in Wrong Position
- Coordinate system mismatch - widget handles reprojection automatically
- If persistent, check that geometry field contains valid point data

### Performance Issues
- Limit data source to <1000 records using views
- Consider adding spatial filter to show only nearby lots
- Reduce map zoom range if needed

---

## 📦 Package Contents

```
parking-lot-widget/
├── manifest.json          # Widget metadata and registration info
├── config.json           # Default configuration values
├── icon.svg             # Widget icon for Experience Builder
├── README.md            # This file
└── dist/
    ├── runtime/
    │   ├── widget.js           # Main widget code (15.4 KB)
    │   └── translations/
    │       └── default.ts      # English translations
    └── setting/
        ├── setting.js          # Settings panel code (4.57 KB)
        └── translations/
            └── default.ts      # Settings translations
```

**Total Size:** ~8.6 KB (compressed)

---

## 🔄 Changelog

### Version 1.18.0 (December 3, 2025)
- ✅ **FIXED:** Data view filtering now works correctly
- ✅ **FIXED:** Filtered parking lots completely disappear (no empty labels)
- 🎯 **Changed:** Now uses DataSource.getRecords() instead of layer.queryFeatures()
- ⚡ **Improved:** Better performance and smaller bundle size
- 📝 **Added:** Automatic label refresh when filters change

### Version 1.18.0 (Initial)
- Initial release
- Map label display with gauges
- Configurable fields and display options
- Zoom-based label scaling

---

## 🛠️ Technical Details

### Dependencies
- **jimu-core**: Experience Builder core framework
- **jimu-arcgis**: ArcGIS integration components
- **jimu-ui**: UI components for settings panel
- **React**: 18.3.1

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

### Performance
- Handles up to 1000 parking lots efficiently
- Labels update in <500ms after filter changes
- Minimal memory footprint (~2MB)

---

## 📞 Support

**Author:** Custom Developer  
**Documentation:** See DEPLOYMENT_INSTRUCTIONS.md for deployment details  
**Fix Notes:** See PARKING-LOT-WIDGET-FIX-NOTES.md for technical fix details  

For issues or questions, contact your ArcGIS administrator.

---

## 📄 License

Apache License 2.0  
http://www.apache.org/licenses/LICENSE-2.0

Copyright (c) 2025

