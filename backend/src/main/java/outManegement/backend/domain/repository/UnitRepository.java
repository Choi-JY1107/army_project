package outManegement.backend.domain.repository;

import outManegement.backend.domain.Unit;

import java.util.List;
import java.util.Optional;

public interface UnitRepository {
    public List<Unit> list();
    public Long create(Unit unit);

    public Optional<Unit> findById(Long id);
}
