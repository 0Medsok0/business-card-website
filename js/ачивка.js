const achievements = [
  {
    id: "first-commit",
    name: "First Commit",
    description: "Make your first commit to the project",
    icon: "photo/achievements.png",
  },
  {
    id: "ten-commits",
    name: "Ten Commits",
    description: "Reach 10 commits to the project",
    icon: "photo/achievements_1.png",
  },
  {
    id: "stars",
    name: "More stars",
    description: "Collect more than 10 starst",
    icon: "photo/achievements_2.png",
  },
  {
    id: "discussion",
    name: "Discussion",
    description: "Participate in the conversation",
    icon: "photo/achievements_3.png",
  },
];

function checkAchievements() {
  // Эта функция должна вызываться всякий раз, когда происходит соответствующее событие, например, новая фиксация.
  // Затем она будет проверять прогресс пользователя и разблокировать достижения, если это применимо.
  const commitCount = 15;
  const starsCount = 15;
  const disscussionCount = 2;
  const unlockedAchievements = achievements.filter((achievement) => {
    // соблюдены ли критерии достижений
    if (achievement.id === "ten-commits" && commitCount >= 10) {
      return true;
    }
    if (achievement.id === "first-commit") {
      return true;
    }
    if (achievement.id === "stars" && starsCount >= 10) {
      return true;
    }
    if (achievement.id === "discussion" && disscussionCount >= 1) {
      return true;
    }
    return false;
  });

  // Обновляем пользовательский интерфейс для отображения разблокированных достижений
  const achievementContainer = document.createElement("div");
  achievementContainer.style.position = "absolute"
  achievementContainer.style.bottom = '65px'
  achievementContainer.style.left = '100px'
  achievementContainer.style.display = 'flex'
  achievementContainer.style.flexDirection = 'row'

  unlockedAchievements.forEach((achievement) => {
    // Отображаем значок достижения или бейдж здесь.
    const achievementElement = document.createElement("div");
    achievementElement.innerHTML = `<img src="${achievement.icon}" alt="${achievement.name}" style="width: 75px; height: 75px;">`;
    achievementContainer.appendChild(achievementElement);
  });
  document.body.appendChild(achievementContainer);
}

// При необходимости вызывайте функцию проверки достижений
checkAchievements();
