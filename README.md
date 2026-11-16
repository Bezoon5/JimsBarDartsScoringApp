# 🎯 Jim's Bar Darts Scorer

A free darts scoring app for iPhone, iPad and laptop. It runs in the web browser, needs no app store, and the whole app is one file: `index.html`.

Score games by keypad, by tapping the board, or let a camera score the darts for you. It also has a caller voice, checkout help, stats and heat maps, all in Jim's Bar red, gold and black.

---

## Features

### Game modes
- **X01**: 501, 301 or any custom starting score. Double out on or off, "first to" any number of legs, 1–8 players.
- **Killer**: 2–8 players. Throw for your number, hit it to become a killer, then knock out everyone else.
  - Lives and points-to-killer are adjustable (default 3 / 3).
  - Numbers can be thrown for (other hand) or assigned at random.
  - Optional rules: suicide (own number costs a life), lose killer status when hit, doubles and trebles take 2 and 3 lives.
- **Practice**: aim at T20, T19, T18, any 20, any 19, bull, D20, D16, any double, or free throw. Tracks hit rate and average.

### Scoring
- **Keypad** split into clear bands: cream **singles**, gold **doubles**, red **trebles**, plus Miss, 25 and Bull.
- **Board**: tap where the dart landed on a dartboard picture. On phones the first tap zooms in for accuracy.
- **Camera**: auto-scoring (see below).
- **Corrections**: tap any dart in the current or last visit, then tap the right score. Undo removes the last dart, and Next Player records any darts you didn't enter as misses.

### Checkouts
- Suggested finish for every score up to 170, based on the darts you have left, e.g. *T20 · T20 · Bull*.
- A set-up shot when there's no finish this visit.
- A full checkout chart from 170 down to 2.

### Caller voice
Uses the device's built-in speech.
- Calls each dart: "treble twenty", "double top", "bullseye".
- Calls the visit total, with a drawn-out **"One hundred… and eighty!"**
- Calls the classic finishes and specials: **The Big Fish** (170), **The Little Fish** (130), **Shanghai**, **Champagne finish**, **Out of the madhouse** (D1), **Double tops**, **Heinz 57**, **Bed and breakfast**, **Champagne breakfast**.
- Announces "*Name*, you require 121", game shot, and the Killer events.
- Mute with the speaker button in the game screen. "Call every dart" can be switched off in game settings.

### Stats and heat maps
- PPR (3-dart average), first 9 PPR, checkout %, average and highest checkout, best leg, win %.
- 60+ / 100+ / 140+ / 180 counts.
- Filters for the recent 10 / 100 / 1000 / all legs, and by 501, 301 or practice.
- Heat map and PPR trend chart for each player.
- Everything is saved on the device. Nothing is uploaded anywhere.

### Title screen and music
- Illustrated dartboard title screen with the theme tune *The Mountain*.
- The music loops through the menus and stops when a game starts. Tap ♪ to mute it.

---

## Camera auto-scoring

One camera watches the board, spots each new dart and scores it.

**Setup**
1. Mount the camera **30–60 cm from the board, off to one side and low down**, looking across the board's face. It must not move once it's set.
2. Light the board steadily and evenly (an LED ring light is ideal) and keep window daylight out.
3. In a game, tap the **camera icon**, then **calibrate**. Tap the outer edge of the double ring at 20, 6, 3 and 11, then the bull and 4 more points. Drag any point to fine-tune, and aim for an *Excellent* or *Good* score.
4. **Teach accuracy (once):** tap **Expand → Teach accuracy**. Push a dart into each of the 6 targets shown, at the angle a thrown dart sits, so the app learns this camera's typical error.
5. Play. The camera shrinks to a small live strip. **Expand** gives the big view, **Recal** recalibrates.

**While playing**
- **Pulling darts:** the app moves to the next player when you pull your darts.
- **Close calls:** if a dart lands right on a wire, two big buttons ask which it was (e.g. **T20** or **20**).
- **Mistakes:** any dart can be corrected by tapping it.
- **Moving things:** redo calibration and teach mode if the camera or board moves.

**External USB webcams**
- **Choosing a camera:** when more than one camera is connected, a picker appears in the camera screen. Each camera keeps its own calibration.
- **Laptops (Mac or Windows):** work in Chrome, Edge, Safari or Firefox with any USB webcam. A USB extension cable lets the laptop sit away from the board.
- **iPads:** iPads with a **USB-C** port on iPadOS 17 or later work in Safari.
- **iPhones:** iPhones (and older Lightning iPads) can't use external USB cameras. This is an Apple limitation, so use the device's own camera instead.

> A single camera won't match multi-camera commercial systems, so expect the odd misread. The close-call check and tap-to-correct make fixing those quick.

---

## Getting it running

The camera only works when the app is opened from a secure **https** address, which GitHub Pages provides.

1. In this repository go to **Settings → Pages**.
2. Under *Build and deployment* choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
3. After a minute or two the site is live at:
   **https://bezoon5.github.io/JimsBarDartsScoringApp/**
4. Open that link in **Safari** on iPhone or iPad and tap **Share → Add to Home Screen** to install it like an app. On a laptop, just open the link (and bookmark it).

**Tips**
- Turn **Auto-Lock** off while playing (Settings → Display & Brightness), so the screen and camera stay on.
- Turn the silent switch off and the volume up for the caller and music.
- To share it, send friends the link. Each person's stats stay on their own device.

### Updating
Replace `index.html` in this repository (**Add file → Upload files → Commit changes**). Everyone gets the new version the next time they open the app. If it still looks old, fully close the app and reopen it.

---

## Device support

| Device | Scoring and voice | Built-in camera | USB webcam |
|---|---|---|---|
| iPhone (iOS 16+) | ✅ | ✅ | ❌ Apple doesn't allow it |
| iPad with USB-C (iPadOS 17+) | ✅ | ✅ | ✅ |
| iPad with Lightning (iPadOS 16+) | ✅ | ✅ | ❌ |
| Laptop / desktop (Chrome, Edge, Safari, Firefox) | ✅ | ✅ | ✅ |
| iPad mini 2 / iPad Air 1 (stuck on iOS 12) | ❌ Browser too old | ❌ | ❌ |

---

## Technical notes
- **No installs:** a single self-contained HTML file with no server, build step or account. The artwork, theme tune and fonts' fallbacks are built in. The display fonts (Alfa Slab One, Zilla Slab) load from Google Fonts when online.
- **Storage:** data lives in the browser's local storage on each device. Clearing Safari website data clears the stats.
- **Camera detection:** done entirely on the device in JavaScript. It compares frames of a zoomed-in board crop, filters shadows, traces the dart's barrel to its tip, and maps it onto the board using a 9-point homography plus a learned correction. No video leaves the device.

## Credits
- **Theme music:** *The Mountain*, used under the [Pixabay Content License](https://pixabay.com/service/license-summary/) (free for commercial and non-commercial use, no attribution required). Trimmed and re-encoded for the app.
- **Colours and type:** inspired by the 49ERS logo. Fonts: Alfa Slab One and Zilla Slab (SIL Open Font License).
- Built for Jim's Bar. Game on! 🍺🎯
