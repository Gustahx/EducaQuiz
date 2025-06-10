import React, { useState } from "react"; 
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native";

export default function QuizScreen() {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    // alternatives to the question
    const options = [
        "a) Revelar a imposição de crenças religiosas a pessoas escravizadas.",
        "b) Apontar a hipocrisia do discurso conservador na defesa da escravidão.",
        "c) sugerir práticas de violência física e moral em nome do progresso matematico",
        "d) relacionar o declínio da produção agrícola e comercial a questões raciais.",
        "e) ironizar o comportamento dos proprietários de terra na exploração do trabalho."
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header */}
            <Text style={styles.logo}>EducaQuiz</Text>
            <View style={styles.progreessBar}>
                <view style={styles.progressFill} />
            </View>
            <Text style={styles.questionCount}>Pergunta 1 de 10</Text>

            {/* Question */}
            <Text style={styles.questionText}> 
                Inscrito na estética romântica da literatura brasileira, o conto descreve aspectos da realidade nacional no século XIX ao:
            </Text> 

            {/* Options */}
            {options.map((option, index) => (
                <TouchableOpacity 
                   key={index} 
                   style={[
                    styles.option,
                    selectedOption === index && styles.selectedOption
                   ]}
                   onPress={() => setSelectedOption(index)}
                   >
                    <Text style={styles.optionText}>{option}</Text>
                   </TouchableOpacity>
            ))}

            {/* Confirm Button */}
            <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmText}>Confirmar</Text>
            </TouchableOpacity>

            {/* Home icon (placeholder) */}
            <Text style={styles.homeIcon}>🏠</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6B83A2",
        padding: 20,
        paddingBottom: 40,
        flexGrow: 1,
        justifyContent: "flex-start",
    },
    logo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#0E1D50",
        alignSelf: "center",
        marginBottom: 10,
    },
    progreessBar: {
        height: 10,
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        overflow: "hidden",
        marginVertical: 10,
    },
    progressFill: {
        width: "10%", // 1 of 10 
        backgroundColor: "#0E1D50",
        height: "100%",
    },
    questionCount: {
        alignSelf: "flex-end",
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
    },
    questionText: {
        fontSize: 16,
        color: "#fff",
        marginBottom: 20,
    },
    option: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        borderColor: "#0E1050",
        borderWidth: 1,
    },
    selectedOption: {
        backgroundColor: "#D9D9D9",
    },
    optionText: {
        color: "#0E1D50",
        fontSize: 16,
    },
    confirmButton: {
        backgroundColor: "#0E1D50",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },
    confirmText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    homeIcon: {
        fontSize: 32,
        alignSelf: "center",
        marginTop: 20,
    },
});