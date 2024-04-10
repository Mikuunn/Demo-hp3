import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface QuizData {
  question: string;
  choices: string[];
  correctAnswer: number;
}

const quizData: QuizData[] = [
  {
    question: 'What is the capital of France?',
    choices: ['Paris', 'London', 'Berlin', 'Rome'],
    correctAnswer: 0,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    choices: ['Jupiter', 'Mars', 'Saturn', 'Venus'],
    correctAnswer: 1,
  },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const handleAnswer = (choiceIndex: number): void => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = choiceIndex;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = (): void => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert('Quiz completed! Display results or other actions here.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{quizData[currentQuestion].question}</Text>
      </View>
      <View style={styles.choicesContainer}>
        {quizData[currentQuestion].choices.map((choice, index) => (
          <Button key={index} title={choice} onPress={() => handleAnswer(index)} />
        ))}
      </View>
      <Button
        title="Next"
        onPress={handleNextQuestion}
        disabled={userAnswers[currentQuestion] === undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  choicesContainer: {
    width: '100%',
    marginBottom: 20,
  },
});

export default Quiz;
