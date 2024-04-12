import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface QuizData {
  question: string;
  choices: string[];
  correctAnswer: number;
}

const quizData: QuizData[] = [
  {
    question:
      'A: Shall . . . . . . . . . . . . . .  prepare Lucy’s dinner?  B: No, it’s alright. She’s preparing it',
    choices: ['Paris', 'London', 'Berlin', 'Rome'],
    correctAnswer: 0,
  },
  {
    question: 'We’re ____________ a party next Saturday. Would you like ____________?',
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
      <Text style={styles.questionText}> Асуулт</Text>
      <Text style={styles.questionText}>
        Read the sentence and choose the best answer to complete each sentence.
      </Text>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>1. {quizData[currentQuestion].question}</Text>
      </View>
      <View style={styles.choicesContainer}>
        {quizData[currentQuestion].choices.map((choice, index) => (
          <View key={index}>
            <TouchableOpacity key={index} onPress={() => handleAnswer(index)}>
              <Text style={styles.Text}>{choice}</Text>
            </TouchableOpacity>
            <Text style={styles.collection}> </Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleNextQuestion}
        disabled={userAnswers[currentQuestion] === undefined}>
        <Text style={styles.Text1}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link href="/" style={styles.Text2}>
          Дуусгах
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  choicesContainer: {
    width: '100%',
    marginBottom: 20,
  },
  collection: {
    backgroundColor: 'grey',
    height: '1%',
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: '12%',
    width: 300,
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  Text: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  Text1: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
  Text2: {
    marginTop: 80,
    marginRight: 200,
    fontSize: 20,
    fontWeight: '700',
    color: 'red',
  },
  button: {
    height: '7%',
    width: 300,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default Quiz;
