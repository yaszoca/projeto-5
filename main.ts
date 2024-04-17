input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
