package outManegement.backend.service;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import outManegement.backend.dao.Unit;
import java.util.Optional;

@SpringBootTest
public class UnitServiceTest {
    @Autowired UnitService unitService;

    @Test
    public void 소속부대계정추가(){
        Unit test = new Unit("테스트계정");
        Long testUnitId = unitService.create(test);

        Optional<Unit> findUnit = unitService.findById(testUnitId);
        Unit unit = findUnit.get();

        Assertions.assertThat(unit.getId()).isEqualTo(test.getId());

    }
}
