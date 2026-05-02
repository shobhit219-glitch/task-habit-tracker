import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2, Plus, Flame } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

interface Habit {
  id: string;
  name: string;
  streak: number;
  lastCompletedDate: string;
  completedToday: boolean;
}

/**
 * Design Philosophy: Minimalist Zen
 * - Generous whitespace and asymmetric layout (70/30 split)
 * - Sage green accents for completed items and streaks
 * - Subtle micro-interactions with smooth transitions
 * - Focus on clarity and calm through intentional design
 */
export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newHabitName, setNewHabitName] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    const savedHabits = localStorage.getItem('habits');
    if (savedTasks) setTasks(JSON.parse(savedTasks));
    if (savedHabits) setHabits(JSON.parse(savedHabits));
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Save habits to localStorage
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addTask = () => {
    if (newTaskTitle.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          title: newTaskTitle,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
      setNewTaskTitle('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addHabit = () => {
    if (newHabitName.trim()) {
      setHabits([
        ...habits,
        {
          id: Date.now().toString(),
          name: newHabitName,
          streak: 0,
          lastCompletedDate: '',
          completedToday: false,
        },
      ]);
      setNewHabitName('');
    }
  };

  const toggleHabitToday = (id: string) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const today = new Date().toDateString();
          const isCompletingToday = !habit.completedToday;
          const wasCompletedYesterday =
            habit.lastCompletedDate ===
            new Date(Date.now() - 86400000).toDateString();

          return {
            ...habit,
            completedToday: isCompletingToday,
            lastCompletedDate: isCompletingToday ? today : habit.lastCompletedDate,
            streak: isCompletingToday
              ? wasCompletedYesterday || habit.streak === 0
                ? habit.streak + 1
                : 1
              : habit.streak,
          };
        }
        return habit;
      })
    );
  };

  const deleteHabit = (id: string) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const completedTasksCount = tasks.filter((t) => t.completed).length;
  const completedHabitsCount = habits.filter((h) => h.completedToday).length;
  const totalHabits = habits.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <h1 className="text-4xl font-bold tracking-tight">
            Task & Habit Tracker
          </h1>
          <p className="mt-2 text-muted-foreground">
            Build consistency, one day at a time
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left Column: Tasks (70%) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tasks Section */}
            <section>
              <h2 className="mb-6 text-3xl font-bold">Today's Tasks</h2>

              {/* Add Task */}
              <div className="mb-8 flex gap-2">
                <Input
                  type="text"
                  placeholder="Add a new task..."
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTask()}
                  className="flex-1"
                />
                <Button
                  onClick={addTask}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Task List */}
              <div className="space-y-3">
                {tasks.length === 0 ? (
                  <Card className="p-8 text-center">
                    <p className="text-muted-foreground">
                      No tasks yet. Add one to get started!
                    </p>
                  </Card>
                ) : (
                  tasks.map((task) => (
                    <Card
                      key={task.id}
                      className="flex items-center gap-4 p-4 transition-all duration-300 hover:shadow-md"
                    >
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => toggleTask(task.id)}
                        className="h-5 w-5"
                      />
                      <span
                        className={`flex-1 transition-all duration-300 ${
                          task.completed
                            ? 'line-through text-muted-foreground'
                            : 'text-foreground'
                        }`}
                      >
                        {task.title}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteTask(task.id)}
                        className="text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </Card>
                  ))
                )}
              </div>
            </section>

            {/* Habits Section */}
            <section>
              <h2 className="mb-6 text-3xl font-bold">Daily Habits</h2>

              {/* Add Habit */}
              <div className="mb-8 flex gap-2">
                <Input
                  type="text"
                  placeholder="Add a new habit..."
                  value={newHabitName}
                  onChange={(e) => setNewHabitName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addHabit()}
                  className="flex-1"
                />
                <Button
                  onClick={addHabit}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Habit List */}
              <div className="space-y-3">
                {habits.length === 0 ? (
                  <Card className="p-8 text-center">
                    <p className="text-muted-foreground">
                      No habits yet. Create one to build consistency!
                    </p>
                  </Card>
                ) : (
                  habits.map((habit) => (
                    <Card
                      key={habit.id}
                      className={`p-4 transition-all duration-300 ${
                        habit.completedToday ? 'bg-primary/5 border-primary/20' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-1 items-center gap-4">
                          <Checkbox
                            checked={habit.completedToday}
                            onCheckedChange={() => toggleHabitToday(habit.id)}
                            className="h-5 w-5"
                          />
                          <div className="flex-1">
                            <p
                              className={`font-medium transition-all duration-300 ${
                                habit.completedToday
                                  ? 'text-primary'
                                  : 'text-foreground'
                              }`}
                            >
                              {habit.name}
                            </p>
                            {habit.streak > 0 && (
                              <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                                <Flame className="h-3 w-3 text-orange-500" />
                                {habit.streak} day streak
                              </p>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteHabit(habit.id)}
                          className="text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </section>
          </div>

          {/* Right Column: Stats (30%) */}
          <aside className="space-y-6">
            <div className="sticky top-4 space-y-6">
              <h3 className="text-2xl font-bold">Today's Progress</h3>

              {/* Tasks Progress Card */}
              <Card className="border-2 border-primary/20 bg-primary/5 p-6">
                <p className="text-sm font-medium text-muted-foreground">
                  Tasks Completed
                </p>
                <p className="mt-2 text-4xl font-bold text-primary">
                  {completedTasksCount}
                  <span className="text-lg text-muted-foreground">
                    /{tasks.length}
                  </span>
                </p>
                {tasks.length > 0 && (
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{
                        width: `${(completedTasksCount / tasks.length) * 100}%`,
                      }}
                    />
                  </div>
                )}
              </Card>

              {/* Habits Progress Card */}
              <Card className="border-2 border-primary/20 bg-primary/5 p-6">
                <p className="text-sm font-medium text-muted-foreground">
                  Habits Completed Today
                </p>
                <p className="mt-2 text-4xl font-bold text-primary">
                  {completedHabitsCount}
                  <span className="text-lg text-muted-foreground">
                    /{totalHabits}
                  </span>
                </p>
                {totalHabits > 0 && (
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{
                        width: `${(completedHabitsCount / totalHabits) * 100}%`,
                      }}
                    />
                  </div>
                )}
              </Card>

              {/* Top Streaks Card */}
              {habits.length > 0 && (
                <Card className="p-6">
                  <p className="text-sm font-medium text-muted-foreground">
                    Top Streaks
                  </p>
                  <div className="mt-4 space-y-3">
                    {habits
                      .filter((h) => h.streak > 0)
                      .sort((a, b) => b.streak - a.streak)
                      .slice(0, 3)
                      .map((habit) => (
                        <div
                          key={habit.id}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-foreground">
                            {habit.name}
                          </span>
                          <span className="flex items-center gap-1 font-bold text-primary">
                            <Flame className="h-4 w-4 text-orange-500" />
                            {habit.streak}
                          </span>
                        </div>
                      ))}
                    {habits.every((h) => h.streak === 0) && (
                      <p className="text-sm text-muted-foreground">
                        Complete habits to build streaks!
                      </p>
                    )}
                  </div>
                </Card>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
