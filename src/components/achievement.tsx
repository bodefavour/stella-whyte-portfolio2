import React from "react";

const AchievementSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Achievement Item */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-2">Achievement Title</h3>
                        <p className="text-gray-600">
                            Brief description of the achievement goes here.
                        </p>
                    </div>
                    {/* Add more achievement items as needed */}
                </div>
            </div>
        </section>
    );
};

export default AchievementSection;
