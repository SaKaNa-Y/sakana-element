<template>
  <div class="demo-kbd">
    <div class="demo-kbd-section">
      <h4>Modifier Keys</h4>
      <div class="demo-kbd-grid">
        <div class="demo-kbd-item">
          <px-kbd :keys="['command']" />
          <span>command</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['shift']" />
          <span>shift</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['ctrl']" />
          <span>ctrl</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['alt']" />
          <span>alt</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['option']" />
          <span>option</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['win']" />
          <span>win</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['fn']" />
          <span>fn</span>
        </div>
      </div>
    </div>

    <div class="demo-kbd-section">
      <h4>Action Keys</h4>
      <div class="demo-kbd-grid">
        <div class="demo-kbd-item">
          <px-kbd :keys="['enter']" />
          <span>enter</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['delete']" />
          <span>delete</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['escape']" />
          <span>escape</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['tab']" />
          <span>tab</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['capslock']" />
          <span>capslock</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['space']" />
          <span>space</span>
        </div>
      </div>
    </div>

    <div class="demo-kbd-section">
      <h4>Arrow Keys</h4>
      <div class="demo-kbd-grid">
        <div class="demo-kbd-item">
          <px-kbd :keys="['up']" />
          <span>up</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['down']" />
          <span>down</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['left']" />
          <span>left</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['right']" />
          <span>right</span>
        </div>
      </div>
    </div>

    <div class="demo-kbd-section">
      <h4>Navigation Keys</h4>
      <div class="demo-kbd-grid">
        <div class="demo-kbd-item">
          <px-kbd :keys="['home']" />
          <span>home</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['end']" />
          <span>end</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['pageup']" />
          <span>pageup</span>
        </div>
        <div class="demo-kbd-item">
          <px-kbd :keys="['pagedown']" />
          <span>pagedown</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-kbd {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.demo-kbd-section h4 {
  margin: 0 0 12px;
  font-family: var(--px-font-family);
  font-size: 14px;
}
.demo-kbd-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.demo-kbd-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.demo-kbd-item span {
  font-family: var(--px-font-family);
  font-size: 10px;
  color: var(--px-text-color-secondary);
}
</style>
