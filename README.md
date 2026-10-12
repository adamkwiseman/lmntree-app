# LMN Tree lesson player

Static GitHub Pages player using the existing Supabase units, lessons, cards and progress tables. Card media and model audio are hosted in Cloudinary.

The recorder is integrated into index.html. Keep layout.js and the assets directory beside it. The old separately hosted recorder is no longer needed by this player.

Lesson menus use the October design with live lesson titles, video and objectives. Watch the lesson video to unlock Listen & Speak. Video and speaking completion are stored locally per learner; whole-lesson completion continues to use the existing Supabase progress table. Read & Write and Practice Games remain marked Coming soon. The completion counter reflects the currently available activities.

The comparison percentage measures sound similarity, not pronunciation accuracy. Recordings remain in the browser and clear on slide changes.

Preview: open index.html?preview=1 through a local server or HTTPS. This uses a verified snapshot of Unit 2 Lesson 1 and does not write student progress. The default URL keeps the existing login and live Supabase data.

Before rollout: test model playback, microphone permissions, recording, comparison, translation and lesson progress on the deployed HTTPS site. Physical microphone testing has not been performed during packaging.
